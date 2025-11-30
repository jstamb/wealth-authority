import { City } from '../types';

export const SYNCED_CITIES: City[] = [
  {
    id: 'dallas',
    name: 'Dallas',
    slug: 'dallas',
    tier: 1,
    state: 'Texas',
    description: 'Connect with vetted wealth managers in Dallas-Fort Worth. Expert financial planning for executives, business owners, and professionals in the DFW metroplex.',
    image: 'https://images.unsplash.com/photo-dallas?w=800&q=80',
    stats: {
      medianHomePrice: '$380,000',
      colIndex: 102,
      incomeTax: '0%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Texas has no state income tax—significant savings compared to California or New York corporate transplants',
      'Dallas has a diverse economy reducing single-industry concentration risk',
      'Corporate relocations bring executives with complex equity compensation',
      'Texas has no state estate tax, simplifying legacy planning',
      'DFW has a mature wealth management industry with diverse expertise',
    ],
    faqs: [
      {
        question: '### How much do Dallas wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Dallas fees are competitive with other major metros. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'houston',
    name: 'Houston',
    slug: 'houston',
    tier: 1,
    state: 'Texas',
    description: 'Connect with vetted wealth managers in Houston. Expert financial planning for energy professionals, business owners, and executives in the Houston metro.',
    image: 'https://images.unsplash.com/photo-houston?w=800&q=80',
    stats: {
      medianHomePrice: '$340,000',
      colIndex: 96,
      incomeTax: '0%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Texas has no state income tax—a significant advantage for wealth building and retirement',
      'Houston\'s cost of living runs below national average despite being the 4th largest US city',
      'Energy industry concentration creates unique planning needs (volatile compensation, stock options)',
      'Texas has no state estate tax, but federal exposure requires planning for larger estates',
      'Houston has a robust wealth management industry with expertise in energy and healthcare',
    ],
    faqs: [
      {
        question: '### How much do Houston wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Houston fees tend to be lower than coastal markets. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    slug: 'chicago',
    tier: 1,
    state: 'Illinois',
    description: 'Connect with vetted wealth managers in Chicago. Expert financial planning for executives, professionals, and business owners in the Chicagoland area.',
    image: 'https://images.unsplash.com/photo-chicago?w=800&q=80',
    stats: {
      medianHomePrice: '$330,000',
      colIndex: 107,
      incomeTax: '4.95% (flat)'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Illinois has a flat 4.95% income tax—simpler than progressive states but still significant',
      'Chicago\'s cost of living is moderate, making wealth accumulation more achievable',
      'Illinois exempts most retirement income from state tax—a significant planning advantage',
      'High property taxes (averaging 2.3%) affect housing decisions and retirement planning',
      'Chicago has a robust wealth management industry with expertise across multiple sectors',
    ],
    faqs: [
      {
        question: '### How much do Chicago wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Chicago fees tend to be slightly lower than coastal markets due to lower cost of living. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'la',
    name: 'Los Angeles',
    slug: 'los-angeles',
    tier: 1,
    state: 'California',
    description: 'Connect with vetted wealth managers in Los Angeles. Expert financial planning for entertainment, tech, and professional clients in LA and Southern California.',
    image: 'https://images.unsplash.com/photo-la?w=800&q=80',
    stats: {
      medianHomePrice: '$950,000',
      colIndex: 166,
      incomeTax: '1-13.3%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'California\'s 13.3% top income tax rate demands sophisticated tax planning',
      'Entertainment industry income requires specialized expertise in royalty and residual management',
      'LA\'s high cost of living means retirement savings targets should be 30-50% above national averages',
      'Many LA wealth managers specialize in specific industries (entertainment, tech, medicine, law)',
      'California has its own estate tax-like considerations through property tax implications',
    ],
    faqs: [
      {
        question: '### What\'s the minimum to work with a wealth manager in LA?',
        answer: 'Minimums range from $250,000 to $1 million+ for comprehensive wealth management. Some advisors offer flat-fee planning with lower minimums. Entertainment business managers often work on percentage of income rather than asset minimums.'
      },
    ]
  },
  {
    id: 'denver',
    name: 'Denver',
    slug: 'denver',
    tier: 1,
    state: 'Colorado',
    description: 'Connect with vetted wealth managers in Denver. Expert financial planning for tech professionals, executives, and entrepreneurs in the Front Range.',
    image: 'https://images.unsplash.com/photo-denver?w=800&q=80',
    stats: {
      medianHomePrice: '$600,000',
      colIndex: 128,
      incomeTax: '4.4% (flat)'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Colorado has a flat 4.4% state income tax—simpler and lower than coastal states',
      'Denver\'s tech sector has grown substantially, creating equity compensation complexity',
      'Housing costs have risen significantly but remain below coastal metros',
      'Colorado has no estate tax, simplifying legacy planning',
      'PERA (state pension) affects many public employees and educators',
    ],
    faqs: [
      {
        question: '### How much do Denver wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Denver fees are competitive with national averages. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'sandiego',
    name: 'San Diego',
    slug: 'san-diego',
    tier: 1,
    state: 'California',
    description: 'Connect with vetted wealth managers in San Diego. Expert financial planning for biotech, defense, and professional clients in San Diego County.',
    image: 'https://images.unsplash.com/photo-sandiego?w=800&q=80',
    stats: {
      medianHomePrice: '$900,000',
      colIndex: 161,
      incomeTax: '1-13.3%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'California\'s 13.3% top income tax rate demands sophisticated tax planning',
      'San Diego\'s biotech and defense sectors create unique compensation challenges',
      'Housing costs are high but lower than SF and LA',
      'Military retirees have specific planning needs',
      'Proximity to Mexico creates occasional cross-border considerations',
    ],
    faqs: [
      {
        question: '### How much do San Diego wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. San Diego fees are similar to other California metros. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    slug: 'phoenix',
    tier: 1,
    state: 'Arizona',
    description: 'Connect with vetted wealth managers in Phoenix. Expert financial planning for retirees, executives, and professionals in the Valley of the Sun.',
    image: 'https://images.unsplash.com/photo-phoenix?w=800&q=80',
    stats: {
      medianHomePrice: '$450,000',
      colIndex: 103,
      incomeTax: '2.5% (flat)'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Arizona has a flat 2.5% state income tax—among the lowest in the nation',
      'Phoenix is both a retirement destination and growing employment hub',
      'Cost of living is near national average despite rapid population growth',
      'Arizona has no estate tax, simplifying legacy planning',
      'The "snowbird" lifestyle creates unique planning considerations',
    ],
    faqs: [
      {
        question: '### How much do Phoenix wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Phoenix fees are competitive with national averages. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'philly',
    name: 'Philadelphia',
    slug: 'philadelphia',
    tier: 1,
    state: 'Pennsylvania',
    description: 'Connect with vetted wealth managers in Philadelphia. Expert financial planning for healthcare professionals, executives, and families in Greater Philadelphia.',
    image: 'https://images.unsplash.com/photo-philly?w=800&q=80',
    stats: {
      medianHomePrice: '$260,000',
      colIndex: 101,
      incomeTax: '3.07% (flat)'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Pennsylvania has a low 3.07% flat state income tax',
      'Philadelphia adds a 3.75% city wage tax (on top of state)',
      'Pennsylvania has an inheritance tax (not estate tax)—affects beneficiaries',
      'No sales tax on most goods, including clothing and groceries',
      'Strong healthcare and pharma presence creates specialized planning needs',
    ],
    faqs: [
      {
        question: '### How much do Philadelphia wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Philadelphia fees are competitive with national averages. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'sanjose',
    name: 'San Jose',
    slug: 'san-jose',
    tier: 1,
    state: 'California',
    description: 'Connect with vetted wealth managers in San Jose. Expert financial planning for tech professionals, startup founders, and executives in Silicon Valley.',
    image: 'https://images.unsplash.com/photo-sanjose?w=800&q=80',
    stats: {
      medianHomePrice: '$1,400,000',
      colIndex: 183,
      incomeTax: '1-13.3%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Silicon Valley has the nation\'s highest concentration of tech wealth',
      'California\'s 13.3% top tax rate makes tax planning critical',
      'San Jose has among the nation\'s highest housing costs',
      'Stock-based compensation dominates—RSUs, options, and startup equity',
      'Many advisors specialize exclusively in tech compensation',
    ],
    faqs: [
      {
        question: '### How much do San Jose wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive planning. Advisors specializing in tech compensation may charge premiums but provide significant value through tax optimization. All-in costs should stay under 1.25%.'
      },
    ]
  },
  {
    id: 'nyc',
    name: 'New York City',
    slug: 'nyc',
    tier: 1,
    state: 'New York',
    description: 'Connect with vetted wealth managers in New York City. Expert financial planning for Manhattan professionals, executives, and high-net-worth individuals.',
    image: 'https://images.unsplash.com/photo-nyc?w=800&q=80',
    stats: {
      medianHomePrice: '$750,000',
      colIndex: 187,
      incomeTax: '4-10.9%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'NYC\'s combined state and city taxes can reach 14.8%, making tax planning essential',
      'The city\'s high cost of living requires larger retirement savings—often 20-30% more than national averages',
      'Many NYC wealth managers specialize in specific industries (finance, tech, entertainment, medicine)',
      'Finding a fiduciary advisor who knows NYC-specific regulations and opportunities is critical',
    ],
    faqs: [
      {
        question: '### What\'s the minimum to work with a wealth manager in NYC?',
        answer: 'Minimums vary widely. Some advisors require $500,000 or more in investable assets. Others work with younger professionals building wealth, charging flat fees instead of asset-based fees. Many robo-advisors have no minimum. Tell us your situation and we\'ll match you with appropriate advisors.'
      },
    ]
  },
  {
    id: 'boston',
    name: 'Boston',
    slug: 'boston',
    tier: 1,
    state: 'Massachusetts',
    description: 'Connect with vetted wealth managers in Boston. Expert financial planning for biotech, healthcare, finance, and academic professionals in Greater Boston.',
    image: 'https://images.unsplash.com/photo-boston?w=800&q=80',
    stats: {
      medianHomePrice: '$800,000',
      colIndex: 152,
      incomeTax: '5% (flat) + 4% surtax on income over $1M'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Massachusetts now has a 9% effective rate on income over $1 million (5% base + 4% surtax)',
      'Massachusetts has a $2 million estate tax exemption—much lower than federal',
      'Boston\'s biotech and healthcare sectors create unique equity compensation challenges',
      'High housing costs require significantly adjusted retirement planning',
      'Academic professionals have complex pension and retirement plan considerations',
    ],
    faqs: [
      {
        question: '### How much do Boston wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Boston fees are competitive with other major metros. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'miami',
    name: 'Miami',
    slug: 'miami',
    tier: 1,
    state: 'Florida',
    description: 'Connect with vetted wealth managers in Miami. Expert financial planning for business owners, retirees, and professionals in South Florida.',
    image: 'https://images.unsplash.com/photo-miami?w=800&q=80',
    stats: {
      medianHomePrice: '$580,000',
      colIndex: 127,
      incomeTax: '0%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Florida has no state income tax—a major draw for high-net-worth relocations',
      'Miami is increasingly a wealth management hub, not just a retirement destination',
      'Establishing Florida domicile requires careful documentation for tax purposes',
      'Florida has strong asset protection and trust laws',
      'Real estate concentration and hurricane risk require specific planning',
    ],
    faqs: [
      {
        question: '### How much do Miami wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Miami fees are competitive with other major markets. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'austin',
    name: 'Austin',
    slug: 'austin',
    tier: 1,
    state: 'Texas',
    description: 'Connect with vetted wealth managers in Austin. Expert financial planning for tech professionals, startup founders, and executives in Central Texas.',
    image: 'https://images.unsplash.com/photo-austin?w=800&q=80',
    stats: {
      medianHomePrice: '$550,000',
      colIndex: 117,
      incomeTax: '0%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Texas has no state income tax—a major advantage for tech professionals',
      'Austin has become a significant tech hub with corresponding equity compensation complexity',
      'Housing costs have risen dramatically but remain below coastal metros',
      'Texas property taxes are high—factor into housing decisions',
      'California transplants face specific planning considerations',
    ],
    faqs: [
      {
        question: '### How much do Austin wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive wealth management. Austin fees are competitive with other major markets. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'sf',
    name: 'San Francisco',
    slug: 'san-francisco',
    tier: 1,
    state: 'California',
    description: 'Connect with vetted wealth managers in San Francisco. Expert financial planning for tech professionals, startup founders, and executives in the Bay Area.',
    image: 'https://images.unsplash.com/photo-sf?w=800&q=80',
    stats: {
      medianHomePrice: '$1,300,000',
      colIndex: 179,
      incomeTax: '1-13.3%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Stock-based compensation dominates Bay Area wealth, requiring specialized strategies',
      'California\'s 13.3% top tax rate makes tax planning critical for tech professionals',
      'SF has the nation\'s highest housing costs—retirement planning must account for this',
      'Many Bay Area advisors specialize in tech compensation (RSUs, options, startup equity)',
      'Pre-IPO planning and concentrated position management are essential skills',
    ],
    faqs: [
      {
        question: '### How much do San Francisco wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive planning. Advisors specializing in tech compensation may charge premiums but provide value through tax savings on equity. All-in costs should stay under 1.25% for most situations.'
      },
    ]
  },
  {
    id: 'seattle',
    name: 'Seattle',
    slug: 'seattle',
    tier: 1,
    state: 'Washington',
    description: 'Connect with vetted wealth managers in Seattle. Expert financial planning for tech professionals, Amazon and Microsoft employees, and executives in the Puget Sound.',
    image: 'https://images.unsplash.com/photo-seattle?w=800&q=80',
    stats: {
      medianHomePrice: '$850,000',
      colIndex: 156,
      incomeTax: '0%'
    },
    localChallenges: [
      {
        title: 'Tax Considerations',
        description: 'Local and state tax implications require careful planning.'
      },
      {
        title: 'Cost of Living',
        description: 'Housing and living costs impact retirement planning significantly.'
      },
    ],
    keyTakeaways: [
      'Washington has no state income tax—a major advantage for tech compensation',
      'Seattle has significant tech concentration (Amazon, Microsoft, and hundreds of tech companies)',
      'Stock-based compensation dominates Seattle wealth, requiring specialized strategies',
      'High housing costs require adjusted retirement planning',
      'Many Seattle advisors specialize in tech compensation planning',
    ],
    faqs: [
      {
        question: '### How much do Seattle wealth managers charge?',
        answer: 'Expect 0.5-1% of assets under management for comprehensive planning. Advisors specializing in tech compensation may charge premiums but provide value through tax savings. All-in costs should stay under 1.25%.'
      },
    ]
  },
];
