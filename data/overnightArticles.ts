import { Article } from '../types';

const AUTHOR = { name: 'Wealth Authority Team', role: 'Editorial Staff' };
const REVIEWER = {
  name: 'Wealth Authority Review Board',
  role: 'Editorial Standards & Fact-Checking',
  credentials: 'CFP®-led review',
};

export const OVERNIGHT_ARTICLES: Article[] = [
  {
    id: 'spoke-retirement-013',
    title: 'Sequence of Returns Risk: Why Early Retirement Losses Hurt More',
    slug: 'sequence-of-returns-risk',
    hubId: 'retirement-planning',
    type: 'spoke',
    excerpt: 'Sequence of returns risk is the danger that poor market returns early in retirement drain a portfolio faster than the same returns later. Here is how it works and how to reduce it.',
    readTime: '9 min read',
    publishDate: '2026-11-07',
    lastUpdated: '2026-11-07',
    author: AUTHOR,
    reviewer: REVIEWER,
    primaryKeyword: 'sequence of returns risk',
    metaDescription: 'Sequence of returns risk explained: why losses in the first years of retirement can exhaust a portfolio, and practical ways to lower that risk.',
    keyTakeaways: [
      'The order of returns matters once you start withdrawals, even if the average return is the same',
      'The highest risk window is the five years before retirement and the first five to ten years after',
      'A fixed withdrawal taken from a falling portfolio sells more shares and leaves less to recover',
      'Cash reserves, flexible spending, and a lower withdrawal rate reduce the damage',
      'Sequence risk fades after the early retirement years if the plan survives the first bad market',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Sequence of Returns Risk Is',
        content: `
          <p>While you are saving, the order of market returns barely matters. A 20% drop followed by a 25% gain ends at the same place as the reverse, if you add no money and take none out. Retirement changes that math. You are selling shares to pay bills. Sell them after a drop, and you sell more shares to raise the same cash. Those shares are gone when the market recovers.</p>
          <p>That is sequence of returns risk. It is not a forecast that markets will fall. It is the risk that a bad stretch hits while withdrawals are large relative to the portfolio.</p>
          <p>The danger is highest around the retirement date. Losses five years before you retire can shrink the balance you start with. Losses in the first five to ten years after you retire force you to sell at low prices. Later losses hurt less, because the portfolio has had time to grow and withdrawals are a smaller share of a larger balance.</p>
        `,
      },
      {
        type: 'text',
        title: 'A Hypothetical Example',
        content: `
          <p>This example is hypothetical. It is not a historical market path and not a prediction.</p>
          <p>Two retirees each start with $1,000,000 and withdraw $40,000 at the start of each year. Over five years they earn the same set of returns: −15%, −10%, +8%, +12%, and +18%. Only the order changes.</p>
          <div class="overflow-x-auto my-6">
          <table class="min-w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
          <tr>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">Year</th>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">Early losses</th>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">Early gains</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">1</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">−15%</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+18%</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">2</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">−10%</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+12%</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">3</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+8%</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+8%</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">4</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+12%</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">−10%</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">5</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">+18%</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">−15%</td>
          </tr>
          </tbody>
          </table>
          </div>
          <p>After the first withdrawal and the first loss, the early-loss portfolio is about $816,000. The early-gain portfolio is about $1,132,800. The same later returns cannot close that gap, because the early-loss retiree keeps withdrawing from a smaller base. Average return was identical. Ending wealth is not.</p>
          <p>This is why a retirement plan that "averages 7%" can still fail. The average hides the order.</p>
        `,
      },
      {
        type: 'text',
        title: 'How to Lower the Risk',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Keep a cash reserve</h3>
          <p>Hold one to three years of planned withdrawals in cash or short-term bonds. In a down year, spend the reserve instead of selling stocks. Refill it after recoveries. The reserve does not remove market risk. It stops you from selling the most shares at the worst time.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Make withdrawals flexible</h3>
          <p>A fixed dollar withdrawal is the fragile design. A plan that trims spending after a bad year, or skips an inflation raise, gives the portfolio room to recover. Even a 10% spending cut in a down year can extend the life of the plan.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Do not retire on a peak withdrawal rate</h3>
          <p>The often-cited 4% starting withdrawal is a research result about historical U.S. portfolios, not a promise. If stocks are expensive or you retire into a decline, a lower starting rate leaves a margin. See our guide on <a class="text-emerald-700 underline" href="/article/how-much-need-to-retire">how much you need to retire</a> and <a class="text-emerald-700 underline" href="/article/retirement-income-strategies">retirement income strategies</a>.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Separate near-term spending from long-term growth</h3>
          <p>A simple bucket split works: cash for the next one to two years, bonds for the next three to seven, and stocks for money you will not spend for a decade. You refill the cash bucket from bonds or from stocks only after gains. You do not have to sell stocks to buy groceries in a crash.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Use guaranteed income for the floor</h3>
          <p>Social Security, a pension, or a carefully chosen annuity can cover essential bills. The portfolio then funds extras. If essentials are covered, you can pause portfolio withdrawals in a bad year. That is the practical cure for sequence risk.</p>
        `,
      },
      {
        type: 'list',
        title: 'A Simple Check Before You Retire',
        items: [
          'Write the first-year withdrawal as a percent of the portfolio. Above 4% needs a reason.',
          'Identify which account pays the first two years of bills if stocks fall 20%.',
          'Decide in advance which expenses you will cut if the portfolio drops.',
          'Map Social Security and any pension against essential spending.',
          'Revisit the plan after the first bad year. Do not wait for a full recovery to adjust.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is sequence of returns risk the same as market risk?',
        answer: 'No. Market risk is the chance that investments fall. Sequence risk is the chance that those falls happen while you are withdrawing. Two retirees can face the same market risk and very different outcomes if the bad years hit at different times.',
      },
      {
        question: 'Does sequence risk matter while I am still working?',
        answer: 'It matters less, because new contributions buy more shares when prices fall. It starts to matter in the last working years, when the portfolio is large and new savings are small relative to a market drop.',
      },
      {
        question: 'Can I eliminate sequence of returns risk?',
        answer: 'You can reduce it. A cash reserve, a flexible withdrawal, and guaranteed income for essential bills are the main tools. You cannot remove the chance of a bad market. You can avoid being forced to sell stocks to pay bills during one.',
      },
    ],
    bottomLine: 'Sequence of returns risk is the reason two retirees with the same average return can end in different places. Protect the first years of withdrawals with cash, flexible spending, and income that does not depend on selling stocks. The goal is to survive the early bad market so later recoveries still belong to you.',
  },
  {
    id: 'spoke-retirement-014',
    title: 'Medicare IRMAA 2026: Income Brackets and How to Avoid the Surcharge',
    slug: 'medicare-irmaa-2026',
    hubId: 'retirement-planning',
    type: 'spoke',
    excerpt: 'IRMAA adds a surcharge to Medicare Part B and Part D when income is above set thresholds. Here are the 2026 brackets from CMS and the planning moves that can keep you under the next tier.',
    readTime: '10 min read',
    publishDate: '2026-11-07',
    lastUpdated: '2026-11-07',
    author: AUTHOR,
    reviewer: REVIEWER,
    primaryKeyword: 'Medicare IRMAA 2026',
    metaDescription: '2026 Medicare IRMAA brackets for Part B and Part D, how the two-year income lookback works, and ways to avoid a surcharge you do not need to pay.',
    keyTakeaways: [
      '2026 IRMAA uses 2024 modified adjusted gross income, not this year\'s income',
      'The standard 2026 Part B premium is $202.90 if income stays at or under the first threshold',
      'Crossing a bracket raises both the Part B premium and a Part D surcharge',
      'A Roth conversion, a home sale, or a large RMD can push you into a higher tier two years later',
      'SSA Form SSA-44 can request a new determination after certain life-changing events',
    ],
    sections: [
      {
        type: 'text',
        title: 'What IRMAA Is',
        content: `
          <p>IRMAA is the income-related monthly adjustment amount. It is an extra charge on Medicare Part B, and a separate extra charge on Medicare Part D, for people with higher income. It is not a penalty for late enrollment. It is a means test.</p>
          <p>Social Security sets the charge from your tax return. For 2026 premiums, the lookback is your 2024 return. A large income event in 2024 can raise Medicare costs in 2026 even if your income has since fallen.</p>
          <p>The income measure is modified adjusted gross income for Medicare: adjusted gross income plus tax-exempt interest. Confirm the figure SSA used if a bill looks wrong. The brackets below are from the Centers for Medicare &amp; Medicaid Services fact sheet on 2026 Part B premiums and deductibles. They can be restated. Check <a class="text-emerald-700 underline" href="https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles">the CMS 2026 fact sheet</a> before you rely on a dollar amount.</p>
        `,
      },
      {
        type: 'text',
        title: '2026 Part B Premiums by Income',
        content: `
          <p>The standard full Part B premium for 2026 is $202.90 per person per month when income is at or below the first line. Higher lines include the IRMAA surcharge.</p>
          <div class="overflow-x-auto my-6">
          <table class="min-w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
          <tr>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">2024 income, single</th>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">2024 income, joint</th>
          <th class="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">2026 Part B premium</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$109,000 or less</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$218,000 or less</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$202.90</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $109,000 to $137,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $218,000 to $274,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$284.10</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $137,000 to $171,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $274,000 to $342,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$405.80</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $171,000 to $205,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $342,000 to $410,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$527.50</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $205,000 and under $500,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">Above $410,000 and under $750,000</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$649.20</td>
          </tr>
          <tr>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$500,000 or above</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$750,000 or above</td>
          <td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">$689.90</td>
          </tr>
          </tbody>
          </table>
          </div>
          <p>Married people who file separately and lived with their spouse at any time during the year face a steeper table. At or under $109,000, the premium is $202.90. Above $109,000 and under $391,000, it is $649.20. At $391,000 or above, it is $689.90.</p>
          <p>These amounts are per person. A couple on Medicare can each owe a surcharge.</p>
        `,
      },
      {
        type: 'text',
        title: '2026 Part D Surcharge',
        content: `
          <p>Part D IRMAA is added to your drug-plan premium. It is not the plan premium itself. CMS lists these 2026 monthly add-ons for single and joint filers:</p>
          <ul class="list-disc pl-6 space-y-2 my-4">
          <li>$109,000 or less single / $218,000 or less joint: $0</li>
          <li>Next bracket, up to $137,000 / $274,000: $14.50</li>
          <li>Up to $171,000 / $342,000: $37.50</li>
          <li>Up to $205,000 / $410,000: $60.40</li>
          <li>Under $500,000 / under $750,000: $83.30</li>
          <li>$500,000 / $750,000 or above: $91.00</li>
          </ul>
          <p>For married filing separately, the Part D add-on is $0 at or under $109,000, $83.30 above that and under $391,000, and $91.00 at $391,000 or above.</p>
        `,
      },
      {
        type: 'text',
        title: 'How to Stay Out of the Next Bracket',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Know the cliff</h3>
          <p>IRMAA is a cliff, not a gradual phase-in. One dollar over a line can raise the premium for the whole year. If a Roth conversion or a mutual-fund distribution would put 2024-style income $1,000 over a line, the Medicare cost two years later can exceed the tax benefit of that last $1,000.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Time Roth conversions</h3>
          <p>Conversions raise adjusted gross income in the year you convert. That can be a good tax move in a low-income year and a bad Medicare move if it crosses an IRMAA line. Model the conversion against the bracket, not only against the tax bracket. Our <a class="text-emerald-700 underline" href="/article/roth-vs-traditional">Roth vs traditional</a> guide covers the tax side. Add the IRMAA line before you convert a large amount.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Watch required distributions</h3>
          <p>Required minimum distributions from traditional IRAs and 401(k)s count as income. A distribution you do not spend still counts. Qualified charitable distributions, when you are eligible, can satisfy part of the RMD without adding to adjusted gross income. See <a class="text-emerald-700 underline" href="/article/required-minimum-distributions">required minimum distributions</a>.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Use the appeal after a life change</h3>
          <p>If income fell because of a life-changing event, you can ask Social Security to use a more recent year. The request is Form SSA-44. SSA's list includes marriage, divorce, death of a spouse, work stoppage, work reduction, loss of income-producing property, loss of pension income, and an employer settlement payment. A one-time capital gain is not on that list. Do not assume a home sale qualifies. Read the form instructions before you file.</p>
          <p>More Medicare timing sits in our <a class="text-emerald-700 underline" href="/article/medicare-planning">Medicare planning guide</a>.</p>
        `,
      },
    ],
    faqs: [
      {
        question: 'Which tax year sets my 2026 IRMAA?',
        answer: 'Your 2024 tax return. Social Security uses a two-year lookback. Income you earn in 2026 affects premiums in 2028, not the 2026 bill.',
      },
      {
        question: 'Does a Roth conversion count toward IRMAA?',
        answer: 'Yes. The taxable amount of a Roth conversion is included in adjusted gross income for that year. It can raise IRMAA two years later even though the Roth itself is tax-free after that.',
      },
      {
        question: 'Can I appeal IRMAA if my income dropped?',
        answer: 'You can request a new determination with Form SSA-44 if you had a qualifying life-changing event and your income is now lower. A voluntary drop in income, or a one-time gain that simply is not repeating, may not qualify. Confirm the current event list with Social Security.',
      },
    ],
    bottomLine: 'IRMAA is a two-year echo of income. The 2026 standard Part B premium is $202.90, and the first surcharge starts just above $109,000 of 2024 income for a single filer, or $218,000 for a joint filer. Plan Roth conversions, home sales, and required distributions against those lines. If a listed life event cut your income, file Form SSA-44 instead of paying a surcharge based on a year that no longer describes you.',
  },
];
