
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Year 0', amount: 100000 },
  { year: 'Year 5', amount: 146932 },
  { year: 'Year 10', amount: 215892 },
  { year: 'Year 15', amount: 317216 },
  { year: 'Year 20', amount: 466095 },
  { year: 'Year 25', amount: 684847 },
  { year: 'Year 30', amount: 1006265 },
];

const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-80 bg-white rounded-lg p-4 flex flex-col shadow-sm border border-gray-100">
      <h4 className="text-center font-serif font-bold text-emerald-900 mb-4">The Power of Professional Management</h4>
      <p className="text-center text-xs text-gray-500 mb-4">Hypothetical growth of $100k at 8% annual return over 30 years</p>
      
      {/* 
        Container Logic Update:
        Instead of relying purely on flex-grow which can be 0 initially, 
        we give it a explicit minimal structure to prevent the "width(-1)" Recharts error.
      */}
      <div className="flex-1 w-full min-h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              tick={{fontSize: 10, fill: '#6b7280'}} 
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis 
              tickFormatter={(value) => `$${value / 1000}k`} 
              tick={{fontSize: 10, fill: '#6b7280'}} 
              axisLine={false}
              tickLine={false}
              width={35}
            />
            <Tooltip 
              formatter={(value) => [`$${new Intl.NumberFormat('en-US').format(value as number)}`, 'Portfolio Value']}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#059669" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorAmount)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
