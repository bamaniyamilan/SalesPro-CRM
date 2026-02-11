import { CheckCircle, UserPlus, DollarSign, MessageSquare, Calendar } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'deal',
      icon: <DollarSign className="text-green-500" size={16} />,
      title: 'New deal closed',
      description: 'Enterprise Software - $50,000',
      time: '2 hours ago',
      user: 'You'
    },
    {
      id: 2,
      type: 'contact',
      icon: <UserPlus className="text-blue-500" size={16} />,
      title: 'New contact added',
      description: 'Sarah Johnson from TechCorp',
      time: '4 hours ago',
      user: 'Alex Chen'
    },
    {
      id: 3,
      type: 'task',
      icon: <CheckCircle className="text-purple-500" size={16} />,
      title: 'Task completed',
      description: 'Send proposal to ABC Corp',
      time: '1 day ago',
      user: 'You'
    },
    {
      id: 4,
      type: 'meeting',
      icon: <Calendar className="text-orange-500" size={16} />,
      title: 'Meeting scheduled',
      description: 'Product demo with John Doe',
      time: '2 days ago',
      user: 'Maria Garcia'
    },
    {
      id: 5,
      type: 'message',
      icon: <MessageSquare className="text-indigo-500" size={16} />,
      title: 'New message',
      description: 'From marketing@example.com',
      time: '3 days ago',
      user: 'You'
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="mt-1">
              <div className="p-2 bg-gray-100 rounded-lg">
                {activity.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-xs font-medium mr-2">
                  {activity.user.charAt(0)}
                </div>
                <span className="text-xs text-gray-500">{activity.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;