import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed top-0 right-0 w-[82%]">
        <div className="container mx-auto flex items-center justify-between">
          {/* Search Bar with Icon */}
       <div className='flex gap-4 w-1/2'>
       <div className="flex items-center bg-gray-700 rounded-md p-2 max-w-xs w-full">
            <BiSearch className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-gray-700 text-white focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="ml-4 border border-green-500 text-green-500 px-3 py-1 rounded-md hover:bg-green-500 hover:text-white transition-colors">
            Search
          </button>
       </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 ml-4">
            <Link className="text-white hover:text-blue-400" href="/javascript">
              JavaScript
            </Link>
            <Link className="text-white hover:text-blue-400" href="/react">
              React
            </Link>
            <Link className="text-white hover:text-blue-400" href="/nodejs">
              Node.js
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
