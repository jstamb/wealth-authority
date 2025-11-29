import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CITIES, HUBS } from '../constants';
import LeadForm from '../components/LeadForm';
import Breadcrumb from '../components/Breadcrumb';
import Disclaimer from '../components/Disclaimer';
import SchemaMarkup from '../components/SchemaMarkup';
import { MapPin, ArrowRight, Building2, TrendingUp, Users, Plus, Minus, Home, Percent, Wallet } from 'lucide-react';

const CityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = CITIES.find(c => c.slug === slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbItems = [
    { name: 'Find an Advisor', url: '/find-advisor' },
    { name: `${city.name}, ${city.state}`, url: `/city/${city.slug}` }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema Markup */}
      <SchemaMarkup type="localBusiness" cityName={city.name} stateName={city.state} />
      {city.faqs && city.faqs.length > 0 && (
        <SchemaMarkup type="faq" faqs={city.faqs} />
      )}

      {/* City Hero */}
      <div className="relative min-h-[600px] flex items-center py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Breadcrumb - positioned at top */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="[&_a]:text-white [&_a:hover]:text-emerald-200 [&_span]:text-white/80 [&_svg]:text-white/60">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Card */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl mb-8 lg:mb-0 border border-gray-100">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 text-sm font-bold mb-6 border border-emerald-100">
                <MapPin size={14} /> Wealth Management in {city.name}, {city.state}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-emerald-950">
                Find Top-Rated Financial Advisors in {city.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Connect with vetted fiduciary professionals who understand the unique financial landscape of {city.name}. From high cost-of-living planning to {city.state} tax strategies.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-800">
                <span className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg"><Building2 size={16} /> Local Expertise</span>
                <span className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg"><Users size={16} /> Fiduciary Standard</span>
                <span className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg"><TrendingUp size={16} /> $500k+ Min.</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5">
               <div className="relative z-20 shadow-2xl rounded-xl">
                 <LeadForm cityName={city.name} />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro & Key Takeaways */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-6">Why {city.name} Residents Need Specialized Wealth Management</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Living in {city.name} presents unique opportunities and challenges. Whether you're navigating the local real estate market, managing executive compensation, or planning for retirement in a high-cost area, generic advice isn't enough.
                </p>
              </div>
              
              {city.keyTakeaways && city.keyTakeaways.length > 0 && (
                <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                  <h3 className="font-bold text-lg text-emerald-900 mb-4">Key Takeaways for {city.name} Investors</h3>
                  <ul className="space-y-3">
                    {city.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Local Stats Table */}
            {city.stats && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">{city.name} Financial Landscape</h3>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Home size={24} />
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Median Home Price</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">{city.stats.medianHomePrice}</div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Wallet size={24} />
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Cost of Living Index</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">{city.stats.colIndex} <span className="text-sm font-normal text-gray-400">(Natl: 100)</span></div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Percent size={24} />
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">State Income Tax</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">{city.stats.incomeTax}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Local Challenges Grid */}
            {city.localChallenges && city.localChallenges.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">Common Financial Challenges in {city.name}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {city.localChallenges.map((challenge, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-emerald-900 mb-3">{challenge.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            {city.faqs && city.faqs.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {city.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                      >
                        <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                        {openFaq === index ? <Minus size={20} className="text-emerald-600 flex-shrink-0" /> : <Plus size={20} className="text-gray-400 flex-shrink-0" />}
                      </button>
                      {openFaq === index && (
                        <div className="p-5 bg-gray-50 border-t border-gray-100 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Topics */}
            <div>
              <h3 className="text-xl font-bold text-emerald-950 mb-6 border-b border-gray-200 pb-3">Popular Wealth Topics</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {HUBS.slice(0, 4).map(hub => (
                  <Link key={hub.id} to={`/hub/${hub.slug}`} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-emerald-700">{hub.title}</span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-emerald-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <Disclaimer type="standard" />

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                 <h4 className="font-serif font-bold text-emerald-900 mb-2">Client Success Story</h4>
                 <p className="text-sm text-emerald-800 italic mb-4 leading-relaxed">"Finding a fiduciary advisor in {city.name} who actually understood my stock options was a game changer. I feel 10x more confident about retiring at 55."</p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold">JD</div>
                   <div className="text-xs">
                     <div className="font-bold text-emerald-900">James D.</div>
                     <div className="text-emerald-700">{city.name} Resident</div>
                   </div>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Why Local Matters</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                   <li className="flex items-start gap-2">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                     <span>Access to local attorney & CPA networks</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                     <span>Deep knowledge of state tax codes</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                     <span>Face-to-face relationship building</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CityPage;