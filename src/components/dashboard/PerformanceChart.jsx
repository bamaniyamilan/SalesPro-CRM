import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PerformanceChart = () => {
  const data = [
    { month: 'Jan', revenue: 40000, deals: 24 },
    { month: 'Feb', revenue: 52000, deals: 31 },
    { month: 'Mar', revenue: 48000, deals: 28 },
    { month: 'Apr', revenue: 68000, deals: 42 },
    { month: 'May', revenue: 72000, deals: 45 },
    { month: 'Jun', revenue: 85000, deals: 52 },
    { month: 'Jul', revenue: 92000, deals: 58 },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <p className="text-gray-600">Revenue and deals closed over time</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg">
            Monthly
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            Quarterly
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            Yearly
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              fill="#93c5fd" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="deals" 
              stroke="#8b5cf6" 
              fill="#c4b5fd" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-8 mt-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Deals Closed</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;