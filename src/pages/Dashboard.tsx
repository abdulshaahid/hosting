import React from 'react';
import { Cpu, HardDrive, Activity, Database, BarChart3, Settings } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'CPU Usage', value: '45%', icon: <Cpu className="h-6 w-6" /> },
    { name: 'Memory', value: '2.4/4 GB', icon: <Activity className="h-6 w-6" /> },
    { name: 'Storage', value: '45/100 GB', icon: <HardDrive className="h-6 w-6" /> },
    { name: 'Database', value: '2 Active', icon: <Database className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
            >
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Resource Usage</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-md">
                Day
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                Week
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                Month
              </button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <BarChart3 className="h-8 w-8" />
            <span className="ml-2">Usage chart will be displayed here</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Restart Server
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Backup Data
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Add Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;