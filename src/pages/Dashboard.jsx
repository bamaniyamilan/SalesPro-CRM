import StatsCards from '../components/dashboard/StatsCards';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentActivity from '../components/dashboard/RecentActivity';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,580',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="text-green-500" size={24} />,
      color: 'bg-green-50'
    },
    {
      title: 'New Deals',
      value: '48',
      change: '+8.2%',
      trend: 'up',
      icon: <Target className="text-blue-500" size={24} />,
      color: 'bg-blue-50'
    },
    {
      title: 'Active Contacts',
      value: '1,248',
      change: '+5.3%',
      trend: 'up',
      icon: <Users className="text-purple-500" size={24} />,
      color: 'bg-purple-50'
    },
    {
      title: 'Conversion Rate',
      value: '24.8%',
      change: '+3.1%',
      trend: 'up',
      icon: <TrendingUp className="text-orange-500" size={24} />,
      color: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary">
            + New Deal
          </button>
          <button className="btn-secondary">
            Export Report
          </button>
        </div>
      </div>

      <StatsCards stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;