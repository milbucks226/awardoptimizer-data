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
  "amex-hilton-2026-07": {
    "id": "amex-hilton-2026-07",
    "from": "Amex Membership Rewards",
    "to": "Hilton Honors",
    "bonus": 0.2,
    "expires": "2026-07-14",
    "source": "https://frequentmiler.com/20-percent-transfer-bonus-american-express-membership-rewards-hilton-honors/",
    "verified": "2026-07-03",
    "notes": "20% bonus from Amex MR to Hilton Honors (through July 14). Standard 1:2 base ratio applies."
  },
  "chase-virgin-2026-07": {
    "id": "chase-virgin-2026-07",
    "from": "Chase Ultimate Rewards",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.3,
    "expires": "2026-07-14",
    "source": "https://frequentmiler.com/chase-ultimate-rewards-virgin-atlantic-30-percent-transfer-bonus/",
    "verified": "2026-07-03",
    "notes": "30% bonus from Chase UR to Virgin Atlantic (through July 14). Good for US-UK saver awards."
  },
  "amex-virgin-2026-07": {
    "id": "amex-virgin-2026-07",
    "from": "Amex Membership Rewards",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.3,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/30-percent-transfer-bonus-american-express-membership-rewards-virgin-atlantic/",
    "verified": "2026-07-03",
    "notes": "30% bonus from Amex MR to Virgin Atlantic (through July 31). US-UK economy from 6K Virgin pts after bonus."
  },
  "capone-eva-2026-07": {
    "id": "capone-eva-2026-07",
    "from": "Capital One Miles",
    "to": "EVA Air Infinity MileageLands",
    "bonus": 0.3,
    "expires": "2026-07-31",
    "source": "https://frequentmiler.com/30-transfer-bonus-capital-one-miles-eva-air/",
    "verified": "2026-07-03",
    "notes": "30% bonus from Capital One to EVA Air (through July 31). Normal 1,000:750 ratio improves to ~1,000:975."
  }
};
