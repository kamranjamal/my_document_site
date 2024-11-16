export const nodeDetails = [
    {
      title: "Introduction to Node.js",
      content: `
        Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside a browser.
        It enables developers to use JavaScript for server-side programming.
      `,
    },
    {
      title: "Why Use Node.js?",
      points: [
        "High performance due to its non-blocking I/O model.",
        "Scalable applications with real-time capabilities.",
        "Large ecosystem of libraries and modules via npm.",
        "Same language for both frontend and backend development.",
      ],
    },
    {
      title: "History of Node.js",
      content: `
        Node.js was invented by Ryan Dahl in 2009. He introduced Node.js to provide a way to build scalable and fast server-side applications.
        It uses Google's V8 JavaScript engine to execute code, ensuring high performance.
      `,
    },
    {
      title: "How Node.js Works",
      points: [
        "Node.js uses a single-threaded event loop architecture.",
        "It handles multiple client requests efficiently using non-blocking I/O.",
        "Heavy tasks can be offloaded to worker threads or external services.",
      ],
    },
    {
      title: "Node.js Mechanism",
      steps: [
        {
          step: "1. Event Loop",
          content:
            "The event loop continuously checks for pending tasks, I/O operations, and timers, executing them in a non-blocking manner.",
        },
        {
          step: "2. Non-Blocking I/O",
          content:
            "Node.js uses asynchronous I/O to avoid blocking the event loop. This makes it efficient for handling concurrent requests.",
        },
        {
          step: "3. V8 Engine",
          content:
            "Node.js runs on Google's V8 engine, which compiles JavaScript into machine code for fast execution.",
        },
      ],
    },
    {
      title: "Node.js Built-in Modules",
      table: {
        headers: ["Module", "Description"],
        rows: [
          ["fs", "Provides functions for file system operations."],
          ["http", "Enables the creation of HTTP servers and clients."],
          ["url", "Parses and formats URL strings."],
          ["os", "Provides information about the operating system."],
          ["path", "Utilities for handling file paths."],
          ["crypto", "Provides cryptographic functions."],
        ],
      },
    },
    {
      title: "Node.js Versions and Improvements",
      content: `
        Node.js has undergone numerous improvements since its invention. 
        Some significant milestones:
      `,
      versions: [
        {
          version: "v0.1.0 (2009)",
          details: "Initial release by Ryan Dahl, focused on basic features.",
        },
        {
          version: "v4.x (2015)",
          details: "Merged io.js with Node.js, introducing modern ES6 features.",
        },
        {
          version: "v8.x (2017)",
          details: "Introduced async/await for better asynchronous programming.",
        },
        {
          version: "v12.x (2019)",
          details: "Added worker threads and improved diagnostics.",
        },
        {
          version: "v18.x (2022)",
          details: "Enabled fetch API and native test runner.",
        },
      ],
    },
  ];
  