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
  "amex-virgin-atlantic-2026-07": {
    "id": "amex-virgin-atlantic-2026-07",
    "from": "Amex Membership Rewards",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.3,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/30-percent-transfer-bonus-american-express-membership-rewards-virgin-atlantic/",
    "verified": "2026-07-02",
    "notes": "30% bonus from Amex MR to Virgin Atlantic (through July 31)."
  },
  "capitalone-eva-air-2026-07": {
    "id": "capitalone-eva-air-2026-07",
    "from": "Capital One Miles",
    "to": "EVA Air Infinity MileageLands",
    "bonus": 0.3,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/30-transfer-bonus-capital-one-miles-eva-air/",
    "verified": "2026-07-02",
    "notes": "30% bonus from Capital One to EVA Air (through July 31). Normal ratio 1000:750, with bonus ~1000:975."
  },
  "rove-frontier-2026-07": {
    "id": "rove-frontier-2026-07",
    "from": "Rove Miles",
    "to": "Frontier Airlines",
    "bonus": 0.25,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/frontier-added-as-a-rove-transfer-partner-get-25-transfer-bonus-through-7-31-26/",
    "verified": "2026-07-02",
    "notes": "25% bonus from Rove to Frontier (through July 31). Frontier newly added as Rove transfer partner."
  },
  "rove-qantas-2026-07": {
    "id": "rove-qantas-2026-07",
    "from": "Rove Miles",
    "to": "Qantas Frequent Flyer",
    "bonus": 0.5,
    "expires": "2026-08-14",
    "source": "https://frequentmiler.com/rove-adds-qantas-as-transfer-partner-launches-with-50-transfer-bonus/",
    "verified": "2026-07-17",
    "notes": "50% bonus from Rove to Qantas Frequent Flyer (through August 14). 1,000 Rove Miles = 1,500 Qantas points."
  }
};
