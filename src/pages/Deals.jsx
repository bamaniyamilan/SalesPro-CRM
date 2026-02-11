import Pipeline from '../components/deals/Pipeline';
import { Plus, Filter, Download, BarChart3 } from 'lucide-react';

const Deals = () => {
  const summary = [
    { label: 'Total Value', value: '$245,000', change: '+12%' },
    { label: 'Avg Deal Size', value: '$24,500', change: '+8%' },
    { label: 'Win Rate', value: '42%', change: '+5%' },
    { label: 'Sales Cycle', value: '32 days', change: '-3 days' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deals</h1>
          <p className="text-gray-600">Manage your sales pipeline and deals</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <BarChart3 size={18} />
            <span>Reports</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Download size={18} />
            <span>Export</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus size={18} />
            <span>New Deal</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summary.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-sm font-medium text-gray-600">{item.label}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <span className="text-sm font-medium text-green-600">{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      <Pipeline />
    </div>
  );
};

export default Deals;