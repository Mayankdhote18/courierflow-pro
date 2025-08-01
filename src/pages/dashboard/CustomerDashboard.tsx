// src/pages/dashboard/CustomerDashboard.tsx

import { 
  Package, 
  MapPin, 
  Clock, 
  DollarSign, 
  Plus,
  Truck,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function CustomerDashboard() {
  // Mock data - replace with real data later
  const stats = [
    {
      name: 'Total Orders',
      value: '12',
      icon: Package,
      color: 'bg-blue-500',
      change: '+2 this month'
    },
    {
      name: 'In Transit',
      value: '3',
      icon: Truck,
      color: 'bg-yellow-500',
      change: 'Live tracking'
    },
    {
      name: 'Delivered',
      value: '9',
      icon: CheckCircle,
      color: 'bg-green-500',
      change: '100% success rate'
    },
    {
      name: 'Total Spent',
      value: '₹2,450',
      icon: DollarSign,
      color: 'bg-purple-500',
      change: 'This month'
    }
  ];

  const recentOrders = [
    {
      id: 'CF001',
      recipient: 'John Doe',
      destination: 'Mumbai, MH',
      status: 'In Transit',
      estimatedDelivery: '2024-01-15',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'CF002',
      recipient: 'Jane Smith',
      destination: 'Delhi, DL',
      status: 'Delivered',
      estimatedDelivery: '2024-01-14',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'CF003',
      recipient: 'Mike Johnson',
      destination: 'Bangalore, KA',
      status: 'Out for Delivery',
      estimatedDelivery: '2024-01-15',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="text-blue-100 mb-4">
          Ready to send your next package? We'll handle it with care.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Book New Delivery
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-50 transition-colors text-center">
          <Package className="h-8 w-8 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Book Delivery</h3>
          <p className="text-sm text-gray-500">Send a package anywhere in India</p>
        </button>

        <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 hover:bg-green-50 transition-colors text-center">
          <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Track Package</h3>
          <p className="text-sm text-gray-500">Get real-time delivery updates</p>
        </button>

        <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 hover:bg-purple-50 transition-colors text-center">
          <Clock className="h-8 w-8 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule Pickup</h3>
          <p className="text-sm text-gray-500">Plan your deliveries in advance</p>
        </button>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Est. Delivery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.recipient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.destination}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.estimatedDelivery}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Track
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-blue-500 mt-1" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Pro Tips</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use proper packaging for fragile items</li>
              <li>• Double-check recipient address before booking</li>
              <li>• Schedule pickups during business hours for faster service</li>
              <li>• Take photos of packages for your records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}