
import { Article } from '../types';

export const ESTATE_PLANNING_ARTICLES: Article[] = [
  {
    id: 'est-1',
    title: 'Revocable Living Trusts: Benefits, Costs, and When You Need One',
    slug: 'revocable-living-trust-guide',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Complete guide to revocable living trusts including how they work, the benefits over a simple will, costs involved, and who should consider one.',
    readTime: '13 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Patricia Nguyen',
      role: 'Estate Planning Attorney',
      credentials: 'JD, TEP',
      experience: '30+ years in estate planning'
    },
    keyTakeaways: [
      "Revocable living trusts avoid probate, saving time and preserving privacy",
      "You maintain full control and can modify or revoke the trust anytime",
      "Assets must be properly titled in the trust name to receive benefits",
      "Cost ranges from $1,500 to $5,000+ for attorney-drafted trusts",
      "Trusts do NOT reduce estate taxes by themselves"
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is a Revocable Living Trust?',
        content: `
          <p>A revocable living trust is a legal document that holds your assets during your lifetime and transfers them to your beneficiaries after death without going through probate. Unlike a will, a trust:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Avoids probate:</strong> Assets transfer immediately to beneficiaries</li>
            <li><strong>Maintains privacy:</strong> Wills become public record; trusts do not</li>
            <li><strong>Works during incapacity:</strong> Successor trustee can manage assets if you become incapacitated</li>
            <li><strong>Covers property in multiple states:</strong> Avoids ancillary probate</li>
          </ul>
          <p>You serve as trustee while alive, maintaining full control. You name a successor trustee who takes over upon death or incapacity.</p>
        `
      },
      {
        type: 'text',
        title: 'Probate: What You\'re Avoiding',
        content: `
          <p>Probate is the court-supervised process of validating a will and distributing assets. While not terrible everywhere, it can be:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Slow:</strong> 6 months to 2+ years depending on state and complexity</li>
            <li><strong>Expensive:</strong> Attorney and executor fees of 2-5% of estate value</li>
            <li><strong>Public:</strong> Anyone can see what you owned and who inherited</li>
            <li><strong>Complicated:</strong> Multiple states = multiple probate proceedings</li>
          </ul>
          <p>States like California and New York have notoriously expensive and slow probate. Florida and Texas are more streamlined. The value of avoiding probate varies by location.</p>
        `
      },
      {
        type: 'table',
        title: 'Trust vs. Will Comparison',
        tableData: {
          headers: ['Feature', 'Revocable Living Trust', 'Simple Will'],
          rows: [
            ['Avoids Probate', 'Yes', 'No'],
            ['Privacy', 'Private', 'Public Record'],
            ['Incapacity Planning', 'Built-in', 'Requires Separate POA'],
            ['Multi-State Property', 'Avoids Multiple Probates', 'Requires Ancillary Probate'],
            ['Upfront Cost', '$1,500-$5,000+', '$300-$1,000'],
            ['Ongoing Maintenance', 'Must Re-Title Assets', 'Minimal'],
            ['Contest Difficulty', 'Harder to Contest', 'Easier to Contest']
          ]
        }
      },
      {
        type: 'text',
        title: 'The Critical Step Most People Miss: Funding',
        content: `
          <p>Creating a trust document is only half the job. You must also <strong>fund the trust</strong>—transfer assets into it. An unfunded trust is worthless. Assets should be re-titled as:</p>
          <p class="bg-gray-100 p-4 rounded my-4 font-mono text-sm">"John Smith, Trustee of the John Smith Revocable Trust dated January 1, 2024"</p>
          <h4 class="text-xl font-bold mt-6 mb-3">What to Transfer Into Your Trust:</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Real estate (primary residence, vacation homes, rental property)</li>
            <li>Brokerage accounts and taxable investment accounts</li>
            <li>Business interests and LLC memberships</li>
            <li>Bank accounts (or use POD designations)</li>
            <li>Personal property (via assignment document)</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">What NOT to Transfer:</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Retirement accounts (401k, IRA)—use beneficiary designations</li>
            <li>Life insurance—name trust as beneficiary if needed</li>
            <li>Vehicles—typically pass via small estate procedures</li>
            <li>Health Savings Accounts (HSAs)</li>
          </ul>
        `
      }
    ],
    faqs: [
      { question: 'Do I need a trust if I have a small estate?', answer: 'It depends on your state. Many states have simplified probate for estates under $50,000-$150,000. If you own real estate, a trust is usually worthwhile regardless of value because real estate must go through probate.' },
      { question: 'Does a revocable trust protect assets from creditors?', answer: 'No. Because you maintain control, assets in a revocable trust are still considered yours for creditor purposes. Only irrevocable trusts can provide creditor protection.' },
      { question: 'Will my trust reduce estate taxes?', answer: 'A simple revocable trust by itself does not reduce estate taxes. However, it can contain provisions (like an AB trust or disclaimer trust) that help married couples use both spouses\' exemptions. Consult an estate planning attorney for tax-focused strategies.' }
    ],
    bottomLine: "A revocable living trust is a powerful estate planning tool that avoids probate, maintains privacy, and provides seamless management during incapacity. For anyone with real estate, significant assets, or privacy concerns, the upfront cost is usually worth the benefits your heirs will receive."
  },
  {
    id: 'est-2',
    title: 'Beneficiary Designations: The Most Important Document You\'re Probably Ignoring',
    slug: 'beneficiary-designations-guide',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Why beneficiary designations override your will, common mistakes that derail estate plans, and a checklist for getting them right.',
    readTime: '10 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Patricia Nguyen',
      role: 'Estate Planning Attorney',
      credentials: 'JD, TEP',
      experience: '30+ years in estate planning'
    },
    keyTakeaways: [
      "Beneficiary designations OVERRIDE your will—they are the most important document",
      "Review designations after every major life event (marriage, divorce, death, birth)",
      "Naming 'my estate' as beneficiary often creates tax and legal problems",
      "Always name contingent beneficiaries in case primary dies first",
      "Per stirpes vs per capita distributions have dramatically different outcomes"
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Beneficiary Designations Trump Everything',
        content: `
          <p>Here's a scenario that happens more often than you'd think: John's will leaves everything to his second wife. But his 401(k) and life insurance still name his ex-wife as beneficiary because he forgot to update them after the divorce. Result? The ex-wife gets the retirement accounts and insurance—potentially millions—regardless of what the will says.</p>
          <p><strong>Beneficiary designations are contractual.</strong> They pass directly to the named person, bypassing probate and your will entirely. This makes them incredibly powerful but also dangerous if neglected.</p>
        `
      },
      {
        type: 'text',
        title: 'Accounts With Beneficiary Designations',
        content: `
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>401(k), 403(b), and other employer retirement plans</li>
            <li>Traditional and Roth IRAs</li>
            <li>Life insurance policies</li>
            <li>Annuities</li>
            <li>Payable-on-death (POD) bank accounts</li>
            <li>Transfer-on-death (TOD) brokerage accounts</li>
            <li>Health Savings Accounts (HSAs)</li>
            <li>529 education savings plans</li>
          </ul>
          <p>For most Americans, these accounts represent the majority of their wealth—often more than what passes through their will.</p>
        `
      },
      {
        type: 'mistake',
        mistakes: [
          { mistake: 'Naming "my estate" as beneficiary', explanation: 'This forces retirement accounts through probate, exposes them to creditors, and may accelerate taxes. IRAs lose stretch capabilities. Always name individuals or trusts.' },
          { mistake: 'Forgetting to update after divorce', explanation: 'In many states, divorce does NOT automatically remove an ex-spouse as beneficiary. You must actively change it. Some plans require spousal consent even after divorce.' },
          { mistake: 'Not naming contingent beneficiaries', explanation: 'If your primary beneficiary dies before you and there is no contingent, the account defaults to your estate—the worst outcome.' },
          { mistake: 'Naming minor children directly', explanation: 'Minors cannot legally receive assets. Courts will appoint a guardian to manage the money, often with ongoing court supervision until age 18. Use a trust instead.' }
        ]
      },
      {
        type: 'text',
        title: 'Per Stirpes vs Per Capita: A Critical Choice',
        content: `
          <p>When naming multiple beneficiaries, you must specify what happens if one dies before you:</p>
          <p><strong>Per Stirpes:</strong> "By branch." If a beneficiary dies, their share goes to their children.</p>
          <p><strong>Per Capita:</strong> "By head." If a beneficiary dies, their share is split among surviving beneficiaries.</p>
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 my-6">
            <h4 class="font-bold text-yellow-900 mb-2">Example: You have 3 children. One dies before you, leaving 2 grandchildren.</h4>
            <p class="text-yellow-800"><strong>Per Stirpes:</strong> Each surviving child gets 1/3, deceased child's 2 grandchildren split 1/3 (get 1/6 each).</p>
            <p class="text-yellow-800 mt-2"><strong>Per Capita:</strong> Two surviving children split everything 50/50. Grandchildren get nothing.</p>
          </div>
          <p>Most people want per stirpes but forms default to per capita. Check your designations carefully.</p>
        `
      }
    ],
    faqs: [
      { question: 'How often should I review beneficiary designations?', answer: 'Review annually and immediately after any major life event: marriage, divorce, birth of child, death of beneficiary, significant asset changes, or move to a new state. Set a calendar reminder.' },
      { question: 'Can creditors go after beneficiary designation assets?', answer: 'Generally no—assets passing by beneficiary designation go directly to beneficiaries and avoid creditors of your estate. However, if you name your estate as beneficiary, those assets become subject to your debts.' },
      { question: 'Should I name a trust as beneficiary?', answer: 'Sometimes. Trusts provide control (for minors, spendthrifts, or special needs) but may have tax implications for retirement accounts. Consult an estate attorney before naming a trust as IRA beneficiary.' }
    ],
    bottomLine: "Beneficiary designations are arguably the most important estate planning documents you have, yet they're the most commonly neglected. A few minutes reviewing and updating these forms can prevent years of legal battles and ensure your wealth goes exactly where you intend."
  },
  {
    id: 'est-3',
    title: 'Powers of Attorney: Financial and Healthcare Directives Explained',
    slug: 'power-of-attorney-guide',
    hubId: 'estate-planning',
    type: 'spoke',
    excerpt: 'Understand the different types of powers of attorney, why everyone needs them, and how to choose the right agent for financial and healthcare decisions.',
    readTime: '11 min read',
    publishDate: '2025-11-27',
    lastUpdated: '2025-11-27',
    author: {
      name: 'Patricia Nguyen',
      role: 'Estate Planning Attorney',
      credentials: 'JD, TEP',
      experience: '30+ years in estate planning'
    },
    keyTakeaways: [
      "Powers of attorney are MORE important than a will for living persons",
      "Without a POA, your family may need expensive court guardianship proceedings",
      "Durable POA remains effective if you become incapacitated—most important type",
      "Healthcare proxy and living will are separate documents from financial POA",
      "Choose agents based on trustworthiness and capability, not just family hierarchy"
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Powers of Attorney Matter',
        content: `
          <p>A power of attorney (POA) authorizes someone to act on your behalf. Without one, if you become incapacitated due to illness, accident, or dementia, your family cannot:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Access your bank accounts to pay your bills</li>
            <li>Manage your investments</li>
            <li>Sell your house if care is needed</li>
            <li>Make medical decisions</li>
            <li>File your taxes</li>
          </ul>
          <p>Instead, they must petition a court for guardianship or conservatorship—a public, expensive, and time-consuming process that can take months and cost $5,000-$15,000+.</p>
        `
      },
      {
        type: 'text',
        title: 'Types of Powers of Attorney',
        content: `
          <h4 class="text-xl font-bold mt-4 mb-3">Financial Power of Attorney</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>General POA:</strong> Broad authority over financial matters. Ends if you become incapacitated.</li>
            <li><strong>Durable POA:</strong> Survives incapacity—this is what most people need. Specify "durable" in the document.</li>
            <li><strong>Springing POA:</strong> Only becomes effective upon a triggering event (like physician certification of incapacity). Can cause delays.</li>
            <li><strong>Limited/Special POA:</strong> Authority for specific transactions only (e.g., selling one property).</li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-3">Healthcare Documents</h4>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Healthcare Power of Attorney / Proxy:</strong> Names someone to make medical decisions if you cannot.</li>
            <li><strong>Living Will / Advance Directive:</strong> States your wishes for end-of-life care (life support, feeding tubes, etc.).</li>
            <li><strong>HIPAA Authorization:</strong> Allows named individuals to access your medical records.</li>
          </ul>
        `
      },
      {
        type: 'steps',
        title: 'Choosing the Right Agent',
        items: [
          'Trustworthiness is paramount—this person will have access to all your finances',
          'Choose someone geographically accessible if in-person actions are needed',
          'Consider capability—can they handle complex financial decisions?',
          'Name successor agents in case your first choice cannot serve',
          'Have an honest conversation with your chosen agent about your wishes',
          'Consider naming different people for financial and healthcare roles'
        ]
      },
      {
        type: 'text',
        title: 'Common POA Mistakes to Avoid',
        content: `
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Using a non-durable POA:</strong> Standard POAs terminate upon incapacity—exactly when you need them most.</li>
            <li><strong>Not giving copies to institutions:</strong> Banks and brokerages may require their own forms or notarized copies. Set up accounts before incapacity.</li>
            <li><strong>Outdated documents:</strong> POAs drafted 10+ years ago may not be accepted. Update every 5-7 years.</li>
            <li><strong>Not coordinating with trust:</strong> If you have a trust, your POA and trust should work together.</li>
            <li><strong>Choosing the wrong agent:</strong> Oldest child isn't always best. Choose based on capability and trustworthiness.</li>
          </ul>
        `
      }
    ],
    faqs: [
      { question: 'When does a power of attorney end?', answer: 'A POA ends upon your death (it cannot be used to manage your estate—that requires a will or trust), revocation by you while competent, or the agent\'s death/incapacity if no successor is named.' },
      { question: 'Can I have more than one agent?', answer: 'Yes, you can name co-agents who must act together, or name one primary and one successor. Co-agents can create delays if they disagree. Most attorneys recommend one primary with successors.' },
      { question: 'Is a POA the same in every state?', answer: 'No. POA requirements vary by state. If you own property or have accounts in multiple states, ensure your POA complies with each state\'s requirements, or create state-specific versions.' }
    ],
    bottomLine: "Powers of attorney are not optional—they're essential. Without them, a simple hospitalization or cognitive decline can become a legal and financial nightmare for your family. These documents should be part of every adult's estate plan, regardless of age or wealth."
  }
];
