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
  },
  "chase-marriott-70pct-2026-09": {
    "id": "chase-marriott-70pct-2026-09",
    "from": "Chase Ultimate Rewards",
    "to": "Marriott Bonvoy",
    "bonus": 0.7,
    "expires": "2026-10-15",
    "source": "https://onemileatatime.com/deals/chase-marriott-transfer-bonus/",
    "verified": "2026-09-16",
    "notes": "70% bonus (1:1.7 effective)"
  },
  "citi-jal-30pct-2026-09": {
    "id": "citi-jal-30pct-2026-09",
    "from": "Citi ThankYou Points",
    "to": "Japan Airlines Mileage Bank",
    "bonus": 0.3,
    "expires": "2026-10-24",
    "source": "https://www.doctorofcredit.com/citi-adds-japan-airlines-as-11-transfer-partner-limited-30-transfer-bonus/",
    "verified": "2026-09-21",
    "notes": "30% bonus (1:1.3 effective on annual-fee cards) through Oct 24"
  },
  "citi-lifemiles-25pct-2026-09": {
    "id": "citi-lifemiles-25pct-2026-09",
    "from": "Citi ThankYou Rewards",
    "to": "Avianca LifeMiles",
    "bonus": 0.25,
    "expires": "2026-10-24",
    "source": "https://www.doctorofcredit.com/citi-thankyou-points-25-transfer-bonus-to-avianca-lifemiles-11-25-12/",
    "verified": "2026-09-22",
    "notes": "25% bonus on premium cards (1:1.25); 12.5% on others"
  }
};
