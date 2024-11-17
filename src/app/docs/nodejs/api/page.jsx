import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { nodeJsApi } from "./data"; // Import your data array

const NodeAPI = () => {
  return (
    <div className="flex">
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn about Node.js APIs, including types, creation, and best practices."
          />
          <title>Node.js API Guide</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Node.js API Guide</h1>
          <p className="text-lg text-gray-200">
            A comprehensive guide to understanding and building APIs with Node.js.
          </p>
        </header>

        <main className="space-y-12">
          {nodeJsApi.map((section, idx) => (
            <section
              key={idx}
              id={section.title.toLowerCase().replace(/\s+/g, "-")} // Normalize the id
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.description && (
                <p className="text-gray-300">{section.description}</p>
              )}
              {section.details && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.details.map((detail, detailIdx) => (
                    <li key={detailIdx}>{detail}</li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <div className="space-y-6">
                  {section.steps.map((step, stepIdx) => (
                    <article key={stepIdx}>
                      <h3 className="text-xl font-semibold">{step.step}</h3>
                      {step.code && (
                        <div className="mt-4">
                          <CodeBlock code={step.code} />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              Node.js Documentation
            </a>
            .
          </p>
        </footer>
      </div>

      {/* Sidebar Navigation */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {nodeJsApi.map((section, index) => (
          <a
            key={index}
            href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`} // Match normalized id
            className="mt-2 hover:text-blue-600"
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NodeAPI;
