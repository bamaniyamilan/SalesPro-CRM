import TaskItem from './TaskItem';
import { Plus } from 'lucide-react';

const TaskBoard = () => {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      count: 5,
      color: 'bg-gray-100',
      tasks: [
        {
          id: 1,
          title: 'Prepare quarterly report',
          description: 'Collect data and create presentation',
          priority: 'high',
          assignee: { name: 'You', color: 'bg-blue-500' },
          dueDate: '2024-01-20',
          tags: ['Report', 'Presentation']
        },
        {
          id: 2,
          title: 'Client meeting preparation',
          description: 'Review client requirements',
          priority: 'medium',
          assignee: { name: 'Alex', color: 'bg-green-500' },
          dueDate: '2024-01-18',
          tags: ['Meeting']
        }
      ]
    },
    {
      id: 'inProgress',
      title: 'In Progress',
      count: 3,
      color: 'bg-blue-100',
      tasks: [
        {
          id: 3,
          title: 'Website redesign',
          description: 'Complete homepage mockup',
          priority: 'high',
          assignee: { name: 'Sarah', color: 'bg-purple-500' },
          dueDate: '2024-01-25',
          tags: ['Design', 'Development']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      count: 2,
      color: 'bg-yellow-100',
      tasks: [
        {
          id: 4,
          title: 'Marketing campaign review',
          description: 'Review Q1 marketing materials',
          priority: 'medium',
          assignee: { name: 'Mike', color: 'bg-orange-500' },
          dueDate: '2024-01-22',
          tags: ['Marketing', 'Review']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      count: 8,
      color: 'bg-green-100',
      tasks: [
        {
          id: 5,
          title: 'Team meeting notes',
          description: 'Share notes with the team',
          priority: 'low',
          assignee: { name: 'You', color: 'bg-blue-500' },
          dueDate: '2024-01-15',
          tags: ['Notes']
        }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {columns.map((column) => (
        <div key={column.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">{column.title}</h3>
              <span className="px-2 py-1 text-xs font-medium bg-white rounded-full">
                {column.count}
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            {column.tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
            
            <button className="w-full py-3 text-gray-500 hover:text-gray-700 text-sm font-medium border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center">
              <Plus size={16} className="mr-2" />
              Add Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;