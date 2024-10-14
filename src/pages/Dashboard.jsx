import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-blue-400">Profile</a></li>
          <li className="mb-4"><a href="#" className="hover:text-blue-400">Settings</a></li>
          <li className="mb-4"><a href="#" className="hover:text-blue-400">Logout</a></li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
        </div>
        <div>
          <p className="text-gray-700">This is where the dynamic content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
