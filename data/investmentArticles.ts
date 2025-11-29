
import { Article } from '../types';

export const INVESTMENT_ARTICLES: Article[] = [
  {
    id: 'inv-1',
    title: 'Asset Allocation Guide: How to Build a Diversified Portfolio',
    slug: 'asset-allocation-guide',
    hubId: 'investment',
    type: 'spoke',
    excerpt: 'Learn how to determine the right mix of stocks, bonds, and other assets based on your age, risk tolerance, and financial goals.',
    readTime: '14 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Dr. James Richardson',
      role: 'Investment Research Director',
      credentials: 'PhD Economics, CFA',
      experience: '25+ years in investment research'
    },
    keyTakeaways: [
      "Asset allocation determines 90%+ of portfolio returns over time",
      "Your allocation should reflect your time horizon, risk tolerance, and goals",
      "Common rule: subtract your age from 110-120 to get stock percentage",
      "Diversify across AND within asset classes for maximum benefit",
      "Rebalance when allocations drift more than 5% from targets"
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Asset Allocation Matters Most',
        content: `
          <p>Research shows that asset allocation—how you divide your portfolio among stocks, bonds, and other assets—explains over 90% of portfolio return variability over time. Individual security selection and market timing contribute far less than most investors believe.</p>
          <p>This means the most important investment decision you'll make is not which stocks to pick, but how much to allocate to each asset class.</p>
        `
      },
      {
        type: 'text',
        title: 'Understanding Major Asset Classes',
        content: `
          <h4 class="text-xl font-bold mt-4 mb-3">Stocks (Equities)</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Role:</strong> Growth engine of your portfolio</li>
            <li><strong>Historical return:</strong> ~10% annually (7% after inflation)</li>
            <li><strong>Risk:</strong> Can drop 30-50% in bear markets</li>
            <li><strong>Best for:</strong> Long-term goals (10+ years away)</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">Bonds (Fixed Income)</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Role:</strong> Stability and income</li>
            <li><strong>Historical return:</strong> ~5% annually (2-3% after inflation)</li>
            <li><strong>Risk:</strong> Lower volatility but can decline with rising rates</li>
            <li><strong>Best for:</strong> Near-term needs and reducing portfolio volatility</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">Other Asset Classes</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Real Estate (REITs):</strong> Income and inflation hedge</li>
            <li><strong>International Stocks:</strong> Diversification and growth opportunities</li>
            <li><strong>Commodities:</strong> Inflation protection (gold, etc.)</li>
            <li><strong>Cash:</strong> Safety and liquidity for near-term needs</li>
          </ul>
        `
      },
      {
        type: 'table',
        title: 'Sample Allocations by Age and Risk Tolerance',
        tableData: {
          headers: ['Investor Profile', 'Stocks', 'Bonds', 'Other', 'Best For'],
          rows: [
            ['Aggressive (20s-30s)', '90%', '5%', '5%', 'Long horizon, high risk tolerance'],
            ['Growth (30s-40s)', '80%', '15%', '5%', 'Building wealth, decades to retirement'],
            ['Moderate (40s-50s)', '65%', '30%', '5%', 'Balanced growth and protection'],
            ['Conservative (50s-60s)', '50%', '45%', '5%', 'Approaching retirement'],
            ['Income (60s+)', '35%', '55%', '10%', 'Preservation and income focus']
          ]
        }
      },
      {
        type: 'text',
        title: 'Diversification Within Asset Classes',
        content: `
          <p>Diversification means not putting all your eggs in one basket. But you need to diversify at multiple levels:</p>
          <h4 class="text-xl font-bold mt-6 mb-3">Stock Diversification</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>By size:</strong> Large-cap, mid-cap, small-cap</li>
            <li><strong>By style:</strong> Growth vs. value</li>
            <li><strong>By geography:</strong> U.S., international developed, emerging markets</li>
            <li><strong>By sector:</strong> Technology, healthcare, financial, consumer, etc.</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">Bond Diversification</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>By duration:</strong> Short, intermediate, long-term</li>
            <li><strong>By issuer:</strong> Government, corporate, municipal</li>
            <li><strong>By credit quality:</strong> Investment grade vs. high yield</li>
          </ul>
        `
      },
      {
        type: 'text',
        title: 'Rebalancing: Maintaining Your Target',
        content: `
          <p>Over time, different assets perform differently, causing your allocation to drift. If stocks surge, you might end up at 80% stocks when you targeted 70%. Rebalancing means selling some winners and buying underperformers to return to your target.</p>
          <p><strong>Why rebalance?</strong></p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Maintains your intended risk level</li>
            <li>Forces "buy low, sell high" discipline</li>
            <li>Removes emotion from the process</li>
          </ul>
          <p><strong>When to rebalance:</strong> Either on a schedule (annually) or when allocations drift more than 5% from targets (threshold-based). Some advisors use both.</p>
        `
      }
    ],
    faqs: [
      { question: 'Should I change my allocation as I age?', answer: 'Yes. As you approach retirement, gradually shift from stocks to bonds to reduce sequence-of-returns risk. However, do not become too conservative—you may need growth for a 30-year retirement. A common approach is reducing stock allocation by 1% per year after age 50.' },
      { question: 'What about target-date funds?', answer: 'Target-date funds automatically adjust allocation as you approach retirement. They are an excellent "set it and forget it" option for most investors. Choose a fund with a target date near your expected retirement year.' },
      { question: 'How do I determine my risk tolerance?', answer: 'Consider: How would you react if your portfolio dropped 30%? Would you panic sell or stay the course? Your actual behavior matters more than hypothetical answers. Also consider your financial situation—those with stable income and long time horizons can take more risk.' }
    ],
    bottomLine: "Asset allocation is the foundation of successful investing. Get this right—based on your time horizon, risk tolerance, and goals—and the rest is details. A simple, diversified portfolio with appropriate allocation will outperform most active strategies over time."
  },
  {
    id: 'inv-2',
    title: 'Index Funds vs Active Funds: Why Most Investors Should Index',
    slug: 'index-funds-vs-active-funds',
    hubId: 'investment',
    type: 'spoke',
    excerpt: 'The data is clear: low-cost index funds outperform most actively managed funds over time. Learn why, and when active management might make sense.',
    readTime: '12 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Dr. James Richardson',
      role: 'Investment Research Director',
      credentials: 'PhD Economics, CFA',
      experience: '25+ years in investment research'
    },
    keyTakeaways: [
      "Over 15+ years, 80-90% of active funds underperform their benchmark index",
      "The primary advantage of index funds is lower costs (0.03% vs 1%+)",
      "Lower costs compound into massive differences over decades",
      "Past performance does NOT predict future performance for active funds",
      "Index funds provide instant diversification and tax efficiency"
    ],
    sections: [
      {
        type: 'text',
        title: 'The Overwhelming Evidence',
        content: `
          <p>Every year, S&P Dow Jones Indices publishes the SPIVA (S&P Indices Versus Active) scorecard. The results are consistent and damning for active management:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Over 5 years:</strong> 78% of U.S. large-cap funds underperform the S&P 500</li>
            <li><strong>Over 10 years:</strong> 85% underperform</li>
            <li><strong>Over 15 years:</strong> 92% underperform</li>
          </ul>
          <p>The longer the time period, the worse active managers look. And this doesn't even account for survivorship bias—funds that performed terribly were closed or merged, so they're not counted.</p>
        `
      },
      {
        type: 'text',
        title: 'Why Index Funds Win: The Math of Costs',
        content: `
          <p>The primary reason index funds outperform is simple: costs. Consider two funds with identical pre-cost returns of 8%:</p>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h4 class="font-bold text-blue-900 mb-2">$100,000 Over 30 Years</h4>
            <p class="text-blue-800"><strong>Index Fund (0.03% cost):</strong> $100,000 → $994,000</p>
            <p class="text-blue-800 mt-2"><strong>Active Fund (1.00% cost):</strong> $100,000 → $761,000</p>
            <p class="text-blue-800 mt-2"><strong>Difference:</strong> $233,000 lost to fees</p>
          </div>
          <p>That 0.97% annual difference compounds into a 31% smaller portfolio over 30 years. This is money that goes to fund managers instead of your retirement.</p>
        `
      },
      {
        type: 'table',
        title: 'Cost Comparison: Index vs Active Funds',
        tableData: {
          headers: ['Fund Type', 'Typical Expense Ratio', 'Cost on $500k Portfolio', 'Features'],
          rows: [
            ['Total Market Index (VTI/FSKAX)', '0.03%', '$150/year', 'Entire U.S. market'],
            ['S&P 500 Index (VOO/FXAIX)', '0.03%', '$150/year', '500 largest U.S. companies'],
            ['Average Active U.S. Stock Fund', '0.70%', '$3,500/year', 'Manager selection'],
            ['Average Active Bond Fund', '0.50%', '$2,500/year', 'Manager selection'],
            ['Some Active Funds', '1.00-1.50%', '$5,000-$7,500/year', 'High-fee strategies']
          ]
        }
      },
      {
        type: 'text',
        title: 'The Persistence Problem',
        content: `
          <p>Can you just pick the good active managers? Unfortunately, no. Research consistently shows that past performance does not predict future results for active funds:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Of funds in the top 25% over 5 years, fewer than 10% repeat in the next 5 years</li>
            <li>Top-performing funds often attract massive inflows, making it harder to outperform</li>
            <li>Manager turnover means the person who created the track record may not be there</li>
          </ul>
          <p><strong>Warren Buffett's bet:</strong> In 2007, Buffett bet $1 million that an S&P 500 index fund would beat a selection of hedge funds over 10 years. He won handily. The index returned 7.1% annually; the hedge funds returned 2.2%.</p>
        `
      },
      {
        type: 'text',
        title: 'When Active Might Make Sense',
        content: `
          <p>Despite the evidence, there are narrow situations where active management may add value:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Tax-loss harvesting:</strong> Some active strategies systematically harvest losses</li>
            <li><strong>Municipal bonds:</strong> Active managers may add value in this less efficient market</li>
            <li><strong>Emerging markets:</strong> Less efficient markets may reward active research</li>
            <li><strong>Very wealthy investors:</strong> Access to top-tier hedge funds (not available to most)</li>
          </ul>
          <p>For the vast majority of investors in U.S. and international developed market stocks, index funds are the optimal choice.</p>
        `
      }
    ],
    faqs: [
      { question: 'Are index funds completely passive?', answer: 'They track an index, but some decisions are still made—like how to handle stocks entering/leaving the index, how to reinvest dividends, and whether to engage in securities lending. These small decisions can create minor tracking differences.' },
      { question: 'What if everyone indexes?', answer: 'This is a theoretical concern but not yet a practical one. Active managers still dominate trading volume and set prices. Studies suggest indexing would need to reach very high levels before markets became "inefficient" enough for active managers to reliably win.' },
      { question: 'Which index fund provider is best?', answer: 'Vanguard, Fidelity, and Schwab all offer excellent, nearly identical index funds at similar low costs. Choose based on where you have accounts, customer service preferences, or minor features. The differences are minimal.' }
    ],
    bottomLine: "The data is overwhelming: for the vast majority of investors, low-cost index funds are the optimal choice. They offer instant diversification, lower taxes, lower costs, and—over time—better returns than most active alternatives. Keep it simple and keep costs low."
  },
  {
    id: 'inv-3',
    title: 'Behavioral Investing: Avoiding the Emotional Mistakes That Cost You Money',
    slug: 'behavioral-investing-guide',
    hubId: 'investment',
    type: 'spoke',
    excerpt: 'The biggest threat to your investment returns is your own psychology. Learn about common behavioral biases and how to overcome them.',
    readTime: '13 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Dr. James Richardson',
      role: 'Investment Research Director',
      credentials: 'PhD Economics, CFA',
      experience: '25+ years in investment research'
    },
    keyTakeaways: [
      "The 'behavior gap' costs average investors 1-2% annually in returns",
      "Loss aversion makes losses feel 2x more painful than equivalent gains feel good",
      "Most investors buy high (euphoria) and sell low (panic)—the opposite of rational",
      "Recency bias causes overweighting recent performance vs. long-term trends",
      "Automation and written investment policies help remove emotion"
    ],
    sections: [
      {
        type: 'text',
        title: 'The Behavior Gap: Your Biggest Investment Enemy',
        content: `
          <p>Research from Dalbar and others consistently shows that the average investor significantly underperforms the very funds they invest in. How? They buy and sell at the wrong times.</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Over 30 years, the S&P 500 returned ~10% annually</li>
            <li>The average equity fund investor earned only ~6-7%</li>
            <li>The difference: buying after gains, selling after losses</li>
          </ul>
          <p>This 3-4% annual "behavior gap" compounds into enormous differences. Over 30 years, that gap means having half as much money at retirement.</p>
        `
      },
      {
        type: 'mistake',
        mistakes: [
          { mistake: 'Loss Aversion (Selling in Panic)', explanation: 'Losses feel roughly twice as painful as equivalent gains feel good. This causes investors to sell during downturns to "stop the pain"—locking in losses and missing the recovery.' },
          { mistake: 'Recency Bias (Chasing Performance)', explanation: 'We overweight recent information. After a bull market, investors pour money in expecting more gains. After a crash, they flee expecting more losses. Both are usually wrong.' },
          { mistake: 'Overconfidence (Excessive Trading)', explanation: 'Most investors believe they can beat the market or time it correctly. Studies show active traders underperform buy-and-hold investors by 2-5% annually.' },
          { mistake: 'Herd Mentality (Following the Crowd)', explanation: 'When everyone is buying crypto or meme stocks, FOMO kicks in. When everyone is selling, panic spreads. The crowd is usually wrong at extremes.' }
        ]
      },
      {
        type: 'text',
        title: 'The Emotional Cycle of Investing',
        content: `
          <p>Markets move in cycles, and so do investor emotions:</p>
          <ol class="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Optimism:</strong> Market starts rising, investors feel good</li>
            <li><strong>Excitement:</strong> Gains continue, "this time is different"</li>
            <li><strong>Euphoria:</strong> Everyone is making money, maximum investment at peak</li>
            <li><strong>Anxiety:</strong> Market drops, "just a correction"</li>
            <li><strong>Denial:</strong> Bigger drops, "it'll come back"</li>
            <li><strong>Fear:</strong> Significant losses, considering selling</li>
            <li><strong>Panic:</strong> Sell everything at or near the bottom</li>
            <li><strong>Depression:</strong> Stay out while recovery begins</li>
            <li><strong>Hope:</strong> Slowly re-enter after missing major gains</li>
          </ol>
          <p>The rational investor does the opposite: buys during fear and panic, holds through euphoria. But this requires fighting every instinct.</p>
        `
      },
      {
        type: 'steps',
        title: 'Strategies to Beat Your Own Psychology',
        items: [
          'Write an Investment Policy Statement defining your strategy—refer to it during volatility',
          'Automate investments through payroll deductions or auto-transfers (removes decision)',
          'Turn off financial news during market volatility—it is designed to trigger emotions',
          'Review portfolio only quarterly, not daily—less information means fewer opportunities for bad decisions',
          'Use target-date funds that automatically rebalance—no decisions required',
          'If you must trade, wait 24-48 hours before executing—emotion fades, reason returns',
          'Work with an advisor who can talk you off the ledge during panics'
        ]
      }
    ],
    faqs: [
      { question: 'Is it ever right to sell during a crash?', answer: 'If your circumstances have changed (lost job, need the money), or you truly cannot sleep at night, selling some may be appropriate. But selling purely because the market is down is almost always a mistake. Ask: "If I did not own this, would I buy it today at this price?" If yes, hold.' },
      { question: 'How do I know if I am being emotional?', answer: 'Warning signs: checking your portfolio multiple times a day, losing sleep over investments, making decisions based on recent news, feeling urgency to act immediately. These are emotion flags. Step back and revisit your written investment plan.' },
      { question: 'Does a financial advisor help with behavior?', answer: 'Yes—this is often their greatest value. Vanguard research suggests advisor "behavioral coaching" adds about 1.5% annually in investor returns by preventing panic selling and maintaining discipline. This alone often justifies advisory fees.' }
    ],
    bottomLine: "Your brain is not wired for investing. Evolution made us fear loss, follow the herd, and overweight recent experiences—all terrible for long-term wealth building. The solution is systems: automation, written plans, and reducing exposure to market noise. The best investment is the one you can stick with."
  }
];
