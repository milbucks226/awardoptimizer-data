// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
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
  },
  "chase-aeroplan-20pct-2026-08": {
    "id": "chase-aeroplan-20pct-2026-08",
    "from": "Chase Ultimate Rewards",
    "to": "Air Canada Aeroplan",
    "bonus": 0.2,
    "expires": "2026-09-30",
    "source": "https://frequentmiler.com/get-20-bonus-when-transferring-chase-ultimate-rewards-to-air-canada-aeroplan-stack-with-10-cardholder-bonus/",
    "verified": "2026-08-12",
    "notes": "20% bonus; may stack with cardholder bonus in some cases"
  },
  "citi-lhw-25pct-2026-09": {
    "id": "citi-lhw-25pct-2026-09",
    "from": "Citi ThankYou Points",
    "to": "Leading Hotels of the World Leaders Club",
    "bonus": 0.25,
    "expires": "2026-09-19",
    "source": "https://frequentmiler.com/citi-thankyou-leading-hotels-of-the-world-lhw-25-percent-transfer-bonus/",
    "verified": "2026-08-26"
  }
};
