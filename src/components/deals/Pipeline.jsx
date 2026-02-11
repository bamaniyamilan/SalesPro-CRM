import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

const Pipeline = () => {
  const stages = [
    {
      id: 'lead',
      title: 'Lead',
      count: 12,
      color: 'bg-blue-100 text-blue-800',
      deals: [
        { id: '1', title: 'Enterprise Software', value: '$50,000', days: 5 },
        { id: '2', title: 'Marketing Services', value: '$25,000', days: 2 },
      ]
    },
    {
      id: 'qualified',
      title: 'Qualified',
      count: 8,
      color: 'bg-purple-100 text-purple-800',
      deals: [
        { id: '3', title: 'Cloud Migration', value: '$75,000', days: 7 },
      ]
    },
    {
      id: 'proposal',
      title: 'Proposal',
      count: 6,
      color: 'bg-yellow-100 text-yellow-800',
      deals: [
        { id: '4', title: 'Website Redesign', value: '$30,000', days: 3 },
      ]
    },
    {
      id: 'negotiation',
      title: 'Negotiation',
      count: 4,
      color: 'bg-orange-100 text-orange-800',
      deals: []
    },
    {
      id: 'closed',
      title: 'Closed Won',
      count: 10,
      color: 'bg-green-100 text-green-800',
      deals: [
        { id: '5', title: 'Annual Support', value: '$15,000', days: 0 },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Sales Pipeline</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-green-500" size={18} />
            <span className="text-sm text-gray-600">Total Value: <span className="font-semibold">$245,000</span></span>
          </div>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={() => {}}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stage) => (
            <div key={stage.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">{stage.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${stage.color}`}>
                    {stage.count}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
              
              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-3 min-h-[200px]"
                  >
                    {stage.deals.map((deal, index) => (
                      <Draggable key={deal.id} draggableId={deal.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-gray-900">{deal.title}</h4>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-gray-900">{deal.value}</span>
                              <span className="text-sm text-gray-500">{deal.days}d</span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              
              <button className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                + Add Deal
              </button>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Pipeline;