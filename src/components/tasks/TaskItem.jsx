import { Calendar, AlertCircle, MoreVertical } from 'lucide-react';

const TaskItem = ({ task }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-medium text-gray-900">{task.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
        </span>
        
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${task.assignee.color}`}>
            {task.assignee.name.charAt(0)}
          </div>
          <span className="text-xs text-gray-600">{task.assignee.name}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={14} className="text-gray-400" />
            <span className="text-xs text-gray-600">{task.dueDate}</span>
          </div>
          
          {task.priority === 'high' && (
            <div className="flex items-center space-x-1">
              <AlertCircle size={14} className="text-red-500" />
              <span className="text-xs text-red-600">Urgent</span>
            </div>
          )}
        </div>
        
        <div className="flex space-x-1">
          {task.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;