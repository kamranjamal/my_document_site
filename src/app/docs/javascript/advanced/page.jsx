import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { jsAdvancedConcepts } from "./data"; // assuming jsAdvancedConcepts is in data.js
import Link from "next/link";

const Home = () => {
  return (
   <div className="flex ">
     <div className="p-6 pr-56 space-y-8">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore advanced JavaScript concepts like closures, asynchronous programming, and design patterns."
        />
        <title>Advanced JavaScript Concepts</title>
      </Head>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Advanced JavaScript Concepts</h1>
        <p className="text-lg text-gray-200">
          Dive into advanced JavaScript topics, including closures, asynchronous programming, and design patterns.
        </p>
      </header>

      <main className="space-y-12">
        {jsAdvancedConcepts.map((concept, idx) => (
          <section key={idx} id={concept.title.toLowerCase().replace(/\s+/g, "-")} className="space-y-6">
            <h2 className="text-2xl text-white font-semibold">{concept.title}</h2>
            <p className="text-gray-300">{concept.description}</p>

            {concept.code && (
              <div className="mt-4">
                <CodeBlock code={concept.code} />
              </div>
            )}

            {concept.examples && (
              <ul className="list-disc pl-8 space-y-4">
                {concept.examples.map((example, exIdx) => (
                  <li key={exIdx} className="space-y-2">
                    <p className="font-semibold text-gray-100">{example.type}</p>
                    <CodeBlock code={example.code} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      <footer className="mt-12">
        <p className="text-center text-gray-500">
          Explore more resources at{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" className="text-gray-300 hover:underline">
            MDN Web Docs
          </Link>
          .
        </p>
      </footer>
    </div>
    <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
      {
        jsAdvancedConcepts?.map((title,index)=> <Link 
          key={index} 
          href={`#${title.title.toLowerCase().replace(/\s+/g, "-")}`} 
          className="mt-2 hover:text-blue-600"
        >
          {title.title}
        </Link>)
      }
    </div>
   </div>
  );
};

export default Home;
