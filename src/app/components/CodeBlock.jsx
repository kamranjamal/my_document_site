"use client"
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative bg-black text-white rounded-md p-4">
      <pre className="overflow-auto">
        <code className="whitespace-pre-wrap">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-md focus:outline-none"
      >
        {copied ? <FaCheck color="green" /> : <FaCopy />}
      </button>
    </div>
  );
};

export default CodeBlock;
