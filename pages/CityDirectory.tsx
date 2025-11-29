import React from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';

const CityDirectory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-emerald-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800 mb-6">
            <MapPin size={32} className="text-emerald-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Wealth Management by City</h1>
          <p className="text-xl text-emerald-200/80 max-w-2xl mx-auto">
            Find vetted fiduciary advisors who understand the specific tax laws, cost of living, and financial landscape of your local market.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES.map((city) => (
            <Link 
              key={city.id} 
              to={`/city/${city.slug}`}
              className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-6 z-20">
                   <h3 className="text-2xl font-serif font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {city.name}
                  </h3>
                   <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mt-1">
                    <MapPin size={12} /> {city.state}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {city.description}
                </p>
                <div className="flex items-center justify-between text-emerald-700 font-bold group-hover:text-emerald-900 transition-colors pt-4 border-t border-gray-100">
                  <span>View Local Guide</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-emerald-100">
          <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-4">Don't see your city?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We serve clients nationwide. Connect with a remote-capable fiduciary advisor who can manage your wealth regardless of location.
          </p>
          <Link 
            to="/find-advisor" 
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Find a Remote Advisor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CityDirectory;