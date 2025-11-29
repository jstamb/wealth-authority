
import React from 'react';
import { Link } from 'react-router-dom';
import { HUBS } from '../constants';
import { Shield, Sword } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-sm flex items-center justify-center relative overflow-hidden">
                <Shield className="text-emerald-950 w-5 h-5 absolute z-10" strokeWidth={2.5} />
                <Sword className="text-emerald-800 w-4 h-4 absolute z-0 transform rotate-45 opacity-60" strokeWidth={3} />
              </div>
              <span className="font-serif font-bold text-xl text-white">Wealth Authority</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting retail investors with vetted fiduciary wealth managers in top US markets. 
              Build your legacy with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Wealth Topics</h3>
            <ul className="space-y-2 text-sm">
              {HUBS.slice(0, 5).map(hub => (
                <li key={hub.id}>
                  <Link to={`/hub/${hub.slug}`} className="hover:text-emerald-400 transition-colors">
                    {hub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Legal</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              The information provided on this website is for general informational purposes only and does not constitute financial, tax, or legal advice. 
              Wealth Authority is not a registered investment advisor. We may receive compensation when you are matched with a wealth management professional.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Wealth Authority. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
