import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield, Star, Award } from 'lucide-react';
import { HUBS, CITIES } from '../constants';
import LeadForm from '../components/LeadForm';
import GrowthChart from '../components/GrowthChart';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-emerald-950">
                Protect and Grow Your Wealth
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Connect with America's top-rated fiduciary wealth managers. Expert guidance for retirement, tax planning, and estate preservation tailored to your life stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/find-advisor" 
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Find Your Advisor
                </Link>
                <Link 
                  to="/strategies" 
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-emerald-100 text-lg font-bold rounded-lg text-emerald-800 hover:border-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  Explore Strategies
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2 text-emerald-700"><Shield size={18} /> Fiduciary Standard</div>
                <div className="flex items-center gap-2 text-emerald-700"><Star size={18} /> Vetted Professionals</div>
                <div className="flex items-center gap-2 text-emerald-700"><Award size={18} /> $500k+ Portfolio Specialists</div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                 <div className="absolute -inset-4 bg-emerald-100/50 rounded-2xl blur-xl"></div>
                 <div className="relative">
                   <LeadForm cityName="your city" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Hubs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">Master Your Financial Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comprehensive guides on the critical pillars of wealth management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HUBS.map((hub) => (
              <Link 
                key={hub.id} 
                to={`/hub/${hub.slug}`}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ArrowRight />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700">{hub.title}</h3>
                <p className="text-gray-600 mb-4">{hub.description}</p>
                <span className="text-emerald-600 font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                  Read Guides <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Data Section */}
      <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <GrowthChart />
            </div>
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-6">Why Professional Management Matters</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Navigating complex tax laws, market volatility, and estate regulations requires more than just picking stocks. It requires a comprehensive strategy.
                </p>
                <ul className="space-y-4">
                  {[
                    "Tax-Loss Harvesting to reduce liabilities",
                    "Asset Location for maximum tax efficiency",
                    "Risk-adjusted portfolio rebalancing",
                    "Fiduciary duty putting your interests first"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Local Expertise in Major Markets</h2>
              <p className="text-emerald-200/80 max-w-2xl">Wealth management strategies tailored to the cost of living and tax laws of your specific city.</p>
            </div>
            <Link to="/cities" className="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold mt-4 md:mt-0 transition-colors">
              View All Locations <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.slice(0, 8).map((city) => (
              <Link 
                key={city.id} 
                to={`/city/${city.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] block shadow-lg border border-emerald-900"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent z-10 opacity-90 transition-opacity group-hover:opacity-75" />
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1">
                    <MapPin size={14} /> {city.tier === 1 ? 'Top Market' : 'Regional Hub'}
                  </div>
                  <h3 className="text-2xl font-serif font-bold group-hover:text-emerald-100 transition-colors">{city.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/cities" className="inline-flex items-center gap-2 text-emerald-400 font-bold">
              View All Locations <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Home;