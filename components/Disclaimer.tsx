import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DisclaimerProps {
  type?: 'standard' | 'calculator' | 'investment';
}

const DISCLAIMERS = {
  standard: `The information provided on this website is for general informational purposes only and does not constitute financial, tax, or legal advice. Financial situations vary, and this content may not apply to your specific circumstances. Consult with a qualified financial advisor, tax professional, or attorney before making financial decisions. Wealth Authority is not a registered investment advisor and does not provide personalized financial advice. We may receive compensation when you are matched with a wealth management professional.`,

  calculator: `This calculator provides estimates based on the information you enter and general assumptions. Results are for educational purposes only and should not be considered financial advice. Actual results may vary significantly based on market conditions, fees, taxes, and other factors. Consult a qualified financial professional for advice tailored to your situation.`,

  investment: `Investing involves risk, including the potential loss of principal. Past performance does not guarantee future results. The information presented is not intended as investment advice and should not be relied upon as such. Before making any investment decisions, consult with a qualified financial advisor who can evaluate your specific situation.`
};

const Disclaimer: React.FC<DisclaimerProps> = ({ type = 'standard' }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">Important Disclosure</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {DISCLAIMERS[type]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
