// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
  "citi-accor-2026-06": {
    "id": "citi-accor-2026-06",
    "from": "Citi ThankYou Points",
    "to": "ALL Accor",
    "bonus": 0.5,
    "expires": "2026-07-18",
    "source": "https://frequentmiler.com/50-percent-transfer-bonus-citi-thankyou-accor-all/",
    "verified": "2026-06-15",
    "notes": "50% bonus from Citi ThankYou to ALL Accor (through July 18). Premium cards get 1:0.75 ratio."
  },
  "amex-lifemiles-2026-06": {
    "id": "amex-lifemiles-2026-06",
    "from": "Amex Membership Rewards",
    "to": "Avianca LifeMiles",
    "bonus": 0.15,
    "expires": "2026-07-15",
    "source": "https://frequentmiler.com/15-transfer-bonus-from-amex-membership-rewards-to-avianca-lifemiles/",
    "verified": "2026-06-16",
    "notes": "15% bonus from Amex MR to Avianca LifeMiles (through July 15). Minimum 1,000 points per transfer."
  }
};
