import React from 'react';
import { TicketProvider } from './context/TicketContext';  // Import the provider
import Dashboard from './components/Dashboard';
import './App.css'; // Import your styles
import DarkModeToggle from './components/DarkMode';

function App() {
  return (
    <TicketProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-wide">
              Support Ticket Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic">
              Manage and resolve customer support tickets efficiently
            </p>
          </div>
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        <Dashboard />
      </div>
    </TicketProvider>
  );
}

export default App;
