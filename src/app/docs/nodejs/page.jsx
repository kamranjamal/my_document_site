import CodeBlock from "@/app/components/CodeBlock"; // Optional for code snippets
import Head from "next/head";
import { nodeDetails } from "./data"; // Import data
import Link from "next/link";

const NodeJSPage = () => {
  return (
    <div className="flex">
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Detailed notes on Node.js: its invention, working mechanism, built-in modules, and version improvements."
          />
          <title>Node.js Detailed Overview</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Node.js Overview</h1>
          <p className="text-lg text-gray-200">
            Node.js is a powerful runtime environment for building scalable server-side applications with JavaScript.
          </p>
        </header>

        <main className="space-y-12">
          {nodeDetails.map((section, idx) => (
            <section key={idx} id={section.title.toLowerCase().replace(/\s+/g, "-")} className="space-y-6">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.content && <p className="text-gray-300">{section.content}</p>}

              {section.points && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.points.map((point, pointIdx) => (
                    <li key={pointIdx}>{point}</li>
                  ))}
                </ul>
              )}

              {section.steps && (
                <ul className="list-decimal pl-8 space-y-6">
                  {section.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="mt-4">
                      <h3 className="font-semibold">{step.step}</h3>
                      <p>{step.content}</p>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-auto">
                  <table className="table-auto border-collapse border border-gray-600">
                    <thead>
                      <tr>
                        {section.table.headers.map((header, headerIdx) => (
                          <th key={headerIdx} className="border border-gray-600 p-2">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="border border-gray-600 p-2">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.versions && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.versions.map((version, versionIdx) => (
                    <li key={versionIdx}>
                      <strong>{version.version}</strong>: {version.details}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link href="https://nodejs.org/en/" className="text-gray-300 hover:underline">
              Node.js Official Documentation
            </Link>
            .
          </p>
        </footer>
      </div>

      {/* Sidebar with links to sections */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {nodeDetails.map((section, index) => (
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

export default NodeJSPage;
