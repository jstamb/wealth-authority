import React, { useState } from 'react';
import { Calculator, Lock, ArrowRight } from 'lucide-react';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ncy1J3g3mD0v3IddFW2/webhook-trigger/70eaad9e-3099-4349-b6bb-18e8193fcbf9';

const RetirementCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [annualIncome, setAnnualIncome] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric chars
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAnnualIncome(value);
  };

  const formatCurrency = (val: string | number) => {
    if (!val) return '';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(val));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calculateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const incomeNum = Number(annualIncome);
    const nestEgg = incomeNum * 25; // 4% rule

    const payload = {
      ...formData,
      desiredAnnualRetirementIncome: incomeNum,
      calculatedNestEgg: nestEgg,
      source: 'Retirement Calculator Tool',
      formType: 'calculator'
    };

    try {
      // Send to webhook
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Used to prevent CORS errors on client-side opaque requests
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Submission error', error);
    } finally {
      // Always show result even if webhook fails (graceful degradation)
      setResult(nestEgg);
      setStep(3);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-10 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
      <div className="bg-emerald-900 p-6 text-white flex items-center gap-3">
        <div className="p-2 bg-emerald-800 rounded-lg">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold">4% Rule Calculator</h3>
          <p className="text-emerald-200 text-sm">Determine your "Retirement Number"</p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {step === 1 && (
          <div className="space-y-6 fade-in">
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                Desired Annual Retirement Income
              </label>
              <p className="text-gray-500 text-sm mb-4">
                How much money do you want to withdraw from your portfolio each year (pre-tax)?
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="text"
                  value={annualIncome ? Number(annualIncome).toLocaleString() : ''}
                  onChange={handleIncomeChange}
                  placeholder="100,000"
                  className="w-full pl-8 pr-4 py-4 text-2xl font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-0 outline-none transition-colors"
                />
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!annualIncome}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              Calculate My Number <ArrowRight size={20} />
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={calculateAndSubmit} className="space-y-4 fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900">Your results are ready</h4>
              <p className="text-gray-600">Enter your details to reveal your personalized retirement target.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  value={formData.firstName}
                  onChange={handleFormChange}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 text-gray-900"
                value={formData.email}
                onChange={handleFormChange}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 text-gray-900"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg mt-2"
            >
              {isSubmitting ? 'Calculating...' : 'Reveal My Number'}
            </button>
            <p className="text-xs text-center text-gray-400 flex justify-center items-center gap-1">
              <Lock size={12} /> Secure Calculation
            </p>
          </form>
        )}

        {step === 3 && result && (
          <div className="text-center fade-in">
            <h4 className="text-lg font-medium text-gray-600 mb-2">To generate {formatCurrency(annualIncome)}/year</h4>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-6">
              <p className="text-sm font-bold text-emerald-800 uppercase tracking-wide mb-1">Your Target Portfolio</p>
              <p className="text-4xl md:text-5xl font-serif font-bold text-emerald-900">
                {formatCurrency(result)}
              </p>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm">
              According to the 4% rule, you need approximately 25 times your annual expenses invested in a diversified portfolio to sustain your lifestyle for 30 years.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 text-left border-l-4 border-emerald-500">
              <h5 className="font-bold text-emerald-900 mb-1">Expert Tip:</h5>
              <p className="text-sm text-gray-700">
                This is a gross estimate. Inflation, taxes, and market volatility can impact this number significantly. A wealth manager can run a Monte Carlo simulation to stress-test this amount.
              </p>
            </div>
            
            <button 
              onClick={() => { setStep(1); setAnnualIncome(''); setResult(null); }}
              className="mt-6 text-emerald-600 font-bold hover:text-emerald-800 text-sm"
            >
              Start New Calculation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetirementCalculator;