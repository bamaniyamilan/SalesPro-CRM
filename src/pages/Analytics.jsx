import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, Clock } from 'lucide-react';

const Analytics = () => {
  const revenueData = [
    { month: 'Jan', revenue: 40000, target: 45000 },
    { month: 'Feb', revenue: 52000, target: 50000 },
    { month: 'Mar', revenue: 48000, target: 55000 },
    { month: 'Apr', revenue: 68000, target: 60000 },
    { month: 'May', revenue: 72000, target: 65000 },
    { month: 'Jun', revenue: 85000, target: 70000 },
  ];

  const sourceData = [
    { name: 'Website', value: 40, color: '#3b82f6' },
    { name: 'Referral', value: 25, color: '#8b5cf6' },
    { name: 'Social', value: 20, color: '#10b981' },
    { name: 'Email', value: 15, color: '#f59e0b' },
  ];

  const performanceMetrics = [
    { icon: <TrendingUp size={20} />, label: 'Growth Rate', value: '24.5%', change: '+3.2%' },
    { icon: <Users size={20} />, label: 'New Leads', value: '142', change: '+18%' },
    { icon: <Target size={20} />, label: 'Conversion Rate', value: '32.8%', change: '+2.4%' },
    { icon: <Clock size={20} />, label: 'Avg Response Time', value: '2.4h', change: '-0.8h' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Comprehensive analytics and insights</p>
        </div>
        <div className="flex space-x-3">
          <select className="input-field text-sm py-2">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
          <button className="btn-primary">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <span className="text-sm font-medium text-green-600 mt-1 block">
                  {metric.change}
                </span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue vs Target</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" name="Actual Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Revenue Target" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Lead Sources</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {sourceData.map((source, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="text-sm text-gray-600">{source.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Team Performance</h3>
          <div className="space-y-4">
            {[
              { name: 'John Smith', deals: 24, value: '$145,000', target: 120 },
              { name: 'Sarah Johnson', deals: 18, value: '$98,000', target: 100 },
              { name: 'Mike Chen', deals: 32, value: '$210,000', target: 150 },
              { name: 'Emily Davis', deals: 15, value: '$87,000', target: 90 },
            ].map((rep, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                    {rep.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{rep.name}</p>
                    <p className="text-sm text-gray-500">{rep.deals} deals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{rep.value}</p>
                  <p className="text-sm text-gray-500">
                    {((rep.deals / rep.target) * 100).toFixed(1)}% of target
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Enterprise Software', revenue: '$85,000', growth: '+25%' },
              { name: 'Consulting Services', revenue: '$62,000', growth: '+18%' },
              { name: 'Training Programs', revenue: '$48,000', growth: '+32%' },
              { name: 'Support Plans', revenue: '$35,000', growth: '+12%' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.revenue} revenue</p>
                </div>
                <span className="text-sm font-medium text-green-600">{product.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;