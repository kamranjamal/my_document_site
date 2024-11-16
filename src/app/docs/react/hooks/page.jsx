import CodeBlock from "@/app/components/CodeBlock";
import Head from "next/head";
import { reactHooks } from "./data"; // Assume reactHooks contains the data
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
            content="Learn React hooks, their purposes, and usage. Master the modern way of managing state and side effects in React applications."
          />
          <title>React Hooks Overview</title>
        </Head>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold">React Hooks</h1>
          <p className="text-lg text-gray-200">
            Learn about React hooks, their purposes, and how to use them effectively in your projects.
          </p>
        </header>

        <main className="space-y-12">
          {reactHooks.map((hook) => {
            const id = hook.title.toLowerCase().replace(/\s+/g, "-"); // Create id dynamically from title
            return (
              <section key={id} id={id} className="space-y-6">
                <h2 className="text-2xl font-semibold">{hook.title}</h2>
                <p className="text-gray-300">{hook.purpose}</p>
                <p className="text-gray-300">{hook.reason}</p>

                {hook.usage && (
                  <div className="mt-4">
                    <CodeBlock code={hook.usage} />
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
              href="https://react.dev/docs/hooks-intro.html"
              className="text-gray-300 hover:underline"
            >
              React Docs
            </Link>
            .
          </p>
        </footer>
      </div>

      {/* Right Navigation */}
      <div className="bg-black fixed top-16 p-6 text-[11px] w-52 min-h-screen right-0 flex flex-col gap-1">
        {reactHooks.map((hook) => {
          const id = hook.title.toLowerCase().replace(/\s+/g, "-"); // Same transformation as above
          return (
            <Link
              key={id}
              href={`#${id}`}
              className="mt-2 hover:text-blue-600 text-gray-300"
            >
              {hook.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
