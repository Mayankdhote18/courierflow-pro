// src/pages/dashboard/Dashboard.tsx
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Truck, 
  User, 
  LogOut, 
  Package, 
  MapPin, 
  BarChart3,
  Users,
  Settings,
  Bell,
  Home,
  Calendar,
  DollarSign,
  Clock
} from 'lucide-react';

// Import individual dashboard components
import CustomerDashboard from './CustomerDashboard';
import AdminDashboard from './AdminDashboard';
import ManagerDashboard from './ManagerDashboard';
import AgentDashboard from './AgentDashboard';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Navigation items based on user role
  const getNavigationItems = () => {
    const commonItems = [
      { name: 'Dashboard', icon: Home, href: '/dashboard' },
      { name: 'Profile', icon: User, href: '/profile' },
      { name: 'Settings', icon: Settings, href: '/settings' }
    ];

    const roleSpecificItems = {
      customer: [
        { name: 'Book Delivery', icon: Package, href: '/book' },
        { name: 'Track Orders', icon: MapPin, href: '/track' },
        { name: 'Payment History', icon: DollarSign, href: '/payments' }
      ],
      admin: [
        { name: 'User Management', icon: Users, href: '/admin/users' },
        { name: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
        { name: 'System Settings', icon: Settings, href: '/admin/settings' }
      ],
      manager: [
        { name: 'Team Management', icon: Users, href: '/manager/team' },
        { name: 'Operations', icon: BarChart3, href: '/manager/operations' },
        { name: 'Reports', icon: Calendar, href: '/manager/reports' }
      ],
      agent: [
        { name: 'My Deliveries', icon: Package, href: '/agent/deliveries' },
        { name: 'Route Planning', icon: MapPin, href: '/agent/routes' },
        { name: 'Work Schedule', icon: Clock, href: '/agent/schedule' }
      ]
    };

    return [...commonItems, ...roleSpecificItems[user.role]];
  };

  const navigationItems = getNavigationItems();

  // Render role-specific dashboard content
  const renderDashboardContent = () => {
    switch (user.role) {
      case 'customer':
        return <CustomerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'agent':
        return <AgentDashboard />;
      default:
        return <CustomerDashboard />;
    }
  };

  const getRoleColor = (role: string) => {
    const colors = {
      customer: 'bg-blue-500',
      admin: 'bg-red-500',
      manager: 'bg-green-500',
      agent: 'bg-yellow-500'
    };
    return colors[role as keyof typeof colors] || 'bg-gray-500';
  };

  const getRoleLabel = (role: string) => {
    const labels = {
      customer: 'Customer',
      admin: 'Administrator',
      manager: 'Manager',
      agent: 'Delivery Agent'
    };
    return labels[role as keyof typeof labels] || role;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        {/* Logo and User Info */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <Truck className="h-8 w-8 text-white mr-2" />
            <span className="text-xl font-bold text-white">CourierFlow</span>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {user.photoURL ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt="Profile"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {user.displayName || 'User'}
                </p>
                <div className="flex items-center">
                  <span className={`inline-block h-2 w-2 rounded-full ${getRoleColor(user.role)} mr-2`} />
                  <p className="text-xs text-gray-500">{getRoleLabel(user.role)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Sign Out */}
          <div className="p-4 border-t">
            <button
              onClick={handleSignOut}
              className="group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">
                {getRoleLabel(user.role)} Dashboard
              </h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {renderDashboardContent()}
        </div>
      </div>
    </div>
  );
}