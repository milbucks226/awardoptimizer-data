// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
  "rove-qantas-2026-07": {
    "id": "rove-qantas-2026-07",
    "from": "Rove Miles",
    "to": "Qantas Frequent Flyer",
    "bonus": 0.5,
    "expires": "2026-08-14",
    "source": "https://frequentmiler.com/rove-adds-qantas-as-transfer-partner-launches-with-50-transfer-bonus/",
    "verified": "2026-07-17",
    "notes": "50% bonus from Rove to Qantas Frequent Flyer (through August 14). 1,000 Rove Miles = 1,500 Qantas points."
  },
  "cathay-asia-miles-10pct-2026-08": {
    "id": "cathay-asia-miles-10pct-2026-08",
    "from": "Amex Membership Rewards",
    "to": "Cathay Pacific Asia Miles",
    "bonus": 0.1,
    "expires": "2026-08-28",
    "source": "https://frequentmiler.com/get-a-10-bonus-when-transferring-bank-or-hotel-points-to-cathay-pacific-asia-miles/",
    "verified": "2026-07-31"
  },
  "capitalone-lifemiles-2026-08": {
    "id": "capitalone-lifemiles-2026-08",
    "from": "Capital One Miles",
    "to": "Avianca LifeMiles",
    "bonus": 0.15,
    "expires": "2026-08-31",
    "source": "https://frequentmiler.com/15-transfer-bonus-from-capital-one-to-lifemiles-avianca/",
    "verified": "2026-08-01"
  }
};
