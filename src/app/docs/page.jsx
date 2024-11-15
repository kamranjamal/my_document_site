import Head from "next/head";

// Array of technologies with their descriptions
const techDocs = [
  {
    name: "Python",
    description:
      "Python is a versatile programming language known for its simplicity and readability. It is widely used for web development, data analysis, machine learning, and automation.",
  },
  {
    name: "Node.js",
    description:
      "Node.js is a runtime environment for executing JavaScript code on the server side. It allows developers to build fast, scalable network applications with non-blocking, event-driven architecture.",
  },
  {
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to build single-page applications with reusable components and a reactive data flow.",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a dynamic programming language that enables interactive web pages. It is an essential part of web development, powering both client-side and server-side functionalities.",
  },
  {
    name: "HTML",
    description:
      "HTML (Hypertext Markup Language) is the standard language used for creating web pages. It structures content and forms the backbone of all web content.",
  },
  {
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used to style and design the layout of web pages. It controls the appearance of HTML elements, from colors and fonts to spacing and positioning.",
  },
  {
    name: "Django",
    description:
      "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It handles much of the complexity of web development, allowing developers to focus on building applications.",
  },
];

export default function DocsPage() {
  return (
    <div className=" min-h-screen text-white p-6">
      <Head>
        <title>Documentation - Easy Docs</title>
      </Head>

      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100">
          Welcome to Easy Docs
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Here you will find introductory information about the most popular
          technologies used in web development and beyond.
        </p>
      </section>

      {/* Technology Documentation */}
      <section className="mt-12 space-y-8 max-w-2xl mx-auto">
        {techDocs.map((tech, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">{tech.name}</h2>
            <p className="text-gray-300">{tech.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
