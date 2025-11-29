import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { HUBS, MOCK_ARTICLES } from '../constants';
import { FileText, ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const TopicHub: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const hub = HUBS.find(h => h.slug === slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!hub) {
    return <Navigate to="/" replace />;
  }

  const articles = MOCK_ARTICLES.filter(a => a.hubId === hub.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Hub Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
             Hub / {hub.title}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">{hub.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">{hub.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Key Takeaways */}
            {hub.keyTakeaways.length > 0 && (
              <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
                <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-6">Key Takeaways</h2>
                <ul className="space-y-4">
                  {hub.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Articles List */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-emerald-950 border-b border-gray-200 pb-4 mb-8">Latest Guides</h2>
              {articles.length > 0 ? (
                <div className="grid gap-8">
                  {articles.map(article => (
                    <div key={article.id} className="group cursor-pointer bg-white rounded-xl hover:bg-gray-50 transition-colors p-6 border border-gray-100 shadow-sm hover:shadow-md">
                      <Link to={`/article/${article.slug}`} className="block">
                        <div className="flex items-center gap-3 text-xs text-emerald-600 font-bold uppercase tracking-wider mb-2">
                           <span>Guide</span>
                           <span className="w-1 h-1 rounded-full bg-emerald-300" />
                           <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                        <span className="text-emerald-700 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Full Article <ArrowRight size={16} />
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                 <div className="p-8 bg-gray-50 rounded-lg text-center text-gray-500">
                   <p>New deep-dive articles for {hub.title} are being authored by our experts. Check back soon.</p>
                 </div>
              )}
            </div>

            {/* Expert Quote */}
            {hub.expertQuote && (
              <div className="relative bg-emerald-900 text-white rounded-2xl p-10 overflow-hidden">
                <div className="absolute top-4 left-4 text-emerald-800 opacity-20 transform -scale-x-100">
                  <Quote size={120} />
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-2xl font-serif italic mb-6 leading-relaxed">"{hub.expertQuote.text}"</p>
                  <div>
                    <div className="font-bold text-lg">{hub.expertQuote.author}</div>
                    <div className="text-emerald-300 text-sm uppercase tracking-wider">{hub.expertQuote.credentials}</div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs */}
            {hub.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {hub.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                      >
                        <span className="font-bold text-gray-900">{faq.question}</span>
                        {openFaq === index ? <Minus size={20} className="text-emerald-600" /> : <Plus size={20} className="text-gray-400" />}
                      </button>
                      {openFaq === index && (
                        <div className="p-4 bg-gray-50 border-t border-gray-100 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-emerald-900 p-4 text-white text-center">
                  <h3 className="font-serif font-bold text-lg">Get Matched</h3>
                  <p className="text-emerald-100 text-xs">Find a vetted advisor for {hub.title.toLowerCase()}.</p>
                </div>
                <div className="p-4">
                  <LeadForm isCompact={true} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopicHub;