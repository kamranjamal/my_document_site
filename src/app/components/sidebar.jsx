"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 bg-black text-white h-screen p-4   fixed top-0 left-0">
      <h2 className="text-xl font-semibold mb-4"><Link href={"/"}>Easy Docs</Link></h2>

      {/* Sidebar Sections */}
      <div className="space-y-4 mt-20">
        {/* JavaScript Section */}
        <div>
          <button
            onClick={() => toggleSection('javascript')}
            className="flex items-center justify-between w-full text-left"
          >
            <span>JavaScript</span>
            {openSection === 'javascript' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSection === 'javascript' && (
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/docs/javascript/basics" className="block hover:text-blue-400">
                Basics
              </Link>
              <Link href="/docs/javascript/advanced" className="block hover:text-blue-400">
                Advanced
              </Link>
              <Link href="/docs/javascript/es6" className="block hover:text-blue-400">
                ES6 Features
              </Link>
            </div>
          )}
        </div>

        {/* React Section */}
        <div>
          <button
            onClick={() => toggleSection('react')}
            className="flex items-center justify-between w-full text-left"
          >
            <span>React</span>
            {openSection === 'react' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSection === 'react' && (
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/docs/react/introduction" className="block hover:text-blue-400">
                Introduction
              </Link>
              <Link href="/docs/react/hooks" className="block hover:text-blue-400">
                Hooks
              </Link>
              <Link href="/docs/react/context" className="block hover:text-blue-400">
                Context API
              </Link>
            </div>
          )}
        </div>

        {/* Node.js Section */}
        <div>
          <button
            onClick={() => toggleSection('nodejs')}
            className="flex items-center justify-between w-full text-left"
          >
            <span>Node.js</span>
            {openSection === 'nodejs' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSection === 'nodejs' && (
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/docs/nodejs/overview" className="block hover:text-blue-400">
                Overview
              </Link>
              <Link href="/docs/nodejs/modules" className="block hover:text-blue-400">
                Modules
              </Link>
              <Link href="/docs/nodejs/api" className="block hover:text-blue-400">
                API
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
