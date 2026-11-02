// Live transfer bonuses — single source of truth, served from the public
// awardoptimizer-data repo (GitHub Pages) so daily prune/add updates cost
// ZERO Netlify deploys. Maintained by ~/bin/theo-bonus-check on the Pi.
// The 5 consumer pages load this BEFORE award-data.js, which falls back to
// a static copy if this file fails to load.
window.__LIVE_BONUSES = {
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
  "citi-cathay-10pct-2026-10": {
    "id": "citi-cathay-10pct-2026-10",
    "from": "Citi ThankYou Rewards",
    "to": "Cathay Pacific Asia Miles",
    "bonus": 0.1,
    "expires": "2026-11-14",
    "source": "https://frequentmiler.com/10-transfer-bonus-citi-thankyou-rewards-to-cathay-pacific-asia-miles/",
    "verified": "2026-10-27",
    "notes": "10% bonus (1,000 = 1,100 on premium cards); transfers Oct 25 through Nov 14 2026 11:59pm ET"
  }
};
