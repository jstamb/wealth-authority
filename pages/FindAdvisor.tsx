import React from 'react';
import LeadForm from '../components/LeadForm';
import { Shield, CheckCircle } from 'lucide-react';

const FindAdvisor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
              <Shield size={24} />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Find Your Perfect Financial Match</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few simple questions to get paired with up to 3 vetted, fiduciary wealth managers who specialize in your financial situation.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
               <div className="bg-emerald-900 p-6 text-white text-center">
                  <h3 className="text-2xl font-serif font-bold">Get Started</h3>
                  <p className="text-emerald-100 opacity-90">It takes less than 2 minutes</p>
               </div>
               <div className="p-1">
                 {/* Lead Form without its internal header */}
                 <LeadForm isCompact={true} />
               </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Why Wealth Authority?</h3>
              <ul className="space-y-4">
                {[
                  "100% Fiduciary Advisors",
                  "Vetted for Experience",
                  "No Cost to Match",
                  "Privacy Guaranteed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="text-emerald-500 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  "I was matched with a CFA in Chicago who helped me reduce my tax bill by 20% in the first year."
                </p>
                <p className="text-xs font-bold text-gray-900 mt-2">- Sarah T.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAdvisor;