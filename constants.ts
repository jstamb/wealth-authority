import { TopicHub, City, Article } from './types';

import { RETIREMENT_ARTICLES } from './data/retirementArticles';
import { FINANCIAL_PLANNING_ARTICLES } from './data/financialPlanningArticles';
import { FIND_ADVISOR_ARTICLES } from './data/findAdvisorArticles';
import { TAX_PLANNING_ARTICLES } from './data/taxPlanningArticles';
import { ESTATE_PLANNING_ARTICLES } from './data/estatePlanningArticles';
import { INVESTMENT_ARTICLES } from './data/investmentArticles';
import { HIGH_NET_WORTH_ARTICLES } from './data/highNetWorthArticles';
import { RISK_MANAGEMENT_ARTICLES } from './data/riskManagementArticles';
import { CITY_ARTICLES } from './data/cityArticles';

// Synced data from Obsidian (takes priority over hardcoded)
import { SYNCED_HUBS } from './data/hubs';
import { SYNCED_CITIES } from './data/cityHubs';

// Helper to merge arrays by ID, with synced data taking priority
function mergeById<T extends { id: string }>(hardcoded: T[], synced: T[]): T[] {
  const syncedIds = new Set(synced.map(item => item.id));
  const hardcodedFiltered = hardcoded.filter(item => !syncedIds.has(item.id));
  return [...synced, ...hardcodedFiltered];
}

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

// Topic Hubs (hardcoded fallback data)
const HARDCODED_HUBS: TopicHub[] = [
  {
    id: 'retirement',
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Comprehensive strategies for building, preserving, and distributing wealth through retirement. Learn about savings targets, withdrawal strategies, Social Security optimization, and healthcare planning from certified financial experts.',
    iconName: 'TrendingUp',
    keyTakeaways: [
      'Target saving 10-12x your final salary by retirement age',
      'Start early to maximize compound growth—even small amounts matter',
      'Diversify across tax-advantaged accounts (401k, Traditional IRA, Roth IRA)',
      'Budget $300,000+ for healthcare costs in retirement as a couple',
      'Delay Social Security to age 70 to maximize lifetime benefits (8% annual increase)',
      'Consider sequence of returns risk when planning withdrawals'
    ],
    expertQuote: {
      text: 'The biggest mistake I see is people not starting early enough. Time is your greatest asset in retirement planning—a 25-year-old investing $500/month will have more at 65 than a 35-year-old investing $1,000/month.',
      author: 'Michael Chen',
      credentials: 'CFP, CFA | 25+ Years in Retirement Planning'
    },
    faqs: [
      { question: 'How much do I need to retire?', answer: 'Most experts recommend having 10-12x your final salary saved. For someone earning $100,000, that means $1-1.2 million. However, your specific number depends on your desired lifestyle, location, healthcare needs, and other income sources like Social Security or pensions.' },
      { question: 'When should I start taking Social Security?', answer: 'Delaying until age 70 maximizes your benefit by 8% per year past full retirement age. However, the optimal age depends on your health, life expectancy, spousal benefits, and other income sources. Those with health concerns or immediate financial needs may benefit from claiming earlier.' },
      { question: 'What is the 4% rule?', answer: 'The 4% rule suggests you can withdraw 4% of your portfolio in year one of retirement, then adjust for inflation annually, with a high probability your money lasts 30 years. However, many advisors now suggest 3-3.5% for early retirees or during periods of low expected returns.' },
      { question: 'Should I pay off my mortgage before retiring?', answer: 'It depends on your mortgage rate versus expected investment returns. If your mortgage rate is below 4-5%, investing the money may provide better returns. However, the psychological benefit of being debt-free in retirement is valuable for many people.' },
      { question: 'How do I handle healthcare before Medicare at 65?', answer: 'Options include COBRA coverage (up to 18 months), ACA marketplace plans, spouse employer coverage, or health sharing ministries. Budget $500-1,500/month for quality coverage. Some early retirees work part-time specifically for health benefits.' }
    ]
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    slug: 'financial-planning',
    description: 'Comprehensive strategies for managing your complete financial picture, from budgeting and debt management to insurance and goal-setting. Build a solid foundation for long-term wealth with expert guidance.',
    iconName: 'PieChart',
    keyTakeaways: [
      'Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings',
      'Build an emergency fund covering 3-6 months of essential expenses',
      'Prioritize high-interest debt (above 7%) before aggressive investing',
      'Automate savings and investments to remove emotional decision-making',
      'Review and update your financial plan annually or after major life events',
      'Understand your complete net worth, not just your bank balance'
    ],
    expertQuote: {
      text: 'Financial planning is not about predicting the future—it is about preparing for multiple futures. A good plan accounts for job loss, market downturns, health emergencies, and unexpected opportunities.',
      author: 'Sarah Williams',
      credentials: 'CFP, ChFC | Founder, Williams Wealth Advisory'
    },
    faqs: [
      { question: 'Do I need a financial advisor?', answer: 'Consider an advisor if you have complex finances (multiple income sources, stock options, inheritance), significant assets ($500k+), or simply lack time to manage investments properly. A good fiduciary advisor typically adds 1-3% in annual value through tax optimization, behavioral coaching, and proper asset allocation.' },
      { question: 'How much should I save each month?', answer: 'Aim to save at least 20% of gross income. Prioritize: 1) Employer 401k match (free money), 2) High-interest debt payoff, 3) Emergency fund, 4) Max retirement accounts, 5) Taxable investing. If 20% feels impossible, start with 10% and increase 1% each year.' },
      { question: 'What is a good net worth for my age?', answer: 'A common benchmark: by 30, have 1x salary saved; by 40, have 3x; by 50, have 6x; by 60, have 8x; by 67, have 10x. However, these are averages—your target depends on desired retirement lifestyle and location.' },
      { question: 'Should I pay off debt or invest?', answer: 'Generally, pay off debt above 7% interest before investing beyond employer match. For lower-rate debt (mortgage, student loans), the math often favors investing, but psychological peace of mind from being debt-free has real value.' },
      { question: 'How often should I review my financial plan?', answer: 'Conduct a comprehensive review annually and after major life events (marriage, children, job change, inheritance, home purchase). Monthly check-ins on spending and quarterly portfolio reviews are also recommended.' }
    ]
  },
  {
    id: 'find-advisor',
    title: 'Find an Advisor',
    slug: 'find-advisor',
    description: 'Learn how to find, vet, and work with the right wealth manager for your unique financial situation. Understand fiduciary duty, fee structures, credentials, and the questions to ask before hiring.',
    iconName: 'Users',
    keyTakeaways: [
      'Always verify fiduciary status—advisors must put your interests first',
      'Understand all fees: AUM, flat fees, hourly rates, and hidden costs',
      'Check credentials (CFP, CFA, CPA) and verify through FINRA BrokerCheck',
      'Interview at least 3 advisors before making a decision',
      'Ask about their investment philosophy and typical client profile',
      'Ensure clear communication style and accessibility match your needs'
    ],
    expertQuote: {
      text: 'The most important question to ask any advisor is "Are you a fiduciary 100% of the time?" Many advisors are only fiduciaries sometimes, which creates conflicts of interest that can cost you significantly over time.',
      author: 'Jennifer Martinez',
      credentials: 'CFP, JD | Consumer Finance Advocate'
    },
    faqs: [
      { question: 'What is a fiduciary?', answer: 'A fiduciary is legally required to act in your best interest at all times, not just recommend "suitable" products. This means they must disclose conflicts of interest, avoid self-dealing, and put your financial welfare above their own compensation. Not all financial advisors are fiduciaries.' },
      { question: 'How much do financial advisors charge?', answer: 'Common fee structures: AUM fees (0.5-1.5% annually), flat retainer ($2,000-$10,000/year), hourly ($150-$400/hour), or commission-based. For a $1 million portfolio at 1% AUM, expect to pay $10,000/year. Fee-only advisors generally have fewer conflicts than commission-based advisors.' },
      { question: 'What credentials should I look for?', answer: 'CFP (Certified Financial Planner) is the gold standard for comprehensive planning. CFA (Chartered Financial Analyst) indicates investment expertise. CPA with PFS (Personal Financial Specialist) combines tax and planning. Check credentials are active and verify through issuing organizations.' },
      { question: 'How do I verify an advisors background?', answer: 'Use FINRA BrokerCheck (brokercheck.finra.org) for brokers and SEC Investment Adviser Public Disclosure for RIAs. Look for any disciplinary actions, customer complaints, or employment terminations. Check state securities regulators for additional records.' },
      { question: 'When do I need a wealth manager vs financial planner?', answer: 'Wealth managers typically serve clients with $500k+ and provide comprehensive services including investment management, tax planning, and estate planning. Financial planners may work with smaller accounts and focus more on budgeting, debt management, and goal planning. Both can be valuable depending on your needs.' }
    ]
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    slug: 'tax-planning',
    description: 'Legal strategies to minimize your tax burden and maximize wealth accumulation. Learn about tax-loss harvesting, Roth conversions, charitable giving, capital gains management, and state tax optimization from tax planning experts.',
    iconName: 'Calculator',
    keyTakeaways: [
      'Max out 401k ($23,000 in 2024) and IRA ($7,000) contributions annually',
      'Use tax-loss harvesting to offset gains and reduce taxable income',
      'Time Roth conversions during low-income years for tax-free growth',
      'Donate appreciated stock directly to charity to avoid capital gains',
      'Hold investments 1+ year to qualify for lower long-term capital gains rates',
      'Consider state tax implications when relocating or establishing domicile'
    ],
    expertQuote: {
      text: 'Tax planning should happen year-round, not just in April. The best strategies—Roth conversions, tax-loss harvesting, charitable giving—require advance planning. By December, many opportunities have already passed.',
      author: 'Robert Kim',
      credentials: 'CPA, CFP | Tax Strategy Director, 20+ Years'
    },
    faqs: [
      { question: 'How can I reduce my tax bill?', answer: 'Key strategies include: maximizing retirement contributions, tax-loss harvesting, investing in municipal bonds for tax-free income, timing income recognition (defer bonuses, accelerate deductions), qualified charitable distributions from IRAs after 70.5, and strategic Roth conversions during low-income years.' },
      { question: 'Should I convert to a Roth IRA?', answer: 'Roth conversions make sense if: you expect higher tax rates in retirement, you want tax-free growth for heirs, you have a long time horizon, or you are in a temporarily low tax bracket. The taxes paid now fund tax-free withdrawals later. Consider converting gradually to avoid jumping tax brackets.' },
      { question: 'What is tax-loss harvesting?', answer: 'Tax-loss harvesting involves selling investments at a loss to offset capital gains and reduce taxable income (up to $3,000/year against ordinary income). You can reinvest in similar (not identical) securities to maintain market exposure. Watch for wash sale rules—cannot repurchase substantially identical securities within 30 days.' },
      { question: 'How do capital gains taxes work?', answer: 'Short-term gains (held under 1 year) are taxed as ordinary income (up to 37%). Long-term gains (held 1+ year) are taxed at 0%, 15%, or 20% depending on income. The 3.8% Net Investment Income Tax applies to high earners. Strategic timing of sales can significantly reduce your tax bill.' },
      { question: 'What are the best tax-advantaged accounts?', answer: 'In order of typical priority: 1) 401k to employer match (free money), 2) HSA if eligible (triple tax advantage), 3) Roth or Traditional IRA, 4) Rest of 401k, 5) 529 for education, 6) Taxable brokerage. Mega backdoor Roth and backdoor Roth IRA strategies may be available for high earners.' }
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    slug: 'estate-planning',
    description: 'Protect your legacy and transfer wealth efficiently to the next generation. Learn about wills, trusts, beneficiary designations, powers of attorney, and strategies to minimize estate taxes and avoid probate.',
    iconName: 'Shield',
    keyTakeaways: [
      'Everyone needs at minimum a will, healthcare directive, and power of attorney',
      'Review beneficiary designations annually—they override your will',
      'Revocable living trusts avoid probate and provide privacy',
      'Irrevocable trusts can reduce estate taxes but require giving up control',
      'Gift up to $18,000/person annually ($36,000 for couples) tax-free',
      'Life insurance proceeds are generally tax-free but may be subject to estate tax'
    ],
    expertQuote: {
      text: 'The biggest estate planning mistake is not having a plan at all. Without proper documents, your state decides who gets your assets, who raises your children, and who makes medical decisions for you. That is rarely what people would have chosen.',
      author: 'Patricia Nguyen',
      credentials: 'JD, TEP | Estate Planning Attorney, 30+ Years'
    },
    faqs: [
      { question: 'Do I need a trust?', answer: 'Trusts are valuable for: avoiding probate (saves time and money), maintaining privacy, controlling distribution timing (for minors or spendthrift heirs), providing for special needs beneficiaries, and reducing estate taxes. Simple estates under $1 million with straightforward beneficiaries may only need a will, but revocable living trusts are increasingly common.' },
      { question: 'What is the estate tax exemption?', answer: 'The 2024 federal exemption is $13.61 million per person ($27.22 million for married couples with portability). This is scheduled to drop to approximately $7 million in 2026 unless Congress acts. Many states have lower exemptions—Massachusetts and Oregon tax estates over $1 million.' },
      { question: 'What documents do I need?', answer: 'Essential documents include: 1) Last Will and Testament, 2) Revocable Living Trust (optional but recommended), 3) Durable Power of Attorney for finances, 4) Healthcare Power of Attorney/Proxy, 5) Living Will/Advance Directive, 6) HIPAA Authorization. Update these every 3-5 years or after major life events.' },
      { question: 'How can I avoid probate?', answer: 'Strategies include: revocable living trusts (most comprehensive), beneficiary designations on retirement accounts and life insurance, payable-on-death (POD) bank accounts, transfer-on-death (TOD) brokerage accounts, and joint ownership with right of survivorship. Each has pros and cons depending on your situation.' },
      { question: 'What happens if I die without a will?', answer: 'Your state intestacy laws determine who inherits your assets—typically spouse and children in varying proportions. Unmarried partners receive nothing. The court appoints an administrator for your estate and potentially a guardian for minor children. The process takes longer and costs more than with proper planning.' }
    ]
  },
  {
    id: 'investment',
    title: 'Investment Strategies',
    slug: 'investment-strategies',
    description: 'Build and protect wealth through smart, evidence-based investment decisions. Learn about asset allocation, diversification, index investing, risk management, and behavioral finance from investment professionals.',
    iconName: 'BarChart',
    keyTakeaways: [
      'Diversification across asset classes reduces risk without sacrificing expected returns',
      'Low-cost index funds outperform most actively managed funds over time',
      'Asset allocation determines 90%+ of portfolio returns—get this right first',
      'Rebalance your portfolio annually or when allocations drift 5%+ from targets',
      'Time in the market beats timing the market—stay invested through volatility',
      'Understand your true risk tolerance before a market crash tests it'
    ],
    expertQuote: {
      text: 'The stock market is a device for transferring money from the impatient to the patient. The investors who build real wealth are those who stay disciplined through market cycles, keeping costs low and emotions out of their decisions.',
      author: 'Dr. James Richardson',
      credentials: 'PhD Economics, CFA | Investment Research Director'
    },
    faqs: [
      { question: 'Should I try to time the market?', answer: 'No. Research consistently shows that time in the market beats timing the market. Missing just the 10 best days over 20 years can cut your returns in half. The best strategy is consistent investing regardless of market conditions (dollar-cost averaging) and staying invested for the long term.' },
      { question: 'How should I allocate my portfolio?', answer: 'A common starting point is subtracting your age from 110-120 to get your stock allocation percentage. A 40-year-old might hold 70-80% stocks, 20-30% bonds. However, your risk tolerance, time horizon, income stability, and financial goals matter more than any formula. Consider working with an advisor for a personalized allocation.' },
      { question: 'What are index funds and why are they popular?', answer: 'Index funds track a market index (like the S&P 500) rather than trying to beat it. They offer broad diversification, very low costs (0.03-0.20% vs 1%+ for active funds), tax efficiency, and have outperformed 80-90% of actively managed funds over 15+ year periods. Warren Buffett recommends them for most investors.' },
      { question: 'How much should I keep in bonds?', answer: 'Bond allocation typically increases with age and as you approach needing the money. General guidelines: 20s-30s: 10-20% bonds, 40s-50s: 20-40%, 60s+: 40-60%. Bonds provide stability, income, and dry powder to buy stocks during downturns. Your specific allocation depends on risk tolerance and other income sources.' },
      { question: 'What is rebalancing and why does it matter?', answer: 'Rebalancing means selling winners and buying losers to maintain your target allocation. If stocks surge from 70% to 80% of your portfolio, you sell stocks and buy bonds to return to 70/30. This forces "buy low, sell high" discipline. Rebalance annually or when allocations drift 5%+ from targets. Some advisors use "rebalancing bands" for a more systematic approach.' }
    ]
  }
];

// Cities data (hardcoded fallback data)
const HARDCODED_CITIES: City[] = [
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
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    slug: 'san-francisco',
    tier: 1,
    state: 'California',
    description: 'Tech capital with highest state taxes but exceptional wealth-building opportunities.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    stats: {
      medianHomePrice: '$1,300,000',
      colIndex: 179,
      incomeTax: '13.3% (State)'
    },
    localChallenges: [
      { title: 'Extreme Housing Costs', description: 'Median home prices exceed $1.3 million in the city proper.' },
      { title: 'High State Taxes', description: 'California\'s 13.3% top rate is the highest in the nation.' }
    ],
    keyTakeaways: [
      'Tech RSUs and options require careful tax planning',
      'Prop 13 benefits long-term homeowners significantly',
      'Consider domicile planning for remote work situations'
    ],
    faqs: [
      { question: 'Is it worth the high taxes to live in SF?', answer: 'For tech workers with equity compensation, SF offers unmatched career opportunities despite high taxes. Long-term residents benefit from Prop 13 property tax limits.' }
    ]
  },
  {
    id: 'dallas',
    name: 'Dallas',
    slug: 'dallas',
    tier: 1,
    state: 'Texas',
    description: 'Business-friendly metroplex with no state income tax and growing financial sector.',
    image: 'https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=800&q=80',
    stats: {
      medianHomePrice: '$400,000',
      colIndex: 102,
      incomeTax: '0%'
    },
    localChallenges: [
      { title: 'Property Taxes', description: 'Texas has no income tax but property taxes average 2.2% of home value.' },
      { title: 'Extreme Weather', description: 'Summer heat and occasional severe weather events require planning.' }
    ],
    keyTakeaways: [
      'No state income tax on any income type',
      'Corporate relocations are driving job growth',
      'Lower cost of living than coastal metros'
    ],
    faqs: [
      { question: 'How much can I save with no state income tax?', answer: 'High earners can save 5-13% compared to states like California or New York, potentially $50,000+ annually on $500,000 income.' }
    ]
  },
  {
    id: 'austin',
    name: 'Austin',
    slug: 'austin',
    tier: 2,
    state: 'Texas',
    description: 'Fast-growing tech hub with no state income tax and vibrant culture.',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80',
    stats: {
      medianHomePrice: '$550,000',
      colIndex: 112,
      incomeTax: '0%'
    },
    localChallenges: [
      { title: 'Rapid Growth', description: 'Population growth has driven housing costs up significantly.' },
      { title: 'Property Taxes', description: 'High property tax rates offset the lack of income tax.' }
    ],
    keyTakeaways: [
      'No state income tax benefits tech workers with equity',
      'Growing tech scene attracts major employers',
      'Property taxes require careful budgeting'
    ],
    faqs: [
      { question: 'Is Austin still affordable?', answer: 'While no longer a bargain, Austin remains more affordable than coastal tech hubs while offering no state income tax and strong job growth.' }
    ]
  },
  {
    id: 'boston',
    name: 'Boston',
    slug: 'boston',
    tier: 2,
    state: 'Massachusetts',
    description: 'Historic financial and education hub with high taxes but strong wealth management infrastructure.',
    image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?w=800&q=80',
    stats: {
      medianHomePrice: '$800,000',
      colIndex: 152,
      incomeTax: '9% (Flat + Surtax)'
    },
    localChallenges: [
      { title: 'Millionaire Tax', description: 'New 4% surtax on income over $1 million brings top rate to 9%.' },
      { title: 'High Housing Costs', description: 'Limited housing supply keeps prices elevated.' }
    ],
    keyTakeaways: [
      'New millionaire surtax affects high earners significantly',
      'Strong biotech and finance job markets',
      'Estate tax starts at $2 million (among lowest thresholds)'
    ],
    faqs: [
      { question: 'How does the Massachusetts millionaire tax work?', answer: 'A 4% surtax applies to income over $1 million, bringing the effective rate to 9% on income above that threshold.' }
    ]
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    slug: 'philadelphia',
    tier: 2,
    state: 'Pennsylvania',
    description: 'Affordable Northeast hub with moderate state taxes and strong healthcare sector.',
    image: 'https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=800&q=80',
    stats: {
      medianHomePrice: '$250,000',
      colIndex: 101,
      incomeTax: '6.99% (Flat + City)'
    },
    localChallenges: [
      { title: 'City Wage Tax', description: 'Philadelphia imposes a 3.75% wage tax on residents.' },
      { title: 'Property Taxes', description: 'City property taxes are significant, though assessments vary.' }
    ],
    keyTakeaways: [
      'Pennsylvania does not tax retirement income',
      'City wage tax adds to state income tax burden',
      'More affordable than NYC or Boston'
    ],
    faqs: [
      { question: 'Is Philadelphia good for retirees?', answer: 'Yes, Pennsylvania exempts all retirement income from state tax, and Philadelphia is much more affordable than other Northeast metros.' }
    ]
  },
  {
    id: 'san-diego',
    name: 'San Diego',
    slug: 'san-diego',
    tier: 2,
    state: 'California',
    description: 'Coastal California living with high state taxes but exceptional climate.',
    image: 'https://images.unsplash.com/photo-1538964173425-93dc8f5c0d5b?w=800&q=80',
    stats: {
      medianHomePrice: '$900,000',
      colIndex: 161,
      incomeTax: '13.3% (State)'
    },
    localChallenges: [
      { title: 'High State Taxes', description: 'California\'s 13.3% top rate applies to all San Diego residents.' },
      { title: 'Housing Costs', description: 'Coastal location drives premium pricing.' }
    ],
    keyTakeaways: [
      'Same state tax considerations as LA and SF',
      'Strong military and biotech presence',
      'Prop 13 benefits long-term residents'
    ],
    faqs: [
      { question: 'How does San Diego compare to other California cities?', answer: 'San Diego offers similar tax treatment to LA and SF but with lower housing costs and a more relaxed lifestyle.' }
    ]
  },
  {
    id: 'san-jose',
    name: 'San Jose',
    slug: 'san-jose',
    tier: 2,
    state: 'California',
    description: 'Heart of Silicon Valley with exceptional tech wealth but high taxes.',
    image: 'https://images.unsplash.com/photo-1535581652167-3a26c90788fc?w=800&q=80',
    stats: {
      medianHomePrice: '$1,400,000',
      colIndex: 182,
      incomeTax: '13.3% (State)'
    },
    localChallenges: [
      { title: 'Extreme Housing Costs', description: 'Median home prices exceed $1.4 million.' },
      { title: 'Equity Compensation Complexity', description: 'RSUs, options, and IPOs require sophisticated tax planning.' }
    ],
    keyTakeaways: [
      'Tech equity requires multi-year tax planning',
      'Highest housing costs in the nation',
      'Consider 83(b) elections for early-stage equity'
    ],
    faqs: [
      { question: 'How do I plan for an IPO or acquisition?', answer: 'Start planning 1-2 years before anticipated liquidity. Consider RSU timing, QSBS exclusions, and installment sales where applicable.' }
    ]
  }
];

// Merged exports: Obsidian synced data takes priority, hardcoded serves as fallback
export const HUBS: TopicHub[] = mergeById(HARDCODED_HUBS, SYNCED_HUBS);
export const CITIES: City[] = mergeById(HARDCODED_CITIES, SYNCED_CITIES);

// Combined articles from all sources
export const MOCK_ARTICLES: Article[] = [
  ...RETIREMENT_ARTICLES,
  ...FINANCIAL_PLANNING_ARTICLES,
  ...FIND_ADVISOR_ARTICLES,
  ...TAX_PLANNING_ARTICLES,
  ...ESTATE_PLANNING_ARTICLES,
  ...INVESTMENT_ARTICLES,
  ...HIGH_NET_WORTH_ARTICLES,
  ...RISK_MANAGEMENT_ARTICLES,
  ...CITY_ARTICLES
];
