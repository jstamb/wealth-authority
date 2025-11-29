import React, { useState } from 'react';
import { ASSET_RANGES, TIMELINES } from '../constants';
import { LeadFormData } from '../types';
import { CheckCircle, Lock } from 'lucide-react';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ncy1J3g3mD0v3IddFW2/webhook-trigger/70eaad9e-3099-4349-b6bb-18e8193fcbf9';

interface LeadFormProps {
  cityName?: string;
  isCompact?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ cityName = 'your area', isCompact = false }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: cityName === 'your area' ? '' : cityName,
    assets: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      source: 'Wealth Authority Main Lead Form',
      formType: 'advisor-match'
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 p-8 rounded-xl shadow-lg border border-emerald-100 text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="text-emerald-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-2">Match Request Received</h3>
        <p className="text-gray-600">
          Thank you, {formData.firstName}. We have identified potential advisors in {cityName}. They will contact you shortly to schedule a consultation.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 ${isCompact ? 'p-4' : 'p-0'}`}>
      {!isCompact && (
        <div className="bg-emerald-900 p-6 text-white text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">Find a Vetted Advisor</h3>
          <p className="text-emerald-100 text-sm">Get matched with top-rated fiduciary wealth managers in {cityName}.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {step === 1 && (
          <div className="space-y-4 fade-in">
             <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Investable Assets</label>
                <select 
                  name="assets" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
                  value={formData.assets}
                  onChange={handleChange}
                >
                  <option value="">Select Asset Range</option>
                  {ASSET_RANGES.map(range => <option key={range} value={range}>{range}</option>)}
                </select>
             </div>
             
             <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">When do you need help?</label>
                <select 
                  name="timeline" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select Timeline</option>
                  {TIMELINES.map(time => <option key={time} value={time}>{time}</option>)}
                </select>
             </div>

             <button 
               type="button" 
               onClick={() => setStep(2)}
               disabled={!formData.assets || !formData.timeline}
               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
             >
               Continue &rarr;
             </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 text-gray-900 bg-white"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 text-gray-900 bg-white"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 text-gray-900 bg-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 text-gray-900 bg-white"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md flex justify-center items-center"
             >
               {isSubmitting ? (
                 <span className="animate-pulse">Submitting...</span>
               ) : (
                 "Request an Advisor"
               )}
            </button>
            
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-2">
              <Lock size={12} /> Your information is secure and confidential.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LeadForm;