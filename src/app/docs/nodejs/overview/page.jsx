import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { nodeJsOverview } from "./data"; // Assume nodeJsOverview contains the data
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn about Node.js, its features, built-in modules, and third-party libraries."
          />
          <title>Node.js Overview</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Node.js Overview</h1>
          <p className="text-lg text-gray-200">
            Explore Node.js features, built-in modules, and third-party libraries for building scalable server-side applications.
          </p>
        </header>

        <main className="space-y-12">
          {nodeJsOverview.map((section) => {
            const id = section.title.toLowerCase().replace(/\s+/g, "-"); // Generate id for linking
            return (
              <section key={id} id={id} className="space-y-6">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-gray-300">{section.purpose}</p>

                {section.reason && <p className="text-gray-300">{section.reason}</p>}

                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {section.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.examples && (
                  <div className="space-y-8">
                    {section.examples.map((example, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-xl font-medium">{example.name}</h3>
                        <p className="text-gray-300">{example.description}</p>
                        {example.usage && (
                          <div className="mt-4">
                            <CodeBlock code={example.usage} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link
              href="https://nodejs.org/en/docs/"
              className="text-gray-300 hover:underline"
            >
              Node.js Docs
            </Link>
            .
          </p>
        </footer>
      </div>

      {/* Right Navigation */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {nodeJsOverview.map((section) => {
          const id = section.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              key={id}
              href={`#${id}`}
              className="mt-2 hover:text-blue-600 text-gray-300"
            >
              {section.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
