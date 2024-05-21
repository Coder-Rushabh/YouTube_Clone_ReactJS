import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // State for holding the search term input by the user
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // Navigate to the search results page
      navigate(`/search/${searchTerm}`);
      // Clear the search term after submission
      setSearchTerm('');
    }
  };

  return (
    <div>
      <form onSubmit={onhandleSubmit}>
        {/* Container for the search input and button */}
        <div className="relative w-72 pt-1">
          {/* Search icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          {/* Search input */}
          <input 
            onChange={(e) => setSearchTerm(e.target.value)} 
            value={searchTerm} // Controlled component
            type="search" 
            id="default-search" 
            className="mb-[-5px] block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search..." 
            required 
          />
          {/* Search button */}
          <button 
            type="submit" 
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
