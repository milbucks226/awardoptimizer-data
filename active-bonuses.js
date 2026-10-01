// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
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
