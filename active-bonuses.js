// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
  "chase-marriott-2026-05-long": {
    "id": "chase-marriott-2026-05-long",
    "from": "Chase Ultimate Rewards",
    "to": "Marriott Bonvoy",
    "bonus": 0.55,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-05-19",
    "notes": "55% bonus from Chase UR to Marriott Bonvoy (longer window). Hotel transfers often not ideal, but useful if you have a specific Marriott stay."
  },
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
    "source": "https://awardwallet.com/news/amex-membership-rewards/avianca-lifemiles-transfer-bonus/",
    "verified": "2026-06-17",
    "notes": "15% bonus from Amex MR to Avianca LifeMiles. Transfers initiated by July 15."
  }
};
