// Easy Docs Landing Page
import Head from "next/head";
import Link from "next/link";

// Labels array with names and paths
const docTopics = [
  { name: "Python", path: "/docs/python" },
  { name: "Node.js", path: "/docs/nodejs" },
  { name: "React", path: "/docs/react" },
  { name: "JavaScript", path: "/docs/javascript" },
  { name: "HTML", path: "/docs/html" },
  { name: "CSS", path: "/docs/css" },
  { name: "Django", path: "/docs/django" },
];

export default function LandingPage() {
  return (
    <div className=" min-h-screen text-white flex flex-col items-center justify-center p-6">
      <Head>
        <title>Welcome to Easy Docs</title>
      </Head>
      
      {/* Welcome Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100">
          Welcome to Easy Docs
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Your go-to resource for all things coding. Discover, learn, and master
          the technologies that power the web, with easy-to-follow, comprehensive documentation.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="mt-12 space-y-4 max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-200">Supported Documentation</h2>
        <p className="text-gray-400">
          Easy Docs provides in-depth guides, tutorials, and references for popular technologies:
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-300 font-medium">
          {docTopics.map((topic, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <Link className="hover:text-green-400 transition-colors" href={topic.path}>
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="mt-16">
        <Link href="/docs" className="bg-green-500 text-black px-6 py-3 rounded-md font-bold hover:bg-green-600 transition-all">
        
            Get Started
        
        </Link>
      </section>
    </div>
  );
}
