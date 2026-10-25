// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
  "rove-jal-50pct-2026-10": {
    "id": "rove-jal-50pct-2026-10",
    "from": "Rove",
    "to": "Japan Airlines Mileage Bank",
    "bonus": 0.5,
    "expires": "2026-10-31",
    "source": "https://milestalk.com/rove-launches-three-transfer-bonuses-50-to-jal-40-to-flying-blue-and-uo-to-35-on-qatar/",
    "verified": "2026-10-01",
    "notes": "50% bonus (1:1.5 effective); transfers by Oct 31 2026"
  },
  "rove-flyingblue-40pct-2026-10": {
    "id": "rove-flyingblue-40pct-2026-10",
    "from": "Rove",
    "to": "Air France-KLM Flying Blue",
    "bonus": 0.4,
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
    "bonus": 0.2,
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
  },
  "wyndham-united-100pct-2026-10": {
    "id": "wyndham-united-100pct-2026-10",
    "from": "Wyndham Rewards",
    "to": "United MileagePlus",
    "bonus": 1.0,
    "expires": "2026-10-31",
    "source": "https://frequentmiler.com/100-transfer-bonus-from-wyndham-rewards-to-united-mileageplus/",
    "verified": "2026-10-12",
    "notes": "100% bonus (5:2 effective); unadvertised/login required; max 90k Wyndham points total"
  },
  "amex-marriott-35pct-2026-10": {
    "id": "amex-marriott-35pct-2026-10",
    "from": "Amex Membership Rewards",
    "to": "Marriott Bonvoy",
    "bonus": 0.35,
    "expires": "2026-12-10",
    "source": "https://frequentmiler.com/35-transfer-bonus-from-amex-membership-rewards-to-marriott-bonvoy/",
    "verified": "2026-10-21",
    "notes": "35% bonus (1:1.35 effective); US Membership Rewards; transfers Oct 20 through Dec 10 2026"
  },
  "capitalone-virginatlantic-30pct-2026-10": {
    "id": "capitalone-virginatlantic-30pct-2026-10",
    "from": "Capital One Miles",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.3,
    "expires": "2026-11-20",
    "source": "https://onemileatatime.com/deals/capital-one-virgin-atlantic-transfer-bonus/",
    "verified": "2026-10-22",
    "notes": "30% bonus (1:1.3 effective); transfers Oct 21 through Nov 20 2026"
  },
  "amex-aeromexico-20pct-2026-10": {
    "id": "amex-aeromexico-20pct-2026-10",
    "from": "Amex Membership Rewards",
    "to": "Aeromexico Club Premier",
    "bonus": 0.2,
    "expires": "2026-10-30",
    "source": "https://frequentmiler.com/american-express-membership-rewards-offering-20-transfer-bonus-to-aeromexico/",
    "verified": "2026-10-25",
    "notes": "20% bonus on the usual 1:1.6 rate (about 1:1.92 effective); expires Oct 30 2026"
  }
};
