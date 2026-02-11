import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events = [
    {
      id: 1,
      title: 'Team Meeting',
      date: new Date(2024, 0, 15),
      time: '10:00 AM',
      duration: 60,
      type: 'meeting',
      participants: ['John', 'Sarah', 'Mike']
    },
    {
      id: 2,
      title: 'Client Demo',
      date: new Date(2024, 0, 16),
      time: '2:00 PM',
      duration: 90,
      type: 'demo',
      participants: ['Emily']
    },
    {
      id: 3,
      title: 'Project Review',
      date: new Date(2024, 0, 18),
      time: '11:00 AM',
      duration: 120,
      type: 'review',
      participants: ['Alex', 'Maria']
    },
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`prev-${i}`} className="h-24 p-2 border border-gray-200 text-gray-400"></div>);
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayEvents = events.filter(event => 
        event.date.getDate() === day && 
        event.date.getMonth() === month && 
        event.date.getFullYear() === year
      );
      
      days.push(
        <div key={day} className="h-24 p-2 border border-gray-200 hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${
              date.toDateString() === new Date().toDateString()
                ? 'bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center'
                : 'text-gray-900'
            }`}>
              {day}
            </span>
          </div>
          <div className="mt-1 space-y-1 overflow-y-auto max-h-16">
            {dayEvents.map(event => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${
                  event.type === 'meeting' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'demo' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}
                title={`${event.title} at ${event.time}`}
              >
                {event.time} - {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Manage your schedule and meetings</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="p-2 hover:bg-gray-100 rounded-l-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="px-4 py-2 text-sm font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="p-2 hover:bg-gray-100 rounded-r-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus size={18} />
            <span>New Event</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map(day => (
            <div key={day} className="p-4 text-center text-sm font-medium text-gray-900">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {renderCalendar()}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">
                      {event.date.getDate()}
                    </div>
                    <div className="text-xs text-gray-600">
                      {monthNames[event.date.getMonth()].slice(0, 3)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{event.time} • {event.duration} minutes</p>
                    <div className="flex items-center mt-2 space-x-2">
                      {event.participants.map((participant, idx) => (
                        <div key={idx} className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-xs font-medium">
                          {participant.charAt(0)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Plus size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Meetings This Week</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Hours Scheduled</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">18.5</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">Available Time</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">62%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;