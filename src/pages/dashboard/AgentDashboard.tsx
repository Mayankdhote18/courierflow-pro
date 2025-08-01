// src/pages/dashboard/AgentDashboard.tsx

import { Package, Clock, Star, Navigation } from 'lucide-react';


export default function AgentDashboard() {
  const agentStats = [
    { name: "Today's Deliveries", value: '8', icon: Package, color: 'bg-yellow-500', change: '2 pending' },
    { name: 'Distance Covered', value: '45 km', icon: Navigation, color: 'bg-blue-500', change: 'Today' },
    { name: 'Rating', value: '4.8', icon: Star, color: 'bg-green-500', change: 'Last 30 days' },
    { name: 'On-time Rate', value: '96%', icon: Clock, color: 'bg-purple-500', change: 'This month' }
  ];

  const todayDeliveries = [
    { id: 'CF001', address: '123 MG Road, Mumbai', time: '10:00 AM', status: 'Completed', customer: 'John Doe' },
    { id: 'CF002', address: '456 Park Street, Mumbai', time: '11:30 AM', status: 'In Progress', customer: 'Jane Smith' },
    { id: 'CF003', address: '789 Link Road, Mumbai', time: '2:00 PM', status: 'Pending', customer: 'Mike Johnson' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600';
      case 'In Progress': return 'text-blue-600';
      case 'Pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Deliver!</h2>
        <p className="text-yellow-100">Track today's performance and manage deliveries efficiently.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agentStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-lg p-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deliveries List */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Deliveries</h3>
        <div className="space-y-4">
          {todayDeliveries.map((delivery) => (
            <div key={delivery.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="text-sm font-semibold text-gray-700">{delivery.id} - {delivery.customer}</p>
                <p className="text-sm text-gray-500">{delivery.address}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{delivery.time}</p>
                <p className={`text-sm font-medium ${getStatusColor(delivery.status)}`}>{delivery.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
