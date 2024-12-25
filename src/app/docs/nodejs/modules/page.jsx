import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { moduleData} from "./data"; // Import your Node.js data array
import Link from "next/link";

const NodeJsModules = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn about Node.js modules, including core, local, and third-party modules, with examples and best practices."
          />
          <title>Node.js Modules</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Node.js Modules</h1>
          <p className="text-lg text-gray-200">
            Dive into the essentials of Node.js modules: core, local, and third-party. Understand their purpose, usage, and implementation with examples.
          </p>
        </header>

        <main className="space-y-12">
          {moduleData.map((section, idx) => (
            <section
              key={idx}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.purpose && <p className="text-gray-300">{section.purpose}</p>}

              {section.items && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {typeof item === "string" ? item : item.title}
                      {item.description && <p className="text-gray-400 mt-2">{item.description}</p>}
                      {item.details && (
                        <ul className="list-disc pl-8">
                          {item.details.map((detail, detailIdx) => (
                            <li key={detailIdx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                      {item.usage && (
                        <div className="mt-4">
                          <CodeBlock code={item.usage} />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.usage && (
                <div className="mt-4">
                  <CodeBlock code={section.usage} />
                </div>
              )}
            </section>
          ))}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link
              href="https://nodejs.org/docs/"
              className="text-gray-300 hover:underline"
            >
              Node.js Documentation
            </Link>
            .
          </p>
        </footer>
      </div>

      {/* Sidebar with links to sections */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {moduleData.map((section, index) => (
          <Link
            key={index}
            href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="mt-2 hover:text-blue-600"
          >
            {section.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NodeJsModules;
