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
  },
  "chase-ihg-80pct-2026-11": {
    "id": "chase-ihg-80pct-2026-11",
    "from": "Chase Ultimate Rewards",
    "to": "IHG One Rewards",
    "bonus": 0.8,
    "expires": "2026-12-03",
    "source": "https://www.doctorofcredit.com/chase-ultimate-rewards-80-transfer-bonus-to-ihg-11-8-5/",
    "verified": "2026-11-01",
    "notes": "80% bonus (1:1.8 effective); valid until Dec 3 2026"
  },
  "chase-avios-30pct-2026-11": {
    "id": "chase-avios-30pct-2026-11",
    "from": "Chase Ultimate Rewards",
    "to": "British Airways Executive Club",
    "bonus": 0.3,
    "expires": "2026-12-01",
    "source": "https://www.doctorofcredit.com/chase-ultimate-rewards-30-transfer-bonus-to-avios-11-3/",
    "verified": "2026-11-01",
    "notes": "30% bonus (1:1.3 effective) to British Airways Avios, also Iberia and Aer Lingus; valid until Dec 1 2026"
  },
  "capitalone-flyingblue-20pct-2026-11": {
    "id": "capitalone-flyingblue-20pct-2026-11",
    "from": "Capital One Miles",
    "to": "Air France-KLM Flying Blue",
    "bonus": 0.2,
    "expires": "2026-11-30",
    "source": "https://www.doctorofcredit.com/capital-one-20-transfer-bonus-to-airfrance-klm-flying-blue-11-2-4/",
    "verified": "2026-11-01",
    "notes": "20% bonus (1,000 = 1,200); valid until Nov 30 2026"
  },
  "chase-wyndham-30pct-2026-11": {
    "id": "chase-wyndham-30pct-2026-11",
    "from": "Chase Ultimate Rewards",
    "to": "Wyndham Rewards",
    "bonus": 0.3,
    "expires": "2026-12-03",
    "source": "https://www.doctorofcredit.com/chase-ultimate-rewards-30-transfer-bonus-to-wyndham-11-3-2/",
    "verified": "2026-11-01",
    "notes": "30% bonus (1:1.3 effective); valid until Dec 3 2026"
  },
  "amex-virginatlantic-30pct-2026-11": {
    "id": "amex-virginatlantic-30pct-2026-11",
    "from": "Amex Membership Rewards",
    "to": "Virgin Atlantic Flying Club",
    "bonus": 0.3,
    "expires": "2026-11-30",
    "source": "https://www.doctorofcredit.com/american-express-transfer-bonus-30-to-virgin-atlantic-8/",
    "verified": "2026-11-03",
    "notes": "30% bonus (1,000 = 1,300); valid until Nov 30 2026. Separate from the Capital One 30% bonus."
  },
  "capitalone-copa-30pct-2026-11": {
    "id": "capitalone-copa-30pct-2026-11",
    "from": "Capital One Miles",
    "to": "Copa ConnectMiles",
    "bonus": 0.3,
    "expires": "2026-12-01",
    "source": "https://frequentmiler.com/copa-added-as-new-capital-one-transfer-partner-21-5-30-launch-transfer-bonus/",
    "verified": "2026-11-03",
    "notes": "30% launch bonus on the 2:1.5 base (1,000 = 750); bonus through 11:59pm ET Dec 1 2026"
  },
  "citi-turkish-40pct-2026-11": {
    "id": "citi-turkish-40pct-2026-11",
    "from": "Citi ThankYou Rewards",
    "to": "Turkish Airlines Miles&Smiles",
    "bonus": 0.4,
    "expires": "2026-11-30",
    "source": "https://frequentmiler.com/40-percent-transfer-bonus-citi-thankyou-turkish-milesandsmiles/",
    "verified": "2026-11-05",
    "notes": "40% bonus; campaign Nov 1 through Nov 30 2026 23:59 Turkiye time. Cap 50,000 bonus miles; credited after the campaign ends."
  }
};
