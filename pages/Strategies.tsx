import React from 'react';
import { Link } from 'react-router-dom';
import { HUBS } from '../constants';
import { ArrowRight, BookOpen } from 'lucide-react';

const Strategies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-emerald-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800 mb-6">
            <BookOpen size={32} className="text-emerald-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Wealth Management Strategies</h1>
          <p className="text-xl text-emerald-200/80 max-w-2xl mx-auto">
            Explore our comprehensive library of expert guides, covering everything from tax optimization to estate planning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HUBS.map((hub) => (
            <div key={hub.id} className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden group">
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {/* Basic icon fallback or map iconName string to component if needed. 
                      For now using ArrowRight in the icon logic in Home, but here using consistent visual style. */}
                   <ArrowRight />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {hub.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {hub.description}
                </p>
                <div className="space-y-2 mb-6">
                  {hub.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link 
                  to={`/hub/${hub.slug}`} 
                  className="flex items-center justify-between text-emerald-700 font-bold group-hover:text-emerald-900 transition-colors"
                >
                  <span>Explore {hub.title}</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-emerald-100">
          <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-4">Need personalized guidance?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            While these strategies provide a solid foundation, nothing beats a tailored plan from a fiduciary professional.
          </p>
          <Link 
            to="/find-advisor" 
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Find Your Advisor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Strategies;