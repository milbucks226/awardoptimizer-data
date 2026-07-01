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
  },
  "capital-one-eva-2026-07": {
    "id": "capital-one-eva-2026-07",
    "from": "Capital One Miles",
    "to": "EVA Air Infinity MileageLands",
    "bonus": 0.30,
    "expires": "2026-07-31",
    "source": "https://onemileatatime.com/deals/capital-one-eva-air-transfer-bonus/",
    "verified": "2026-07-01",
    "notes": "30% bonus from Capital One to EVA Air (July 1-31). Normal ratio is 1,000:750; bonus brings it to ~1,000:975."
  },
  "rove-frontier-2026-07": {
    "id": "rove-frontier-2026-07",
    "from": "Rove Miles",
    "to": "Frontier Airlines",
    "bonus": 0.25,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/frontier-added-as-a-rove-transfer-partner-get-25-transfer-bonus-through-7-31-26/",
    "verified": "2026-07-01",
    "notes": "25% bonus on Rove Miles transfers to Frontier (through July 31). Frontier is a new Rove transfer partner."
  }
};
