
import { Article } from '../types';

export const FIND_ADVISOR_ARTICLES: Article[] = [
  {
    id: 'find-1',
    title: 'How to Choose a Financial Advisor: Complete Selection Guide',
    slug: 'how-to-choose-financial-advisor',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Step-by-step guide to choosing the right financial advisor including what to look for, questions to ask, and how to evaluate candidates.',
    readTime: '12 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Start by defining your specific needs (planning vs investment mgmt).",
      "Prioritize fee-only, fiduciary advisors to minimize conflicts.",
      "Verify credentials (CFP®, CFA) and check disciplinary records.",
      "Interview at least 3 candidates to compare approaches."
    ],
    sections: [
      {
        type: 'text',
        title: 'Step 1: Define What You Need',
        content: `
          <p><strong>Assess Your Situation:</strong> Do you need a one-time plan, or ongoing management? Is your situation complex (business owner, equity comp) or simple? Wealth managers typically serve those with $500k+ assets needing comprehensive care.</p>
        `
      },
      {
        type: 'text',
        title: 'Step 2: Understand Advisor Types',
        content: `
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Fee-Only:</strong> Paid only by you. Least conflict.</li>
            <li><strong>Fee-Based:</strong> Fees + Commissions. Moderate conflict.</li>
            <li><strong>Commission:</strong> Paid by products. Highest conflict.</li>
          </ul>
        `
      }
    ],
    bottomLine: "Choosing an advisor is a high-stakes decision. Take your time, ask hard questions, and demand a fiduciary standard."
  },
  {
    id: 'find-2',
    title: 'Fiduciary vs Suitability Standard: What\'s the Difference?',
    slug: 'fiduciary-vs-suitability',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Understand the difference between fiduciary and suitability standards, why it matters for your investments, and how to find a fiduciary advisor.',
    readTime: '8 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Fiduciary advisors legally must put your interests first.",
      "Suitability standard only requires recommendations be 'appropriate'—not the best.",
      "The difference can cost you thousands in hidden fees and subpar products.",
      "Always ask: 'Are you a fiduciary at all times?'"
    ],
    sections: [],
    bottomLine: "Don't settle for 'suitable.' Demand an advisor who is legally bound to put your financial wellbeing ahead of their own."
  },
  {
    id: 'find-3',
    title: 'Fee-Only vs Commission Advisors: Which Is Better?',
    slug: 'fee-only-vs-commission',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Compare fee-only and commission-based financial advisors. Understand compensation models and conflicts of interest.',
    readTime: '8 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Fee-only advisors are paid only by client fees—no commissions.",
      "Commission-based advisors earn from selling products, creating inherent conflicts.",
      "Fee-based (hybrid) advisors charge fees AND take commissions.",
      "Total cost matters: A 1% fee is better than a 'free' advisor who sells high-cost 5% load funds."
    ],
    sections: [],
    bottomLine: "Follow the money. Understanding how your advisor gets paid explains their recommendations. Fee-only is the cleanest model."
  },
  {
    id: 'find-4',
    title: 'Questions to Ask a Financial Advisor Before You Hire',
    slug: 'questions-to-ask-financial-advisor',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Essential questions to ask before hiring a financial advisor including compensation, fiduciary status, and investment philosophy.',
    readTime: '6 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Ask: 'Are you a fiduciary at all times?'",
      "Ask: 'How exactly are you compensated?'",
      "Ask: 'What is your investment philosophy?'",
      "Ask: 'What are my all-in costs?'"
    ],
    sections: [],
    bottomLine: "A good advisor welcomes tough questions. If they dodge them or use jargon to confuse you, walk away."
  },
  {
    id: 'find-5',
    title: 'Financial Advisor Credentials Explained: CFP, CFA, and More',
    slug: 'financial-advisor-credentials',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Understand financial advisor credentials. Learn which designations matter (CFP, CFA, CPA) and what they mean for your wealth.',
    readTime: '8 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "CFP® (Certified Financial Planner) is the gold standard for comprehensive planning.",
      "CFA (Chartered Financial Analyst) indicates deep investment management expertise.",
      "CPA (Certified Public Accountant) is best for tax-focused advice.",
      "Be skeptical of 'weekend designations' with impressive titles but low requirements."
    ],
    sections: [],
    bottomLine: "Credentials show commitment and competence. Look for the marks that match your specific needs (Planning vs Investing vs Tax)."
  },
  {
    id: 'find-6',
    title: 'Wealth Management Fees: What Financial Advisors Cost in 2025',
    slug: 'wealth-management-fees',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Complete guide to wealth management fees including AUM, flat fees, hourly rates, and how to evaluate value.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "AUM fees typically range from 0.50% to 1.25%.",
      "Flat fees range from $2,000 to $15,000+ annually.",
      "Always consider total cost (Advisor Fee + Fund Expenses + Trading Costs).",
      "Fees should decrease (in percentage terms) as assets increase."
    ],
    sections: [],
    bottomLine: "You get what you pay for, but high fees erode returns over time. Ensure the value provided (planning, tax savings) justifies the cost."
  },
  {
    id: 'find-7',
    title: 'Financial Advisor Red Flags: Warning Signs to Watch For',
    slug: 'financial-advisor-red-flags',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Learn to identify financial advisor red flags including high-pressure tactics, guaranteed returns, and lack of transparency.',
    readTime: '8 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Guaranteed returns are a lie (except for specific insurance products).",
      "Pressure tactics ('Act Now') are unprofessional.",
      "Reluctance to discuss fees is a major warning sign.",
      "Lack of a third-party custodian is a fraud risk."
    ],
    sections: [],
    bottomLine: "Trust your gut. If something feels off, too good to be true, or confusing, it probably is."
  },
  {
    id: 'find-8',
    title: 'When Do You Need a Wealth Manager? Signs It\'s Time for Help',
    slug: 'when-do-you-need-wealth-manager',
    hubId: 'find-advisor',
    type: 'spoke',
    excerpt: 'Discover when hiring a wealth manager makes sense including life transitions, complexity thresholds, and asset levels.',
    readTime: '8 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    keyTakeaways: [
      "Complexity (business, estate, tax) drives the need more than just asset size.",
      "Major transitions (retirement, inheritance, sale) are key trigger points.",
      "Behavioral coaching (preventing panic) is a primary value add.",
      "If you have $500k+ and no time/interest, professional help pays off."
    ],
    sections: [],
    bottomLine: "You can do it yourself, but you don't have to. Professional help frees you to focus on living your life, not managing your money."
  }
];
