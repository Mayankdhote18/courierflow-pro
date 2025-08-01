// src/pages/LandingPage.tsx
import React from 'react';
import { Truck, Package, MapPin, Clock, Shield, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CourierFlow Pro
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a 
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Deliver with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Advanced courier management system with real-time tracking, 
                smart routing, and comprehensive dashboards for all stakeholders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Tracking
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CourierFlow Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and designed for scale, 
              our platform delivers results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your packages in real-time with GPS precision. 
                Get live updates and estimated delivery times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-green-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Routing</h3>
              <p className="text-gray-600">
                AI-powered route optimization ensures fastest delivery 
                times and reduced operational costs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee. 
                Your data and packages are always safe.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Role Dashboards</h3>
              <p className="text-gray-600">
                Separate interfaces for customers, agents, managers, 
                and admins with role-specific features.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-red-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day and express delivery options with 
                accurate time predictions and updates.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fleet Management</h3>
              <p className="text-gray-600">
                Complete fleet tracking and management with 
                performance analytics and maintenance scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Delivery Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using CourierFlow Pro 
            to streamline their operations and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">CourierFlow Pro</h3>
            </div>
            <p className="text-gray-400">
              Built with ❤️ for the future of logistics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;