import { TopicHub } from '../types';

export const SYNCED_HUBS: TopicHub[] = [
  {
    id: 'financial',
    title: 'Financial Planning',
    slug: 'financial-planning',
    description: 'Financial planning is the process of setting goals for your money and creating a roadmap to achieve them. It\'s not about getting rich quick or complex investment strategies—it\'s about understanding where you are, deciding where you want to be, and taking consistent steps to get there. Effective financial planning provides clarity, reduces stress, and dramatically increases the probability of achieving your financial goals.',
    iconName: 'PieChart',
    keyTakeaways: [
      'Financial planning starts with knowing your net worth and cash flow',
      'An emergency fund of 3-6 months expenses is your financial foundation',
      'Paying off high-interest debt should precede most investing',
      'Automate savings and investments to remove willpower from the equation',
      'Your plan should evolve as your life circumstances change',
    ],
    faqs: [
      {
        question: '### How do I start financial planning with no money?',
        answer: 'Start with awareness. Track every dollar for one month. Identify one expense to cut and redirect to savings. Even $50/month builds the habit. Get your employer 401(k) match if available—it\'s free money. The amount matters less than the consistency.'
      },
    ]
  },
  {
    id: 'find',
    title: 'Find a Wealth Manager',
    slug: 'find-wealth-manager',
    description: 'Choosing a wealth manager is one of the most important financial decisions you\'ll make. The right advisor helps you build and protect wealth, navigate complex decisions, and achieve your financial goals. The wrong one can cost you through poor advice, high fees, or conflicts of interest. This guide helps you understand what to look for, questions to ask, and red flags to avoid.',
    iconName: 'Users',
    keyTakeaways: [
      'Always choose an advisor who acts as a fiduciary—legally required to put your interests first',
      'Understand all fees: management fees, fund expenses, transaction costs, and hidden charges',
      'Credentials matter: CFP, CFA, and CPA indicate genuine expertise',
      'Interview at least three advisors before making a decision',
      'Trust your instincts—if something feels off, keep looking',
    ],
    faqs: [
      {
        question: '### How much money do I need to work with a wealth manager?',
        answer: 'Minimums vary widely. Some advisors require $500,000+; others work with clients building wealth. Robo-advisors often have no minimums. If you\'re below traditional minimums, look for advisors offering flat-fee or hourly planning services.'
      },
    ]
  },
  {
    id: 'tax',
    title: 'Tax Planning',
    slug: 'tax-planning',
    description: 'Tax planning is the legal process of analyzing your financial situation to minimize tax liability. Unlike tax preparation (filing your return), tax planning happens throughout the year and involves strategic decisions about income timing, account selection, and investment placement. For high earners, effective tax planning can save tens of thousands of dollars annually—money that compounds in your favor over time.',
    iconName: 'Calculator',
    keyTakeaways: [
      'Tax planning is proactive; tax preparation is reactive—planning saves more money',
      'The difference between tax-advantaged and taxable accounts can add hundreds of thousands to your retirement',
      'Roth conversions during low-income years can eliminate future tax liability on converted amounts',
      'Tax-loss harvesting turns investment losses into tax savings without changing your portfolio strategy',
      'State taxes matter—where you live and where you retire significantly impacts lifetime taxes',
    ],
    faqs: [
      {
        question: '### What\'s the difference between tax planning and tax preparation?',
        answer: 'Tax preparation is filing your return after the year ends—it\'s backward-looking. Tax planning is making strategic decisions throughout the year to minimize future taxes—it\'s forward-looking. Planning saves far more money than preparation.'
      },
    ]
  },
  {
    id: 'investment',
    title: 'Investment Strategies',
    slug: 'investment-strategies',
    description: 'Investment strategy is the systematic approach you use to allocate money across different assets to achieve your financial goals. The right strategy depends on your timeline, risk tolerance, and objectives—there\'s no single approach that works for everyone. What matters is choosing a strategy you can stick with through market ups and downs, then executing it consistently over time.',
    iconName: 'BarChart',
    keyTakeaways: [
      'Your investment strategy should match your time horizon—longer timelines allow for more aggressive approaches',
      'Diversification across asset classes reduces risk without necessarily sacrificing returns',
      'Low-cost index funds outperform most actively managed funds over long periods',
      'Rebalancing annually keeps your portfolio aligned with your target allocation',
      'Emotional decisions are the biggest enemy of investment success',
    ],
    faqs: [
      {
        question: '### How much money do I need to start investing?',
        answer: 'You can start with any amount. Many brokerages have no minimums, and index funds can be purchased for the price of a single share (or fractionally for even less). Start now with what you have—time in the market matters more than timing the market.'
      },
    ]
  },
  {
    id: 'estate',
    title: 'Estate Planning',
    slug: 'estate-planning',
    description: 'Estate planning is the process of arranging for the management and transfer of your assets during your lifetime and after death. It\'s not just for the wealthy—everyone with assets, dependents, or specific wishes about their care needs an estate plan. Without one, state laws determine who receives your assets, courts appoint guardians for your children, and your family faces unnecessary costs, delays, and conflict during an already difficult time.',
    iconName: 'Shield',
    keyTakeaways: [
      'Estate planning is essential regardless of wealth level—it\'s about control and protecting loved ones',
      'A basic estate plan includes a will, power of attorney, healthcare directive, and beneficiary designations',
      'Trusts provide benefits like probate avoidance, privacy, and control over asset distribution',
      'Beneficiary designations override your will—keeping them updated is critical',
      'Review your estate plan every 3-5 years and after major life events',
    ],
    faqs: [
      {
        question: '### Do I need a lawyer for estate planning?',
        answer: 'For basic documents, online services can work. But for anything involving trusts, significant assets, tax planning, business interests, or complex family situations, an attorney is essential. Mistakes in estate planning can be costly and may not be discovered until it\'s too late to fix them.'
      },
    ]
  },
  {
    id: 'hnw',
    title: 'High Net Worth Wealth Management',
    slug: 'high-net-worth',
    description: 'High net worth (HNW) wealth management goes beyond standard financial planning to address the unique challenges and opportunities that come with substantial wealth. Complex tax situations, estate planning concerns, concentrated stock positions, multi-generational wealth transfer, and sophisticated investment needs require specialized expertise that general financial advisors may lack.',
    iconName: 'BookOpen',
    keyTakeaways: [
      'High net worth typically means $1M+ in investable assets; ultra-high net worth is $30M+',
      'HNW clients need integrated services: investment, tax, estate, risk, and philanthropic planning',
      'Concentrated stock positions require specialized diversification strategies',
      'Estate tax planning becomes critical as wealth approaches exemption thresholds',
      'The right advisor structure (private bank, RIA, family office) depends on your asset level and needs',
    ],
    faqs: [
      {
        question: '### At what net worth do I need a wealth manager?',
        answer: 'There\'s no magic number, but complexity typically warrants professional management around $500K-$1M. At higher levels ($2M+), the value of comprehensive planning, tax optimization, and estate planning expertise almost always exceeds the cost.'
      },
    ]
  },
  {
    id: 'risk',
    title: 'Risk Management',
    slug: 'risk-management',
    description: 'Risk management is the process of identifying, assessing, and mitigating threats to your financial well-being. While building wealth matters, protecting it matters equally—one catastrophic event can erase decades of progress. Effective risk management ensures that illness, disability, death, lawsuits, or market crashes don\'t devastate your family\'s financial security.',
    iconName: 'BookOpen',
    keyTakeaways: [
      'Insurance transfers catastrophic risk you can\'t afford to bear yourself',
      'Life insurance needs peak when you have dependents and debts, then decline',
      'Disability insurance protects your most valuable asset—your earning power',
      'Long-term care is the most underplanned risk facing retirees',
      'Self-insure small risks, transfer large ones',
    ],
    faqs: [
      {
        question: '### How much life insurance do I need?',
        answer: 'A common rule: 10-12 times annual income. But actual need depends on debts, dependents\' ages, spouse\'s income, existing savings, and specific goals. Use the DIME method or work with an advisor for precise calculations.'
      },
    ]
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Retirement planning is the process of determining your retirement income goals and the actions needed to achieve them. It involves identifying income sources, estimating expenses, implementing a savings program, and managing assets and risk. The earlier you start, the more time your money has to grow—but it\'s never too late to begin.',
    iconName: 'TrendingUp',
    keyTakeaways: [
      'Start retirement planning as early as possible to maximize compound growth',
      'Aim to replace 70-80% of your pre-retirement income to maintain your lifestyle',
      'Diversify retirement savings across tax-advantaged accounts (401k, IRA, Roth)',
      'Review and adjust your retirement plan annually as circumstances change',
      'Consider working with a fiduciary financial advisor for complex situations',
    ],
    faqs: [
      {
        question: '### How much should I save for retirement each month?',
        answer: 'Aim to save 10-15% of your gross income, including any employer match. If you\'re starting late, you may need to save 20% or more to catch up. Use our retirement calculator to determine your specific target based on your age and goals.'
      },
    ]
  },
];
