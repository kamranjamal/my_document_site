'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';

// Import data with page paths
import { jsAdvancedConcepts } from '../docs/javascript/advanced/data';
import { jsFundamentals } from '../docs/javascript/basics/data';
import { es6Features } from '../docs/javascript/es6/data';
import { reactDocs } from '../docs/react/introduction/data';
import { reactHooks } from '../docs/react/hooks/data';
import { reactContext } from '../docs/react/context/data';
import { nodeJsOverview } from '../docs/nodejs/overview/data';
import { moduleData } from '../docs/nodejs/modules/data';
import { nodeJsApi } from '../docs/nodejs/api/data';


const Navbar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const router = useRouter();

  const combinedData = [
    ...jsFundamentals.map((item) => ({ ...item, page: '/docs/javascript/basics' })),
    ...es6Features.map((item) => ({ ...item, page: '/docs/javascript/es6' })),
    ...jsAdvancedConcepts.map((item) => ({ ...item, page: '/docs/javascript/advanced' })),
    ...reactDocs.map((item) => ({ ...item, page: '/docs/react/introduction' })),
    ...reactHooks.map((item) => ({ ...item, page: '/docs/react/hooks' })),
    ...reactContext.map((item) => ({ ...item, page: '/docs/react/context' })),
    ...nodeJsOverview.map((item) => ({ ...item, page: '/docs/nodejs/overview' })),
    ...moduleData.map((item) => ({ ...item, page: '/docs/nodejs/modules' })),
    ...nodeJsApi.map((item) => ({ ...item, page: '/docs/nodejs/api ' })),
  
  ];

  // Filter data based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = combinedData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Hide suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle suggestion click: navigate and scroll to the target section
  const handleSuggestionClick = (suggestion) => {
    const targetId = suggestion.title.toLowerCase().replace(/\s+/g, "-");

    if (router.pathname === suggestion.page) {
      // If already on the page, scroll directly
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Navigate to a different page, then scroll to the section
      router.push(`${suggestion.page}#${targetId}`).then(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      });
    }

    setQuery('');
    setSuggestions([]);
  };

  return (
    <div>
      <nav className="bg-black p-4 fixed top-0 right-0 w-[82%] z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex gap-4 w-1/2 relative" ref={searchRef}>
            <div className="flex items-center bg-gray-700 rounded-md p-2 max-w-xs w-full">
              <BiSearch className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-gray-700 text-white focus:outline-none"
              />
            </div>

            {query && suggestions.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-gray-800 rounded-md shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-4 ml-4">
            <Link className="text-white hover:text-blue-400" href="/docs/javascript">JavaScript</Link>
            <Link className="text-white hover:text-blue-400" href="/docs/react">React</Link>
            <Link className="text-white hover:text-blue-400" href="/docs/nodejs">Node.js</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
