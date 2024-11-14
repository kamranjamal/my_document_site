import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { jsFundamentals } from "./data";
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
          content="Learn JavaScript fundamentals including variables, data types, functions, and DOM manipulation. Perfect for beginners!"
        />
        <title>JavaScript Fundamentals for Beginners</title>
      </Head>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">JavaScript Fundamentals for Beginners</h1>
        <p className="text-lg text-gray-200">
          JavaScript is a versatile programming language primarily used to make
          websites interactive. Here’s a rundown of some fundamental JavaScript
          concepts for beginners.
        </p>
      </header>

      <main className="space-y-12">
        {jsFundamentals.map((section, idx) => (
          <section key={idx} id={section.title.toLowerCase().replace(/\s+/g, "-")} className="space-y-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="text-gray-300">{section.description}</p>

            {section.sections.map((subsection, subIdx) => (
              <article key={subIdx} className="space-y-6">
                <h3 className="text-xl font-semibold">{subsection.heading}</h3>
                <p>{subsection.content}</p>

                {subsection.code && (
                  <div className="mt-4">
                    <CodeBlock code={subsection.code} />
                  </div>
                )}

                {subsection.examples && (
                  <ul className="list-disc pl-8 space-y-4">
                    {subsection.examples.map((example, exIdx) => (
                      <li key={exIdx} className="space-y-2">
                        <p className="font-semibold text-gray-600">{example.type}</p>
                        {/* <CodeBlock code={example.code} /> */}
                        {example}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </section>
        ))}
      </main>

      <footer className="mt-12">
        <p className="text-center text-gray-500">
          Learn more at{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" className="text-gray-300 hover:underline">
            MDN Web Docs
          </a>
          .
        </p>
      </footer>
    </div>
    <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
      
         {
          jsFundamentals.map((title,index)=> <Link 
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
