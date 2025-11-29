import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MOCK_ARTICLES, HUBS } from '../constants';
import { CheckCircle, AlertTriangle, Plus, Minus, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import RetirementCalculator from '../components/RetirementCalculator';
import Breadcrumb from '../components/Breadcrumb';
import AuthorBio from '../components/AuthorBio';
import Disclaimer from '../components/Disclaimer';
import SchemaMarkup from '../components/SchemaMarkup';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = MOCK_ARTICLES.find(a => a.slug === slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const displayHub = HUBS.find(h => h.id === article.hubId);
  const currentUrl = `https://www.wealthauthority.org/article/${article.slug}`;

  // Build breadcrumb items
  const breadcrumbItems = displayHub
    ? [
        { name: displayHub.title, url: `/hub/${displayHub.slug}` },
        { name: article.title, url: `/article/${article.slug}` }
      ]
    : [{ name: article.title, url: `/article/${article.slug}` }];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <SchemaMarkup
        type="article"
        title={article.title}
        description={article.metaDescription || article.excerpt}
        author={article.author}
        publishDate={article.publishDate}
        lastUpdated={article.lastUpdated}
        url={currentUrl}
      />
      {article.faqs && article.faqs.length > 0 && (
        <SchemaMarkup type="faq" faqs={article.faqs} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="lg:grid lg:grid-cols-12 gap-12 mt-6">
          <div className="lg:col-span-8">

            {/* Header */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Author Meta - Compact Version */}
            <AuthorBio
              author={article.author}
              reviewer={article.reviewer}
              publishDate={article.publishDate}
              lastUpdated={article.lastUpdated}
              compact={true}
            />

            {/* Lead Paragraph */}
            <p className="text-xl text-gray-600 mt-8 mb-10 leading-relaxed font-serif">
              {article.excerpt}
            </p>

            {/* Key Takeaways */}
            {article.keyTakeaways && (
              <div className="bg-emerald-50 rounded-xl p-8 mb-12 border border-emerald-100">
                <h3 className="font-serif font-bold text-xl text-emerald-900 mb-6">Key Takeaways</h3>
                <ul className="space-y-4">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table of Contents - for long articles */}
            {article.sections && article.sections.filter(s => s.title).length >= 3 && (
              <nav className="bg-gray-50 rounded-lg p-6 mb-10 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">In This Article</h4>
                <ul className="space-y-2">
                  {article.sections.filter(s => s.title).map((section, idx) => (
                    <li key={idx}>
                      <a
                        href={`#section-${idx}`}
                        className="text-emerald-700 hover:text-emerald-900 hover:underline text-sm"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Dynamic Content Sections */}
            <div className="space-y-12">
              {article.sections && article.sections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="prose prose-lg prose-emerald max-w-none scroll-mt-24">

                  {/* Text Section */}
                  {section.type === 'text' && (
                    <>
                      {section.title && <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{section.title}</h2>}
                      <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                    </>
                  )}

                  {/* Calculator Section */}
                  {section.type === 'calculator' && section.calculatorType === 'retirement-4-percent' && (
                    <>
                      <RetirementCalculator />
                      <Disclaimer type="calculator" />
                    </>
                  )}

                  {/* List / Steps Section */}
                  {(section.type === 'list' || section.type === 'steps') && (
                     <div className="bg-white">
                        {section.title && <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">{section.title}</h2>}
                        <ol className="space-y-4 list-none pl-0">
                          {section.items?.map((item, i) => (
                            <li key={i} className="flex gap-4">
                               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold font-serif">{i + 1}</div>
                               <div className="pt-1 text-gray-700 font-medium">{item}</div>
                            </li>
                          ))}
                        </ol>
                     </div>
                  )}

                  {/* Scenario Section */}
                  {section.type === 'scenario' && section.scenarioData && (
                    <div className="my-8 bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                        Example: {section.scenarioData.title}
                      </h3>
                      <p className="text-blue-800 mb-4 italic">"{section.scenarioData.description}"</p>
                      <div className="bg-white p-4 rounded-lg text-gray-700 text-sm border border-blue-100">
                        <span className="font-bold text-blue-900 uppercase tracking-wide text-xs block mb-1">Analysis</span>
                        {section.scenarioData.analysis}
                      </div>
                    </div>
                  )}

                  {/* Mistakes Section */}
                  {section.type === 'mistake' && section.mistakes && (
                    <div className="my-8">
                       <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                       <div className="grid gap-4">
                         {section.mistakes.map((mistake, mIdx) => (
                           <div key={mIdx} className="bg-red-50 p-6 rounded-lg border border-red-100 flex gap-4">
                              <div className="mt-1">
                                <AlertTriangle className="text-red-500 w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-red-900 mb-1">{mistake.mistake}</h4>
                                <p className="text-red-800 text-sm leading-relaxed">{mistake.explanation}</p>
                              </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}

                  {/* Table Section */}
                  {section.type === 'table' && section.tableData && (
                    <div className="my-8">
                       {section.title && <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">{section.title}</h2>}
                       <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                         <table className="min-w-full divide-y divide-gray-200">
                           <thead className="bg-gray-50">
                             <tr>
                               {section.tableData.headers.map((header, hIdx) => (
                                 <th key={hIdx} className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                   {header}
                                 </th>
                               ))}
                             </tr>
                           </thead>
                           <tbody className="bg-white divide-y divide-gray-200">
                             {section.tableData.rows.map((row, rIdx) => (
                               <tr key={rIdx}>
                                 {row.map((cell, cIdx) => (
                                   <td key={cIdx} className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                                     {cell}
                                   </td>
                                 ))}
                               </tr>
                             ))}
                           </tbody>
                         </table>
                       </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Article FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-200">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, index) => (
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

            {/* Bottom Line */}
            <div className="mt-16 bg-emerald-900 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">The Bottom Line</h3>
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                {article.bottomLine}
              </p>
              <Link to="/find-advisor" className="inline-block bg-white text-emerald-900 font-bold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors">
                 Find a Wealth Manager
              </Link>
            </div>

            {/* Author Bio - Full Version */}
            <AuthorBio
              author={article.author}
              reviewer={article.reviewer}
              publishDate={article.publishDate}
              lastUpdated={article.lastUpdated}
            />

            {/* Disclaimer */}
            <Disclaimer type="standard" />

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
             <div className="sticky top-24 space-y-8">
               <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                 <div className="bg-emerald-900 p-4 text-white text-center">
                   <h4 className="font-serif font-bold">Get Expert Advice</h4>
                   <p className="text-xs text-emerald-100 opacity-80 mt-1">Matched to {displayHub?.title || 'your goals'}</p>
                 </div>
                 <div className="p-4">
                   <LeadForm isCompact={true} />
                 </div>
               </div>

               {/* Related Articles */}
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                 <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-xs">More on {displayHub?.title}</h4>
                 <ul className="space-y-4">
                    {MOCK_ARTICLES.filter(a => a.hubId === article.hubId && a.id !== article.id).slice(0, 5).map(rel => (
                      <li key={rel.id}>
                        <Link to={`/article/${rel.slug}`} className="group block">
                          <span className="text-gray-800 font-medium group-hover:text-emerald-700 leading-snug block mb-1">{rel.title}</span>
                          <span className="text-xs text-emerald-600 flex items-center gap-1">Read <ArrowRight size={10} /></span>
                        </Link>
                      </li>
                    ))}
                    {MOCK_ARTICLES.filter(a => a.hubId === article.hubId && a.id !== article.id).length === 0 && (
                      <li className="text-sm text-gray-500 italic">More guides coming soon.</li>
                    )}
                 </ul>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArticlePage;
