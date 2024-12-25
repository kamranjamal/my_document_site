import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { es6Features } from "./data"; // Assume this imports the structured array from previous data
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
          <h1 className="text-3xl font-bold">JavaScript ES6 for Beginners</h1>
          <p className="text-lg text-gray-200">
            JavaScript is a versatile programming language primarily used to make
            websites interactive. Here’s a rundown of some es6 JavaScript
            concepts for beginners.
          </p>
        </header>

        <main className="space-y-12">
          {es6Features.map((feature, idx) => (
            <section key={idx} id={feature.title.toLowerCase().replace(/\s+/g, "-")} className="space-y-6">
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>

              {feature.code && (
                <div className="mt-4">
                  <CodeBlock code={feature.code} />
                </div>
              )}
            </section>
          ))}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" className="text-gray-300 hover:underline">
              MDN Web Docs
            </Link>
            .
          </p>
        </footer>
      </div>

      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
     
        {es6Features.map((feature, index) => (
          <Link
            key={index}
            href={`#${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="mt-2 hover:text-blue-600 text-gray-300"
          >
            {feature.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
