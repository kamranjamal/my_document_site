import Head from "next/head";
import Link from "next/link";

// Array of JavaScript topics for easy documentation navigation
const jsTopics = [
  { name: "Introduction to JavaScript" },
  { name: "Uses of JavaScript" },
  { name: "History of JavaScript" },
  { name: "JavaScript Versions" },
];

// Array for JavaScript History with key dates and events
const jsHistory = [
  {
    year: "1995",
    event: "JavaScript was created by Brendan Eich and initially named 'LiveScript'.",
  },
  {
    year: "1996",
    event: "The language was renamed 'JavaScript' and submitted to ECMA for standardization.",
  },
  {
    year: "1997",
    event: "ECMA published the first official standard for JavaScript, known as ECMA-262.",
  },
  {
    year: "2005",
    event: "JavaScript gained popularity due to Ajax, enabling dynamic, interactive web applications.",
  },
  {
    year: "2009",
    event: "Node.js was introduced, allowing JavaScript to run server-side, expanding its usage.",
  },
  {
    year: "2015",
    event: "ES6 introduced major changes like arrow functions, classes, and modules, marking a major shift in JavaScript.",
  },
  {
    year: "Present",
    event: "JavaScript continues to evolve with new ECMAScript releases every year, improving language features and performance.",
  },
];

// Array for JavaScript Versions with key features
const jsVersions = [
  { version: "ES1 (1997)", features: "The first standardized version of JavaScript." },
  { version: "ES2 (1998)", features: "Minor updates and bug fixes." },
  { version: "ES3 (1999)", features: "Introduced regular expressions and better error handling." },
  { version: "ES5 (2009)", features: "'Strict mode' and JSON support were added." },
  { version: "ES6 (2015)", features: "Introduced arrow functions, classes, and modules." },
  { version: "ES7 (2016)", features: "Introduced the exponentiation operator and Array.prototype.includes." },
  { version: "ES8 (2017)", features: "Added async/await and Object.entries()." },
  { version: "ES9 (2018)", features: "Introduced Object rest/spread and Promise.finally()." },
  { version: "ES10 (2019)", features: "Added Array.prototype.flat() and String.prototype.trimStart()." },
  { version: "ES11 (2020)", features: "Introduced BigInt and globalThis." },
  { version: "ES12 (2021)", features: "Logical assignment operators and Numeric separators." },
  { version: "ES13 (2022)", features: "Continued improvements and new features." },
];

export default function JavaScriptPage() {
  return (
    <div className="  min-h-screen text-white p-6">
      <Head>
        <title>JavaScript Documentation - Easy Docs</title>
      </Head>

      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100">
          JavaScript Documentation
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Explore the world of JavaScript, its uses, history, and various versions.
        </p>
      </section>

      {/* JavaScript Topics Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">Topics Covered</h2>
        <ul className="list-disc pl-8 space-y-4 text-gray-300">
          {jsTopics.map((topic, index) => (
            <li key={index} className="text-lg">{topic.name}</li>
          ))}
        </ul>
      </section>

      {/* JavaScript History Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">History of JavaScript</h2>
        <div className="space-y-4 text-gray-300">
          {jsHistory.map((entry, index) => (
            <p key={index}>
              <strong>{entry.year}:</strong> {entry.event}
            </p>
          ))}
        </div>
      </section>

      {/* JavaScript Versions Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">JavaScript Versions</h2>
        <ul className="list-disc pl-8 space-y-4 text-gray-300">
          {jsVersions.map((version, index) => (
            <li key={index} className="text-lg">
              <strong>{version.version}</strong>: {version.features}
            </li>
          ))}
        </ul>
      </section>

      {/* Links to other JavaScript Documentation Pages */}
      <section className="mt-12 space-y-4 text-center">
        <h3 className="text-xl text-gray-200">Learn More About JavaScript</h3>
        <div className="space-x-4">
          <Link href="/docs/javascript/basics" className="text-blue-400 hover:underline">
            JavaScript Basics
          </Link>
          <Link href="/docs/javascript/es6" className="text-blue-400 hover:underline">
            ES6 Features
          </Link>
          <Link href="/docs/javascript/advanced" className="text-blue-400 hover:underline">
            Advanced JavaScript
          </Link>
        </div>
      </section>
    </div>
  );
}
