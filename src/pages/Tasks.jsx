import TaskBoard from '../components/tasks/TaskBoard';
import { Plus, Calendar, Filter, Users } from 'lucide-react';
import { useState } from 'react';

const Tasks = () => {
  const [view, setView] = useState('board');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">Manage your team's tasks and projects</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setView('board')}
              className={`px-4 py-2 text-sm font-medium ${
                view === 'board'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Board
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 text-sm font-medium ${
                view === 'list'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              List
            </button>
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <Calendar size={18} />
            <span>Calendar</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus size={18} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium">
          <Filter size={16} />
          <span>All Tasks</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Users size={16} />
          <span>My Tasks</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Completed</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span>Overdue</span>
        </button>
      </div>

      <TaskBoard />
    </div>
  );
};

export default Tasks;