#!/usr/bin/env python3
"""Validate active-bonuses.js for awardoptimizer-data.

Rules (WEB-152):
  - file parses as window.__LIVE_BONUSES = { ... };
  - each entry has required fields: id, from, to, bonus, expires, source
  - id matches key
  - bonus is float in (0, 1]  (strictly positive transfer bonus fraction)
  - expires is ISO YYYY-MM-DD and (for --require-future) on or after today
  - source is http(s) URL

Usage:
  python3 scripts/validate_active_bonuses.py [path]
  python3 scripts/validate_active_bonuses.py --fixture-zero   # empty list (allowed)
  python3 scripts/validate_active_bonuses.py --fixture-bad    # expect fail
Exit 0 = ok, 1 = invalid.
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import sys
import tempfile
from pathlib import Path
from urllib.parse import urlparse

REQUIRED = ("id", "from", "to", "bonus", "expires", "source")
ASSIGN_RE = re.compile(
    r"window\.__LIVE_BONUSES\s*=\s*(\{.*\})\s*;\s*\Z",
    re.DOTALL,
)


def parse_bonuses(src: str) -> dict:
    # Strip leading // comments for robustness
    lines = []
    for ln in src.splitlines():
        if ln.strip().startswith("//") and "window.__LIVE_BONUSES" not in ln:
            continue
        lines.append(ln)
    body = "\n".join(lines).strip()
    m = re.search(r"window\.__LIVE_BONUSES\s*=\s*(\{.*\})\s*;", body, re.DOTALL)
    if not m:
        raise ValueError("could not find window.__LIVE_BONUSES = {...};")
    return json.loads(m.group(1))


def validate(data: dict, *, today: dt.date | None = None, require_future: bool = True) -> list[str]:
    errors: list[str] = []
    today = today or dt.date.today()
    if not isinstance(data, dict):
        return ["root must be object"]
    for key, entry in data.items():
        if not isinstance(entry, dict):
            errors.append(f"{key}: entry not object")
            continue
        for f in REQUIRED:
            if f not in entry or entry[f] in (None, ""):
                errors.append(f"{key}: missing required field {f}")
        if entry.get("id") and entry.get("id") != key:
            errors.append(f"{key}: id {entry.get('id')!r} != key")
        b = entry.get("bonus")
        try:
            bf = float(b)
            if not (0 < bf <= 1.0):
                errors.append(f"{key}: bonus {b!r} not in (0, 1]")
        except (TypeError, ValueError):
            errors.append(f"{key}: bonus not a number")
        exp = entry.get("expires")
        try:
            ed = dt.date.fromisoformat(str(exp))
            if require_future and ed < today:
                errors.append(f"{key}: expires {exp} is in the past (today={today})")
        except (TypeError, ValueError):
            errors.append(f"{key}: expires not ISO date YYYY-MM-DD")
        src = str(entry.get("source") or "")
        u = urlparse(src)
        if u.scheme not in ("http", "https") or not u.netloc:
            errors.append(f"{key}: source not http(s) URL")
    return errors


def live_summary(data: dict, *, today: dt.date | None = None, soon_days: int = 7) -> dict:
    today = today or dt.date.today()
    soon = today + dt.timedelta(days=soon_days)
    live, expiring = [], []
    for key, entry in data.items():
        try:
            ed = dt.date.fromisoformat(str(entry.get("expires")))
        except Exception:
            continue
        if ed >= today:
            live.append(key)
            if ed <= soon:
                expiring.append((key, str(ed)))
    return {
        "live_count": len(live),
        "live_ids": live,
        "expiring_within_days": soon_days,
        "expiring": expiring,
        "alert_zero": len(live) == 0,
        "alert_all_expiring_soon": len(live) > 0 and len(expiring) == len(live),
    }


def write_fixture(path: Path, obj: dict) -> None:
    path.write_text(
        "// test fixture\nwindow.__LIVE_BONUSES = "
        + json.dumps(obj, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path", nargs="?", default="active-bonuses.js")
    ap.add_argument("--allow-past", action="store_true", help="do not require future expires")
    ap.add_argument("--summary", action="store_true", help="print live/expiring summary JSON")
    ap.add_argument("--fixture-zero", action="store_true")
    ap.add_argument("--fixture-all-soon", action="store_true")
    ap.add_argument("--fixture-bad", action="store_true")
    args = ap.parse_args()

    if args.fixture_zero or args.fixture_all_soon or args.fixture_bad:
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / "active-bonuses.js"
            today = dt.date.today()
            if args.fixture_zero:
                write_fixture(p, {})
            elif args.fixture_all_soon:
                write_fixture(
                    p,
                    {
                        "a": {
                            "id": "a",
                            "from": "X",
                            "to": "Y",
                            "bonus": 0.2,
                            "expires": (today + dt.timedelta(days=3)).isoformat(),
                            "source": "https://example.com/a",
                        },
                        "b": {
                            "id": "b",
                            "from": "X",
                            "to": "Z",
                            "bonus": 0.1,
                            "expires": (today + dt.timedelta(days=5)).isoformat(),
                            "source": "https://example.com/b",
                        },
                    },
                )
            else:
                write_fixture(
                    p,
                    {
                        "bad": {
                            "id": "bad",
                            "from": "X",
                            "to": "Y",
                            "bonus": 1.5,
                            "expires": "not-a-date",
                            "source": "ftp://nope",
                        }
                    },
                )
            data = parse_bonuses(p.read_text(encoding="utf-8"))
            errs = validate(data, require_future=not args.allow_past and not args.fixture_bad)
            # fixture-bad always validates with require_future True for expires type
            if args.fixture_bad:
                errs = validate(data, require_future=True)
            if args.summary or args.fixture_zero or args.fixture_all_soon:
                print(json.dumps(live_summary(data), indent=2))
            if args.fixture_bad:
                if errs:
                    print("OK fixture-bad correctly INVALID:")
                    for e in errs:
                        print(" ", e)
                    return 0
                print("FAIL fixture-bad should be invalid")
                return 1
            if errs:
                print("FAIL fixture validation")
                for e in errs:
                    print(" ", e)
                return 1
            s = live_summary(data)
            if args.fixture_zero and not s["alert_zero"]:
                print("FAIL expected alert_zero")
                return 1
            if args.fixture_all_soon and not s["alert_all_expiring_soon"]:
                print("FAIL expected alert_all_expiring_soon")
                return 1
            print("PASS fixture")
            return 0

    path = Path(args.path)
    if not path.is_file():
        print(f"ERR missing {path}")
        return 1
    try:
        data = parse_bonuses(path.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"ERR parse: {e}")
        return 1
    errs = validate(data, require_future=not args.allow_past)
    if args.summary:
        print(json.dumps(live_summary(data), indent=2))
    if errs:
        print(f"INVALID {path} ({len(errs)} error(s)):")
        for e in errs:
            print(" ", e)
        return 1
    print(f"OK {path}: {len(data)} bonus(es)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
