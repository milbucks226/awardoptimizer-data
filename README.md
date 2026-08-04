# awardoptimizer-data

Public, auto-published flight-price cache data for **awardoptimizer.com**.

This repository contains **only** two machine-generated JSON files:

- `price-cache.json` — cached Google Flights cash prices by route/horizon
- `cheapest-dates.json` — cheapest-month seasonal pricing by route

## Why this repo exists

These files are fetched client-side by the AwardOptimizer Explore map. They
live in a **separate public repo** (not the main, private site repo) so they
can be served free via raw.githubusercontent / GitHub Pages **without
triggering a Netlify production build** on every refresh. This is purely a
cost-decoupling measure.

## Notes

- **Do not edit by hand.** Both files are overwritten by automated GitHub
  Actions in the main repo.
- Contains no source code, secrets, or personal data — just public flight
  price numbers.

## active-bonuses.js (WEB-152)

Live transfer bonuses for awardoptimizer.com. Updated by Pi `theo-bonus-check`.

- **Validate:** `python3 scripts/validate_active_bonuses.py active-bonuses.js`
- **Auto-merge:** PRs that only touch bonuses are validated and squash-merged by
  `.github/workflows/validate-and-automerge-bonuses.yml` (no human required).
- Prefer **one rolling branch** `bonuses/live-update` rather than a new PR per day.
