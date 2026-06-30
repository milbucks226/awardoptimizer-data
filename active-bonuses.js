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
    "source": "https://frequentmiler.com/15-transfer-bonus-from-amex-membership-rewards-to-avianca-lifemiles/",
    "verified": "2026-06-16",
    "notes": "15% bonus from Amex MR to Avianca LifeMiles (through July 15). Minimum 1,000 points per transfer."
  },
  "amex-marriott-2026-06": {
    "id": "amex-marriott-2026-06",
    "from": "Amex Membership Rewards",
    "to": "Marriott Bonvoy",
    "bonus": 0.20,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "20% bonus from Amex MR to Marriott Bonvoy (through June 30). Hotel transfer — only worthwhile if you have a specific Marriott stay planned."
  },
  "citi-qatar-2026-06": {
    "id": "citi-qatar-2026-06",
    "from": "Citi ThankYou Points",
    "to": "Qatar Privilege Club Avios",
    "bonus": 0.30,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "30% bonus from Citi ThankYou to Qatar Privilege Club Avios (through June 30). Good for Qatar Qsuites redemptions if you can find availability."
  },
  "amex-flyingblue-2026-06": {
    "id": "amex-flyingblue-2026-06",
    "from": "Amex Membership Rewards",
    "to": "Air France KLM Flying Blue",
    "bonus": 0.25,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "25% bonus from Amex MR to Flying Blue (through June 30). Solid option for transatlantic flights, especially during Promo Rewards."
  },
  "rove-turkish-2026-06": {
    "id": "rove-turkish-2026-06",
    "from": "Rove Miles",
    "to": "Turkish Airlines Miles & Smiles",
    "bonus": 0.50,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "50% bonus from Rove Miles to Turkish Miles & Smiles (through June 30). Turkish has some of the best sweet spots for US domestic partner awards."
  },
  "marriott-united-2026-06": {
    "id": "marriott-united-2026-06",
    "from": "Marriott Bonvoy",
    "to": "United MileagePlus",
    "bonus": 0.25,
    "expires": "2026-06-30",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "25% bonus when converting Marriott Bonvoy points to United MileagePlus (through June 30). Hotel-to-airline conversion — generally poor value, only worth it to top off a United account."
  },
  "chase-virginatlantic-2026-06": {
    "id": "chase-virginatlantic-2026-06",
    "from": "Chase Ultimate Rewards",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.30,
    "expires": "2026-07-14",
    "source": "https://frequentmiler.com/current-point-transfer-bonuses/",
    "verified": "2026-06-30",
    "notes": "30% bonus from Chase UR to Virgin Atlantic Flying Club (through July 14). Great for ANA first class or Delta partner redemptions via Virgin."
  }
};
