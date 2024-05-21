import React from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar with sticky positioning, z-index for layering, and dark mode support */}
      <nav className="sticky top-0 z-50 bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and branding */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" 
              className="h-8 mr-3" 
              alt="YouTube" 
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YouTube</span>
          </Link>
          
          {/* Search bar component */}
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
