import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { reactDocs } from "./data"; // Adjust the path as needed
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex">
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn the fundamentals of React, including components, state, props, and hooks."
          />
          <title>React Documentation for Beginners</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">React Documentation</h1>
          <p className="text-lg text-gray-200">
            A beginner-friendly guide to learning React concepts and components.
          </p>
        </header>

        <main className="space-y-12">
        {reactDocs.map((doc, idx) => (
  <section
    key={idx}
    id={doc.title.toLowerCase().replace(/\s+/g, "-")}
    className="space-y-6"
  >
    <h2 className="text-2xl font-semibold">{doc.title}</h2>
    <p className="text-gray-300">{doc.content}</p>

    {doc.code && (
      <div className="mt-4">
        <CodeBlock code={doc.code} />
      </div>
    )}
  </section>
))}

        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link href="https://reactjs.org/docs/getting-started.html" className="text-gray-300 hover:underline">
              React Official Documentation
            </Link>
            .
          </p>
        </footer>
      </div>

      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {reactDocs.map((doc, index) => (
          <Link
            key={index}
            href={`#${doc.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="mt-2 hover:text-blue-600 text-gray-300"
          >
            {doc.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
