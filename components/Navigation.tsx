import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Sword } from 'lucide-react';
import { HUBS, CITIES } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-emerald-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center relative overflow-hidden">
                <Shield className="text-emerald-950 w-5 h-5 absolute z-10" strokeWidth={2.5} />
                <Sword className="text-emerald-800 w-4 h-4 absolute z-0 transform rotate-45 opacity-60" strokeWidth={3} />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">Wealth Authority</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-emerald-400 transition-colors font-medium">Home</Link>
            
            {/* Cities Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-medium focus:outline-none h-full px-1">
                Find by City <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full w-64 bg-white rounded-b-md shadow-xl py-2 hidden group-hover:block border-t-4 border-emerald-600">
                {CITIES.slice(0, 8).map(city => (
                  <Link 
                    key={city.id} 
                    to={`/city/${city.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {city.name}
                  </Link>
                ))}
                <Link to="/cities" className="block px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                  View All Cities &rarr;
                </Link>
              </div>
            </div>

            {/* Topics Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-medium focus:outline-none h-full px-1">
                Topics <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full w-64 bg-white rounded-b-md shadow-xl py-2 hidden group-hover:block border-t-4 border-emerald-600">
                {HUBS.map(hub => (
                  <Link 
                    key={hub.id} 
                    to={`/hub/${hub.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {hub.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/find-advisor" 
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-5 py-2.5 rounded font-bold transition-all transform hover:scale-105"
            >
              Get Matched
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-900 border-t border-emerald-800 absolute w-full left-0 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium hover:bg-emerald-800 rounded text-emerald-100"
            >
              Home
            </Link>
            
            <div className="px-3 py-2">
              <div className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Popular Cities</div>
              <div className="grid grid-cols-2 gap-2">
                {CITIES.slice(0, 6).map(city => (
                   <Link 
                     key={city.id} 
                     to={`/city/${city.slug}`} 
                     onClick={closeMenu}
                     className="text-sm text-gray-300 hover:text-white py-1 block"
                   >
                     {city.name}
                   </Link>
                ))}
              </div>
              <Link 
                to="/cities" 
                onClick={closeMenu}
                className="text-sm font-bold text-emerald-300 hover:text-white mt-2 block"
              >
                View All Cities &rarr;
              </Link>
            </div>

            <div className="px-3 py-2 border-t border-emerald-800">
              <div className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Expertise</div>
              <div className="space-y-1">
                {HUBS.map(hub => (
                   <Link 
                     key={hub.id} 
                     to={`/hub/${hub.slug}`} 
                     onClick={closeMenu}
                     className="block text-sm text-gray-300 hover:text-white py-1"
                   >
                     {hub.title}
                   </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/find-advisor" 
              onClick={closeMenu}
              className="block text-center mt-4 bg-emerald-500 text-emerald-950 py-3 rounded font-bold mx-3 mb-4"
            >
              Find an Advisor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;