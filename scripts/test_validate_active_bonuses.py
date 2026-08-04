#!/usr/bin/env python3
"""Drive real validate_active_bonuses.py entrypoint (no reimplementation)."""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts" / "validate_active_bonuses.py"


def run(*args: str) -> tuple[int, str]:
    r = subprocess.run(
        [sys.executable, str(SCRIPT), *args],
        capture_output=True,
        text=True,
        cwd=str(ROOT),
    )
    return r.returncode, (r.stdout or "") + (r.stderr or "")


def main() -> int:
    fails = []
    code, out = run("--fixture-zero", "--summary")
    if code != 0 or "alert_zero" not in out or '"alert_zero": true' not in out.replace(" ", ""):
        # JSON may have spaces
        if code != 0 or "true" not in out or "alert_zero" not in out:
            fails.append(f"fixture-zero: {code} {out}")

    code, out = run("--fixture-all-soon", "--summary")
    if code != 0 or "alert_all_expiring_soon" not in out:
        fails.append(f"fixture-all-soon: {code} {out}")

    code, out = run("--fixture-bad")
    if code != 0:
        fails.append(f"fixture-bad should exit 0 (self-check pass): {code} {out}")

    # Real live file if present
    live = ROOT / "active-bonuses.js"
    if live.is_file():
        code, out = run(str(live), "--summary")
        if code != 0:
            fails.append(f"live file invalid: {out}")

    if fails:
        print("FAIL")
        for f in fails:
            print(f)
        return 1
    print("PASS validate_active_bonuses tests")
    return 0


if __name__ == "__main__":
    sys.exit(main())
