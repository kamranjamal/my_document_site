import Head from "next/head";
import Link from "next/link";

// Topics array for easy mapping
const reactTopics = [
  { name: "Introduction to React" },
  { name: "Why React was Invented" },
  { name: "Advantages of React over Other Frameworks" },
  { name: "Key Concepts in React" },
  { name: "React Ecosystem and Libraries" },
];

// Brief history of React for mapping
const reactHistory = [
  {
    year: "2011",
    event: "React was developed by Jordan Walke, a software engineer at Facebook, to simplify the complex and dynamic interface needs of Facebook.",
  },
  {
    year: "2013",
    event: "React was open-sourced by Facebook, leading to widespread adoption across the web development community.",
  },
  {
    year: "2015",
    event: "React Native was introduced, allowing for cross-platform mobile app development using React principles.",
  },
  {
    year: "2017",
    event: "React Fiber, a complete rewrite of the React core, was released to improve rendering performance.",
  },
  {
    year: "Present",
    event: "React continues to evolve, with new features like Hooks, Concurrent Mode, and Server Components being added to enhance development capabilities.",
  },
];

// Advantages of React
const reactAdvantages = [
  { point: "Component-Based Architecture" },
  { point: "Efficient Virtual DOM for Fast UI Updates" },
  { point: "Reusable Components and Code Simplification" },
  { point: "Strong Community and Ecosystem of Libraries" },
  { point: "React Native for Cross-Platform Development" },
];

// Key topic names to guide learning
const reactKeyTopics = [
  "JSX Syntax",
  "Components and Props",
  "State and Lifecycle",
  "Handling Events",
  "Conditional Rendering",
  "Lists and Keys",
  "Forms and Controlled Components",
  "Lifting State Up",
  "Composition vs Inheritance",
  "React Hooks",
  "React Router",
];

export default function ReactIntroPage() {
  return (
    <div className=" min-h-screen text-white p-6">
      <Head>
        <title>React Introduction - Easy Docs</title>
      </Head>

      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100">
          Introduction to React
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Learn about React, its origin, advantages, and core concepts that make it one of the most popular libraries in web development.
        </p>
      </section>

      {/* React History Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">History of React</h2>
        <div className="space-y-4 text-gray-300">
          {reactHistory.map((entry, index) => (
            <p key={index}>
              <strong>{entry.year}:</strong> {entry.event}
            </p>
          ))}
        </div>
      </section>

      {/* Why React Was Invented Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">Why React Was Invented</h2>
        <p className="text-gray-300">
          React was created to solve the challenges of building complex and dynamic user interfaces. Facebook needed a solution that could manage rapidly changing data, improve performance, and simplify the development process. React’s component-based architecture and efficient DOM handling with Virtual DOM addressed these issues, making UI development faster, modular, and easier to manage.
        </p>
      </section>

      {/* Advantages of React Section */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">Advantages of React</h2>
        <ul className="list-disc pl-8 space-y-4 text-gray-300">
          {reactAdvantages.map((advantage, index) => (
            <li key={index} className="text-lg">{advantage.point}</li>
          ))}
        </ul>
      </section>

      {/* Key Concepts in React */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-200">Key Concepts in React</h2>
        <ul className="list-disc pl-8 space-y-4 text-gray-300">
          {reactKeyTopics.map((topic, index) => (
            <li key={index} className="text-lg">{topic}</li>
          ))}
        </ul>
      </section>

      {/* Links to further learning */}
      <section className="mt-12 space-y-4 text-center">
        <h3 className="text-xl text-gray-200">Explore More on React</h3>
        <div className="space-x-4">
          <Link href="/docs/react/basics" className="text-blue-400 hover:underline">
            React Basics
          </Link>
          <Link href="/docs/react/hooks" className="text-blue-400 hover:underline">
            React Hooks
          </Link>
          <Link href="/docs/react/advanced" className="text-blue-400 hover:underline">
            Advanced React
          </Link>
        </div>
      </section>
    </div>
  );
}
