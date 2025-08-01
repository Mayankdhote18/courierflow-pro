// src/pages/dashboard/AdminDashboard.tsx

import { Users, Package, BarChart3, Settings, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  const adminStats = [
    { name: 'Total Users', value: '2,547', icon: Users, color: 'bg-blue-500', change: '+12% from last month' },
    { name: 'Active Orders', value: '847', icon: Package, color: 'bg-green-500', change: '+5% from yesterday' },
    { name: 'Revenue', value: '₹1,24,560', icon: TrendingUp, color: 'bg-purple-500', change: '+18% this month' },
    { name: 'System Issues', value: '3', icon: AlertTriangle, color: 'bg-red-500', change: 'Needs attention' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Admin Control Center</h2>
        <p className="text-red-100">Monitor and manage your entire CourierFlow ecosystem</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent System Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm">New user registration: john.doe@email.com</span>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm">Payment processed: ₹1,250</span>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="h-2 w-2 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-sm">System maintenance completed</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <Users className="h-5 w-5 inline mr-3 text-blue-500" />
              Manage Users
            </button>
            <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <BarChart3 className="h-5 w-5 inline mr-3 text-green-500" />
              View Analytics
            </button>
            <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="h-5 w-5 inline mr-3 text-purple-500" />
              System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}