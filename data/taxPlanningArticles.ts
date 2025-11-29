
import { Article } from '../types';

export const TAX_PLANNING_ARTICLES: Article[] = [
  {
    id: 'tax-1',
    title: 'Tax-Loss Harvesting: How to Turn Investment Losses Into Tax Savings',
    slug: 'tax-loss-harvesting-guide',
    hubId: 'tax-planning',
    type: 'spoke',
    excerpt: 'Learn how tax-loss harvesting can reduce your tax bill by strategically selling losing investments. Includes wash sale rules, best practices, and real examples.',
    readTime: '12 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Robert Kim',
      role: 'Tax Strategy Director',
      credentials: 'CPA, CFP',
      experience: '20+ years in tax planning'
    },
    keyTakeaways: [
      "Tax-loss harvesting can offset capital gains dollar-for-dollar",
      "Up to $3,000 in losses can offset ordinary income annually",
      "Wash sale rule: Cannot repurchase substantially identical securities within 30 days",
      "Automated harvesting through robo-advisors can add 0.5-1% annual after-tax returns",
      "Losses carry forward indefinitely if not fully used"
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is Tax-Loss Harvesting?',
        content: `
          <p>Tax-loss harvesting is a strategy where you sell investments that have declined in value to realize a loss for tax purposes. This loss can then offset capital gains from other investments, reducing your overall tax liability.</p>
          <p>The strategy works because the IRS allows you to use investment losses to offset gains. If your losses exceed your gains, you can deduct up to $3,000 against ordinary income. Any remaining losses carry forward to future years indefinitely.</p>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h4 class="font-bold text-blue-900 mb-2">Example: How It Works</h4>
            <p class="text-blue-800">You have $10,000 in long-term capital gains from selling Stock A. You also hold Stock B, which is down $8,000. By selling Stock B, you reduce your taxable gain to just $2,000, saving up to $1,200 in taxes (at 15% LTCG rate).</p>
          </div>
        `
      },
      {
        type: 'text',
        title: 'The Wash Sale Rule',
        content: `
          <p>The IRS has a critical rule you must follow: the <strong>wash sale rule</strong>. You cannot claim a loss if you purchase a "substantially identical" security within 30 days before or after the sale. This creates a 61-day window to avoid.</p>
          <h4 class="text-xl font-bold mt-6 mb-3">What Triggers a Wash Sale?</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Buying the same stock within 30 days</li>
            <li>Buying an option on the same stock</li>
            <li>Spouse buying the same security</li>
            <li>Your IRA buying the same security</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">What Does NOT Trigger a Wash Sale?</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Buying a similar but not identical ETF (e.g., sell VTI, buy ITOT)</li>
            <li>Buying stock in a similar company in the same sector</li>
            <li>Waiting 31+ days to repurchase</li>
          </ul>
        `
      },
      {
        type: 'table',
        title: 'Tax-Loss Harvesting Impact by Tax Bracket',
        tableData: {
          headers: ['Tax Situation', 'Loss Harvested', 'Tax Savings', 'Effective Benefit'],
          rows: [
            ['Long-term gains (15% bracket)', '$10,000', '$1,500', '15% of loss'],
            ['Long-term gains (20% bracket + NIIT)', '$10,000', '$2,380', '23.8% of loss'],
            ['Ordinary income offset ($3k limit)', '$3,000', '$740-$1,110', '24-37% of loss'],
            ['High earner in CA or NYC', '$10,000', '$3,500+', '35%+ of loss']
          ]
        }
      },
      {
        type: 'steps',
        title: 'How to Implement Tax-Loss Harvesting',
        items: [
          'Review your portfolio for positions showing losses',
          'Identify similar (not identical) replacement securities',
          'Sell the losing position before year-end',
          'Immediately purchase the replacement security to maintain market exposure',
          'Wait 31+ days if you want to repurchase the original security',
          'Document everything for your tax records'
        ]
      }
    ],
    faqs: [
      { question: 'When is the best time to harvest losses?', answer: 'While year-end is common, the best time is whenever you have significant gains to offset or positions down more than 10%. Many advisors review quarterly. Market downturns are prime harvesting opportunities.' },
      { question: 'Can I harvest losses in my 401(k) or IRA?', answer: 'No. Tax-loss harvesting only works in taxable brokerage accounts. Retirement accounts are already tax-advantaged, so losses there have no immediate tax benefit.' },
      { question: 'Should I harvest losses even if I expect the stock to recover?', answer: 'Often yes. You can immediately reinvest in a similar security to maintain market exposure. You capture the tax benefit while staying invested. Just avoid the wash sale rule.' }
    ],
    bottomLine: "Tax-loss harvesting is one of the few 'free lunches' in investing. Done correctly, it reduces taxes without changing your investment strategy. High earners in states like California or New York can save thousands annually through systematic harvesting."
  },
  {
    id: 'tax-2',
    title: 'Roth Conversion Strategies: When and How to Convert for Maximum Benefit',
    slug: 'roth-conversion-strategies',
    hubId: 'tax-planning',
    type: 'spoke',
    excerpt: 'A complete guide to Roth IRA conversions including optimal timing, tax bracket management, and multi-year conversion strategies for retirement planning.',
    readTime: '14 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Robert Kim',
      role: 'Tax Strategy Director',
      credentials: 'CPA, CFP',
      experience: '20+ years in tax planning'
    },
    keyTakeaways: [
      "Roth conversions trade taxes today for tax-free growth and withdrawals later",
      "Best done during low-income years: job loss, early retirement, sabbatical",
      "Fill up lower tax brackets each year for multi-year conversion strategies",
      "Consider state taxes: converting before moving to a high-tax state costs more",
      "Medicare IRMAA surcharges can be triggered by large conversions"
    ],
    sections: [
      {
        type: 'text',
        title: 'Understanding Roth Conversions',
        content: `
          <p>A Roth conversion moves money from a Traditional IRA or 401(k) to a Roth IRA. You pay income taxes on the converted amount now, but all future growth and withdrawals are tax-free. This is a powerful strategy when executed at the right time.</p>
          <p><strong>The Core Trade-Off:</strong> Pay taxes at today's known rate vs. pay taxes at an unknown future rate. If you expect higher taxes later (due to income growth, tax law changes, or RMDs forcing withdrawals), converting now makes sense.</p>
        `
      },
      {
        type: 'text',
        title: 'When Roth Conversions Make Sense',
        content: `
          <h4 class="text-xl font-bold mt-4 mb-3">Ideal Conversion Windows:</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Early retirement (before Social Security):</strong> Income is low, fill up 12% or 22% bracket</li>
            <li><strong>Job loss or sabbatical:</strong> Temporarily low income year</li>
            <li><strong>Market downturn:</strong> Convert when account values are depressed—more shares, less tax</li>
            <li><strong>Before RMDs begin:</strong> Ages 60-72 are prime conversion years</li>
            <li><strong>Before moving to high-tax state:</strong> Convert while in FL/TX, not after moving to CA/NY</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">When to Avoid Converting:</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Peak earning years (highest tax bracket)</li>
            <li>When you need the money within 5 years (5-year rule)</li>
            <li>If conversion triggers Medicare IRMAA surcharges</li>
            <li>If you expect significantly lower taxes in retirement</li>
          </ul>
        `
      },
      {
        type: 'scenario',
        scenarioData: {
          title: 'Multi-Year Conversion Strategy',
          description: 'Sarah, 62, retires with $1.2M in her 401(k). Her pension and Social Security won\'t start until 67. She has 5 years of low income.',
          analysis: 'Sarah converts $80,000/year for 5 years, staying in the 22% bracket. She pays ~$88,000 total in taxes but converts $400,000 to Roth. At 7% growth over 20 years, that $400,000 becomes $1.5M+ in tax-free money. If she had left it in Traditional and withdrawn at 24% in retirement, she would have paid $360,000+ in taxes.'
        }
      },
      {
        type: 'table',
        title: '2024 Tax Brackets for Conversion Planning',
        tableData: {
          headers: ['Tax Rate', 'Single Filer', 'Married Filing Jointly', 'Conversion Target'],
          rows: [
            ['10%', '$0 - $11,600', '$0 - $23,200', 'Fill first if possible'],
            ['12%', '$11,601 - $47,150', '$23,201 - $94,300', 'Great bracket to fill'],
            ['22%', '$47,151 - $100,525', '$94,301 - $201,050', 'Still attractive'],
            ['24%', '$100,526 - $191,950', '$201,051 - $383,900', 'Consider carefully'],
            ['32%+', 'Above', 'Above', 'Usually avoid']
          ]
        }
      }
    ],
    faqs: [
      { question: 'Can I undo a Roth conversion?', answer: 'No. Since 2018, Roth conversions are irrevocable. You cannot recharacterize a conversion back to Traditional. This makes timing and amount decisions more critical.' },
      { question: 'What is the 5-year rule for conversions?', answer: 'Converted amounts must stay in the Roth for 5 years before penalty-free withdrawal (if under 59.5). Each conversion has its own 5-year clock. This matters most for early retirees accessing funds before 59.5.' },
      { question: 'Should I convert all at once or spread it out?', answer: 'Usually spread it out. Large one-time conversions push you into higher tax brackets. A multi-year "bracket-filling" strategy typically results in lower total taxes paid.' }
    ],
    bottomLine: "Roth conversions are one of the most powerful tax planning tools available, but timing is everything. The optimal strategy often involves converting steadily during the 'gap years' between retirement and Social Security/RMDs, when your tax bracket is temporarily lower."
  },
  {
    id: 'tax-3',
    title: 'Charitable Giving Strategies: Maximize Tax Benefits While Giving Back',
    slug: 'charitable-giving-tax-strategies',
    hubId: 'tax-planning',
    type: 'spoke',
    excerpt: 'Smart charitable giving strategies including donor-advised funds, qualified charitable distributions, and donating appreciated stock to maximize both impact and tax benefits.',
    readTime: '11 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Robert Kim',
      role: 'Tax Strategy Director',
      credentials: 'CPA, CFP',
      experience: '20+ years in tax planning'
    },
    keyTakeaways: [
      "Donating appreciated stock avoids capital gains tax entirely",
      "Donor-advised funds allow bunching multiple years of donations",
      "QCDs from IRAs count toward RMDs without increasing taxable income",
      "Bunching donations can help itemize in one year, standard deduction in others",
      "The standard deduction is now so high that strategic timing matters more than ever"
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Charitable Tax Planning Matters More Now',
        content: `
          <p>The 2017 Tax Cuts and Jobs Act nearly doubled the standard deduction, meaning fewer people itemize. In 2024, the standard deduction is $14,600 for singles and $29,200 for married couples. Unless your itemized deductions exceed these amounts, your charitable donations provide no tax benefit.</p>
          <p>This makes strategic timing and vehicle selection critical for maximizing the tax benefit of your giving.</p>
        `
      },
      {
        type: 'text',
        title: 'Strategy 1: Donate Appreciated Stock',
        content: `
          <p>Instead of writing a check, donate stock that has increased in value. You get a deduction for the full market value AND avoid paying capital gains tax on the appreciation. This is essentially a double tax benefit.</p>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h4 class="font-bold text-blue-900 mb-2">Example: Cash vs. Stock Donation</h4>
            <p class="text-blue-800"><strong>Cash:</strong> Donate $10,000 cash. Deduction: $10,000.</p>
            <p class="text-blue-800 mt-2"><strong>Stock:</strong> Donate $10,000 of stock you bought for $3,000. Deduction: $10,000. Capital gains avoided: $7,000 × 23.8% = $1,666 saved. Total benefit: $11,666 equivalent.</p>
          </div>
          <p><strong>Key requirement:</strong> You must have held the stock for more than one year to deduct the full fair market value.</p>
        `
      },
      {
        type: 'text',
        title: 'Strategy 2: Donor-Advised Funds (DAFs)',
        content: `
          <p>A DAF is like a charitable checking account. You contribute cash or securities, get an immediate tax deduction, then recommend grants to charities over time. Key benefits:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Bunching:</strong> Contribute 3-5 years of donations at once to exceed itemization threshold</li>
            <li><strong>Timing flexibility:</strong> Donate when it benefits you, grant when charities need it</li>
            <li><strong>Simplified giving:</strong> One receipt for taxes, unlimited grants</li>
            <li><strong>Investment growth:</strong> Funds grow tax-free while waiting to be granted</li>
          </ul>
          <p>Popular DAF providers include Fidelity Charitable, Schwab Charitable, and Vanguard Charitable, with minimums as low as $0-$5,000.</p>
        `
      },
      {
        type: 'text',
        title: 'Strategy 3: Qualified Charitable Distributions (QCDs)',
        content: `
          <p>If you're 70½ or older, you can donate up to $105,000 directly from your IRA to charity. This counts toward your Required Minimum Distribution but does NOT increase your adjusted gross income. Benefits include:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Satisfies RMD requirement</li>
            <li>Reduces AGI (impacts Medicare premiums, Social Security taxation)</li>
            <li>Works even if you take the standard deduction</li>
            <li>Prevents pushing into higher tax brackets</li>
          </ul>
          <p><strong>Important:</strong> The distribution must go directly from IRA to charity. If it touches your bank account first, it doesn't qualify.</p>
        `
      }
    ],
    faqs: [
      { question: 'What is bunching and how does it work?', answer: 'Bunching means contributing multiple years of charitable donations in a single year to exceed the standard deduction threshold. For example, instead of giving $10k/year, you give $50k every 5 years via a DAF. You itemize in the contribution year and take the standard deduction in between.' },
      { question: 'Can I donate cryptocurrency?', answer: 'Yes, and it is highly tax-advantaged. Like appreciated stock, you avoid capital gains tax on the appreciation. Many DAFs now accept crypto directly. Given crypto volatility and potential for large gains, this can be an excellent giving strategy.' },
      { question: 'Is there a limit on how much I can deduct?', answer: 'Cash donations are limited to 60% of AGI, appreciated property to 30% of AGI. Excess carries forward 5 years. For very large gifts, these limits require multi-year planning.' }
    ],
    bottomLine: "Charitable giving and tax planning should work together. By donating appreciated assets, using DAFs for bunching, and leveraging QCDs after 70½, you can often give more to causes you care about while paying less in taxes."
  }
];
