import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { reactContext } from "./data"; // Import your data array
import Link from "next/link";

const ReactContextAPI = () => {
  return (
    <div className="flex">
      <div className="p-6 space-y-8 pr-56">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn about the React Context API for global state management. Avoid prop drilling, understand its advantages, limitations, and best practices with examples."
          />
          <title>React Context API</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">React Context API</h1>
          <p className="text-lg text-gray-200">
            Explore how the React Context API can help you manage global state efficiently, avoid prop drilling, and simplify your component architecture.
          </p>
        </header>

        <main className="space-y-12">
          {reactContext.map((section, idx) => (
            <section key={idx} id={section.title.toLowerCase().replace(/\s+/g, "-")} className="space-y-6">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.description && <p className="text-gray-300">{section.description}</p>}

              {section.details && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.details.map((detail, detailIdx) => (
                    <li key={detailIdx}>{detail}</li>
                  ))}
                </ul>
              )}

              {section.reasons && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.reasons.map((reason, reasonIdx) => (
                    <li key={reasonIdx}>{reason}</li>
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
                      {step.options && (
                        <ul className="list-disc pl-8">
                          {step.options.map((option, optIdx) => (
                            <li key={optIdx} className="mt-4">
                              <h4 className="font-semibold">{option.method}</h4>
                              <CodeBlock code={option.code} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              )}

              {section.points && (
                <div className="space-y-4">
                  {section.points.map((point, pointIdx) => (
                    <article key={pointIdx}>
                      <h3 className="text-xl font-semibold">{point.title}</h3>
                      <ul className="list-disc pl-8">
                        {point.details.map((detail, detailIdx) => (
                          <li key={detailIdx}>{detail}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              )}

              {section.practices && (
                <ul className="list-disc pl-8 space-y-4">
                  {section.practices.map((practice, practiceIdx) => (
                    <li key={practiceIdx}>{practice}</li>
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
            </section>
          ))}
        </main>

        <footer className="mt-12">
          <p className="text-center text-gray-500">
            Learn more at{" "}
            <Link
              href="https://react.dev/"
              className="text-gray-300 hover:underline"
            >
              React Documentation
            </Link>
            .
          </p>
        </footer>
      </div>

      {/* Sidebar with links to sections */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {reactContext.map((section, index) => (
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

export default ReactContextAPI;
