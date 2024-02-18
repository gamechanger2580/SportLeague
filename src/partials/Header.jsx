import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import ThemeToggle from '../components/ThemeToggle';
import Sidebar from './Sidebar';

function Header({ sidebarOpen, setSidebarOpen }) {

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex items-center space-x-3">
            {/* GIF */}
            <img src="src\images\icons8-football.gif" alt="GIF" className="h-8 w-8 fill-neutral-950" />
            {/* LeagueUp text */}
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">LeagueUp</span>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* New buttons for the options */}
            <Link to="/about-us" className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-gray-300">About Us</Link>
            <Link to="/create-league" className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-gray-300">Create League</Link>
            <Link to="/view-league" className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-gray-300">View League</Link>
            {/* <ThemeToggle /> */}
            {/* User Menu */}
            {/* <UserMenu align="right" /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
