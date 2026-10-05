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
  },
  "rove-jal-50pct-2026-10": {
    "id": "rove-jal-50pct-2026-10",
    "from": "Rove",
    "to": "Japan Airlines Mileage Bank",
    "bonus": 0.50,
    "expires": "2026-10-31",
    "source": "https://milestalk.com/rove-launches-three-transfer-bonuses-50-to-jal-40-to-flying-blue-and-uo-to-35-on-qatar/",
    "verified": "2026-10-01",
    "notes": "50% bonus (1:1.5 effective); transfers by Oct 31 2026"
  },
  "rove-flyingblue-40pct-2026-10": {
    "id": "rove-flyingblue-40pct-2026-10",
    "from": "Rove",
    "to": "Air France-KLM Flying Blue",
    "bonus": 0.40,
    "expires": "2026-10-31",
    "source": "https://milestalk.com/rove-launches-three-transfer-bonuses-50-to-jal-40-to-flying-blue-and-uo-to-35-on-qatar/",
    "verified": "2026-10-01",
    "notes": "40% bonus (1:1.4 effective); transfers by Oct 31 2026"
  },
  "rove-qatar-35pct-2026-10": {
    "id": "rove-qatar-35pct-2026-10",
    "from": "Rove",
    "to": "Qatar Airways Privilege Club",
    "bonus": 0.35,
    "expires": "2026-10-31",
    "source": "https://milestalk.com/rove-launches-three-transfer-bonuses-50-to-jal-40-to-flying-blue-and-uo-to-35-on-qatar/",
    "verified": "2026-10-01",
    "notes": "Tiered up to 35% (1:1.35 at 100k+); transfers by Oct 31 2026"
  },
  "citi-qatar-35pct-2026-10": {
    "id": "citi-qatar-35pct-2026-10",
    "from": "Citi ThankYou Rewards",
    "to": "Qatar Airways Privilege Club",
    "bonus": 0.35,
    "expires": "2026-10-31",
    "source": "https://onemileatatime.com/deals/qatar-airways-transfer-bonus/",
    "verified": "2026-10-04",
    "notes": "Tiered up to 35% (1:1.35 at 100k+ Avios per transfer); transfers by Oct 31 2026"
  },
  "capitalone-baavios-20pct-2026-10": {
    "id": "capitalone-baavios-20pct-2026-10",
    "from": "Capital One Miles",
    "to": "British Airways Executive Club",
    "bonus": 0.20,
    "expires": "2026-10-31",
    "source": "https://onemileatatime.com/deals/capital-one-british-airways-transfer-bonus/",
    "verified": "2026-10-04",
    "notes": "20% bonus (1:1.2 effective); transfers by Oct 31 2026"
  },
  "amex-flyingblue-25pct-2026-10": {
    "id": "amex-flyingblue-25pct-2026-10",
    "from": "Amex Membership Rewards",
    "to": "Air France-KLM Flying Blue",
    "bonus": 0.25,
    "expires": "2026-10-31",
    "source": "https://onemileatatime.com/deals/amex-flying-blue-transfer-bonus/",
    "verified": "2026-10-04",
    "notes": "25% bonus (1:1.25 effective); transfers by Oct 31 2026"
  },
  "marriott-aeroplan-15pct-2026-10": {
    "id": "marriott-aeroplan-15pct-2026-10",
    "from": "Marriott Bonvoy",
    "to": "Air Canada Aeroplan",
    "bonus": 0.15,
    "expires": "2026-10-31",
    "source": "https://onemileatatime.com/deals/aeroplan-hotel-points-transfer-bonus/",
    "verified": "2026-10-05",
    "notes": "15% bonus (1:1.15 effective on base); transfers by Oct 31 2026; Marriott 5k Aeroplan bonus still applies"
  }
};
