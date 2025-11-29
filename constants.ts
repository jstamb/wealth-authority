import { TopicHub, City, Article } from './types';

import { RETIREMENT_ARTICLES } from './data/retirementArticles';
import { FINANCIAL_PLANNING_ARTICLES } from './data/financialPlanningArticles';
import { FIND_ADVISOR_ARTICLES } from './data/findAdvisorArticles';
import { CITY_ARTICLES } from './data/cityArticles';

// Asset ranges for lead form
export const ASSET_RANGES = [
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  '$500,000 - $1,000,000',
  '$1,000,000 - $2,500,000',
  '$2,500,000 - $5,000,000',
  '$5,000,000+'
];

// Timeline options for lead form
export const TIMELINES = [
  'Immediately',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Just researching'
];

// Topic Hubs
export const HUBS: TopicHub[] = [
  {
    id: 'retirement',
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Strategies for building and preserving wealth through retirement.',
    iconName: 'TrendingUp',
    keyTakeaways: [
      'Start saving early to maximize compound growth',
      'Diversify your retirement accounts (401k, IRA, Roth)',
      'Plan for healthcare costs in retirement',
      'Consider your Social Security claiming strategy'
    ],
    faqs: [
      { question: 'How much do I need to retire?', answer: 'Most experts recommend having 10-12x your final salary saved, but your specific number depends on your lifestyle and location.' },
      { question: 'When should I start taking Social Security?', answer: 'Delaying until age 70 maximizes your benefit, but the right age depends on your health, finances, and other income sources.' }
    ]
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    slug: 'financial-planning',
    description: 'Comprehensive strategies for managing your complete financial picture.',
    iconName: 'PieChart',
    keyTakeaways: [
      'Create a comprehensive budget and stick to it',
      'Build an emergency fund of 3-6 months expenses',
      'Pay off high-interest debt first',
      'Invest consistently regardless of market conditions'
    ],
    faqs: [
      { question: 'Do I need a financial advisor?', answer: 'If you have complex finances, significant assets, or lack time to manage investments, a fiduciary advisor can add significant value.' },
      { question: 'How much should I save each month?', answer: 'Aim to save at least 20% of your income, with 15% going toward retirement.' }
    ]
  },
  {
    id: 'find-advisor',
    title: 'Find an Advisor',
    slug: 'find-advisor',
    description: 'How to find and vet the right wealth manager for your needs.',
    iconName: 'Users',
    keyTakeaways: [
      'Always work with a fiduciary who puts your interests first',
      'Understand fee structures before committing',
      'Check credentials and regulatory history',
      'Interview multiple advisors before deciding'
    ],
    faqs: [
      { question: 'What is a fiduciary?', answer: 'A fiduciary is legally required to act in your best interest, unlike brokers who only need to recommend "suitable" products.' },
      { question: 'How much do financial advisors charge?', answer: 'Typical fees range from 0.5% to 1.5% of assets under management annually, though fee structures vary.' }
    ]
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    slug: 'tax-planning',
    description: 'Legal strategies to minimize your tax burden and maximize wealth.',
    iconName: 'Calculator',
    keyTakeaways: [
      'Maximize tax-advantaged accounts annually',
      'Consider tax-loss harvesting opportunities',
      'Plan charitable giving strategically',
      'Understand capital gains implications'
    ],
    faqs: [
      { question: 'How can I reduce my tax bill?', answer: 'Maximize retirement contributions, use tax-loss harvesting, consider municipal bonds, and time income recognition strategically.' },
      { question: 'Should I convert to a Roth IRA?', answer: 'Roth conversions make sense if you expect higher tax rates in retirement or want tax-free growth for heirs.' }
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    slug: 'estate-planning',
    description: 'Protect your legacy and transfer wealth efficiently to the next generation.',
    iconName: 'Shield',
    keyTakeaways: [
      'Everyone needs at least a basic will',
      'Review beneficiary designations regularly',
      'Consider trusts for complex situations',
      'Plan for incapacity with power of attorney'
    ],
    faqs: [
      { question: 'Do I need a trust?', answer: 'Trusts can avoid probate, provide privacy, and offer more control over asset distribution, but simple estates may only need a will.' },
      { question: 'What is the estate tax exemption?', answer: 'The federal exemption is approximately $13 million per person in 2024, but state exemptions vary significantly.' }
    ]
  },
  {
    id: 'investment',
    title: 'Investment Strategies',
    slug: 'investment-strategies',
    description: 'Build and protect wealth through smart investment decisions.',
    iconName: 'BarChart',
    keyTakeaways: [
      'Diversification reduces risk without sacrificing returns',
      'Keep investment costs low with index funds',
      'Rebalance your portfolio annually',
      'Stay invested through market volatility'
    ],
    faqs: [
      { question: 'Should I try to time the market?', answer: 'No. Studies consistently show that time in the market beats timing the market. Stay invested for the long term.' },
      { question: 'How should I allocate my portfolio?', answer: 'A common rule is to subtract your age from 110 to get your stock allocation percentage, but your risk tolerance and timeline matter more.' }
    ]
  }
];

// Cities data
export const CITIES: City[] = [
  {
    id: 'nyc',
    name: 'New York City',
    slug: 'new-york-city',
    tier: 1,
    state: 'New York',
    description: 'The financial capital of the world, with unique challenges including triple taxation and extreme cost of living.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    stats: {
      medianHomePrice: '$750,000',
      colIndex: 187,
      incomeTax: '12.7% (State + City)'
    },
    localChallenges: [
      { title: 'Triple Taxation', description: 'Federal, state, and city income taxes can exceed 50% for high earners.' },
      { title: 'Cost of Living', description: 'Housing, childcare, and services cost 87% more than the national average.' }
    ],
    keyTakeaways: [
      'Budget for state and city taxes on top of federal',
      'Co-op maintenance fees persist even after mortgage payoff',
      'NY municipal bonds offer triple-tax-free income'
    ],
    faqs: [
      { question: 'Is it worth staying in NYC for retirement?', answer: 'It depends on your lifestyle preferences and financial situation. Many retirees relocate to reduce costs, but NYC offers unmatched culture and healthcare.' }
    ]
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    slug: 'los-angeles',
    tier: 1,
    state: 'California',
    description: 'Entertainment capital with high state taxes but no local income tax.',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    stats: {
      medianHomePrice: '$950,000',
      colIndex: 166,
      incomeTax: '13.3% (State)'
    },
    localChallenges: [
      { title: 'High State Tax', description: 'California has the highest state income tax rate in the nation at 13.3%.' },
      { title: 'Housing Costs', description: 'Median home prices exceed $950,000 in most desirable areas.' }
    ],
    keyTakeaways: [
      'Prop 13 limits property tax increases on existing homes',
      'No inheritance tax but federal estate tax still applies',
      'Consider domicile planning if working remotely'
    ],
    faqs: [
      { question: 'How do California taxes compare to other states?', answer: 'California has the highest marginal income tax rate (13.3%) but no estate tax. Total tax burden depends on income level and property ownership.' }
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    slug: 'chicago',
    tier: 1,
    state: 'Illinois',
    description: 'Midwest financial hub with moderate costs but state pension concerns.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80',
    stats: {
      medianHomePrice: '$350,000',
      colIndex: 107,
      incomeTax: '4.95% (Flat)'
    },
    localChallenges: [
      { title: 'Property Taxes', description: 'Cook County has some of the highest property tax rates in the nation.' },
      { title: 'State Finances', description: 'Illinois pension obligations create uncertainty about future taxes.' }
    ],
    keyTakeaways: [
      'Flat state income tax simplifies planning',
      'High property taxes offset lower income taxes',
      'Retirement income is exempt from state tax'
    ],
    faqs: [
      { question: 'Is Illinois good for retirees?', answer: 'Illinois exempts retirement income from state tax, making it attractive for retirees despite high property taxes.' }
    ]
  },
  {
    id: 'houston',
    name: 'Houston',
    slug: 'houston',
    tier: 1,
    state: 'Texas',
    description: 'Energy capital with no state income tax and low cost of living.',
    image: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=800&q=80',
    stats: {
      medianHomePrice: '$325,000',
      colIndex: 96,
      incomeTax: '0%'
    },
    localChallenges: [
      { title: 'Property Taxes', description: 'No income tax is offset by higher property taxes.' },
      { title: 'Hurricane Risk', description: 'Insurance costs can be significant for coastal areas.' }
    ],
    keyTakeaways: [
      'No state income tax on any income type',
      'Property taxes average 2.2% of home value',
      'Strong job market in energy and healthcare'
    ],
    faqs: [
      { question: 'How much do I save with no state income tax?', answer: 'Depending on income, you could save 5-13% compared to high-tax states like California or New York.' }
    ]
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    slug: 'phoenix',
    tier: 1,
    state: 'Arizona',
    description: 'Fast-growing retirement destination with favorable tax treatment.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    stats: {
      medianHomePrice: '$450,000',
      colIndex: 103,
      incomeTax: '2.5% (Flat)'
    },
    localChallenges: [
      { title: 'Extreme Heat', description: 'Summer temperatures regularly exceed 110°F, increasing utility costs.' },
      { title: 'Water Scarcity', description: 'Long-term water availability is a concern for the region.' }
    ],
    keyTakeaways: [
      'Flat 2.5% state income tax is very competitive',
      'Social Security benefits are not taxed',
      'Growing healthcare and tech job markets'
    ],
    faqs: [
      { question: 'Is Arizona good for retirement?', answer: 'Arizona offers low taxes, affordable housing, and excellent weather (except summer). It is one of the top retirement destinations.' }
    ]
  },
  {
    id: 'miami',
    name: 'Miami',
    slug: 'miami',
    tier: 1,
    state: 'Florida',
    description: 'International gateway with no state income tax and growing wealth management sector.',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80',
    stats: {
      medianHomePrice: '$550,000',
      colIndex: 123,
      incomeTax: '0%'
    },
    localChallenges: [
      { title: 'Hurricane Risk', description: 'Insurance costs are among the highest in the nation.' },
      { title: 'Rising Costs', description: 'Influx of remote workers has driven up housing costs significantly.' }
    ],
    keyTakeaways: [
      'No state income tax on any income',
      'Homestead exemption protects primary residence',
      'Growing international business hub'
    ],
    faqs: [
      { question: 'How do I establish Florida residency?', answer: 'You need to spend 183+ days in Florida, get a Florida drivers license, register to vote, and file a Declaration of Domicile.' }
    ]
  },
  {
    id: 'seattle',
    name: 'Seattle',
    slug: 'seattle',
    tier: 1,
    state: 'Washington',
    description: 'Tech hub with no state income tax but high cost of living.',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=800&q=80',
    stats: {
      medianHomePrice: '$850,000',
      colIndex: 149,
      incomeTax: '0%'
    },
    localChallenges: [
      { title: 'Housing Costs', description: 'Tech industry growth has made housing extremely expensive.' },
      { title: 'Sales Tax', description: 'No income tax is offset by 10%+ combined sales tax.' }
    ],
    keyTakeaways: [
      'No state income tax benefits high earners',
      'Capital gains tax was recently enacted (7% on gains over $250k)',
      'Strong tech job market for wealth accumulation'
    ],
    faqs: [
      { question: 'Is Seattle tax-friendly?', answer: 'For high earners, the lack of income tax is significant. However, the new capital gains tax and high sales tax offset some benefits.' }
    ]
  },
  {
    id: 'denver',
    name: 'Denver',
    slug: 'denver',
    tier: 2,
    state: 'Colorado',
    description: 'Growing tech and outdoor lifestyle hub with moderate taxes.',
    image: 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=800&q=80',
    stats: {
      medianHomePrice: '$600,000',
      colIndex: 128,
      incomeTax: '4.4% (Flat)'
    },
    localChallenges: [
      { title: 'Housing Appreciation', description: 'Rapid price growth has priced out many buyers.' },
      { title: 'TABOR Limits', description: 'Taxpayer Bill of Rights creates unique refund situations.' }
    ],
    keyTakeaways: [
      'Flat 4.4% state income tax',
      'TABOR can result in tax refunds in good years',
      'Strong outdoor lifestyle appeals to many retirees'
    ],
    faqs: [
      { question: 'What is TABOR?', answer: 'The Taxpayer Bill of Rights limits government revenue growth and can result in refunds to taxpayers when revenues exceed limits.' }
    ]
  }
];

// Combined articles from all sources
export const MOCK_ARTICLES: Article[] = [
  ...RETIREMENT_ARTICLES,
  ...FINANCIAL_PLANNING_ARTICLES,
  ...FIND_ADVISOR_ARTICLES,
  ...CITY_ARTICLES
];
