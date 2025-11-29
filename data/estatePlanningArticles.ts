import { Article } from '../types';

export const ESTATE_PLANNING_ARTICLES: Article[] = [
  {
    id: 'spoke-estate-007',
    title: 'Beneficiary Designations: The Often-Overlooked Estate Planning Essential',
    slug: 'beneficiary-designations',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to beneficiary designations on retirement accounts, life insurance, and financial accounts. Avoid common mistakes that can derail your estate plan.',
    readTime: '9 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'beneficiary designations',
    metaDescription: 'Complete guide to beneficiary designations on retirement accounts, life insurance, and financial accounts. Avoid common mistakes that can derail your estate plan.',
    keyTakeaways: [
      'Beneficiary designations override your will—they control who receives assets',
      'Not updating after life changes (marriage, divorce, death) is the most common mistake',
      'Naming your estate as beneficiary creates tax and probate problems',
      'Both primary and contingent beneficiaries should be named',
      'Review all designations annually and after any major life event',
    ],
    sections: [
      {
        type: 'text',
        title: 'How Beneficiary Designations Work',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Assets Use Beneficiary Designations</h3>
          
          <strong>Retirement accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>401(k), 403(b), 457 plans</li>
          <li>Traditional and Roth IRAs</li>
          <li>Pension plans</li>
          <li>SEP and SIMPLE IRAs</li>
          </ul>
          <strong>Insurance products:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Life insurance</li>
          <li>Annuities</li>
          </ul>
          <strong>Other accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Payable on Death (POD) bank accounts</li>
          <li>Transfer on Death (TOD) brokerage accounts</li>
          <li>Health Savings Accounts (HSAs)</li>
          <li>529 education accounts</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Why They Override Your Will</h3>
          
          <strong>Contractual obligation:</strong>
          Beneficiary designations are contracts between you and the financial institution. The institution is obligated to pay the named beneficiary, regardless of what your will says.
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Will says: "Everything to my current spouse"</li>
          <li>401(k) beneficiary: Ex-spouse from 1995</li>
          <li>Result: Ex-spouse receives 401(k)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How They Work at Death</h3>
          
          <strong>Process:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Institution notified of death</li>
          <li>Death certificate provided</li>
          <li>Beneficiary identified from designation form</li>
          <li>Assets transferred to beneficiary</li>
          <li>No probate required</li>
          </ol>
          <strong>Speed:</strong> Often completed in weeks, versus months/years for probate.
        `
      },
      {
        type: 'text',
        title: 'Types of Beneficiaries',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Primary Beneficiaries</h3>
          
          <strong>Definition:</strong> First in line to receive assets.
          
          <strong>Can name:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Individuals (most common)</li>
          <li>Multiple individuals (with percentages)</li>
          <li>Trusts</li>
          <li>Charities</li>
          <li>Your estate (not recommended)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Contingent (Secondary) Beneficiaries</h3>
          
          <strong>Definition:</strong> Receive assets if primary beneficiary predeceases you or disclaims.
          
          <strong>Why essential:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Avoids default to estate</li>
          <li>Provides for unexpected situations</li>
          <li>Continues your intentions if primary dies</li>
          </ul>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Primary: Spouse (100%)</li>
          <li>Contingent: Children equally, or their descendants per stirpes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Per Stirpes vs. Per Capita</h3>
          
          <strong>Per stirpes:</strong>
          If beneficiary predeceases, their share goes to their descendants.
          
          <strong>Example:</strong> You name your 3 children equally, per stirpes. One child dies leaving 2 grandchildren. Those 2 grandchildren split their parent's 1/3 share.
          
          <strong>Per capita:</strong>
          Shares divided equally among living beneficiaries only.
          
          <strong>Example:</strong> Same situation, but each of your 2 surviving children gets 1/2 (grandchildren get nothing).
          
          <strong>Recommendation:</strong> Per stirpes is typically preferred to keep inheritance in the family line.
        `
      },
      {
        type: 'text',
        title: 'Common Beneficiary Designation Mistakes',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 1: Not Updating After Life Changes</h3>
          
          <strong>Problem situations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Divorce (ex-spouse still named)</li>
          <li>Remarriage (new spouse not added)</li>
          <li>Death of beneficiary (no contingent)</li>
          <li>Birth of children (not included)</li>
          </ul>
          <strong>Example:</strong>
          John divorces Mary and remarries Susan. He updates his will to leave everything to Susan but forgets to change his 401(k) beneficiary. At John's death, Mary receives the 401(k)—potentially $500,000+—despite the will.
          
          <strong>Prevention:</strong> Review designations annually and after any major life event.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 2: Naming Your Estate</h3>
          
          <strong>Problems with "estate" as beneficiary:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Requires probate</li>
          <li>Subject to estate creditors</li>
          <li>For IRAs: Loses stretch distribution</li>
          <li>For IRAs: May require faster distribution</li>
          <li>No protection from beneficiary's creditors</li>
          </ul>
          <strong>When it might be intentional:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No surviving family</li>
          <li>Want probate court oversight</li>
          <li>Specific estate planning reasons</li>
          </ul>
          <strong>Usually better:</strong> Name individuals or a properly drafted trust.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 3: No Contingent Beneficiary</h3>
          
          <strong>Problem:</strong>
          If primary beneficiary predeceases and no contingent named, assets may go to estate.
          
          <strong>Example:</strong>
          You name spouse as 100% beneficiary with no contingent. You both die in accident. Your assets go to your estate, through probate, with no stretch for heirs.
          
          <strong>Prevention:</strong> Always name contingent beneficiaries.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 4: Naming Minor Children Directly</h3>
          
          <strong>Problems:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Minors cannot legally receive assets</li>
          <li>Court must appoint guardian of property</li>
          <li>Funds controlled until age 18</li>
          <li>Child receives full amount at 18</li>
          </ul>
          <strong>Better options:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Name trust for children's benefit</li>
          <li>Use UTMA/UGMA custodian</li>
          <li>Name adult to hold in trust under will</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 5: Forgetting About Old Accounts</h3>
          
          <strong>Problem:</strong>
          Old 401(k) at former employer, forgotten IRA—still have old beneficiaries.
          
          <strong>Prevention:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Consolidate old accounts</li>
          <li>Keep master list of all accounts</li>
          <li>Review annually</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 6: Using Outdated Forms</h3>
          
          <strong>Problem:</strong>
          Some designations made decades ago may not reflect current options (per stirpes, percentages, etc.).
          
          <strong>Prevention:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Request current beneficiary form</li>
          <li>Update to take advantage of options</li>
          <li>Verify updates were processed</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Retirement Account Beneficiary Rules',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Spouse Beneficiaries</h3>
          
          <strong>Special treatment:</strong>
          Surviving spouse has unique options:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Roll over to own IRA</li>
          <li>Remain as beneficiary</li>
          <li>Take distributions over life expectancy</li>
          </ul>
          <strong>Spousal rollover:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Treat inherited IRA as your own</li>
          <li>Continue tax-deferred growth</li>
          <li>RMDs based on your own age</li>
          <li>Name your own beneficiaries</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Non-Spouse Beneficiaries</h3>
          
          <strong>SECURE Act rules (2020+):</strong>
          Most non-spouse beneficiaries must empty inherited IRA within 10 years.
          
          <strong>10-year rule applies to:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Adult children</li>
          <li>Siblings</li>
          <li>Other non-spouse individuals</li>
          </ul>
          <strong>Exceptions (Eligible Designated Beneficiaries):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Surviving spouse</li>
          <li>Minor children (until majority, then 10-year)</li>
          <li>Disabled individuals</li>
          <li>Chronically ill individuals</li>
          <li>Beneficiaries less than 10 years younger than deceased</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Trusts as Beneficiaries</h3>
          
          <strong>When it makes sense:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Minor beneficiaries</li>
          <li>Special needs beneficiary</li>
          <li>Creditor protection needed</li>
          <li>Want to control distributions</li>
          <li>Blended family situations</li>
          </ul>
          <strong>Types of trusts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>See-through (conduit or accumulation)</li>
          <li>Standalone trust</li>
          </ul>
          <strong>Caution:</strong>
          Improperly drafted trust can cause accelerated taxation. Work with qualified attorney.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Charitable Beneficiaries</h3>
          
          <strong>Tax benefit:</strong>
          No income tax on amounts passing to charity from retirement account.
          
          <strong>Strategy:</strong>
          Leave retirement accounts to charity (taxable anyway); leave other assets to heirs (stepped-up basis).
        `
      },
      {
        type: 'text',
        title: 'Life Insurance Beneficiary Considerations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Primary Beneficiary Options</h3>
          
          <strong>Individual (most common):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Spouse, children, others</li>
          <li>Consider per stirpes for multiple children</li>
          </ul>
          <strong>Trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Control over proceeds</li>
          <li>Protection from beneficiary's creditors</li>
          <li>Useful for minor beneficiaries</li>
          </ul>
          <strong>ILIT (Irrevocable Life Insurance Trust):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Removes proceeds from estate</li>
          <li>Estate tax savings</li>
          <li>Asset protection</li>
          </ul>
          <strong>Charity:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Income tax deduction for estate</li>
          <li>Avoids estate tax</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Minors as Beneficiaries</h3>
          
          <strong>Direct to minor issues:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot receive directly</li>
          <li>Court-appointed guardian holds funds</li>
          <li>Released at age 18</li>
          </ul>
          <strong>Better approaches:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>UTMA custodian (released at 18-25 depending on state)</li>
          <li>Trust (you control release age)</li>
          <li>Trustee named under will</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Split Beneficiaries</h3>
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Primary: Spouse 100%</li>
          <li>Contingent: Children equally, per stirpes</li>
          </ul>
          <strong>Or:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Primary: Spouse 60%, Children 40%</li>
          <li>Be specific about percentages</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Bank and Investment Account Options',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Payable on Death (POD)</h3>
          
          <strong>For bank accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Name beneficiary on account</li>
          <li>Account passes outside probate</li>
          <li>Beneficiary has no access until death</li>
          </ul>
          <strong>How to set up:</strong>
          Complete POD form with bank.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Transfer on Death (TOD)</h3>
          
          <strong>For brokerage accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Similar to POD</li>
          <li>Securities transfer to named beneficiary</li>
          <li>Avoids probate</li>
          </ul>
          <strong>Registration:</strong>
          Account titled "Jane Doe, TOD John Doe"
          
          <h3 class="text-xl font-bold mt-8 mb-4">Joint Accounts</h3>
          
          <strong>Alternative to POD/TOD:</strong>
          Joint account passes to surviving owner.
          
          <strong>Considerations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Joint owner has access now</li>
          <li>Creditor issues</li>
          <li>Gift tax implications</li>
          </ul>
          <strong>POD/TOD often better:</strong> Maintains control during life.
        `
      },
      {
        type: 'text',
        title: 'Coordinating with Estate Plan',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Review All Documents Together</h3>
          
          <strong>Ensure consistency:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Beneficiary designations</li>
          <li>Will</li>
          <li>Trust</li>
          <li>Powers of attorney</li>
          </ul>
          <strong>Common conflicts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Will says one thing, beneficiary form says another</li>
          <li>Spouse in will, ex-spouse on form</li>
          <li>Trust created but not named as beneficiary</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Working with Professionals</h3>
          
          <strong>Estate planning attorney:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Draft trusts to receive retirement funds</li>
          <li>Coordinate beneficiary strategy</li>
          <li>Update after law changes</li>
          </ul>
          <strong>Financial advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Maintain beneficiary records</li>
          <li>Remind clients to review</li>
          <li>Help evaluate options</li>
          </ul>
          <strong>CPA:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Tax implications of beneficiary choices</li>
          <li>Planning for inherited accounts</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Documenting and Reviewing',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Keep Records</h3>
          
          <strong>Maintain:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Copies of all beneficiary designation forms</li>
          <li>List of all accounts with beneficiaries</li>
          <li>Dates of last review/update</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Annual Review Checklist</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>[ ] List all accounts with beneficiary designations</li>
          <li>[ ] Confirm primary and contingent beneficiaries for each</li>
          <li>[ ] Check that designations match current wishes</li>
          <li>[ ] Verify forms were processed (request confirmation)</li>
          <li>[ ] Update if any life changes occurred</li>
          <li>[ ] Coordinate with overall estate plan</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Life Events Triggering Review</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Marriage</li>
          <li>Divorce</li>
          <li>Birth/adoption of child</li>
          <li>Death of beneficiary</li>
          <li>Significant change in assets</li>
          <li>Move to new state</li>
          <li>Change in relationship with beneficiary</li>
          <li>Estate plan updates</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'Do beneficiary designations really override my will?',
        answer: 'Yes, absolutely. Beneficiary designations are contracts with financial institutions that operate outside of probate. Your will controls only probate assets—things in your name alone without a beneficiary designation. Review both, but know that the beneficiary form controls for those assets.'
      },
      {
        question: 'What happens if I don\'t name a beneficiary?',
        answer: 'The default typically goes to your estate, which means probate, potential creditor claims, and (for retirement accounts) potentially accelerated taxation. Some accounts have default beneficiary provisions (spouse, then children), but you shouldn\'t rely on these—name your own beneficiaries explicitly.'
      },
      {
        question: 'Can a beneficiary designation be contested?',
        answer: 'It\'s very difficult to contest. Unlike wills, where family can claim undue influence or lack of capacity, beneficiary designations are contracts with financial institutions. The institution pays the named beneficiary. Contests are rare and rarely successful.'
      },
      {
        question: 'Should I name my trust as beneficiary of my IRA?',
        answer: 'Sometimes, but proceed carefully. A properly drafted trust can work, but an improperly drafted trust may cause the entire IRA to be distributed within 5 years (pre-2020 deaths) or lose other favorable treatment. Only name a trust as IRA beneficiary with attorney guidance.'
      },
      {
        question: 'How do I change a beneficiary designation?',
        answer: 'Contact the financial institution (plan administrator for 401(k), insurance company for life insurance, etc.) and request a change of beneficiary form. Complete, sign, and return it. Request written confirmation that the change was processed.'
      },
    ],
    bottomLine: 'Beneficiary designations are simple forms with enormous consequences. They control who receives retirement accounts, life insurance, and other major assets—often the largest parts of an estate. They override your will. Yet many people complete them once and never look again, leading to assets going to ex-spouses, estates, or other unintended recipients. Review all beneficiary designations annually, update after any life change, always name contingent beneficiaries, and ensure they coordinate with your overall estate plan. A few minutes of review can prevent major problems for your family.'
  },
  {
    id: 'spoke-estate-011',
    title: 'Charitable Estate Planning: Strategies for Leaving a Lasting Legacy',
    slug: 'charitable-estate-planning',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to charitable estate planning including charitable trusts, private foundations, and strategies to benefit both charity and family.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'charitable estate planning',
    metaDescription: 'Complete guide to charitable estate planning including charitable trusts, private foundations, and strategies to benefit both charity and family.',
    keyTakeaways: [
      'Charitable bequests reduce your taxable estate dollar-for-dollar',
      'Charitable remainder trusts provide income to you and remainder to charity',
      'Charitable lead trusts pass assets to heirs with reduced gift/estate tax',
      'Private foundations offer maximum control but require ongoing administration',
      'Combining charitable and family planning can benefit both',
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Include Charity in Your Estate Plan',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Financial Benefits</h3>
          
          <strong>Estate tax reduction:</strong>
          Charitable bequests are fully deductible from your taxable estate.
          
          <strong>Income tax savings:</strong>
          Charitable trusts and current gifts provide income tax deductions.
          
          <strong>Avoid capital gains:</strong>
          Donating appreciated assets avoids capital gains tax.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Personal Benefits</h3>
          
          <strong>Support causes you care about:</strong>
          Create lasting impact after your lifetime.
          
          <strong>Involve family:</strong>
          Teach values, engage next generation in philanthropy.
          
          <strong>Leave a legacy:</strong>
          Named gifts, scholarships, and programs continue your name.
        `
      },
      {
        type: 'text',
        title: 'Simple Charitable Estate Planning',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Charitable Bequests</h3>
          
          <strong>What it is:</strong>
          Leave assets to charity through your will or trust.
          
          <strong>Types:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Specific bequest: "I leave $100,000 to [charity]"</li>
          <li>Percentage bequest: "I leave 10% of my estate to [charity]"</li>
          <li>Residuary bequest: "I leave the remainder to [charity]"</li>
          <li>Contingent bequest: "If [person] predeceases me, that share goes to [charity]"</li>
          </ul>
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Simple to implement</li>
          <li>Can change during lifetime</li>
          <li>Full estate tax deduction</li>
          </ul>
          <strong>Cautions:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No income tax deduction (you're not alive to claim it)</li>
          <li>Make sure charity still exists (or provide alternate)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Beneficiary Designations</h3>
          
          <strong>Leave retirement accounts to charity:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Name charity as beneficiary</li>
          <li>Avoids income tax on distributions</li>
          <li>Charity receives full amount</li>
          </ul>
          <strong>Why this is tax-efficient:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retirement accounts are taxable to individual heirs</li>
          <li>Charity pays no tax</li>
          <li>Other assets (with stepped-up basis) go to heirs</li>
          </ul>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Total estate: $2 million</li>
          <li>IRA: $500,000, Other assets: $1.5 million</li>
          <li>Leave IRA to charity (tax-free), assets to heirs (stepped-up basis)</li>
          <li>vs. splitting all assets: Heirs would pay income tax on IRA</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Charitable Gift Annuity</h3>
          
          <strong>What it is:</strong>
          Gift to charity in exchange for fixed payments for life.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>You transfer cash or property to charity</li>
          <li>Charity pays you fixed amount annually for life</li>
          <li>Remainder stays with charity</li>
          </ol>
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Immediate charitable deduction</li>
          <li>Guaranteed income for life</li>
          <li>Portion of payments may be tax-free</li>
          </ul>
          <strong>Considerations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Irrevocable</li>
          <li>Rate depends on age</li>
          <li>Unsecured by charity's assets</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Charitable Remainder Trust (CRT)',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What It Is</h3>
          
          <p>An irrevocable trust that provides:
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Income to you (or other non-charitable beneficiary) for life or term</li>
          <li>Remainder to charity</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3></p>
          
          <strong>Structure:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>You transfer assets to CRT</li>
          <li>CRT sells assets (no immediate capital gains)</li>
          <li>Trust invests proceeds</li>
          <li>You receive annual payments</li>
          <li>When trust ends, remainder goes to charity</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Types of CRTs</h3>
          
          <strong>Charitable Remainder Annuity Trust (CRAT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Fixed dollar payment each year</li>
          <li>Amount set at creation</li>
          <li>Doesn't change with trust value</li>
          <li>Cannot add assets later</li>
          </ul>
          <strong>Charitable Remainder Unitrust (CRUT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Fixed percentage of trust value annually</li>
          <li>Payments vary with trust performance</li>
          <li>Can add assets later</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">CRT Benefits</h3>
          
          <strong>Income tax deduction:</strong>
          Partial deduction when trust is funded.
          
          <strong>Avoid capital gains:</strong>
          Trust can sell appreciated assets without immediate tax.
          
          <strong>Income stream:</strong>
          Receive payments for life or term of years.
          
          <strong>Estate tax reduction:</strong>
          Value of charitable remainder not in estate.
          
          <h3 class="text-xl font-bold mt-8 mb-4">CRT Example</h3>
          
          <strong>Scenario:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You're 65, want income, have $1 million appreciated stock (basis $200,000)</li>
          <li>Sell yourself: $800,000 gain × 23.8% = $190,400 tax, $809,600 to invest</li>
          </ul>
          <strong>With CRT:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Transfer to 5% CRUT</li>
          <li>No immediate capital gains</li>
          <li>Full $1 million invested</li>
          <li>Income: $50,000/year initially</li>
          <li>Deduction: ~$350,000</li>
          <li>At death: Remainder to charity</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">CRT Requirements</h3>
          
          <strong>Minimum remainder:</strong>
          At least 10% must go to charity.
          
          <strong>Payout limits:</strong>
          At least 5%, no more than 50%.
          
          <strong>Term:</strong>
          Life of one or more individuals, or up to 20 years.
        `
      },
      {
        type: 'text',
        title: 'Charitable Lead Trust (CLT)',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What It Is</h3>
          
          <p>The opposite of CRT:
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Charity receives income for a term</li>
          <li>Remainder passes to heirs</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3></p>
          
          <strong>Structure:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>You transfer assets to CLT</li>
          <li>Charity receives annual payments for term</li>
          <li>When term ends, remainder goes to heirs (or back to you)</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Types of CLTs</h3>
          
          <strong>Charitable Lead Annuity Trust (CLAT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Fixed payments to charity</li>
          <li>Better when interest rates are low</li>
          <li>Assets above payment growth to heirs</li>
          </ul>
          <strong>Charitable Lead Unitrust (CLUT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Percentage of trust value to charity</li>
          <li>Payments vary with trust performance</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">CLT Benefits</h3>
          
          <strong>Transfer wealth at discount:</strong>
          Present value of charity's interest reduces gift tax value.
          
          <strong>Keep assets in family:</strong>
          Remainder goes to heirs.
          
          <strong>Zeroed-out CLAT:</strong>
          Structure so gift tax value is zero; all appreciation to heirs tax-free.
          
          <h3 class="text-xl font-bold mt-8 mb-4">CLT Example</h3>
          
          <strong>Scenario:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You want to leave $5 million to children with minimal gift tax</li>
          <li>Fund CLAT with $5 million</li>
          <li>Charity receives 5% for 20 years</li>
          <li>Present value of charity's interest: ~$4 million</li>
          <li>Gift tax value of remainder: ~$1 million</li>
          <li>If assets grow at 7%, heirs receive much more than $1 million</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">When CLTs Make Sense</h3>
          
          <strong>Best for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>High net worth families</li>
          <li>Those expecting assets to appreciate</li>
          <li>Families with charitable intent and wealth transfer goals</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Private Foundations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What It Is</h3>
          
          <p>A separate legal entity you create and fund for charitable purposes.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">Structure</h3>
          
          <strong>Types:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Private non-operating foundation (grants to other charities)</li>
          <li>Private operating foundation (runs own programs)</li>
          </ul>
          <strong>Governance:</strong>
          Board of directors (can include family members).
          
          <h3 class="text-xl font-bold mt-8 mb-4">Private Foundation Benefits</h3>
          
          <strong>Maximum control:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You decide grants</li>
          <li>Choose focus areas</li>
          <li>Set timeline</li>
          </ul>
          <strong>Family involvement:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Board positions for family</li>
          <li>Compensation for services</li>
          <li>Multi-generational philanthropy</li>
          </ul>
          <strong>Perpetual existence:</strong>
          Foundation can last forever.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Private Foundation Requirements</h3>
          
          <strong>Annual distribution:</strong>
          Must distribute 5% of assets annually for charitable purposes.
          
          <strong>Excise taxes:</strong>
          2% tax on investment income (reduced to 1.39% in some cases).
          
          <strong>Prohibited transactions:</strong>
          Self-dealing rules, jeopardizing investments, excess business holdings.
          
          <strong>Public disclosure:</strong>
          Form 990-PF is public.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Comparison: DAF vs. Private Foundation</h3>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Feature</th><th class="py-3 px-4 font-bold">Donor-Advised Fund</th><th class="py-3 px-4 font-bold">Private Foundation</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Minimum to start</td><td class="py-3 px-4">Low ($0-25K)</td><td class="py-3 px-4">High ($1M+)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Administrative burden</td><td class="py-3 px-4">None</td><td class="py-3 px-4">Significant</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Privacy</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No (990-PF public)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Annual payout required</td><td class="py-3 px-4">No</td><td class="py-3 px-4">Yes (5%)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Excise tax</td><td class="py-3 px-4">No</td><td class="py-3 px-4">Yes</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Family compensation</td><td class="py-3 px-4">No</td><td class="py-3 px-4">Yes (reasonable)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Investment control</td><td class="py-3 px-4">Limited</td><td class="py-3 px-4">Full</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">When to Choose Private Foundation</h3>
          
          <strong>Consider if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assets of $1 million+ for philanthropy</li>
          <li>Want maximum control</li>
          <li>Want family involvement with compensation</li>
          <li>Willing to manage administrative requirements</li>
          <li>Want perpetual family legacy</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Supporting Organizations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What They Are</h3>
          
          <p>Public charities that support other public charities.</p>
          
          <strong>Types:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Type I: Controlled by supported organization(s)</li>
          <li>Type II: Supervised by supported organization(s)</li>
          <li>Type III: Functionally integrated or non-functionally integrated</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Benefits Over Private Foundations</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Treated as public charity (no 5% distribution requirement)</li>
          <li>Higher deduction limits</li>
          <li>No excise tax on investment income</li>
          <li>Less restrictive self-dealing rules</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Cautions</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Less control than private foundation</li>
          <li>Must support existing public charity(ies)</li>
          <li>IRS scrutiny of Type III supporting organizations</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Combining Charitable and Family Planning',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 1: Wealth Replacement Trust</h3>
          
          <strong>The concern:</strong>
          If you leave significant assets to charity, less goes to family.
          
          <strong>Solution:</strong>
          Use tax savings from charitable gift to fund life insurance for heirs.
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Give $1 million to charity (40% estate tax savings = $400,000)</li>
          <li>Use savings to buy $1 million life insurance in ILIT</li>
          <li>Charity receives $1 million; family receives $1 million</li>
          <li>Net cost: $0 (approximately)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 2: Charitable Remainder Trust + ILIT</h3>
          
          <strong>Structure:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Fund CRT with appreciated assets</li>
          <li>Receive income from CRT</li>
          <li>Use portion of income to fund ILIT</li>
          <li>At death: Charity gets CRT remainder; family gets insurance proceeds</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 3: Charitable Lead Trust for Family Wealth Transfer</h3>
          
          <strong>Use CLT to:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Support charity during term</li>
          <li>Transfer appreciating assets to heirs</li>
          <li>Minimize gift/estate tax on transfer</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 4: Naming Family Foundation as Heir</h3>
          
          <strong>Structure:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Estate passes to private foundation</li>
          <li>Foundation benefits charity over time</li>
          <li>Family manages and receives compensation</li>
          </ul>
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Estate tax deduction</li>
          <li>Family maintains influence</li>
          <li>Charitable goals achieved over time</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Implementing Your Charitable Plan',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Define Your Goals</h3>
          
          <strong>Questions to answer:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>What causes do you want to support?</li>
          <li>Do you want to see impact during lifetime?</li>
          <li>How much family involvement do you want?</li>
          <li>What level of control is important?</li>
          <li>How much do you want to leave to family vs. charity?</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Choose the Right Vehicle</h3>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Goal</th><th class="py-3 px-4 font-bold">Best Vehicle</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Simple, one-time gift</td><td class="py-3 px-4">Charitable bequest</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Income now, charity later</td><td class="py-3 px-4">CRT</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Wealth transfer to heirs</td><td class="py-3 px-4">CLT</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Maximum control</td><td class="py-3 px-4">Private foundation</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Simplicity with tax benefits</td><td class="py-3 px-4">Donor-advised fund</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Support specific organization</td><td class="py-3 px-4">Supporting organization</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">Work with Professionals</h3>
          
          <strong>Estate planning attorney:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Draft trusts and documents</li>
          <li>Ensure compliance with requirements</li>
          <li>Coordinate with overall plan</li>
          </ul>
          <strong>CPA:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Calculate tax benefits</li>
          <li>File required returns</li>
          <li>Ongoing compliance</li>
          </ul>
          <strong>Financial advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Determine appropriate gift amounts</li>
          <li>Manage charitable trust investments</li>
          <li>Coordinate with overall planning</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'Should I give to charity now or at death?',
        answer: 'Both have benefits. Giving now provides income tax deductions and lets you see the impact. Giving at death provides estate tax deduction and lets you maintain assets during life. Many people do both—current giving through DAFs or annual gifts, plus bequests in their estate plan.'
      },
      {
        question: 'How much should I leave to charity?',
        answer: 'There\'s no right answer—it depends on your values, family needs, and financial situation. Consider: What do you want your legacy to be? What do family members need? Some leave a percentage (10-50% of estate); others leave specific amounts. Make sure family is adequately provided for first.'
      },
      {
        question: 'Can I change charitable bequests in my will?',
        answer: 'Yes, you can modify your will or trust anytime during your lifetime. This flexibility is one advantage of charitable bequests over irrevocable charitable trusts. However, if you\'ve made a formal pledge to a charity, that may be legally binding.'
      },
      {
        question: 'What happens if the charity no longer exists when I die?',
        answer: 'Your estate plan should include contingent beneficiaries. Language like "to [charity], or if it no longer exists, to a similar organization as selected by my executor" provides flexibility. Some name donor-advised funds as backup.'
      },
      {
        question: 'Is a charitable remainder trust worth the complexity?',
        answer: 'CRTs make sense when: you have highly appreciated assets, want income, want to benefit charity, and want to avoid capital gains. For smaller amounts or simpler situations, a donor-advised fund or charitable bequest may be sufficient. Calculate whether tax benefits and income justify setup and administration costs.'
      },
    ],
    bottomLine: 'Charitable estate planning allows you to create lasting impact while potentially providing significant benefits for yourself and your family. Simple tools like charitable bequests and beneficiary designations can be implemented easily. More sophisticated strategies like charitable remainder trusts, charitable lead trusts, and private foundations offer greater benefits but require professional guidance. The key is aligning your charitable goals with appropriate vehicles, ensuring family needs are met, and working with qualified professionals to implement your plan effectively.'
  },
  {
    id: 'spoke-estate-002',
    title: 'Estate Tax Planning: Federal Estate Tax Rules and Reduction Strategies',
    slug: 'estate-tax',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to estate tax planning including federal exemption amounts, state estate taxes, and strategies to minimize estate tax liability.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'estate tax planning',
    metaDescription: 'Complete guide to estate tax planning including federal exemption amounts, state estate taxes, and strategies to minimize estate tax liability.',
    keyTakeaways: [
      '2024 federal estate tax exemption: $13.61 million per person',
      'Exemption scheduled to drop to approximately $7 million in 2026',
      'Top federal estate tax rate: 40%',
      'Married couples can effectively exempt $27.22 million combined',
      'Many states have their own estate taxes with lower exemptions',
    ],
    sections: [
      {
        type: 'text',
        title: 'Understanding Estate Tax',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Is Estate Tax?</h3>
          
          <p>Estate tax is a tax on the transfer of wealth at death. It applies to the total value of everything you own (your "gross estate") minus deductions.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">How Estate Tax Works</h3>
          
          <strong>Calculation:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Determine gross estate (all assets at death)</li>
          <li>Subtract deductions (debts, expenses, charitable gifts, marital transfer)</li>
          <li>Apply lifetime exemption</li>
          <li>Calculate tax on any excess at 40%</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Who Pays Estate Tax?</h3>
          
          <strong>Very few estates:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Less than 0.2% of deaths result in estate tax</li>
          <li>Primarily affects wealthy individuals</li>
          <li>But state estate tax affects more people</li></ul>
        `
      },
      {
        type: 'text',
        title: '2024 Federal Estate Tax Exemption',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Current Exemption</h3>
          
          <strong>Individual:</strong> $13.61 million (2024)
          
          <strong>Married couple:</strong> $27.22 million combined (with portability)
          
          <h3 class="text-xl font-bold mt-8 mb-4">Inflation Adjustments</h3>
          
          <p>The exemption is indexed for inflation:</p>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Year</th><th class="py-3 px-4 font-bold">Individual Exemption</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">2020</td><td class="py-3 px-4">$11.58 million</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">2021</td><td class="py-3 px-4">$11.70 million</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">2022</td><td class="py-3 px-4">$12.06 million</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">2023</td><td class="py-3 px-4">$12.92 million</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">2024</td><td class="py-3 px-4">$13.61 million</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">The 2026 Sunset</h3>
          
          <strong>Critical planning consideration:</strong>
          The current high exemption expires December 31, 2025.
          
          <strong>After 2025:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Exemption reverts to approximately $7 million (inflation-adjusted)</li>
          <li>Nearly $7 million of current exemption disappears</li>
          <li>Estates above new threshold become taxable</li>
          </ul>
          <strong>Planning window:</strong>
          Use high exemption before it expires through lifetime gifts.
        `
      },
      {
        type: 'text',
        title: 'Calculating Your Estate Tax',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Gross Estate Components</h3>
          
          <strong>What's included:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Real estate (including your share of joint property)</li>
          <li>Bank and investment accounts</li>
          <li>Retirement accounts (IRAs, 401(k)s)</li>
          <li>Life insurance (if you own the policy)</li>
          <li>Business interests</li>
          <li>Personal property</li>
          <li>Gifts made within 3 years (for certain types)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Available Deductions</h3>
          
          <strong>Reduce taxable estate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Debts owed at death</li>
          <li>Funeral expenses</li>
          <li>Estate administration expenses</li>
          <li>Charitable bequests</li>
          <li>Marital deduction (unlimited for U.S. citizen spouse)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Example Calculation</h3>
          
          <strong>Single individual, 2024:</strong>
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Component</th><th class="py-3 px-4 font-bold">Amount</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Real estate</td><td class="py-3 px-4">$5,000,000</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Investments</td><td class="py-3 px-4">$8,000,000</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Retirement accounts</td><td class="py-3 px-4">$3,000,000</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Life insurance</td><td class="py-3 px-4">$2,000,000</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4"><strong>Gross estate</strong></td><td class="py-3 px-4"><strong>$18,000,000</strong></td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Less: Debts and expenses</td><td class="py-3 px-4">($200,000)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Less: Charitable bequest</td><td class="py-3 px-4">($500,000)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4"><strong>Taxable estate</strong></td><td class="py-3 px-4"><strong>$17,300,000</strong></td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Less: Exemption</td><td class="py-3 px-4">($13,610,000)</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4"><strong>Amount subject to tax</strong></td><td class="py-3 px-4"><strong>$3,690,000</strong></td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4"><strong>Estate tax (40%)</strong></td><td class="py-3 px-4"><strong>$1,476,000</strong></td></tr></tbody></table></div>
        `
      },
      {
        type: 'text',
        title: 'Portability: Married Couples',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Is Portability?</h3>
          
          <p>Surviving spouse can use deceased spouse's unused exemption (DSUE).</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3>
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>First spouse dies with $5 million estate</li>
          <li>Unused exemption: $13.61M - $5M = $8.61 million</li>
          <li>Survivor can use own $13.61M + $8.61M = $22.22 million</li>
          <li>Combined effective exemption: $22.22 million</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Electing Portability</h3>
          
          <strong>Required action:</strong>
          File estate tax return (Form 706) for first spouse's estate, even if no tax is due.
          
          <strong>Deadline:</strong> 9 months (or 15 months with extension)
          
          <strong>Common mistake:</strong> Not filing Form 706, losing portability
          
          <h3 class="text-xl font-bold mt-8 mb-4">Portability Limitations</h3>
          
          <strong>Only applies to:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Federal estate tax</li>
          <li>Most recent deceased spouse only</li>
          </ul>
          <strong>Does not apply to:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>State estate taxes (most states)</li>
          <li>Generation-skipping transfer tax</li></ul>
        `
      },
      {
        type: 'text',
        title: 'State Estate Taxes',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">States With Estate Tax</h3>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">State</th><th class="py-3 px-4 font-bold">Exemption (2024)</th><th class="py-3 px-4 font-bold">Top Rate</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Connecticut</td><td class="py-3 px-4">$13.61 million</td><td class="py-3 px-4">12%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Hawaii</td><td class="py-3 px-4">$5.49 million</td><td class="py-3 px-4">20%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Illinois</td><td class="py-3 px-4">$4 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Maine</td><td class="py-3 px-4">$6.8 million</td><td class="py-3 px-4">12%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Maryland</td><td class="py-3 px-4">$5 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Massachusetts</td><td class="py-3 px-4">$2 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Minnesota</td><td class="py-3 px-4">$3 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">New York</td><td class="py-3 px-4">$6.94 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Oregon</td><td class="py-3 px-4">$1 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Rhode Island</td><td class="py-3 px-4">$1.77 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Vermont</td><td class="py-3 px-4">$5 million</td><td class="py-3 px-4">16%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Washington</td><td class="py-3 px-4">$2.19 million</td><td class="py-3 px-4">20%</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">DC</td><td class="py-3 px-4">$4.71 million</td><td class="py-3 px-4">16%</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">States With Inheritance Tax</h3>
          
          <p>Tax paid by recipient, not estate:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Iowa (phasing out)</li>
          <li>Kentucky</li>
          <li>Maryland</li>
          <li>Nebraska</li>
          <li>New Jersey</li>
          <li>Pennsylvania</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">The "Cliff" Effect</h3></p>
          
          <strong>New York and some other states:</strong>
          If estate exceeds exemption by more than 5%, entire estate is taxable from first dollar.
          
          <strong>Example (NY):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Exemption: $6.94 million</li>
          <li>Estate: $7.35 million (106% of exemption)</li>
          <li>Tax applies from $0, not from $6.94 million</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Estate Tax Reduction Strategies',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 1: Lifetime Gifting</h3>
          
          <strong>Annual exclusion gifts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>$18,000 per recipient per year (2024)</li>
          <li>Unlimited number of recipients</li>
          <li>No gift tax, no use of exemption</li>
          <li>Removes assets and future growth from estate</li>
          </ul>
          <strong>Example:</strong>
          Married couple with 3 children and 6 grandchildren:
          $36,000 × 9 = $324,000/year removed from estate tax-free
          
          <strong>Gifts using lifetime exemption:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Can gift up to $13.61 million tax-free</li>
          <li>Reduces available estate tax exemption</li>
          <li>Best done before 2026 sunset</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 2: Irrevocable Life Insurance Trust (ILIT)</h3>
          
          <strong>Problem:</strong> Life insurance you own is in your estate.
          
          <strong>Solution:</strong> ILIT owns the policy, proceeds not in estate.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Create ILIT</li>
          <li>Transfer existing policy or buy new one in trust</li>
          <li>Make gifts to trust for premium payments</li>
          <li>Death benefit passes estate-tax-free</li>
          </ol>
          <strong>Requirements:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Must survive 3 years after transferring existing policy</li>
          <li>Cannot be trustee</li>
          <li>Cannot retain incidents of ownership</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 3: Family Limited Partnerships (FLPs)</h3>
          
          <strong>Purpose:</strong> Transfer business/investment assets at discounted values.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer assets to partnership</li>
          <li>Gift limited partnership interests to heirs</li>
          <li>Claim valuation discounts (lack of marketability, minority interest)</li>
          <li>Discounts reduce gift tax value</li>
          </ol>
          <strong>Typical discounts:</strong> 20-40% combined
          
          <strong>Caution:</strong> IRS scrutinizes; must have legitimate business purpose.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 4: Grantor Retained Annuity Trust (GRAT)</h3>
          
          <strong>Purpose:</strong> Transfer appreciation estate-tax-free.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer assets to irrevocable trust</li>
          <li>Receive annuity payments for term of years</li>
          <li>If assets outperform IRS rate, excess passes tax-free to heirs</li>
          <li>If you die during term, assets return to estate</li>
          </ol>
          <strong>Best for:</strong> Assets expected to appreciate significantly.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 5: Spousal Lifetime Access Trust (SLAT)</h3>
          
          <strong>Purpose:</strong> Remove assets from estate while retaining indirect access.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>One spouse creates irrevocable trust for benefit of other</li>
          <li>Gifted amount uses lifetime exemption</li>
          <li>Trust beneficiary (spouse) can receive distributions</li>
          <li>Assets not in either estate</li>
          </ol>
          <strong>Planning point:</strong> Use before 2026 sunset.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 6: Charitable Remainder Trust (CRT)</h3>
          
          <strong>Purpose:</strong> Generate income while reducing estate.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer appreciated assets to trust</li>
          <li>Receive income for life</li>
          <li>Remainder to charity</li>
          <li>Receive partial charitable deduction</li>
          </ol>
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Remove assets from estate</li>
          <li>Avoid capital gains on sale</li>
          <li>Generate income stream</li>
          <li>Charitable deduction</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 7: Qualified Personal Residence Trust (QPRT)</h3>
          
          <strong>Purpose:</strong> Transfer home at reduced value.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer home to irrevocable trust</li>
          <li>Retain right to live there for term of years</li>
          <li>Home passes to heirs after term</li>
          <li>Gift tax value is discounted for retained interest</li>
          </ol>
          <strong>Risk:</strong> If you die during term, home returns to estate.
        `
      },
      {
        type: 'text',
        title: 'The Step-Up in Basis',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3>
          
          <p>At death, assets receive new basis equal to fair market value:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Eliminates capital gains tax on lifetime appreciation</li>
          <li>Heirs sell immediately with no gain</li>
          <li>Powerful tax benefit</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Planning Implications</h3></p>
          
          <strong>Hold appreciated assets:</strong>
          If holding anyway, step-up eliminates capital gains at death.
          
          <strong>Don't gift appreciated assets:</strong>
          Gifts carry over donor's basis; better to pass at death for step-up.
          
          <strong>Exception for estate tax:</strong>
          If estate tax applies, weigh estate tax against step-up benefit.
        `
      },
      {
        type: 'text',
        title: 'Planning Before 2026',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Why Act Now</h3>
          
          <strong>Current exemption:</strong> $13.61 million
          <strong>Post-2025 exemption:</strong> ~$7 million (estimated)
          <strong>Potential loss:</strong> ~$6.5 million in exemption
          
          <strong>For couple:</strong> ~$13 million in exemption at risk
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategies to Lock In Exemption</h3>
          
          <strong>Make large gifts:</strong>
          Gift up to exemption now, before it drops.
          
          <strong>Create SLATs:</strong>
          Transfer wealth to trusts for spouse's benefit.
          
          <strong>Fund irrevocable trusts:</strong>
          GRATs, ILITs, dynasty trusts.
          
          <strong>IRS position:</strong>
          Gifts made under higher exemption won't be "clawed back" if exemption drops.
        `
      },
      {
        type: 'text',
        title: 'Working with Professionals',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Estate Planning Team</h3>
          
          <strong>Estate planning attorney:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Draft documents</li>
          <li>Structure planning</li>
          <li>Navigate state laws</li>
          </ul>
          <strong>CPA/Tax advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Tax calculations</li>
          <li>Return preparation</li>
          <li>Coordinate with attorney</li>
          </ul>
          <strong>Financial advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Asset analysis</li>
          <li>Insurance needs</li>
          <li>Investment management</li>
          </ul>
          <strong>Trust company (if applicable):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Corporate trustee services</li>
          <li>Administration</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">When to Engage</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Net worth approaching exemption levels</li>
          <li>Business succession planning</li>
          <li>Multi-state property ownership</li>
          <li>Charitable planning</li>
          <li>Complex family situations</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'Will my heirs pay income tax on inherited assets?',
        answer: 'Generally no. Inherited assets receive stepped-up basis, so heirs pay no income tax on appreciation that occurred during your lifetime. However, inherited retirement accounts (IRAs, 401(k)s) are subject to income tax when withdrawn.'
      },
      {
        question: 'Can I avoid estate tax by giving everything away before I die?',
        answer: 'Gifts use the same unified exemption as estate tax, so large gifts reduce your available estate exemption. However, gifts remove future appreciation from your estate. The 2026 exemption drop creates incentive to gift now.'
      },
      {
        question: 'Is life insurance subject to estate tax?',
        answer: 'Yes, if you own the policy or have any "incidents of ownership." To exclude life insurance from your estate, an irrevocable life insurance trust (ILIT) should own the policy. You must survive 3 years after transferring an existing policy to the trust.'
      },
      {
        question: 'Do I need to worry about estate tax if I\'m married?',
        answer: 'Unlimited assets can pass estate-tax-free to a U.S. citizen spouse. However, when the surviving spouse dies, the combined estate may face estate tax. Planning during the first spouse\'s lifetime (including portability election) is important.'
      },
      {
        question: 'What happens if estate tax exemption drops and I\'ve already used it?',
        answer: 'The IRS has confirmed that gifts made under the higher exemption will not be "clawed back" if the exemption later drops. This is why many advisors recommend using the high exemption now.'
      },
    ],
    bottomLine: 'Estate tax planning is essential for those with significant wealth, but the 2026 exemption sunset makes it time-sensitive for a broader group. With the exemption potentially dropping by half, individuals with estates above $7 million should consider using the current high exemption through lifetime gifts. Strategies like ILITs, GRATs, and SLATs can transfer significant wealth while the exemption is high. Even if federal estate tax doesn\'t apply, state estate taxes hit at much lower thresholds—sometimes $1 million. Work with qualified professionals to develop and implement a comprehensive estate tax plan.'
  },
  {
    id: 'spoke-estate-010',
    title: 'Generation-Skipping Transfer Tax: Protecting Wealth Across Generations',
    slug: 'generation-skipping-tax',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to generation-skipping transfer tax (GSTT) including how it works, exemption amounts, and planning strategies for multi-generational wealth.',
    readTime: '9 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'generation-skipping transfer tax',
    metaDescription: 'Complete guide to generation-skipping transfer tax (GSTT) including how it works, exemption amounts, and planning strategies for multi-generational wealth.',
    keyTakeaways: [
      'GSTT applies when assets transfer to someone two or more generations younger',
      'Current rate: 40% (on top of any gift or estate tax)',
      'Exemption: $13.61 million per person (2024)—same as estate tax',
      'Dynasty trusts can leverage GST exemption for multiple generations',
      '2026 sunset will reduce exemption to approximately $7 million',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is the Generation-Skipping Transfer Tax?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Purpose</h3>
          
          <p>Congress enacted GSTT to close a loophole:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Without GSTT: Transfer directly to grandchildren, skip one estate tax</li>
          <li>With GSTT: Tax applies to "skipped" transfers</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3></p>
          
          <strong>GSTT applies to:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Transfers to "skip persons"</li>
          <li>Skip person = someone 2+ generations below you</li>
          <li>Most commonly: grandchildren</li>
          </ul>
          <strong>Rate:</strong> Flat 40% (same as estate tax)
          
          <strong>Applies in addition to:</strong> Gift tax or estate tax
          
          <strong>Example without GSTT (old law):</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Grandparent leaves $10M to grandchild</li>
          <li>No estate tax at child's generation</li>
          <li>Eventually passes to great-grandchildren</li>
          <li>Skipped one layer of estate tax</li>
          </ol>
          <strong>With GSTT:</strong>
          The 40% GSTT ensures tax is paid at the skipped generation.
        `
      },
      {
        type: 'text',
        title: 'Who Is a Skip Person?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Related Individuals</h3>
          
          <strong>Skip persons include:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Grandchildren</li>
          <li>Great-grandchildren</li>
          <li>More remote descendants</li>
          <li>Unrelated persons 37.5+ years younger</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">The Predeceased Parent Exception</h3>
          
          <strong>Important exception:</strong>
          If your child has died, their children (your grandchildren) are NOT skip persons for transfers from you.
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Your son dies before you</li>
          <li>His children (your grandchildren) move up one generation</li>
          <li>Transfers to them are NOT subject to GSTT</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Trusts as Skip Persons</h3>
          
          <strong>A trust is a skip person if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>All beneficiaries are skip persons, OR</li>
          <li>No distributions can be made to non-skip persons</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Types of Generation-Skipping Transfers',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Direct Skip</h3>
          
          <strong>What it is:</strong>
          Transfer directly to a skip person.
          
          <strong>Examples:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Gift to grandchild</li>
          <li>Bequest to grandchild in will</li>
          <li>Naming grandchild as beneficiary</li>
          </ul>
          <strong>Who pays tax:</strong>
          Donor (for gifts) or estate (for bequests)
          
          <h3 class="text-xl font-bold mt-8 mb-4">Taxable Distribution</h3>
          
          <strong>What it is:</strong>
          Distribution from a trust to a skip person.
          
          <strong>When it occurs:</strong>
          Trust established for multiple generations makes distribution to grandchild.
          
          <strong>Who pays tax:</strong>
          The skip person receiving the distribution.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Taxable Termination</h3>
          
          <strong>What it is:</strong>
          When all interests in a trust become held by skip persons.
          
          <strong>When it occurs:</strong>
          Last non-skip beneficiary dies or interest terminates.
          
          <strong>Example:</strong>
          Trust for child (income) and grandchildren (remainder). When child dies, all interests are now with skip persons = taxable termination.
          
          <strong>Who pays tax:</strong>
          The trust.
        `
      },
      {
        type: 'text',
        title: 'The GST Exemption',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Current Amount</h3>
          
          <strong>2024:</strong> $13.61 million per person
          
          <strong>Same as estate tax exemption</strong> but tracked separately.
          
          <h3 class="text-xl font-bold mt-8 mb-4">How Exemption Is Used</h3>
          
          <strong>Allocation:</strong>
          You allocate GST exemption to transfers, protecting them from GSTT.
          
          <strong>Inclusion ratio:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>If exemption equals transfer value, inclusion ratio = 0</li>
          <li>Zero inclusion ratio = no GSTT ever</li>
          <li>Partial exemption = proportional tax</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Automatic Allocation</h3>
          
          <strong>The rules:</strong>
          GST exemption automatically allocates to:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Direct skips</li>
          <li>Transfers to GST trusts</li>
          </ul>
          <strong>Opt out:</strong>
          You can elect out of automatic allocation to preserve exemption for other uses.
          
          <strong>Caution:</strong>
          Automatic allocation can waste exemption on trusts that don't need it.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Exemption Planning</h3>
          
          <strong>Best use of exemption:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Allocate to assets expected to appreciate</li>
          <li>"Leverage" exemption growth</li>
          <li>Fund dynasty trusts with full exemption allocation</li>
          </ul>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Allocate $13.61M exemption to dynasty trust</li>
          <li>Trust grows to $50M over decades</li>
          <li>All $50M protected from GSTT in perpetuity</li></ul>
        `
      },
      {
        type: 'text',
        title: 'The 2026 Sunset',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Exemption at Risk</h3>
          
          <strong>Current:</strong> $13.61 million
          <strong>After 2025:</strong> ~$7 million (estimated)
          
          <strong>Impact:</strong>
          Less exemption available to protect multi-generational transfers.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Planning Window</h3>
          
          <strong>Act before 2026:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Make generation-skipping gifts now</li>
          <li>Fund dynasty trusts with high exemption</li>
          <li>Allocate exemption to existing trusts</li>
          </ul>
          <strong>IRS position:</strong>
          Gifts made under higher exemption won't be clawed back.
        `
      },
      {
        type: 'text',
        title: 'Dynasty Trusts',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Is a Dynasty Trust?</h3>
          
          <strong>Definition:</strong>
          Trust designed to last for multiple generations, potentially in perpetuity.
          
          <strong>Purpose:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Avoid estate tax at each generation</li>
          <li>Provide for descendants indefinitely</li>
          <li>Protect assets from creditors and divorce</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How Dynasty Trusts Work</h3>
          
          <strong>Structure:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Create irrevocable trust</li>
          <li>Allocate GST exemption to trust</li>
          <li>Trust provisions allow for multiple generations</li>
          <li>State law permits long duration</li>
          </ol>
          <strong>Tax treatment:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Exempt from GSTT (if fully allocated)</li>
          <li>Not in beneficiaries' estates</li>
          <li>Grows tax-free for generations</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Best States for Dynasty Trusts</h3>
          
          <strong>No rule against perpetuities:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>South Dakota</li>
          <li>Delaware</li>
          <li>Nevada</li>
          <li>Alaska</li>
          <li>Wyoming</li>
          </ul>
          <strong>Maximum duration in other states:</strong> Varies from 90 years to 1,000 years.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Dynasty Trust Benefits</h3>
          
          <strong>Estate tax avoidance:</strong>
          Assets never included in any beneficiary's estate.
          
          <strong>GSTT avoidance:</strong>
          Properly allocated exemption protects trust forever.
          
          <strong>Creditor protection:</strong>
          Trust assets protected from beneficiaries' creditors.
          
          <strong>Divorce protection:</strong>
          Not marital property in divorce.
          
          <strong>Control:</strong>
          Donor's wishes control for generations.
        `
      },
      {
        type: 'text',
        title: 'GST Planning Strategies',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 1: Allocate Exemption to Appreciating Assets</h3>
          
          <strong>The leverage effect:</strong>
          $13.61M exemption × asset growth = more protection.
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Fund trust with $13.61M (fully exempt)</li>
          <li>Assets appreciate to $100M over generations</li>
          <li>All $100M protected from GSTT</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 2: Use Annual Exclusion for Direct Skips</h3>
          
          <strong>Annual exclusion for GSTT:</strong>
          $18,000 per recipient for direct skips to grandchildren.
          
          <strong>Automatic exemption allocation:</strong>
          For gifts exceeding annual exclusion, exemption allocates automatically.
          
          <strong>Strategy:</strong>
          Make annual exclusion gifts to grandchildren's trusts with Crummey powers.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 3: Separate GST-Exempt and Non-Exempt Trusts</h3>
          
          <strong>Why separate:</strong>
          Different tax treatment allows optimized planning.
          
          <strong>GST-exempt trust:</strong>
          Hold assets expected to appreciate; distribute to grandchildren.
          
          <strong>Non-exempt trust:</strong>
          Hold assets that will be consumed by children's generation.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 4: 529 Plan Superfunding</h3>
          
          <strong>Five-year averaging:</strong>
          Contribute $90,000 ($180,000 married) in one year.
          
          <strong>GST benefit:</strong>
          No GSTT on 529 contributions within limits.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 5: Reverse QTIP Election</h3>
          
          <strong>What it is:</strong>
          Elect to treat QTIP trust assets as if deceased spouse made transfer for GST purposes.
          
          <strong>Why use:</strong>
          Allows use of deceased spouse's GST exemption (portability does NOT apply to GST exemption).
        `
      },
      {
        type: 'text',
        title: 'GST Tax Returns',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Form 706-GS(T) and 706-GS(D)</h3>
          
          <strong>When required:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Taxable terminations</li>
          <li>Taxable distributions</li>
          </ul>
          <strong>Who files:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trustee (for terminations)</li>
          <li>Skip person (for distributions)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Gift Tax Return (Form 709)</h3>
          
          <strong>Report on Form 709:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Direct skips</li>
          <li>GST exemption allocation</li>
          <li>Opt out of automatic allocation</li>
          </ul>
          <strong>Important:</strong>
          Always file Form 709 when making gifts to allocate exemption properly.
        `
      },
      {
        type: 'text',
        title: 'Common GSTT Mistakes',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 1: Not Allocating Exemption</h3>
          
          <strong>Problem:</strong>
          Exemption doesn't automatically allocate in all cases.
          
          <strong>Result:</strong>
          Transfers become taxable that should have been exempt.
          
          <strong>Solution:</strong>
          File gift tax returns and affirmatively allocate exemption.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 2: Wasting Exemption</h3>
          
          <strong>Problem:</strong>
          Automatic allocation uses exemption on trusts that don't need it.
          
          <strong>Solution:</strong>
          Elect out of automatic allocation when appropriate.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 3: Not Using Exemption Before Sunset</h3>
          
          <strong>Problem:</strong>
          Exemption drops in 2026; unused exemption is lost.
          
          <strong>Solution:</strong>
          Make generation-skipping transfers now while exemption is high.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 4: Ignoring State Dynasty Trust Laws</h3>
          
          <strong>Problem:</strong>
          Trust duration limited by state law.
          
          <strong>Solution:</strong>
          Establish dynasty trust in state with favorable laws.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 5: Forgetting Reverse QTIP</h3>
          
          <strong>Problem:</strong>
          Surviving spouse's GST exemption isn't portable.
          
          <strong>Solution:</strong>
          Consider reverse QTIP election for QTIP trusts.
        `
      },
      {
        type: 'text',
        title: 'Working with Professionals',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">When to Engage</h3>
          
          <strong>Consider GST planning if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Estate may exceed exemption</li>
          <li>Want to benefit grandchildren or beyond</li>
          <li>Planning multi-generational wealth transfer</li>
          <li>Have existing trusts without GST planning</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Professional Team</h3>
          
          <strong>Estate planning attorney:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Draft dynasty trusts</li>
          <li>Allocate GST exemption</li>
          <li>Navigate complex rules</li>
          </ul>
          <strong>CPA:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File GST returns</li>
          <li>Calculate tax</li>
          <li>Coordinate with estate planning</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'What\'s the difference between estate tax exemption and GST exemption?',
        answer: 'Both are $13.61 million (2024), but they\'re tracked separately. Estate tax exemption applies to all transfers at death; GST exemption specifically protects generation-skipping transfers. You could use all your estate exemption and still have full GST exemption (or vice versa).'
      },
      {
        question: 'Can I leave assets to my grandchildren without GSTT?',
        answer: 'Yes, if you allocate GST exemption to the transfer. Up to $13.61 million of generation-skipping transfers can be protected by your exemption. Additionally, annual exclusion gifts to grandchildren aren\'t subject to GSTT.'
      },
      {
        question: 'Is the GST exemption portable between spouses?',
        answer: 'No. Unlike estate tax exemption, GST exemption is NOT portable. Each spouse must use their own exemption. This makes planning more complex for married couples—consider reverse QTIP elections.'
      },
      {
        question: 'What if my child has died—do I still pay GSTT on gifts to grandchildren?',
        answer: 'No. The predeceased parent exception applies. If your child has died, their children (your grandchildren) are treated as if they\'re one generation below you, not two. Transfers to them are not generation-skipping.'
      },
      {
        question: 'How does a dynasty trust avoid GSTT?',
        answer: 'By allocating full GST exemption when the trust is funded, the trust has a zero "inclusion ratio." This means all trust assets—including appreciation over time—are forever exempt from GSTT, no matter how many generations benefit.'
      },
    ],
    bottomLine: 'The generation-skipping transfer tax is a critical consideration for families planning multi-generational wealth transfers. At 40%, GSTT can significantly impact what passes to grandchildren and beyond. The solution is strategic use of the $13.61 million GST exemption—particularly through dynasty trusts that can protect growing assets for many generations. With the exemption scheduled to drop in 2026, now is the time to act. Proper allocation of GST exemption, careful trust drafting in favorable states, and coordination with overall estate planning can preserve significantly more wealth for future generations.'
  },
  {
    id: 'spoke-estate-009',
    title: 'Gifting Strategies: Tax-Smart Ways to Transfer Wealth to Family',
    slug: 'gifting-strategies',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to gifting strategies including annual exclusion, lifetime exemption, and advanced techniques to transfer wealth while minimizing taxes.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'gifting strategies',
    metaDescription: 'Complete guide to gifting strategies including annual exclusion, lifetime exemption, and advanced techniques to transfer wealth while minimizing taxes.',
    keyTakeaways: [
      'Annual gift exclusion: $18,000 per recipient (2024)—unlimited number of recipients',
      'Lifetime gift exemption: $13.61 million (2024)—shared with estate tax exemption',
      'Gifts remove future appreciation from your estate',
      '2026 exemption sunset creates urgency for large gifts',
      'Various trusts and techniques can leverage gifting power',
    ],
    sections: [
      {
        type: 'text',
        title: 'Gift Tax Basics',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">How Gift Tax Works</h3>
          
          <strong>What is a gift:</strong>
          Any transfer where you receive less than full value in return.
          
          <strong>Gift tax system:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Annual exclusion: Tax-free gifts up to $18,000/recipient/year</li>
          <li>Lifetime exemption: $13.61 million beyond annual exclusion</li>
          <li>Gift tax rate: 40% on gifts exceeding exemption</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">The Annual Gift Exclusion</h3>
          
          <strong>2024 amount:</strong> $18,000 per recipient
          
          <strong>Key features:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No limit on number of recipients</li>
          <li>Resets each calendar year</li>
          <li>No gift tax return required</li>
          <li>Doesn't reduce lifetime exemption</li>
          </ul>
          <strong>Example:</strong>
          Married couple with 3 children and 6 grandchildren:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Each parent can give $18,000 per person</li>
          <li>$36,000 × 9 recipients = $324,000/year</li>
          <li>$0 gift tax, no exemption used</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">The Lifetime Gift Exemption</h3>
          
          <strong>2024 amount:</strong> $13.61 million
          
          <strong>Key features:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Unified with estate tax exemption</li>
          <li>Gifts above annual exclusion use lifetime exemption</li>
          <li>Gift tax return required to report</li>
          <li>Indexed for inflation</li>
          </ul>
          <strong>Example:</strong>
          You give your child $500,000:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>$18,000 = annual exclusion (no reporting)</li>
          <li>$482,000 = uses lifetime exemption</li>
          <li>Remaining exemption: $13.61M - $482K = $13.128M</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">The 2026 Sunset</h3>
          
          <strong>Critical planning consideration:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Current exemption: $13.61 million</li>
          <li>After 2025: Approximately $7 million (inflation-adjusted 2017 level)</li>
          <li>Potential loss: ~$6.5 million per person</li>
          </ul>
          <strong>IRS position:</strong> Gifts made under higher exemption will not be "clawed back."
          
          <strong>Planning window:</strong> Use the high exemption now.
        `
      },
      {
        type: 'text',
        title: 'Simple Gifting Strategies',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 1: Annual Exclusion Giving</h3>
          
          <strong>The basics:</strong>
          Give up to $18,000 per recipient each year.
          
          <strong>Maximize effectiveness:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Give to all family members</li>
          <li>Give to children's spouses</li>
          <li>Give to trusts for grandchildren</li>
          <li>Both spouses can give</li>
          </ul>
          <strong>Long-term impact:</strong>
          $324,000/year × 20 years = $6.48 million transferred tax-free
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 2: Gift Splitting</h3>
          
          <strong>What it is:</strong>
          Married couples can treat gifts as made 50/50, even if one spouse provides funds.
          
          <strong>How it works:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>One spouse makes $36,000 gift</li>
          <li>Both elect to split on gift tax return</li>
          <li>Each spouse uses $18,000 exclusion</li>
          <li>No lifetime exemption used</li>
          </ul>
          <strong>Requirements:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File gift tax return (Form 709)</li>
          <li>Both spouses consent</li>
          <li>Cannot split with gift to spouse</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 3: Direct Payment of Tuition and Medical</h3>
          
          <strong>Unlimited exclusion for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Tuition paid directly to educational institution</li>
          <li>Medical expenses paid directly to provider</li>
          </ul>
          <strong>Key rules:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Must be paid directly (not reimbursed)</li>
          <li>Tuition only—not room, board, books</li>
          <li>Medical only—not insurance premiums</li>
          </ul>
          <strong>Advantage:</strong>
          In addition to annual $18,000, not instead of.
          
          <strong>Example:</strong>
          You can give grandchild $18,000 AND pay $50,000 tuition directly—$68,000 total, no gift tax, no exemption used.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 4: 529 Plan Superfunding</h3>
          
          <strong>5-year gift tax averaging:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Contribute up to $90,000 at once ($180,000 for married couple)</li>
          <li>Treat as 5 years of annual exclusion gifts</li>
          <li>Jump-start college savings</li>
          </ul>
          <strong>Rules:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Must elect on gift tax return</li>
          <li>Can't make additional gifts during 5 years</li>
          <li>If donor dies during period, portion included in estate</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Advanced Gifting Strategies',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 5: Gifting Appreciating Assets</h3>
          
          <strong>The concept:</strong>
          Gift assets expected to appreciate significantly. All future appreciation is out of your estate.
          
          <strong>Best assets to gift:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Growth stocks</li>
          <li>Business interests expected to grow</li>
          <li>Real estate in appreciating market</li>
          </ul>
          <strong>Caution—basis consideration:</strong>
          Recipient receives your basis (carryover basis). Consider potential capital gains impact.
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Gift $1 million of stock today</li>
          <li>Stock grows to $5 million by your death</li>
          <li>$4 million appreciation is out of estate</li>
          <li>Estate tax savings (40%): $1.6 million</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 6: Family Limited Partnerships (FLP)</h3>
          
          <strong>The structure:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Create limited partnership</li>
          <li>Fund with assets (investments, real estate)</li>
          <li>Gift limited partnership interests to heirs</li>
          <li>Claim valuation discounts</li>
          </ol>
          <strong>Valuation discounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Lack of marketability discount (15-25%)</li>
          <li>Minority interest discount (15-25%)</li>
          <li>Combined: 25-40% discount</li>
          </ul>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>FLP holds $5 million in assets</li>
          <li>Your 40% limited interest value: $2 million (par)</li>
          <li>With 35% discount: $1.3 million gift value</li>
          <li>Transfer $2M in economic value using only $1.3M exemption</li>
          </ul>
          <strong>Caution:</strong>
          IRS scrutinizes FLPs. Must have legitimate business purpose beyond tax savings.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 7: Grantor Retained Annuity Trust (GRAT)</h3>
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer assets to irrevocable trust</li>
          <li>Retain annuity for term of years</li>
          <li>If assets outperform IRS rate, excess passes to heirs tax-free</li>
          </ol>
          <strong>Zeroed-out GRAT:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Annuity equals gift value</li>
          <li>Gift tax value: $0</li>
          <li>All appreciation transferred free</li>
          </ul>
          <strong>Best for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assets expected to appreciate significantly</li>
          <li>Low interest rate environment</li>
          <li>Healthy donor</li>
          </ul>
          <strong>Risks:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Die during term = assets back in estate</li>
          <li>Underperformance = nothing to heirs</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 8: Intentionally Defective Grantor Trust (IDGT)</h3>
          
          <strong>The concept:</strong>
          Create trust that's irrevocable for estate tax but grantor trust for income tax.
          
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assets out of estate</li>
          <li>You pay income taxes (additional tax-free gift)</li>
          <li>Can sell assets to trust for additional leverage</li>
          </ul>
          <strong>Sale to IDGT:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Sell appreciating assets for promissory note</li>
          <li>No capital gains (grantor trust)</li>
          <li>Appreciation above note interest rate passes tax-free</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 9: Spousal Lifetime Access Trust (SLAT)</h3>
          
          <strong>Purpose:</strong>
          Use exemption while maintaining indirect access.
          
          <strong>How it works:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>One spouse creates irrevocable trust for benefit of other</li>
          <li>Gift to trust uses donor's exemption</li>
          <li>Beneficiary spouse can receive distributions</li>
          <li>Assets not in either estate</li>
          </ul>
          <strong>Planning point:</strong>
          Use before 2026 sunset to lock in high exemption.
          
          <strong>Reciprocal trust warning:</strong>
          Spouses cannot create identical trusts for each other.
        `
      },
      {
        type: 'text',
        title: 'Gifting to Minors',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Uniform Transfers to Minors Act (UTMA)</h3>
          
          <strong>Features:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Custodial account for minor</li>
          <li>Simple to set up</li>
          <li>Assets release at age of majority (18-25, varies by state)</li>
          <li>Custodian manages until then</li>
          </ul>
          <strong>Disadvantages:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Minor receives full control at release age</li>
          <li>Assets are minor's for financial aid purposes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Section 2503(c) Trusts</h3>
          
          <strong>Features:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assets held in trust</li>
          <li>Trustee has discretion over distributions</li>
          <li>Must allow distribution at age 21 (but beneficiary can extend)</li>
          <li>Income taxed to trust or beneficiary</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Crummey Trusts</h3>
          
          <strong>Purpose:</strong>
          Make gifts to trust qualify for annual exclusion.
          
          <strong>How it works:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Beneficiary receives notice of gift</li>
          <li>Has temporary right to withdraw</li>
          <li>If not withdrawn, remains in trust</li>
          <li>Qualifies as "present interest"</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Gift Tax Returns',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">When Required</h3>
          
          <strong>File Form 709 if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Gifts to any person exceed annual exclusion</li>
          <li>Gift splitting elected</li>
          <li>Gifts of future interests</li>
          <li>Direct payments that need documentation</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">What to Report</h3>
          
          <strong>On Form 709:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Description of gifts</li>
          <li>Value of gifts</li>
          <li>Use of annual exclusion</li>
          <li>Use of lifetime exemption</li>
          <li>Gift splitting election</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Filing Deadline</h3>
          
          <strong>Same as income tax:</strong> April 15 (extensions available)
          
          <strong>Important:</strong> File even if no tax due to document exemption use.
        `
      },
      {
        type: 'text',
        title: 'Gifting Considerations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Basis Issues</h3>
          
          <strong>Carryover basis for gifts:</strong>
          Recipient gets your basis in gifted assets.
          
          <strong>Step-up at death:</strong>
          Inherited assets receive basis equal to date-of-death value.
          
          <strong>Planning consideration:</strong>
          For highly appreciated assets held by elderly donors, leaving at death (step-up) may be better than gifting (carryover basis).
          
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Asset: $1 million value, $100,000 basis</li>
          <li>Gift it: Recipient's basis = $100,000</li>
          <li>Leave at death: Heir's basis = $1 million</li>
          <li>Capital gains savings if sold: $180,000 (20% on $900,000)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Impact on Recipient</h3>
          
          <strong>Financial aid:</strong>
          Gifts to students can affect financial aid eligibility.
          
          <strong>Creditor exposure:</strong>
          Once gifted, assets are recipient's—exposed to their creditors.
          
          <strong>Maturity concerns:</strong>
          Large gifts to young recipients can be problematic.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Medicaid Planning</h3>
          
          <strong>5-year lookback:</strong>
          Gifts within 5 years of Medicaid application may cause penalty period.
          
          <strong>Planning:</strong>
          If Medicaid may be needed, consider gifting more than 5 years ahead.
        `
      },
      {
        type: 'text',
        title: 'Common Gifting Mistakes',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 1: Not Using Annual Exclusion</h3>
          
          <strong>Lost opportunity:</strong>
          Annual exclusion doesn't carry over—use it or lose it each year.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 2: Ignoring Basis</h3>
          
          <strong>Problem:</strong>
          Gifting highly appreciated assets creates capital gains issues for recipients.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 3: Waiting Too Long</h3>
          
          <strong>Risk:</strong>
          If you become incapacitated or die, gifting opportunities are lost.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 4: Not Documenting</h3>
          
          <strong>Problem:</strong>
          Inadequate records can cause IRS issues, family disputes.
          
          <strong>Solution:</strong>
          File gift tax returns, maintain records, document intent.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 5: Forgetting State Taxes</h3>
          
          <strong>Some states have gift taxes:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Connecticut (unified with estate tax)</li>
          <li>Minnesota (on certain gifts)</li>
          </ul>
          <strong>Check state rules</strong> before implementing strategies.
        `
      },
    ],
    faqs: [
      {
        question: 'Can I give my child $36,000 if my spouse agrees?',
        answer: 'Yes, through gift splitting. You can give $36,000 to any person, and if your spouse consents on a gift tax return (Form 709), it\'s treated as $18,000 from each of you—fully covered by both annual exclusions.'
      },
      {
        question: 'Do I need to file a gift tax return for annual exclusion gifts?',
        answer: 'Generally no, if gifts to each recipient stay within the $18,000 annual exclusion and no special situations apply. However, if you gift split with your spouse, you must file Form 709.'
      },
      {
        question: 'What happens if I give more than the lifetime exemption?',
        answer: 'Gift tax at 40% is due on the excess. However, with an exemption of $13.61 million, very few people ever owe gift tax. The exemption is quite large.'
      },
      {
        question: 'Should I give appreciated stock or cash?',
        answer: 'Consider the basis. If you give appreciated stock, the recipient gets your low basis and will owe capital gains when they sell. If you expect to pass the stock at death, they\'d get stepped-up basis. For younger donors with long time horizons, gifting appreciated assets usually makes sense.'
      },
      {
        question: 'Can I take back a gift?',
        answer: 'Generally no. A completed gift is irrevocable. This is why planning is important—only gift what you can truly afford to part with permanently.'
      },
    ],
    bottomLine: 'Gifting is a powerful estate planning tool that can transfer significant wealth while minimizing taxes. Start with annual exclusion gifts—$18,000 per recipient per year—which require no gift tax return and don\'t use your lifetime exemption. For larger transfers, understand the lifetime exemption ($13.61 million in 2024) and the 2026 sunset that may cut it roughly in half. Advanced strategies like GRATs, FLPs, and SLATs can leverage gifting power for sophisticated planning. Always consider basis implications, and remember that gifts are permanent. With proper planning, families can transfer millions tax-free over time.'
  },
  {
    id: 'spoke-estate-006',
    title: 'Healthcare Directives: Living Wills and Healthcare Proxy Guide',
    slug: 'healthcare-directives',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to healthcare directives including living wills, healthcare proxies, and advance directives. Ensure your medical wishes are honored.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'healthcare directives',
    metaDescription: 'Complete guide to healthcare directives including living wills, healthcare proxies, and advance directives. Ensure your medical wishes are honored.',
    keyTakeaways: [
      'Healthcare directives cover medical decisions; financial POA covers money matters',
      'A living will expresses your treatment preferences',
      'A healthcare proxy names someone to make medical decisions for you',
      'Everyone over 18 should have healthcare directives',
      'Documents should be easily accessible in an emergency',
    ],
    sections: [
      {
        type: 'text',
        title: 'Types of Healthcare Directives',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Living Will</h3>
          
          <strong>Definition:</strong> A written statement of your wishes regarding medical treatment if you cannot communicate.
          
          <strong>What it covers:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Life-sustaining treatment preferences</li>
          <li>End-of-life care wishes</li>
          <li>Specific treatment choices</li>
          <li>Pain management preferences</li>
          <li>Organ donation decisions</li>
          </ul>
          <strong>When it applies:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Terminal illness</li>
          <li>Permanent unconsciousness</li>
          <li>End-stage condition</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Healthcare Proxy (Healthcare Power of Attorney)</h3>
          
          <strong>Definition:</strong> Names a person to make medical decisions on your behalf.
          
          <strong>Also called:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Healthcare power of attorney</li>
          <li>Healthcare agent</li>
          <li>Medical power of attorney</li>
          <li>Health care surrogate</li>
          </ul>
          <strong>What your agent can do:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Consent to or refuse treatment</li>
          <li>Choose doctors and facilities</li>
          <li>Access medical records</li>
          <li>Make decisions not covered by living will</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Advance Directive</h3>
          
          <strong>Definition:</strong> Umbrella term for documents expressing future healthcare wishes.
          
          <strong>May include:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Living will provisions</li>
          <li>Healthcare proxy designation</li>
          <li>HIPAA authorization</li>
          <li>Specific treatment preferences</li>
          </ul>
          <strong>Many states combine</strong> living will and healthcare proxy into a single advance directive document.
          
          <h3 class="text-xl font-bold mt-8 mb-4">HIPAA Authorization</h3>
          
          <strong>Definition:</strong> Grants access to your medical information.
          
          <strong>Why needed:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>HIPAA privacy rules restrict access</li>
          <li>Without authorization, even family may be denied information</li>
          <li>Separate from healthcare proxy authority</li>
          </ul>
          <strong>Include in:</strong> Your healthcare directive package.
        `
      },
      {
        type: 'text',
        title: 'Living Will Details',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Common Provisions</h3>
          
          <strong>Life-sustaining treatment:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Mechanical ventilation (breathing machines)</li>
          <li>CPR (cardiopulmonary resuscitation)</li>
          <li>Artificial nutrition and hydration</li>
          <li>Dialysis</li>
          <li>Blood transfusions</li>
          <li>Antibiotics</li>
          </ul>
          <strong>Conditions triggering preferences:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Terminal illness with death expected</li>
          <li>Permanent unconsciousness/vegetative state</li>
          <li>Advanced dementia</li>
          <li>End-stage condition</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How to Express Preferences</h3>
          
          <strong>Options for each treatment:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>"I want this treatment"</li>
          <li>"I want this treatment tried; discontinue if not effective"</li>
          <li>"I do not want this treatment"</li>
          <li>"I want my agent to decide"</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Example Living Will Language</h3>
          
          <strong>Aggressive treatment preferred:</strong>
          "I want all available medical treatment to extend my life for as long as possible."
          
          <strong>Comfort care preferred:</strong>
          "If I have an incurable, irreversible condition that will result in my death, I direct that life-sustaining treatment be withheld or withdrawn and that I be given comfort care only."
          
          <strong>Balanced approach:</strong>
          "I want treatment tried for a reasonable period; if it is not effective in restoring meaningful quality of life, I want it discontinued."
          
          <h3 class="text-xl font-bold mt-8 mb-4">Comfort Care and Palliative Care</h3>
          
          <strong>Always included:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Pain medication</li>
          <li>Comfort measures</li>
          <li>Hygiene care</li>
          <li>Emotional support</li>
          </ul>
          <strong>Comfort care ≠ giving up</strong>
          Choosing not to prolong dying is different from not receiving care.
        `
      },
      {
        type: 'text',
        title: 'Choosing a Healthcare Agent',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Why Your Choice Matters</h3>
          
          <p>Your agent may face life-and-death decisions:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Whether to continue life support</li>
          <li>Whether to try experimental treatments</li>
          <li>How aggressively to treat</li>
          <li>Where you receive care</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Qualities of a Good Healthcare Agent</h3></p>
          
          <strong>Emotional strength:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Can handle difficult decisions</li>
          <li>Won't be overcome by grief</li>
          <li>Can advocate for your wishes</li>
          </ul>
          <strong>Knowledge of your values:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Understands your beliefs</li>
          <li>Knows what quality of life means to you</li>
          <li>Has discussed end-of-life preferences with you</li>
          </ul>
          <strong>Availability:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Can be reached in emergency</li>
          <li>Willing to travel if needed</li>
          <li>Available for the long term</li>
          </ul>
          <strong>Advocacy skills:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Will speak up to doctors</li>
          <li>Can navigate medical system</li>
          <li>Won't be intimidated</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Who to Consider</h3>
          
          <strong>Good candidates:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Spouse or partner</li>
          <li>Adult child</li>
          <li>Sibling</li>
          <li>Close friend</li>
          <li>Anyone who knows you well</li>
          </ul>
          <strong>Think carefully about:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Very elderly parents</li>
          <li>Geographically distant people</li>
          <li>Those who disagree with your values</li>
          <li>People who might have conflicts of interest</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Naming Alternates</h3>
          
          <strong>Always name successor agents:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>If primary unavailable</li>
          <li>If primary unable to serve</li>
          <li>If primary dies</li>
          </ul>
          <strong>Example:</strong>
          "My healthcare agent is my spouse, Jane Doe. If Jane is unable or unwilling to serve, my alternate agent is my daughter, Mary Doe."
        `
      },
      {
        type: 'text',
        title: 'Creating Healthcare Directives',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">State Requirements</h3>
          
          <strong>Requirements vary by state:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Witnesses (usually 2)</li>
          <li>Notarization (some states)</li>
          <li>Specific language</li>
          <li>Who can witness (restrictions on family, healthcare providers)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Steps to Create</h3>
          
          <strong>Step 1: Reflect on your values</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>What quality of life is acceptable?</li>
          <li>What treatments would you want or not want?</li>
          <li>What matters most to you?</li>
          </ul>
          <strong>Step 2: Choose your agent</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Discuss your wishes with them</li>
          <li>Confirm they're willing to serve</li>
          <li>Name alternates</li>
          </ul>
          <strong>Step 3: Complete documents</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>State-specific form (recommended)</li>
          <li>Attorney-drafted document</li>
          <li>Hospital or doctor's form</li>
          </ul>
          <strong>Step 4: Execute properly</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Sign in front of witnesses</li>
          <li>Notarize if required</li>
          <li>Get agent's acceptance signature (if required)</li>
          </ul>
          <strong>Step 5: Distribute copies</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Healthcare agent</li>
          <li>Alternate agents</li>
          <li>Primary doctor</li>
          <li>Hospital</li>
          <li>Attorney</li>
          <li>Family members</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Where to Get Forms</h3>
          
          <strong>Free resources:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>State health department websites</li>
          <li>Five Wishes (nationwide, meets requirements in most states)</li>
          <li>AARP</li>
          <li>Hospital patient services</li>
          <li>Doctor's office</li>
          </ul>
          <strong>Professional help:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Estate planning attorney</li>
          <li>Elder law attorney</li>
          <li>Hospital social worker</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Having the Conversation',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Why Discussions Matter</h3>
          
          <strong>Documents are not enough:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Agent needs to understand your values</li>
          <li>Situations arise documents don't cover</li>
          <li>Family should understand your wishes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Topics to Discuss</h3>
          
          <strong>Quality of life:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>What makes life worth living for you?</li>
          <li>What conditions would be unacceptable?</li>
          <li>How do you feel about disability?</li>
          </ul>
          <strong>Specific scenarios:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Terminal cancer diagnosis</li>
          <li>Severe dementia</li>
          <li>Stroke with significant disability</li>
          <li>Coma with uncertain prognosis</li>
          </ul>
          <strong>Treatment preferences:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>How do you feel about machines keeping you alive?</li>
          <li>Would you want feeding tubes?</li>
          <li>How important is being at home vs. hospital?</li>
          </ul>
          <strong>Values and beliefs:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Religious or spiritual beliefs about death</li>
          <li>Feelings about suffering vs. extending life</li>
          <li>Importance of being conscious/communicating</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Having the Talk</h3>
          
          <strong>Tips:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Choose calm time (not during crisis)</li>
          <li>Be honest about your wishes</li>
          <li>Listen to agent's concerns</li>
          <li>Discuss multiple scenarios</li>
          <li>Write down key points</li>
          <li>Revisit periodically</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Specific Situations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Do Not Resuscitate (DNR) Orders</h3>
          
          <strong>What it is:</strong> Medical order to not perform CPR if heart/breathing stops.
          
          <strong>Different from living will:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Living will = your wishes</li>
          <li>DNR = doctor's order based on discussion with you</li>
          </ul>
          <strong>When appropriate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Terminal illness</li>
          <li>Very elderly/frail</li>
          <li>Consistent with your wishes</li>
          </ul>
          <strong>POLST/MOLST:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Physician Orders for Life-Sustaining Treatment</li>
          <li>More specific than living will</li>
          <li>Actual medical orders</li>
          <li>Travels with patient</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Dementia Planning</h3>
          
          <strong>Challenge:</strong> Dementia progresses gradually; when do directives apply?
          
          <strong>Considerations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Specify what stage triggers preferences</li>
          <li>Address feeding tubes specifically</li>
          <li>Consider comfort care transition</li>
          <li>Discuss with family early</li>
          </ul>
          <strong>Example language:</strong>
          "If I have advanced dementia and no longer recognize family or can communicate meaningfully, I do not want life-prolonging treatment including tube feeding."
          
          <h3 class="text-xl font-bold mt-8 mb-4">Emergency Situations</h3>
          
          <strong>In emergencies:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>EMS may not honor living will</li>
          <li>Hospital will likely provide treatment initially</li>
          <li>Agent can make decisions once situation stabilizes</li>
          </ul>
          <strong>For home:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Consider POLST if appropriate</li>
          <li>Keep documents accessible</li>
          <li>Inform family and caregivers</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Making Documents Effective',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Accessibility</h3>
          
          <strong>Problem:</strong> Documents exist but can't be found in emergency.
          
          <strong>Solutions:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Give copies to agent, family, doctors</li>
          <li>Keep copy in wallet/purse</li>
          <li>Upload to medical records portal</li>
          <li>Use document registry service</li>
          <li>Keep in known location at home</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Registries</h3>
          
          <strong>Some states have registries:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Upload documents electronically</li>
          <li>Healthcare providers can access</li>
          <li>Check your state's availability</li>
          </ul>
          <strong>Private registries:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>MyDirectives</li>
          <li>US Living Will Registry</li>
          <li>Often free</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Updates</h3>
          
          <strong>Review and update when:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Diagnosis of serious illness</li>
          <li>Major health change</li>
          <li>Change in preferences</li>
          <li>Agent unavailable or dies</li>
          <li>Marriage or divorce</li>
          <li>Periodically (every 5 years)</li>
          </ul>
          <strong>How to update:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Execute new document</li>
          <li>Destroy old copies</li>
          <li>Notify agent and family</li>
          <li>Update with doctors</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Common Concerns',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">"My family will know what to do"</h3>
          
          <strong>Reality:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Families often disagree</li>
          <li>Grief affects judgment</li>
          <li>Without documents, doctors decide</li>
          <li>Legal battles can result</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">"I don't want to think about death"</h3>
          
          <strong>Reality:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Planning reduces stress later</li>
          <li>Gives family peace of mind</li>
          <li>Ensures your voice is heard</li>
          <li>Takes burden off loved ones</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">"I'm too young for this"</h3>
          
          <strong>Reality:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Accidents happen at any age</li>
          <li>Terri Schiavo was 26</li>
          <li>Every adult needs healthcare directives</li>
          <li>Easy to update as life changes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">"What if doctors ignore my wishes?"</h3>
          
          <strong>Reality:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Healthcare directives are legally binding</li>
          <li>Doctors generally follow documented wishes</li>
          <li>Agent can advocate for you</li>
          <li>Legal remedies available if violated</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'At what age should I create healthcare directives?',
        answer: 'Everyone 18 and older should have healthcare directives. You become a legal adult at 18, meaning your parents cannot automatically make medical decisions for you. Create directives as soon as you turn 18, and update them as circumstances change.'
      },
      {
        question: 'Do I need an attorney to create healthcare directives?',
        answer: 'No, you can use state-specific forms available for free online or through hospitals. However, an attorney can help if you have complex wishes, want documents customized, or want to ensure everything coordinates with your estate plan.'
      },
      {
        question: 'What if my family disagrees with my decisions?',
        answer: 'Your documented wishes and your agent\'s decisions take precedence over other family members\' opinions. This is exactly why healthcare directives are so important—they make your wishes clear and give your chosen agent legal authority.'
      },
      {
        question: 'Can I change my mind after creating these documents?',
        answer: 'Yes, you can revoke or change healthcare directives anytime you have mental capacity. Execute new documents, destroy old ones, and notify your agent and healthcare providers of the change.'
      },
      {
        question: 'What\'s the difference between DNR and living will?',
        answer: 'A living will is a document expressing your treatment preferences. A DNR (Do Not Resuscitate) is a medical order written by a doctor based on discussions with you or your healthcare agent. The living will guides what the DNR should say.'
      },
    ],
    bottomLine: 'Healthcare directives give you control over medical decisions even when you can\'t speak for yourself. Everyone over 18 should have a living will expressing treatment preferences and a healthcare proxy naming someone to make decisions. Have honest conversations with your agent about your values and wishes. Make documents accessible—the best directive is useless if no one can find it. Review periodically and update as your health, family, or preferences change. These documents aren\'t about giving up; they\'re about maintaining control over your own healthcare.'
  },
  {
    id: 'spoke-estate-004',
    title: 'Irrevocable Trusts: Types, Benefits, and When You Need One',
    slug: 'irrevocable-trusts',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Comprehensive guide to irrevocable trusts including ILITs, dynasty trusts, and asset protection trusts. Learn when irrevocable trusts make sense.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'irrevocable trusts',
    metaDescription: 'Comprehensive guide to irrevocable trusts including ILITs, dynasty trusts, and asset protection trusts. Learn when irrevocable trusts make sense.',
    keyTakeaways: [
      'Irrevocable trusts remove assets from your taxable estate',
      'Once created, you generally cannot change or access the assets',
      'Different types serve different purposes (tax, protection, Medicaid)',
      'The 2026 estate tax exemption drop makes these trusts more urgent',
      'Professional guidance is essential for proper implementation',
    ],
    sections: [
      {
        type: 'text',
        title: 'Understanding Irrevocable Trusts',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Makes a Trust Irrevocable?</h3>
          
          <strong>Definition:</strong> An irrevocable trust cannot be modified, amended, or terminated by the grantor without beneficiary consent (and sometimes court approval).
          
          <strong>Key distinction from revocable trust:</strong>
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Feature</th><th class="py-3 px-4 font-bold">Revocable Trust</th><th class="py-3 px-4 font-bold">Irrevocable Trust</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Can be changed</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">Generally no</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Assets in your estate</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Income tax treatment</td><td class="py-3 px-4">Pass-through</td><td class="py-3 px-4">May be separate entity</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Creditor protection</td><td class="py-3 px-4">None</td><td class="py-3 px-4">Potentially yes</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Medicaid eligibility</td><td class="py-3 px-4">Assets counted</td><td class="py-3 px-4">May be excluded</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">Why Give Up Control?</h3>
          
          <p>The benefits justify the permanence:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Estate tax savings (potentially millions)</li>
          <li>Asset protection from future creditors</li>
          <li>Medicaid eligibility preservation</li>
          <li>Life insurance out of estate</li>
          <li>Generation-skipping transfer</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Limited Modifications</h3></p>
          
          <p>While "irrevocable," some flexibility exists:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trust protector powers</li>
          <li>Decanting (transferring to new trust)</li>
          <li>Court modification for changed circumstances</li>
          <li>Trust merger or division</li></ul></p>
        `
      },
      {
        type: 'text',
        title: 'Types of Irrevocable Trusts',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Irrevocable Life Insurance Trust (ILIT)</h3>
          
          <strong>Purpose:</strong> Remove life insurance proceeds from taxable estate.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>ILIT is created and funded</li>
          <li>Trust purchases life insurance policy (or you transfer existing policy)</li>
          <li>Trust is owner and beneficiary of policy</li>
          <li>You make gifts to trust for premium payments</li>
          <li>At death, proceeds pass to beneficiaries estate-tax-free</li>
          </ol>
          <strong>Key benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Life insurance not in taxable estate</li>
          <li>Can provide estate liquidity without estate tax</li>
          <li>Protects proceeds from beneficiaries' creditors</li>
          </ul>
          <strong>Requirements:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot be trustee</li>
          <li>Cannot have incidents of ownership</li>
          <li>Must survive 3 years if transferring existing policy</li>
          <li>Crummey notices for premium gifts</li>
          </ul>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>$5 million life insurance policy</li>
          <li>In estate: $2 million estate tax (40%)</li>
          <li>In ILIT: $0 estate tax</li>
          <li>Savings: $2 million</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Dynasty Trust</h3>
          
          <strong>Purpose:</strong> Transfer wealth across multiple generations, avoiding estate tax at each generation.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Fund trust with assets (using exemption)</li>
          <li>Trust lasts for multiple generations</li>
          <li>Beneficiaries receive distributions but don't own assets</li>
          <li>Estate tax avoided at each generation</li>
          </ol>
          <strong>Key benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Avoids estate tax at children's and grandchildren's deaths</li>
          <li>Protects assets from beneficiaries' creditors</li>
          <li>Protects from divorce</li>
          <li>Can last perpetually in some states</li>
          </ul>
          <strong>Generation-Skipping Transfer Tax (GSTT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>40% tax on transfers skipping generations</li>
          <li>$13.61 million exemption (2024)</li>
          <li>Dynasty trust uses exemption efficiently</li>
          </ul>
          <strong>Best states:</strong>
          Delaware, Nevada, South Dakota—no rule against perpetuities.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Spousal Lifetime Access Trust (SLAT)</h3>
          
          <strong>Purpose:</strong> Remove assets from estate while spouse retains access.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>One spouse creates irrevocable trust for benefit of other</li>
          <li>Beneficiary spouse can receive distributions</li>
          <li>Grantor spouse uses lifetime gift exemption</li>
          <li>Assets (and growth) not in either estate</li>
          </ol>
          <strong>Key benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Uses high exemption before 2026 sunset</li>
          <li>Indirect access through spouse</li>
          <li>Estate tax savings on appreciation</li>
          <li>Asset protection</li>
          </ul>
          <strong>Caution:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Reciprocal trust doctrine (can't be identical)</li>
          <li>If beneficiary spouse dies first, access lost</li>
          <li>If divorce, access lost</li>
          </ul>
          <strong>Planning point:</strong> Create now before exemption drops.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Charitable Remainder Trust (CRT)</h3>
          
          <strong>Purpose:</strong> Generate income while providing for charity.
          
          <strong>Types:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>CRAT: Fixed annuity payment</li>
          <li>CRUT: Percentage of trust value annually</li>
          </ul>
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer appreciated assets to CRT</li>
          <li>Trust sells assets (no immediate capital gains)</li>
          <li>You receive income for life or term of years</li>
          <li>Remainder passes to charity</li>
          <li>Receive partial charitable deduction</li>
          </ol>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Transfer $1 million stock (basis $200,000)</li>
          <li>Avoid $120,000 capital gains tax</li>
          <li>Receive 5% annually ($50,000 initially)</li>
          <li>Charitable deduction ~$350,000</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Charitable Lead Trust (CLT)</h3>
          
          <strong>Purpose:</strong> Transfer assets to heirs with reduced gift tax.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer assets to CLT</li>
          <li>Charity receives income for term of years</li>
          <li>Remainder passes to heirs</li>
          <li>Gift tax value reduced by charity's interest</li>
          </ol>
          <strong>Best for:</strong> Low interest rate environment, appreciating assets.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Grantor Retained Annuity Trust (GRAT)</h3>
          
          <strong>Purpose:</strong> Transfer appreciation estate-tax-free.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer assets to GRAT</li>
          <li>Receive fixed annuity for term of years</li>
          <li>If assets outperform IRS rate (Section 7520), excess passes to heirs tax-free</li>
          <li>"Zeroed-out" GRAT: Annuity equals gift value (no gift tax)</li>
          </ol>
          <strong>Risks:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>If you die during term, assets return to estate</li>
          <li>If assets underperform, nothing passes to heirs</li>
          </ul>
          <strong>Best for:</strong> Assets expected to appreciate significantly.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Qualified Personal Residence Trust (QPRT)</h3>
          
          <strong>Purpose:</strong> Transfer home at reduced gift tax value.
          
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Transfer home to QPRT</li>
          <li>Retain right to live there for term of years</li>
          <li>At end of term, home passes to heirs</li>
          <li>Gift tax value discounted for your retained interest</li>
          </ol>
          <strong>Example:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Home value: $2 million</li>
          <li>QPRT term: 15 years, age 55</li>
          <li>Gift tax value: ~$800,000 (60% discount)</li>
          </ul>
          <strong>Risks:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Die during term: Home returns to estate</li>
          <li>After term: Must pay fair market rent to continue living there</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Special Needs Trust (SNT)</h3>
          
          <strong>Purpose:</strong> Provide for disabled beneficiary without affecting government benefits.
          
          <strong>Types:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>First-party SNT: Funded with beneficiary's own assets</li>
          <li>Third-party SNT: Funded by family members</li>
          </ul>
          <strong>How it works:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Trust provides for supplemental needs</li>
          <li>Not counted as resource for SSI/Medicaid</li>
          <li>Trustee has discretion over distributions</li>
          <li>Benefits continue</li>
          </ol>
          <strong>Key rules:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot provide for needs covered by benefits</li>
          <li>First-party SNT requires Medicaid payback at death</li>
          <li>Third-party SNT does not</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Asset Protection Trust</h3>
          
          <strong>Purpose:</strong> Shield assets from future creditors.
          
          <strong>Domestic Asset Protection Trust (DAPT):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Self-settled trust in favorable state</li>
          <li>Delaware, Nevada, South Dakota, others</li>
          <li>2-4 year lookback for existing creditors</li>
          <li>Effectiveness varies; some courts don't recognize</li>
          </ul>
          <strong>Offshore Asset Protection Trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Created in foreign jurisdiction (Cook Islands, Nevis)</li>
          <li>Stronger protection than domestic</li>
          <li>More expensive and complex</li>
          <li>Must comply with U.S. reporting requirements</li>
          </ul>
          <strong>Limitations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot be created to defraud creditors</li>
          <li>Must be funded before creditor claims arise</li>
          <li>May not protect against all types of claims</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Funding Irrevocable Trusts',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Gift Tax Implications</h3>
          
          <strong>Transfers use lifetime exemption:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>2024 exemption: $13.61 million</li>
          <li>Gifts to irrevocable trust reduce available exemption</li>
          <li>Excess triggers gift tax (40%)</li>
          </ul>
          <strong>Annual exclusion gifts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>$18,000 per beneficiary (2024)</li>
          <li>Requires Crummey powers (present interest)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">What to Transfer</h3>
          
          <strong>Good assets for irrevocable trusts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Life insurance (ILIT)</li>
          <li>Appreciating assets (GRAT, SLAT)</li>
          <li>Business interests (dynasty trust)</li>
          <li>Real estate (QPRT)</li>
          </ul>
          <strong>Consider carefully:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retirement accounts (complex rules)</li>
          <li>S corporation stock (special requirements)</li>
          <li>Assets you might need</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Crummey Powers</h3>
          
          <strong>Purpose:</strong> Convert future interest gifts to present interest for annual exclusion.
          
          <strong>How they work:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Beneficiaries receive notice of contribution</li>
          <li>Limited time to withdraw (typically 30 days)</li>
          <li>If not withdrawn, remains in trust</li>
          <li>Qualifies for annual exclusion</li>
          </ol>
          <strong>Requirements:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Written notice to beneficiaries</li>
          <li>Actual right to withdraw</li>
          <li>Reasonable withdrawal period</li>
          <li>Documentation</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Tax Considerations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Estate Tax Benefits</h3>
          
          <strong>Assets in irrevocable trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Not included in your taxable estate</li>
          <li>Future appreciation also excluded</li>
          <li>Can save 40% estate tax</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Income Tax Treatment</h3>
          
          <strong>Grantor trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You pay income tax on trust income</li>
          <li>Assets grow without being depleted by taxes</li>
          <li>Additional tax-free gift to beneficiaries</li>
          <li>Often preferable for ILITs, SLATs</li>
          </ul>
          <strong>Non-grantor trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trust is separate taxpayer</li>
          <li>Compressed tax brackets (37% at ~$14,000)</li>
          <li>Often distributes income to beneficiaries</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Gift Tax Reporting</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File Form 709 for taxable gifts</li>
          <li>Report annual exclusion gifts using Crummey powers</li>
          <li>Allocate GSTT exemption if appropriate</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Choosing the Right Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">For Estate Tax Reduction</h3>
          
          <strong>If you need life insurance:</strong> ILIT
          <strong>If you want to benefit spouse:</strong> SLAT
          <strong>If you want income and charitable giving:</strong> CRT
          <strong>If you have appreciated assets:</strong> GRAT
          <strong>If you want multi-generational transfer:</strong> Dynasty trust
          
          <h3 class="text-xl font-bold mt-8 mb-4">For Asset Protection</h3>
          
          <strong>If planning ahead:</strong> DAPT or offshore trust
          <strong>If concerned about beneficiaries' creditors:</strong> Dynasty trust with spendthrift provisions
          
          <h3 class="text-xl font-bold mt-8 mb-4">For Special Situations</h3>
          
          <strong>Disabled beneficiary:</strong> Special needs trust
          <strong>Transfer home:</strong> QPRT
          <strong>Charitable intent:</strong> CRT or CLT
        `
      },
      {
        type: 'text',
        title: 'Working with Professionals',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Who You Need</h3>
          
          <strong>Estate planning attorney:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Draft trust documents</li>
          <li>Ensure proper execution</li>
          <li>Ongoing modifications</li>
          </ul>
          <strong>CPA/Tax advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Gift tax returns</li>
          <li>Trust income tax returns</li>
          <li>Tax planning coordination</li>
          </ul>
          <strong>Financial advisor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Investment management</li>
          <li>Insurance analysis</li>
          <li>Funding strategy</li>
          </ul>
          <strong>Trust administrator:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Ongoing trust administration</li>
          <li>Crummey notices</li>
          <li>Record keeping</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Questions to Ask</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>What are my estate tax projections?</li>
          <li>Which trust type best fits my goals?</li>
          <li>What are the ongoing costs?</li>
          <li>How much flexibility will I have?</li>
          <li>What happens if circumstances change?</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'Can I ever change an irrevocable trust?',
        answer: 'In some circumstances, yes. Trust decanting (moving assets to new trust), court modification, and trust protector powers may allow changes. However, the core irrevocable nature—removing assets from your estate—typically must be maintained for tax benefits.'
      },
      {
        question: 'Can I be a beneficiary of an irrevocable trust I create?',
        answer: 'Generally no, if you want estate tax benefits. Self-settled trusts (where you\'re a beneficiary) remain in your estate. Exception: Some asset protection trusts allow limited self-benefit, but estate tax benefits are lost.'
      },
      {
        question: 'How much does it cost to set up an irrevocable trust?',
        answer: 'Simple ILIT: $2,000-$5,000 Complex dynasty trust: $5,000-$15,000+ Ongoing administration: Varies Professional trustee fees: 0.5-1.5% annually'
      },
      {
        question: 'Should I create an irrevocable trust before 2026?',
        answer: 'If your estate may exceed $7 million (single) or $14 million (married), strongly consider it. The high exemption allows transferring significant wealth now that may be taxable if you wait. Consult with your estate planning attorney about using SLATs, dynasty trusts, or GRATs.'
      },
      {
        question: 'What happens if I need the assets back?',
        answer: 'Generally, you cannot access assets in an irrevocable trust you\'ve created. This is why careful planning is essential—only transfer assets you\'re certain you won\'t need. Some trusts (like SLATs) provide indirect access through a spouse beneficiary.'
      },
    ],
    bottomLine: 'Irrevocable trusts are powerful but permanent tools. They offer estate tax savings, asset protection, and specialized planning that revocable trusts cannot provide. The trade-off is giving up control and access to the assets. With the estate tax exemption scheduled to drop significantly in 2026, now is an opportune time to consider irrevocable trust planning. Work with experienced professionals to determine which type of irrevocable trust—if any—fits your situation and goals.'
  },
  {
    id: 'spoke-estate-005',
    title: 'Power of Attorney: Essential Guide to Appointing a Financial Agent',
    slug: 'power-of-attorney',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to power of attorney documents including types, choosing an agent, and why everyone needs one for incapacity planning.',
    readTime: '9 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'power of attorney',
    metaDescription: 'Complete guide to power of attorney documents including types, choosing an agent, and why everyone needs one for incapacity planning.',
    keyTakeaways: [
      'A durable power of attorney remains effective if you become incapacitated',
      'Without a POA, court proceedings may be required to manage your affairs',
      'Choose your agent carefully—they\'ll have broad authority over your finances',
      'POA ends at death (executor then takes over)',
      'Different from healthcare directive (which covers medical decisions)',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is a Power of Attorney?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Definition</h3>
          
          <p>A power of attorney is a legal document that grants one person (the "agent" or "attorney-in-fact") authority to act on behalf of another person (the "principal") in financial, legal, or other specified matters.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">Key Terms</h3>
          
          <strong>Principal:</strong> The person granting the power (you)
          <strong>Agent/Attorney-in-fact:</strong> The person receiving authority to act
          <strong>Durable:</strong> Remains effective during incapacity
          <strong>Springing:</strong> Only becomes effective upon incapacity
          
          <h3 class="text-xl font-bold mt-8 mb-4">What a POA Can Do</h3>
          
          <p>Depending on the powers granted:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Manage bank accounts</li>
          <li>Pay bills</li>
          <li>File taxes</li>
          <li>Buy or sell real estate</li>
          <li>Manage investments</li>
          <li>Run a business</li>
          <li>Handle government benefits</li>
          <li>Make gifts</li>
          <li>Create or modify trusts</li></ul></p>
        `
      },
      {
        type: 'text',
        title: 'Types of Power of Attorney',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Durable Power of Attorney</h3>
          
          <strong>Definition:</strong> Remains effective even if you become incapacitated.
          
          <strong>Key feature:</strong> The word "durable" must appear in the document.
          
          <strong>When effective:</strong> Typically immediately upon signing.
          
          <strong>Recommended for:</strong> Estate planning, incapacity planning.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Non-Durable Power of Attorney</h3>
          
          <strong>Definition:</strong> Terminates if you become incapacitated.
          
          <strong>Use case:</strong> Specific transaction (closing on house while you're traveling).
          
          <strong>Not suitable for:</strong> Long-term planning.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Springing Power of Attorney</h3>
          
          <strong>Definition:</strong> Only becomes effective upon a triggering event (usually incapacity).
          
          <strong>Advantage:</strong> Agent has no authority until needed.
          
          <strong>Disadvantages:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Determining incapacity can be difficult</li>
          <li>Delay in agent being able to act</li>
          <li>Some institutions won't accept</li>
          </ul>
          <strong>Incapacity determination:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>One or two physicians certify incapacity</li>
          <li>Process specified in document</li>
          <li>Can cause delays when action needed</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Limited Power of Attorney</h3>
          
          <strong>Definition:</strong> Grants authority for specific purposes or time period.
          
          <strong>Examples:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Sell a specific property</li>
          <li>Handle business during vacation</li>
          <li>Sign documents at closing</li>
          </ul>
          <strong>Terminates:</strong> When purpose completed or time expires.
          
          <h3 class="text-xl font-bold mt-8 mb-4">General Power of Attorney</h3>
          
          <strong>Definition:</strong> Grants broad authority over most financial matters.
          
          <strong>Typical for:</strong> Comprehensive estate planning.
          
          <strong>Common powers included:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Banking transactions</li>
          <li>Real estate transactions</li>
          <li>Business operations</li>
          <li>Tax matters</li>
          <li>Investment management</li>
          <li>Insurance matters</li>
          <li>Government benefits</li>
          <li>Personal property</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Why You Need a Power of Attorney',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">The Incapacity Problem</h3>
          
          <strong>Without POA:</strong>
          If you become incapacitated (stroke, dementia, accident):
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No one can access your accounts</li>
          <li>Bills go unpaid</li>
          <li>Investments unmanaged</li>
          <li>Family must petition for guardianship/conservatorship</li>
          </ul>
          <strong>Court conservatorship:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Expensive ($5,000+ legal fees)</li>
          <li>Time-consuming (months)</li>
          <li>Ongoing court supervision</li>
          <li>Public proceeding</li>
          <li>Court may appoint someone you wouldn't choose</li>
          </ul>
          <strong>With POA:</strong>
          Agent can immediately:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Access accounts</li>
          <li>Pay bills</li>
          <li>Manage investments</li>
          <li>Handle legal matters</li>
          <li>No court involvement needed</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Even with a Trust</h3>
          
          <strong>Common misconception:</strong> "I have a revocable trust, so I don't need a POA."
          
          <strong>Reality:</strong> Trust only controls trust assets. Many assets remain outside:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Bank accounts not titled in trust</li>
          <li>Retirement accounts</li>
          <li>Tax filing</li>
          <li>Government benefits</li>
          <li>Legal matters</li>
          </ul>
          <strong>Best practice:</strong> Both revocable trust AND durable POA.
        `
      },
      {
        type: 'text',
        title: 'Choosing Your Agent',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Critical Decision</h3>
          
          <p>Your agent will have significant power over your finances. Choose carefully.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">Qualities of a Good Agent</h3>
          
          <strong>Trustworthiness:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Honest and ethical</li>
          <li>Will act in your best interest</li>
          <li>Won't be tempted to misuse power</li>
          </ul>
          <strong>Competence:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Financial literacy</li>
          <li>Organizational skills</li>
          <li>Ability to handle paperwork</li>
          <li>Available when needed</li>
          </ul>
          <strong>Reliability:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Responsive to needs</li>
          <li>Follows through</li>
          <li>Keeps good records</li>
          </ul>
          <strong>Geographic proximity:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Helpful but not required</li>
          <li>Local agent can handle in-person matters</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Options for Agent</h3>
          
          <strong>Family member:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Spouse (most common)</li>
          <li>Adult child</li>
          <li>Sibling</li>
          <li>Parent</li>
          </ul>
          <strong>Non-family:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trusted friend</li>
          <li>Attorney</li>
          <li>Professional fiduciary</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Naming Multiple Agents</h3>
          
          <strong>Co-agents:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Act together (both signatures required)</li>
          <li>OR act separately (either signature)</li>
          </ul>
          <strong>Pros:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Shared responsibility</li>
          <li>Checks and balances</li>
          </ul>
          <strong>Cons:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Coordination required</li>
          <li>Potential for conflict</li>
          <li>Some institutions won't accept</li>
          </ul>
          <strong>Successor agents:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Named in order</li>
          <li>Steps in if primary can't serve</li>
          <li>Always recommended as backup</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Powers to Include',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Standard Powers</h3>
          
          <p>Most comprehensive POAs include authority for:</p>
          
          <strong>Banking:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Open/close accounts</li>
          <li>Write checks</li>
          <li>Make deposits/withdrawals</li>
          <li>Access safe deposit box</li>
          </ul>
          <strong>Real estate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Buy/sell/lease property</li>
          <li>Manage rental properties</li>
          <li>Handle mortgages</li>
          </ul>
          <strong>Investments:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Manage brokerage accounts</li>
          <li>Buy/sell securities</li>
          <li>Change asset allocation</li>
          </ul>
          <strong>Business:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Operate your business</li>
          <li>Sign contracts</li>
          <li>Manage employees</li>
          </ul>
          <strong>Taxes:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File returns</li>
          <li>Handle audits</li>
          <li>Make elections</li>
          </ul>
          <strong>Insurance:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File claims</li>
          <li>Change beneficiaries</li>
          <li>Surrender policies</li>
          </ul>
          <strong>Government benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Apply for benefits</li>
          <li>Manage benefit payments</li>
          <li>Handle VA, Social Security matters</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Special Powers</h3>
          
          <strong>Gifting authority:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Enable annual exclusion gifts</li>
          <li>Facilitate Medicaid planning</li>
          <li>Continue your gifting pattern</li>
          <li>Must be explicitly granted</li>
          </ul>
          <strong>Trust powers:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Create or modify trusts</li>
          <li>Fund trusts</li>
          <li>Exercise trust powers</li>
          <li>Must be explicitly granted</li>
          </ul>
          <strong>Healthcare access:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>HIPAA authorization</li>
          <li>Access medical records</li>
          <li>Often separate from healthcare directive</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Limiting Powers',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Why Limit</h3>
          
          <strong>Concerns:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Agent doesn't need all powers</li>
          <li>Protection against abuse</li>
          <li>Specific circumstances</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Types of Limitations</h3>
          
          <strong>Transaction limits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Maximum dollar amounts</li>
          <li>Require approval above threshold</li>
          </ul>
          <strong>Excluded powers:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot sell primary residence</li>
          <li>Cannot change beneficiaries</li>
          <li>Cannot make gifts to self</li>
          </ul>
          <strong>Duration limits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Specific time period</li>
          <li>Expires on certain date</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Springing vs. Immediate</h3>
          
          <strong>Springing POA:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No power until incapacity determined</li>
          <li>More protection but less practical</li>
          </ul>
          <strong>Immediate POA:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Effective when signed</li>
          <li>Easier to use</li>
          <li>Requires trust in agent</li>
          </ul>
          <strong>Recommendation:</strong> Immediate POA with trusted agent is usually better than springing POA with delays.
        `
      },
      {
        type: 'text',
        title: 'Creating Your POA',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">State-Specific Requirements</h3>
          
          <strong>Requirements vary by state:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Signature requirements</li>
          <li>Witness requirements</li>
          <li>Notarization</li>
          <li>Specific language</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">General Process</h3>
          
          <strong>Step 1: Decide on terms</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Who will be agent(s)</li>
          <li>What powers to grant</li>
          <li>Any limitations</li>
          </ul>
          <strong>Step 2: Draft document</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Use attorney (recommended)</li>
          <li>State-specific statutory form</li>
          <li>Online services (basic situations)</li>
          </ul>
          <strong>Step 3: Execute properly</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Sign in front of notary</li>
          <li>Witnesses (if required)</li>
          <li>Agent may need to sign acceptance</li>
          </ul>
          <strong>Step 4: Distribute copies</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Original: Keep safely</li>
          <li>Copies: Agent, financial institutions, attorney</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Statutory Forms</h3>
          
          <p>Many states have standard POA forms:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Generally accepted within state</li>
          <li>May not cover all situations</li>
          <li>Good starting point</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Using an Attorney</h3></p>
          
          <strong>When recommended:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Significant assets</li>
          <li>Complex situations</li>
          <li>Business interests</li>
          <li>Want gifting/trust powers</li>
          <li>Special provisions needed</li>
          </ul>
          <strong>Cost:</strong> $200-$500 as part of estate plan, or included in comprehensive planning.
        `
      },
      {
        type: 'text',
        title: 'Using Your POA',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Agent Responsibilities</h3>
          
          <strong>Fiduciary duties:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Act in principal's best interest</li>
          <li>Avoid conflicts of interest</li>
          <li>Keep assets separate</li>
          <li>Maintain records</li>
          <li>Act within authority granted</li>
          </ul>
          <strong>Record keeping:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Document all transactions</li>
          <li>Keep receipts</li>
          <li>Maintain accounting</li>
          <li>Be prepared to report to family or court</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Institution Acceptance</h3>
          
          <strong>Challenges:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Some institutions refuse to accept POAs</li>
          <li>May require their own forms</li>
          <li>May delay for legal review</li>
          </ul>
          <strong>Tips:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Use statutory form for your state</li>
          <li>Present POA in advance when possible</li>
          <li>Have original or certified copy</li>
          <li>Know your state's laws on acceptance</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Potential Abuse</h3>
          
          <strong>Warning signs:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Missing funds</li>
          <li>Unexplained transactions</li>
          <li>Agent benefits personally</li>
          <li>Principal's needs unmet</li>
          </ul>
          <strong>Protections:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Choose agent carefully</li>
          <li>Name co-agents for oversight</li>
          <li>Require accounting to third party</li>
          <li>Limit powers appropriately</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Revoking or Changing POA',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Revocation</h3>
          
          <strong>When to revoke:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No longer trust agent</li>
          <li>Circumstances changed</li>
          <li>New POA supersedes old</li>
          </ul>
          <strong>How to revoke:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Written revocation document</li>
          <li>Destroy original</li>
          <li>Notify agent</li>
          <li>Notify institutions</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Automatic Termination</h3>
          
          <strong>POA ends when:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Principal dies</li>
          <li>Principal revokes</li>
          <li>Agent dies, resigns, or becomes incapacitated</li>
          <li>Court orders termination</li>
          <li>Divorce (agent is spouse, in many states)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">After Death</h3>
          
          <strong>Important:</strong> POA authority ends at death.
          
          <strong>After death:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Executor takes over (under will)</li>
          <li>Successor trustee continues (for trust)</li>
          <li>No more POA authority</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'What\'s the difference between power of attorney and healthcare directive?',
        answer: 'Power of attorney covers financial and legal matters—banking, real estate, taxes, investments. Healthcare directive (or healthcare proxy) covers medical decisions—treatment choices, end-of-life care. You need both, and they can (should) name different people if appropriate.'
      },
      {
        question: 'Can I have more than one agent?',
        answer: 'Yes. You can name co-agents who act together or separately. Most commonly, people name a primary agent with one or more successor agents who step in if the primary cannot serve.'
      },
      {
        question: 'Does my POA work in other states?',
        answer: 'Generally yes, but acceptance isn\'t guaranteed. A POA valid where executed is usually honored elsewhere, but some states have specific requirements. If you own property in multiple states, consider having POAs executed under each state\'s laws.'
      },
      {
        question: 'Should I give my agent a copy now?',
        answer: 'It depends. Some people give copies to agents immediately so they\'re ready when needed. Others keep all copies secured until needed. At minimum, tell your agent where to find the document.'
      },
      {
        question: 'What if I change my mind about my agent?',
        answer: 'You can revoke a POA at any time while you have capacity. Execute a written revocation, destroy all copies of the old POA if possible, and notify the agent and any institutions that had copies.'
      },
    ],
    bottomLine: 'A durable power of attorney is essential to any estate plan. It provides for management of your finances if you become unable to manage them yourself, avoiding expensive and time-consuming court proceedings. Choose your agent carefully—they\'ll have significant power over your financial life. Execute the document properly under your state\'s laws, and review it periodically to ensure it still reflects your wishes. Combined with a healthcare directive and will or trust, a POA ensures you\'re protected against incapacity.'
  },
  {
    id: 'spoke-estate-008',
    title: 'Probate Process: Understanding What Happens After Death',
    slug: 'probate',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to the probate process including steps, costs, timeline, executor duties, and strategies to avoid probate for your estate.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'probate process',
    metaDescription: 'Complete guide to the probate process including steps, costs, timeline, executor duties, and strategies to avoid probate for your estate.',
    keyTakeaways: [
      'Probate is the court-supervised process of distributing assets after death',
      'Not all assets go through probate—joint property, beneficiary designations, and trusts avoid it',
      'Costs and timeline vary dramatically by state',
      'An executor (personal representative) manages the process',
      'With proper planning, much or all of your estate can avoid probate',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is Probate?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Definition</h3>
          
          <p>Probate is the legal process by which:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>A will is validated (or intestacy laws applied)</li>
          <li>Debts and taxes are paid</li>
          <li>Remaining assets are distributed to beneficiaries</li>
          <li>The estate is legally closed</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">When Probate Is Required</h3></p>
          
          <strong>Probate is generally required when:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Deceased owned assets in their name alone</li>
          <li>Assets exceed state's small estate threshold</li>
          <li>Real estate is titled in deceased's name only</li>
          </ul>
          <strong>Probate is NOT required for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assets with named beneficiaries (retirement accounts, life insurance)</li>
          <li>Jointly held property (passes to surviving owner)</li>
          <li>Assets held in trust</li>
          <li>Assets below small estate threshold</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Goals of Probate</h3>
          
          <strong>Provide orderly process:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Validate the will</li>
          <li>Identify assets and debts</li>
          <li>Ensure fair distribution</li>
          </ul>
          <strong>Protect creditors:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Allow claims against estate</li>
          <li>Establish claim deadlines</li>
          </ul>
          <strong>Protect beneficiaries:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Court oversight of executor</li>
          <li>Ensure proper accounting</li>
          <li>Resolve disputes</li></ul>
        `
      },
      {
        type: 'text',
        title: 'The Probate Process: Step by Step',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Step 1: Filing the Will</h3>
          
          <strong>Action:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Locate original will</li>
          <li>File with probate court in county of residence</li>
          <li>Pay filing fee</li>
          </ul>
          <strong>Timeline:</strong> Typically within 30-60 days of death (varies by state)
          
          <strong>What if no will?</strong>
          Intestacy laws apply. Estate still goes through probate.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Step 2: Appointing Executor/Administrator</h3>
          
          <strong>With a will:</strong>
          Court appoints executor named in will (if willing and able).
          
          <strong>Without a will:</strong>
          Court appoints administrator (usually next of kin).
          
          <strong>Executor receives:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Letters Testamentary (authority to act)</li>
          <li>Legal power to manage estate assets</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Step 3: Notifying Interested Parties</h3>
          
          <strong>Required notifications:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Beneficiaries named in will</li>
          <li>Heirs at law</li>
          <li>Creditors (known and by publication)</li>
          </ul>
          <strong>Publication:</strong>
          Newspaper notice alerting potential creditors.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Step 4: Inventorying Assets</h3>
          
          <strong>Executor must:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Locate all probate assets</li>
          <li>Have assets appraised if needed</li>
          <li>File inventory with court</li>
          </ul>
          <strong>Probate assets include:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Real estate in deceased's name alone</li>
          <li>Bank/investment accounts in deceased's name alone</li>
          <li>Personal property</li>
          <li>Business interests</li>
          <li>Vehicles (in some states)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Step 5: Paying Debts and Expenses</h3>
          
          <strong>Priority of payment (generally):</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Funeral expenses</li>
          <li>Estate administration costs</li>
          <li>Taxes</li>
          <li>Secured debts</li>
          <li>Unsecured debts</li>
          </ol>
          <strong>Creditor claims:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Limited time to file (typically 3-6 months)</li>
          <li>Executor reviews and approves/denies</li>
          <li>Court may resolve disputes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Step 6: Filing Tax Returns</h3>
          
          <strong>Required filings:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Final individual income tax return</li>
          <li>Estate income tax return (if estate earned income)</li>
          <li>Estate tax return (if required)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Step 7: Distributing Assets</h3>
          
          <strong>After debts and taxes paid:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Distribute according to will</li>
          <li>If no will, according to state intestacy laws</li>
          <li>Beneficiaries may need to sign receipts</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Step 8: Closing the Estate</h3>
          
          <strong>Final steps:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File final accounting with court</li>
          <li>Get court approval</li>
          <li>Discharge executor</li>
          <li>Close estate</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Probate Timeline',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">How Long Does Probate Take?</h3>
          
          <strong>Typical timeline by state type:</strong>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">State Type</th><th class="py-3 px-4 font-bold">Typical Duration</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Simple states</td><td class="py-3 px-4">4-8 months</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Moderate states</td><td class="py-3 px-4">8-12 months</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Complex states (CA, NY)</td><td class="py-3 px-4">12-24 months</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">Factors Affecting Duration</h3>
          
          <strong>Faster probate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Small, simple estate</li>
          <li>No disputes</li>
          <li>Organized records</li>
          <li>Cooperative beneficiaries</li>
          </ul>
          <strong>Slower probate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Large, complex estate</li>
          <li>Will contests</li>
          <li>Tax issues</li>
          <li>Missing documents</li>
          <li>Creditor disputes</li>
          <li>Beneficiary conflicts</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Probate Costs',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Types of Costs</h3>
          
          <strong>Court fees:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Filing fees ($100-$400 typically)</li>
          <li>Various processing fees</li>
          </ul>
          <strong>Executor compensation:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Often percentage of estate (2-5%)</li>
          <li>May be waived by family members</li>
          <li>Reasonable fee if professional</li>
          </ul>
          <strong>Attorney fees:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Hourly billing</li>
          <li>Flat fee</li>
          <li>Percentage of estate (some states)</li>
          </ul>
          <strong>Other expenses:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Appraisals</li>
          <li>Accounting fees</li>
          <li>Publication costs</li>
          <li>Property maintenance</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Cost by State</h3>
          
          <strong>High-cost states:</strong>
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">State</th><th class="py-3 px-4 font-bold">Typical Cost</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">California</td><td class="py-3 px-4">4-7% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Florida</td><td class="py-3 px-4">3-5% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">New York</td><td class="py-3 px-4">2-5% of estate</td></tr></tbody></table></div>
          <strong>Lower-cost states:</strong>
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">State</th><th class="py-3 px-4 font-bold">Typical Cost</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Texas</td><td class="py-3 px-4">2-3% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Wisconsin</td><td class="py-3 px-4">0.5-1.5% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">UPC states*</td><td class="py-3 px-4">Generally lower</td></tr></tbody></table></div>
          *Uniform Probate Code states have streamlined procedures.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Example Cost Calculation</h3>
          
          <strong>California estate: $1,000,000</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Statutory attorney fee: ~$23,000</li>
          <li>Statutory executor fee: ~$23,000</li>
          <li>Court costs and expenses: ~$2,000</li>
          <li><strong>Total: ~$48,000 (4.8%)</strong></li></ul>
        `
      },
      {
        type: 'text',
        title: 'The Executor\'s Role',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Who Can Be Executor</h3>
          
          <strong>Requirements vary by state:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Usually must be adult (18+)</li>
          <li>Cannot be felon (some states)</li>
          <li>May need to be U.S. resident</li>
          <li>May need to be state resident (or post bond)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Executor Duties</h3>
          
          <strong>Administrative:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>File will and open probate</li>
          <li>Notify beneficiaries and creditors</li>
          <li>Inventory assets</li>
          <li>Manage estate property</li>
          <li>Keep detailed records</li>
          </ul>
          <strong>Financial:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Open estate bank account</li>
          <li>Pay bills and debts</li>
          <li>Collect money owed to estate</li>
          <li>File tax returns</li>
          <li>Distribute assets</li>
          </ul>
          <strong>Legal:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Comply with court requirements</li>
          <li>File required documents</li>
          <li>Appear at hearings</li>
          <li>Defend against claims</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Executor Liability</h3>
          
          <strong>Personal liability possible for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Mishandling estate assets</li>
          <li>Not paying debts properly</li>
          <li>Distributing to wrong people</li>
          <li>Missing tax obligations</li>
          </ul>
          <strong>Protection:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Follow court procedures</li>
          <li>Keep detailed records</li>
          <li>Seek professional help</li>
          <li>Don't distribute prematurely</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Intestate Succession (No Will)',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What Happens Without a Will</h3>
          
          <p>State law determines who inherits through "intestate succession."</p>
          
          <strong>Typical order:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Surviving spouse (all or portion)</li>
          <li>Children/descendants</li>
          <li>Parents</li>
          <li>Siblings</li>
          <li>Extended family</li>
          <li>State (escheat)</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Common Intestacy Rules</h3>
          
          <strong>Married with children:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Spouse may get 1/3 to 1/2</li>
          <li>Children share remainder</li>
          </ul>
          <strong>Married, no children:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Spouse may share with parents or get all</li>
          </ul>
          <strong>Unmarried with children:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Children inherit equally</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Problems with Intestacy</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>May not match your wishes</li>
          <li>Unmarried partners receive nothing</li>
          <li>Step-children may be excluded</li>
          <li>No charitable gifts</li>
          <li>Court appoints administrator</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Avoiding Probate',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 1: Revocable Living Trust</h3>
          
          <strong>How it works:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Transfer assets to trust during life</li>
          <li>Trust distributes at death</li>
          <li>No court involvement</li>
          </ul>
          <strong>Best for:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Larger estates</li>
          <li>Privacy concerns</li>
          <li>Multi-state property</li>
          <li>Incapacity planning</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 2: Beneficiary Designations</h3>
          
          <strong>Applicable assets:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retirement accounts</li>
          <li>Life insurance</li>
          <li>Annuities</li>
          <li>POD bank accounts</li>
          <li>TOD brokerage accounts</li>
          </ul>
          <strong>Advantage:</strong> Simple, no ongoing maintenance.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 3: Joint Ownership</h3>
          
          <strong>Joint tenancy with right of survivorship:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Property passes to surviving owner</li>
          <li>No probate needed</li>
          </ul>
          <strong>Caution:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Gives co-owner current access</li>
          <li>May have gift tax issues</li>
          <li>Creditor concerns</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Strategy 4: Small Estate Procedures</h3>
          
          <strong>Most states allow:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Affidavit for small personal property</li>
          <li>Simplified probate for small estates</li>
          </ul>
          <strong>Thresholds vary:</strong> $20,000 to $150,000+ depending on state.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Which Strategy Is Best?</h3>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Situation</th><th class="py-3 px-4 font-bold">Best Approach</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Few assets, simple estate</td><td class="py-3 px-4">Beneficiary designations</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Moderate assets, simple family</td><td class="py-3 px-4">TOD/POD + beneficiary designations</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Significant assets</td><td class="py-3 px-4">Revocable living trust</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Multi-state real estate</td><td class="py-3 px-4">Revocable living trust</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Privacy important</td><td class="py-3 px-4">Revocable living trust</td></tr></tbody></table></div>
        `
      },
      {
        type: 'text',
        title: 'Probate in Different States',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Uniform Probate Code States</h3>
          
          <strong>UPC states have streamlined probate:</strong>
          Alaska, Arizona, Colorado, Florida, Hawaii, Idaho, Maine, Massachusetts, Michigan, Minnesota, Montana, Nebraska, New Jersey, New Mexico, North Dakota, Pennsylvania, South Carolina, South Dakota, Utah
          
          <strong>Features:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Simplified procedures</li>
          <li>Less court supervision</li>
          <li>Faster and less expensive</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Independent vs. Supervised Administration</h3>
          
          <strong>Independent administration:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Minimal court involvement</li>
          <li>Executor acts without constant approval</li>
          <li>Faster and less expensive</li>
          </ul>
          <strong>Supervised administration:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Court oversees major decisions</li>
          <li>More protection but more time/cost</li>
          <li>May be required in disputes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Notorious Probate States</h3>
          
          <strong>California:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Statutory fees (expensive)</li>
          <li>Complex procedures</li>
          <li>Often recommended to avoid probate</li>
          </ul>
          <strong>Florida:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Moderate costs</li>
          <li>Unique creditor rules</li>
          <li>Trust planning common</li>
          </ul>
          <strong>New York:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Can be complex and lengthy</li>
          <li>Varies by county</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Probate Litigation',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Will Contests</h3>
          
          <strong>Grounds for contest:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Lack of capacity</li>
          <li>Undue influence</li>
          <li>Fraud</li>
          <li>Improper execution</li>
          </ul>
          <strong>Who can contest:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Those who would inherit without will</li>
          <li>Those named in prior will</li>
          </ul>
          <strong>Timeline:</strong> Usually limited window (months from probate opening)
          
          <h3 class="text-xl font-bold mt-8 mb-4">Creditor Disputes</h3>
          
          <strong>Common issues:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Validity of debt</li>
          <li>Amount owed</li>
          <li>Priority of payment</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Beneficiary Disputes</h3>
          
          <strong>Common conflicts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Interpretation of will</li>
          <li>Personal property distribution</li>
          <li>Family business issues</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Executor Disputes</h3>
          
          <strong>Issues involving executor:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Removal for misconduct</li>
          <li>Fee disputes</li>
          <li>Accounting challenges</li></ul>
        `
      },
    ],
    faqs: [
      {
        question: 'How long after death does probate start?',
        answer: 'Typically, a will should be filed within 30-60 days of death (varies by state). The actual probate process begins when the court accepts the will and appoints an executor. Some families delay filing, which can create problems.'
      },
      {
        question: 'Can probate be done without an attorney?',
        answer: 'Legally, yes—an executor can handle probate personally ("pro se"). Practically, it depends on complexity. Simple estates in streamlined states may be manageable. Complex estates or high-cost states usually warrant attorney involvement.'
      },
      {
        question: 'Do all estates go through probate?',
        answer: 'No. Only probate assets—those in the deceased\'s name alone without beneficiary designations—go through probate. Joint property, beneficiary-designated assets, and trust assets avoid probate.'
      },
      {
        question: 'How do I find out if probate has been opened?',
        answer: 'Contact the probate court in the county where the deceased lived. Probate records are public. You can search online in many jurisdictions or visit the courthouse.'
      },
      {
        question: 'What happens to debts in probate?',
        answer: 'Estate debts are paid from estate assets before beneficiaries receive anything. If the estate is insolvent (debts exceed assets), debts are paid in priority order, and beneficiaries may receive nothing. Beneficiaries generally don\'t inherit debt (exceptions: joint debts, guaranteed debts).'
      },
    ],
    bottomLine: 'Probate is the court-supervised process of settling an estate. While it serves important purposes—validating wills, paying debts, ensuring proper distribution—it can also be expensive, time-consuming, and public. The impact varies dramatically by state: some states have efficient processes costing 1-2%, while others may consume 5-7% of the estate and take years. Understanding probate helps you decide whether avoiding it through trusts, beneficiary designations, or other strategies is worth the effort for your situation.'
  },
  {
    id: 'spoke-estate-003',
    title: 'Revocable Living Trusts: Benefits, Setup, and Funding Guide',
    slug: 'revocable-trusts',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to revocable living trusts including benefits, how to set one up, funding requirements, and whether you need one for your estate plan.',
    readTime: '10 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'revocable living trust',
    metaDescription: 'Complete guide to revocable living trusts including benefits, how to set one up, funding requirements, and whether you need one for your estate plan.',
    keyTakeaways: [
      'Revocable living trusts avoid probate and provide privacy',
      'They offer no estate tax benefits but simplify administration',
      'The trust must be funded (assets transferred) to be effective',
      'You typically serve as your own trustee during your lifetime',
      'A pour-over will is still necessary as a backup',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is a Revocable Living Trust?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Definition</h3>
          
          <p>A revocable living trust is a legal arrangement where:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You (the grantor) create the trust during your lifetime</li>
          <li>You transfer assets to the trust</li>
          <li>You can change or revoke the trust anytime</li>
          <li>Assets pass to beneficiaries without probate at death</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Key Characteristics</h3></p>
          
          <strong>Revocable:</strong> You can modify or cancel at any time during your life.
          
          <strong>Living:</strong> Created while you're alive (versus testamentary trust created by will).
          
          <strong>Trust:</strong> Legal entity that holds assets for beneficiaries.
          
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3>
          
          <strong>During your lifetime:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You create the trust document</li>
          <li>You transfer assets to the trust</li>
          <li>You (typically) serve as trustee</li>
          <li>You manage assets normally</li>
          <li>You can change beneficiaries, assets, or terms</li>
          </ul>
          <strong>If you become incapacitated:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Successor trustee steps in</li>
          <li>Manages assets according to trust terms</li>
          <li>No court proceeding required</li>
          </ul>
          <strong>At your death:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trust becomes irrevocable</li>
          <li>Successor trustee distributes assets</li>
          <li>No probate required for trust assets</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Benefits of a Revocable Living Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 1: Probate Avoidance</h3>
          
          <strong>What probate entails:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Court-supervised estate administration</li>
          <li>Public proceedings</li>
          <li>Attorney and court fees</li>
          <li>Delays (months to years)</li>
          </ul>
          <strong>Trust advantage:</strong>
          Assets in the trust skip probate entirely, transferring directly to beneficiaries.
          
          <strong>Savings vary by state:</strong>
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">State</th><th class="py-3 px-4 font-bold">Typical Probate Cost</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">California</td><td class="py-3 px-4">4-7% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Florida</td><td class="py-3 px-4">3-5% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Texas</td><td class="py-3 px-4">2-3% of estate</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Wisconsin</td><td class="py-3 px-4">0.5-1% of estate</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 2: Privacy</h3>
          
          <strong>Probate is public:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Will becomes public record</li>
          <li>Asset inventory is public</li>
          <li>Beneficiaries' names are public</li>
          </ul>
          <strong>Trust is private:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trust document is not filed</li>
          <li>Asset details remain confidential</li>
          <li>Beneficiaries are private</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 3: Incapacity Planning</h3>
          
          <strong>Without a trust:</strong>
          Court-supervised conservatorship may be required.
          
          <strong>With a trust:</strong>
          Successor trustee manages assets seamlessly, without court involvement.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 4: Multi-State Property</h3>
          
          <strong>Problem:</strong> Real estate in multiple states requires probate in each state ("ancillary probate").
          
          <strong>Solution:</strong> Trust holds all real estate; only one trust administration regardless of property locations.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 5: Faster Distribution</h3>
          
          <strong>Probate timeline:</strong> Often 6-18 months minimum.
          
          <strong>Trust administration:</strong> Can distribute to beneficiaries immediately (subject to settling debts and taxes).
          
          <h3 class="text-xl font-bold mt-8 mb-4">Benefit 6: Harder to Contest</h3>
          
          <p>While trusts can be challenged, the grounds and procedures are typically more limited than for wills.</p>
        `
      },
      {
        type: 'text',
        title: 'What a Revocable Trust Does NOT Do',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">No Estate Tax Benefits</h3>
          
          <strong>Common misconception:</strong> Revocable trusts reduce estate taxes.
          
          <strong>Reality:</strong> You own trust assets for tax purposes; they're fully in your taxable estate.
          
          <strong>For estate tax benefits:</strong> Need irrevocable trusts.
          
          <h3 class="text-xl font-bold mt-8 mb-4">No Asset Protection</h3>
          
          <strong>Common misconception:</strong> Creditors can't reach trust assets.
          
          <strong>Reality:</strong> Because you control the trust, creditors can reach assets just as if you owned them directly.
          
          <strong>For asset protection:</strong> Need irrevocable trusts (and even then, limitations apply).
          
          <h3 class="text-xl font-bold mt-8 mb-4">No Income Tax Benefits</h3>
          
          <p>Trust income flows through to your personal return; no separate tax treatment.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">Doesn't Avoid Estate Settlement</h3>
          
          <p>Someone still must:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Pay debts</li>
          <li>File final tax returns</li>
          <li>Distribute assets</li>
          <li>Manage trust administration</li>
          </ul>
          It just happens outside of court.</p>
        `
      },
      {
        type: 'text',
        title: 'Creating a Revocable Living Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Working with an Attorney</h3>
          
          <strong>Why recommended:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Proper drafting for state laws</li>
          <li>Integration with other documents</li>
          <li>Guidance on funding</li>
          <li>Ongoing counsel</li>
          </ul>
          <strong>Cost:</strong> Typically $1,500-$5,000 for complete trust-based plan.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Key Decisions</h3>
          
          <strong>Who will be trustee(s)?</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You (most common during lifetime)</li>
          <li>Co-trustee with spouse</li>
          <li>Successor trustee when you can't serve</li>
          </ul>
          <strong>Who are the beneficiaries?</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Primary beneficiaries</li>
          <li>Contingent beneficiaries</li>
          <li>Consider different levels of distribution</li>
          </ul>
          <strong>What are the distribution terms?</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Outright at death</li>
          <li>In stages (e.g., 1/3 at 25, 30, 35)</li>
          <li>Discretionary distributions</li>
          <li>Lifetime trusts for beneficiaries</li>
          </ul>
          <strong>Who will be successor trustee?</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Family member</li>
          <li>Trusted friend</li>
          <li>Professional trustee (bank, trust company)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Trust Document Components</h3>
          
          <strong>Declaration of trust:</strong>
          The core document establishing the trust.
          
          <strong>Schedule A:</strong>
          List of trust assets (often incorporated by reference).
          
          <strong>Certificate of trust:</strong>
          Summary document for financial institutions.
          
          <strong>Pour-over will:</strong>
          Backup to catch any assets not in trust.
        `
      },
      {
        type: 'text',
        title: 'Funding Your Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Critical Step</h3>
          
          <strong>The most common mistake:</strong> Creating a trust but not funding it.
          
          <strong>Unfunded trust:</strong> Assets not transferred still require probate.
          
          <strong>Properly funded trust:</strong> Assets titled in trust name or with trust as beneficiary.
          
          <h3 class="text-xl font-bold mt-8 mb-4">How to Fund Different Assets</h3>
          
          <strong>Real estate:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Deed property to trust</li>
          <li>"John Smith, Trustee of the John Smith Revocable Trust dated [date]"</li>
          <li>Record new deed</li>
          <li>Update homeowner's insurance</li>
          <li>No reassessment in most states</li>
          </ul>
          <strong>Bank accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retitle accounts to trust</li>
          <li>Or change to POD (payable on death) to trust</li>
          <li>May need to open new accounts at some institutions</li>
          </ul>
          <strong>Investment accounts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retitle to trust</li>
          <li>Brokerage will have forms</li>
          <li>Maintains same investment approach</li>
          </ul>
          <strong>Business interests:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Assign LLC membership interest to trust</li>
          <li>Update operating agreement</li>
          <li>Corporation stock may require board action</li>
          </ul>
          <strong>Personal property:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>General assignment to trust</li>
          <li>Specific items listed or covered by category</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Assets NOT to Transfer to Trust</h3>
          
          <strong>Retirement accounts (IRAs, 401(k)s):</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Don't transfer to trust (triggers immediate taxation)</li>
          <li>Name trust as beneficiary if appropriate (but often better to name individuals for stretch)</li>
          </ul>
          <strong>Life insurance:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Usually name individuals as beneficiaries</li>
          <li>Or trust as beneficiary for specific reasons</li>
          <li>Don't change ownership to revocable trust (no benefit)</li>
          </ul>
          <strong>Vehicles:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Some states complicate trust ownership</li>
          <li>Title transfer upon death usually simple anyway</li>
          <li>Consider POD designation if available</li>
          </ul>
          <strong>S corporation stock:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Revocable trusts OK during life</li>
          <li>After death, special rules apply</li>
          <li>Work with attorney</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Funding Checklist</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>[ ] Real estate (new deeds recorded)</li>
          <li>[ ] Bank accounts (retitled or POD to trust)</li>
          <li>[ ] Investment accounts (retitled)</li>
          <li>[ ] Brokerage accounts (retitled)</li>
          <li>[ ] Business interests (assigned)</li>
          <li>[ ] Personal property (assignment signed)</li>
          <li>[ ] Beneficiary designations reviewed</li>
          <li>[ ] Title insurance updated</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Choosing Your Trustee',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">During Your Lifetime</h3>
          
          <strong>Typical arrangement:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You serve as sole trustee</li>
          <li>Full control over all assets</li>
          <li>No change in how you manage finances</li>
          <li>Spouse may serve as co-trustee</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Successor Trustee Selection</h3>
          
          <strong>Role of successor trustee:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Steps in at your incapacity or death</li>
          <li>Manages assets according to trust terms</li>
          <li>Distributes to beneficiaries</li>
          <li>Handles trust administration</li>
          </ul>
          <strong>Options:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Adult child</li>
          <li>Sibling</li>
          <li>Trusted friend</li>
          <li>Professional trustee</li>
          </ul>
          <strong>Selection factors:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trustworthiness</li>
          <li>Financial competence</li>
          <li>Availability</li>
          <li>Relationship with beneficiaries</li>
          <li>Willingness to serve</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Professional Trustees</h3>
          
          <strong>When to consider:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>No suitable family/friend</li>
          <li>Large or complex trust</li>
          <li>Ongoing trust management needed</li>
          <li>Potential family conflict</li>
          <li>Special needs trust</li>
          </ul>
          <strong>Costs:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Annual fee: typically 0.5-1.5% of trust assets</li>
          <li>Minimum fees may apply</li>
          <li>Additional transaction fees</li>
          </ul>
          <strong>Benefits:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Professional management</li>
          <li>Objectivity</li>
          <li>Continuity</li>
          <li>Expertise in fiduciary matters</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Trust Administration at Death',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Successor Trustee Duties</h3>
          
          <strong>Immediate steps:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Obtain death certificates</li>
          <li>Locate trust documents</li>
          <li>Notify beneficiaries</li>
          <li>Inventory trust assets</li>
          <li>Secure property</li>
          </ol>
          <strong>Administrative duties:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Open trust checking account</li>
          <li>Collect assets owed to trust</li>
          <li>Pay debts and expenses</li>
          <li>File final personal tax return</li>
          <li>File trust income tax returns</li>
          <li>Maintain records</li>
          </ol>
          <strong>Distribution:</strong>
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>Prepare accounting for beneficiaries</li>
          <li>Obtain releases if possible</li>
          <li>Distribute according to trust terms</li>
          <li>File final trust return</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Timeline</h3>
          
          <strong>Typical administration:</strong> 6-12 months
          
          <strong>Factors affecting timeline:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Complexity of assets</li>
          <li>Debt settlement</li>
          <li>Tax return timing</li>
          <li>Beneficiary disputes</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Maintaining Your Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Ongoing Updates</h3>
          
          <strong>Review triggers:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Major life events (marriage, divorce, birth, death)</li>
          <li>Significant asset changes</li>
          <li>Moving to new state</li>
          <li>Change in wishes</li>
          <li>Tax law changes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Amendment vs. Restatement</h3>
          
          <strong>Amendment:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Changes specific provisions</li>
          <li>Original trust continues</li>
          <li>Good for minor changes</li>
          </ul>
          <strong>Restatement:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Replaces entire trust document</li>
          <li>Same trust continues</li>
          <li>Better for major changes</li>
          </ul>
          <strong>Both require:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Written document</li>
          <li>Proper execution (signing, notarization)</li>
          <li>Update to funded assets if needed</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Common Mistakes',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 1: Not Funding the Trust</h3>
          
          <strong>Result:</strong> Trust is empty; assets still go through probate.
          <strong>Prevention:</strong> Complete funding immediately after trust creation.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 2: Forgetting New Assets</h3>
          
          <strong>Result:</strong> Newly acquired assets not in trust.
          <strong>Prevention:</strong> Review holdings annually; add new assets promptly.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 3: No Pour-Over Will</h3>
          
          <strong>Result:</strong> Assets outside trust may go through intestacy.
          <strong>Prevention:</strong> Always create pour-over will with revocable trust.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 4: Wrong Beneficiary Designations</h3>
          
          <strong>Result:</strong> Retirement accounts, life insurance go to wrong people.
          <strong>Prevention:</strong> Review all beneficiary designations when creating trust.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Mistake 5: Not Updating After Life Changes</h3>
          
          <strong>Result:</strong> Trust doesn't reflect current wishes.
          <strong>Prevention:</strong> Review trust after any major life event.
        `
      },
    ],
    faqs: [
      {
        question: 'Do I lose control of my assets if I put them in a trust?',
        answer: 'No. As trustee of your own revocable trust, you have complete control over all assets. You can buy, sell, give away, or use any asset exactly as you could before. The trust is essentially transparent during your lifetime.'
      },
      {
        question: 'Will putting my house in a trust affect my mortgage?',
        answer: 'Generally no. Federal law (Garn-St. Germain Act) prevents lenders from calling a loan due when transferring to a revocable trust. However, you should notify your lender and update your homeowner\'s insurance.'
      },
      {
        question: 'Is a revocable trust expensive to maintain?',
        answer: 'Minimal cost for a straightforward revocable trust. You file the same tax returns (using your Social Security number). The main costs are initial setup and occasional updates. Trust administration at death is typically less expensive than probate.'
      },
      {
        question: 'Can creditors come after trust assets?',
        answer: 'Yes, for a revocable trust. Because you can revoke it and take assets back, creditors can generally reach those assets. Irrevocable trusts may provide creditor protection, but revocable trusts do not.'
      },
      {
        question: 'Should I use a revocable trust or just a will?',
        answer: 'It depends on your situation. Revocable trusts are particularly valuable if you: own real estate in multiple states, value privacy, want incapacity protection, live in a state with expensive/slow probate, or have complex distribution wishes. A will may suffice for simple estates in efficient probate states.'
      },
    ],
    bottomLine: 'A revocable living trust is a powerful estate planning tool that offers probate avoidance, privacy, and incapacity protection. However, it\'s only effective if properly funded—assets must actually be transferred to the trust. It doesn\'t provide estate tax benefits or asset protection; for those goals, irrevocable trusts are necessary. Whether you need a revocable trust depends on your assets, family situation, and state of residence. For many people with moderate to significant assets, the benefits justify the cost. Work with an estate planning attorney to determine if it\'s right for you and ensure proper implementation.'
  },
  {
    id: 'spoke-estate-001',
    title: 'Wills and Trusts Guide: Essential Estate Planning Documents Explained',
    slug: 'wills-and-trusts',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Comprehensive guide to wills and trusts including differences between them, when you need each, and how they work together in estate planning.',
    readTime: '9 min read',
    publishDate: '2025-11-25',
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: 'wills and trusts',
    metaDescription: 'Comprehensive guide to wills and trusts including differences between them, when you need each, and how they work together in estate planning.',
    keyTakeaways: [
      'A will goes through probate; a revocable trust avoids it',
      'You need a will even if you have a trust (as a backup)',
      'Trusts offer privacy while wills become public record',
      'Wills are simpler and less expensive to create',
      'Most people with moderate assets benefit from having both',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is a Will?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Definition</h3>
          
          <p>A will (or "last will and testament") is a legal document that:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Names who receives your property when you die</li>
          <li>Appoints an executor to manage your estate</li>
          <li>Names guardians for minor children</li>
          <li>Provides instructions for your property distribution</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How a Will Works</h3></p>
          
          <strong>During your life:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>You create and sign the will</li>
          <li>You can change it anytime (codicil or new will)</li>
          <li>It has no effect until you die</li>
          </ul>
          <strong>After your death:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Will is submitted to probate court</li>
          <li>Court validates the will</li>
          <li>Executor administers estate under court supervision</li>
          <li>Assets distributed according to will</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Requirements for a Valid Will</h3>
          
          <strong>Essential elements:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Legal capacity (typically 18+, sound mind)</li>
          <li>Intent to make a will</li>
          <li>Proper execution (signing, witnesses)</li>
          <li>Written document (most states)</li>
          </ul>
          <strong>Witness requirements vary by state:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Most require 2 witnesses</li>
          <li>Witnesses should be disinterested (not beneficiaries)</li>
          <li>Some states allow notarization instead</li>
          <li>Self-proving affidavit recommended</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">What a Will Can Do</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Direct distribution of probate assets</li>
          <li>Appoint guardian for minor children</li>
          <li>Name an executor</li>
          <li>Create testamentary trusts</li>
          <li>Specify funeral wishes</li>
          <li>Forgive debts owed to you</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">What a Will Cannot Do</h3>
          
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Avoid probate</li>
          <li>Control non-probate assets (retirement accounts, life insurance, joint accounts)</li>
          <li>Provide for incapacity during life</li>
          <li>Maintain privacy (probate is public)</li>
          <li>Take effect immediately</li></ul>
        `
      },
      {
        type: 'text',
        title: 'What Is a Trust?',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Definition</h3>
          
          <p>A trust is a legal arrangement where:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>A grantor (you) transfers assets to a trustee</li>
          <li>The trustee manages assets for beneficiaries</li>
          <li>Trust document specifies rules for management and distribution</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Key Trust Terminology</h3></p>
          
          <strong>Grantor/Settlor/Trustor:</strong> The person who creates the trust
          
          <strong>Trustee:</strong> The person or entity managing trust assets
          
          <strong>Beneficiary:</strong> The person(s) receiving benefits from the trust
          
          <strong>Trust corpus/principal:</strong> The assets held in the trust
          
          <h3 class="text-xl font-bold mt-8 mb-4">Types of Trusts</h3>
          
          <strong>Revocable Living Trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Can be changed or revoked during life</li>
          <li>You typically serve as trustee</li>
          <li>Becomes irrevocable at death</li>
          <li>Primarily for probate avoidance</li>
          </ul>
          <strong>Irrevocable Trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot be changed after creation</li>
          <li>Assets removed from your estate</li>
          <li>Used for tax planning and asset protection</li>
          <li>Includes various specialized trusts</li>
          </ul>
          <strong>Testamentary Trust:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Created by your will</li>
          <li>Only takes effect at death</li>
          <li>Goes through probate</li>
          <li>Often used for minor beneficiaries</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Will vs. Trust: Key Differences',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Comparison Table</h3>
          
          <div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse"><thead><tr class="border-b-2 border-gray-300"><th class="py-3 px-4 font-bold">Feature</th><th class="py-3 px-4 font-bold">Will</th><th class="py-3 px-4 font-bold">Revocable Trust</th></tr></thead><tbody><tr class="border-b border-gray-100"><td class="py-3 px-4">Probate required</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Public record</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Effective when</td><td class="py-3 px-4">After death</td><td class="py-3 px-4">Immediately</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Incapacity planning</td><td class="py-3 px-4">No</td><td class="py-3 px-4">Yes</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Cost to create</td><td class="py-3 px-4">Lower</td><td class="py-3 px-4">Higher</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Ongoing maintenance</td><td class="py-3 px-4">Minimal</td><td class="py-3 px-4">Must fund trust</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Minor children guardian</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Privacy</td><td class="py-3 px-4">None</td><td class="py-3 px-4">Yes</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Court supervision</td><td class="py-3 px-4">Yes</td><td class="py-3 px-4">No</td></tr><tr class="border-b border-gray-100"><td class="py-3 px-4">Creditor protection</td><td class="py-3 px-4">No</td><td class="py-3 px-4">No (revocable)</td></tr></tbody></table></div>
          <h3 class="text-xl font-bold mt-8 mb-4">When a Will Is Sufficient</h3>
          
          <strong>A simple will may be enough if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Young with few assets</li>
          <li>Most assets pass outside probate (retirement, life insurance)</li>
          <li>Live in state with simple probate (California no)</li>
          <li>Assets are straightforward</li>
          <li>No privacy concerns</li>
          <li>Budget is limited</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">When You Need a Trust</h3>
          
          <strong>Consider a trust if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Own real estate in multiple states</li>
          <li>Value privacy</li>
          <li>Want to avoid probate costs/delays</li>
          <li>Have blended family</li>
          <li>Want incapacity protection</li>
          <li>Have significant assets</li>
          <li>Live in state with expensive/slow probate</li></ul>
        `
      },
      {
        type: 'text',
        title: 'The Pour-Over Will',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">What It Is</h3>
          
          <p>A will that works with your trust, directing any probate assets into your trust at death.</p>
          
          <h3 class="text-xl font-bold mt-8 mb-4">How It Works</h3>
          
          <ol class="list-decimal pl-6 space-y-2 my-4"><li>You create revocable trust</li>
          <li>You create pour-over will</li>
          <li>You transfer assets to trust during life</li>
          <li>At death, will "pours" any missed assets into trust</li>
          <li>Trust handles distribution of all assets</li>
          </ol>
          <h3 class="text-xl font-bold mt-8 mb-4">Why You Need Both</h3>
          
          <p>Even with a trust, you need a pour-over will to:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Catch assets not transferred to trust</li>
          <li>Name guardian for minor children</li>
          <li>Provide backup distribution plan</li>
          <li>Ensure nothing falls through cracks</li></ul></p>
        `
      },
      {
        type: 'text',
        title: 'Creating a Will',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">DIY vs. Attorney</h3>
          
          <strong>DIY appropriate if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Simple estate</li>
          <li>No complex family situations</li>
          <li>Standard distributions</li>
          <li>Comfortable with legal documents</li>
          </ul>
          <strong>Attorney recommended if:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Significant assets</li>
          <li>Blended family</li>
          <li>Business interests</li>
          <li>Complex wishes</li>
          <li>State-specific concerns</li>
          <li>Potential for disputes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Steps to Create a Will</h3>
          
          <strong>Step 1: Inventory assets</strong>
          List everything you own and how it's titled.
          
          <strong>Step 2: Decide distributions</strong>
          Who gets what? Consider contingencies.
          
          <strong>Step 3: Choose executor</strong>
          Trusted person to manage estate. Name backup.
          
          <strong>Step 4: Name guardian (if applicable)</strong>
          For minor children. Name backup.
          
          <strong>Step 5: Draft the document</strong>
          Use attorney, online service, or software.
          
          <strong>Step 6: Execute properly</strong>
          Sign with witnesses; consider notarization.
          
          <strong>Step 7: Store safely</strong>
          Original in safe place; copies to executor and attorney.
          
          <h3 class="text-xl font-bold mt-8 mb-4">Choosing an Executor</h3>
          
          <strong>Executor responsibilities:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Locate and file will</li>
          <li>Inventory assets</li>
          <li>Pay debts and taxes</li>
          <li>Distribute assets</li>
          <li>File final tax returns</li>
          <li>Close estate</li>
          </ul>
          <strong>Good executor qualities:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trustworthy and organized</li>
          <li>Available and willing</li>
          <li>Good judgment</li>
          <li>Some financial literacy</li>
          <li>Lives nearby (helpful, not required)</li>
          </ul>
          <strong>Options:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Family member</li>
          <li>Trusted friend</li>
          <li>Professional (attorney, trust company)</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Creating a Trust',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Working with an Attorney</h3>
          
          <p>For revocable living trusts, attorney assistance is recommended:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Proper drafting</li>
          <li>State-specific requirements</li>
          <li>Funding guidance</li>
          <li>Integration with other documents</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Steps to Create a Trust</h3></p>
          
          <strong>Step 1: Determine trust type and terms</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Revocable vs. irrevocable</li>
          <li>Who manages if you're incapacitated</li>
          <li>Distribution rules</li>
          </ul>
          <strong>Step 2: Draft trust document</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Attorney prepares</li>
          <li>Review carefully</li>
          </ul>
          <strong>Step 3: Execute trust</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Sign before notary</li>
          <li>Some states require witnesses</li>
          </ul>
          <strong>Step 4: Fund the trust</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Transfer assets to trust</li>
          <li>Change titles and beneficiaries</li>
          <li>This step is critical and often forgotten</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Funding the Trust</h3>
          
          <strong>Assets to transfer:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Real estate (deed to trust)</li>
          <li>Bank accounts (title change)</li>
          <li>Investment accounts (title change)</li>
          <li>Business interests</li>
          <li>Personal property (assignment)</li>
          </ul>
          <strong>Assets NOT to transfer:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Retirement accounts (name trust as beneficiary instead)</li>
          <li>Life insurance (name trust as beneficiary)</li>
          <li>Vehicles (varies by state)</li>
          </ul>
          <strong>Common mistake:</strong> Creating trust but not funding it, defeating the purpose.
        `
      },
      {
        type: 'text',
        title: 'Maintaining Your Documents',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">When to Update</h3>
          
          <strong>Life events requiring review:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Marriage or divorce</li>
          <li>Birth or adoption</li>
          <li>Death of beneficiary or executor</li>
          <li>Significant asset changes</li>
          <li>Moving to new state</li>
          <li>Tax law changes</li>
          <li>Changed wishes</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">How to Update</h3>
          
          <strong>For wills:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Codicil (formal amendment)</li>
          <li>New will (recommended for major changes)</li>
          <li>Destroy old will to prevent confusion</li>
          </ul>
          <strong>For trusts:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trust amendment</li>
          <li>Trust restatement (comprehensive update)</li>
          <li>Follow original execution requirements</li></ul>
        `
      },
      {
        type: 'text',
        title: 'Special Situations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Blended Families</h3>
          
          <strong>Challenges:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Balancing spouse and children from prior marriage</li>
          <li>Potential for disputes</li>
          <li>Different treatment of stepchildren</li>
          </ul>
          <strong>Solutions:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Trusts can provide for spouse while preserving assets for children</li>
          <li>Clear documentation of intentions</li>
          <li>Consider QTIP trusts for estate tax</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Minor Children</h3>
          
          <strong>Considerations:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Cannot inherit directly</li>
          <li>Need guardian named in will</li>
          <li>Consider trust for managing inheritance</li>
          <li>Specify ages for distributions</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Special Needs Beneficiaries</h3>
          
          <strong>Challenges:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Direct inheritance may disqualify from government benefits</li>
          <li>Need for long-term management</li>
          </ul>
          <strong>Solution:</strong>
          Special Needs Trust (SNT) to provide for needs without affecting benefits.
          
          <h3 class="text-xl font-bold mt-8 mb-4">International Assets</h3>
          
          <strong>Complexities:</strong>
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Different countries have different inheritance laws</li>
          <li>Forced heirship rules may apply</li>
          <li>May need documents in multiple jurisdictions</li></ul>
        `
      },
      {
        type: 'text',
        title: 'State Law Considerations',
        content: `
          <h3 class="text-xl font-bold mt-8 mb-4">Community Property States</h3>
          
          <p>In AZ, CA, ID, LA, NV, NM, TX, WA, WI:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Marital property owned 50/50</li>
          <li>Can only will your half</li>
          <li>Different rules for separate property</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Common Law States</h3></p>
          
          <p>All other states:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Separate ownership based on title</li>
          <li>Spousal rights vary (elective share)</li>
          </ul>
          <h3 class="text-xl font-bold mt-8 mb-4">Moving Between States</h3></p>
          
          <p>When you move:
          <ul class="list-disc pl-6 space-y-2 my-4"><li>Review documents for compliance</li>
          <li>Update for new state laws</li>
          <li>Re-execute if necessary</li></ul></p>
        `
      },
    ],
    faqs: [
      {
        question: 'Do I need a lawyer to create a will?',
        answer: 'Not legally required in most states, but recommended for anything beyond simple situations. DIY wills work for straightforward estates but can cause problems with complex situations, improper execution, or ambiguous language.'
      },
      {
        question: 'How often should I update my will or trust?',
        answer: 'Review every 3-5 years and after any major life event (marriage, divorce, birth, death, significant financial change, move to new state). Even if no changes needed, confirming documents are current provides peace of mind.'
      },
      {
        question: 'What happens if I die without a will?',
        answer: 'State "intestacy" laws determine who inherits, typically spouse and children in set proportions. This may not match your wishes, may cause family disputes, and typically requires more court involvement.'
      },
      {
        question: 'Can I have both a will and a trust?',
        answer: 'Yes, and you should if you have a revocable living trust. The "pour-over will" catches any assets not transferred to the trust and names guardians for minor children. The trust handles the bulk of asset distribution.'
      },
      {
        question: 'Is my will valid if I move to another state?',
        answer: 'Generally yes, if it was properly executed in the original state. However, you should have an attorney in your new state review it to ensure it complies with local laws and make any necessary updates.'
      },
    ],
    bottomLine: 'Wills and trusts are complementary tools, not alternatives. Most people benefit from having both—a revocable living trust for the bulk of their assets (providing probate avoidance, privacy, and incapacity protection) and a pour-over will as a safety net (catching missed assets and naming guardians for minor children). The right approach depends on your assets, family situation, and state of residence. Whatever you choose, having some estate plan is infinitely better than dying intestate.'
  }
];
