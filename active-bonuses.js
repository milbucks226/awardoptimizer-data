// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
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
  },
  "amex-hilton-30pct-2026-09": {
    "id": "amex-hilton-30pct-2026-09",
    "from": "Amex Membership Rewards",
    "to": "Hilton Honors",
    "bonus": 0.3,
    "expires": "2026-10-14",
    "source": "https://onemileatatime.com/deals/amex-hilton-transfer-bonus/",
    "verified": "2026-09-02",
    "notes": "Targeted; 30% bonus (1:2.6 effective)"
  },
  "capitalone-jal-30pct-2026-09": {
    "id": "capitalone-jal-30pct-2026-09",
    "from": "Capital One Miles",
    "to": "Japan Airlines Mileage Bank",
    "bonus": 0.3,
    "expires": "2026-09-30",
    "source": "https://frequentmiler.com/capital-one-miles-jal-japan-airlines-30-percent-transfer-bonus/",
    "verified": "2026-09-02",
    "notes": "30% bonus (near 1:1 effective)"
  },
  "rove-copa-40pct-2026-09": {
    "id": "rove-copa-40pct-2026-09",
    "from": "Rove Miles",
    "to": "Copa Airlines ConnectMiles",
    "bonus": 0.4,
    "expires": "2026-09-30",
    "source": "https://thepointsguy.com/news/rove-copa-connectmiles-transfer-partner/",
    "verified": "2026-09-02",
    "notes": "Launch bonus; 40% bonus (1:1.4 effective)"
  }
};
