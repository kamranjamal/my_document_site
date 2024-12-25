export const moduleData = [
    {
      title: "Introduction to Modules in Node.js",
      purpose: "Modules are building blocks of a Node.js application. They encapsulate reusable code functionalities and follow the CommonJS module specification.",
      reason: "To enable modular programming, improve code reusability, and simplify the management of dependencies in Node.js.",
      items: [
        "Core Modules: Provided by Node.js, available without installation.",
        "Local Modules: Custom modules created by developers.",
        "Third-Party Modules: External modules installed via npm."
      ],
      path: "/docs/nodejs/modules"
    },
    {
      title: "Core Modules in Node.js",
      purpose: "Built-in modules available in Node.js for performing essential tasks without requiring additional setup.",
      items: [
        {
          title: "fs (File System Module)",
          description: "Used for working with the file system.",
          details: [
            "Functions: Read, write, append, delete, and manage files and directories.",
            "Types of Methods: Asynchronous (readFile), Synchronous (readFileSync)."
          ],
          usage: `const fs = require('fs');
  
  // Asynchronous File Read
  fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
  // Synchronous File Write
  fs.writeFileSync('./example.txt', 'Hello, Node.js!');`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "path",
          description: "Used to handle file and directory paths.",
          details: [
            "Functions: Resolve paths, join paths, extract file extensions.",
            "Common Methods: path.join(), path.resolve(), path.basename()."
          ],
          usage: `const path = require('path');
  
  const filePath = path.join(__dirname, 'folder', 'file.txt');
  console.log('Joined Path:', filePath);
  
  console.log('File Extension:', path.extname(filePath));`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "http",
          description: "Provides utilities to create and manage HTTP servers and clients.",
          details: [
            "Functions: Handle HTTP requests/responses, create web servers.",
            "Common Methods: createServer(), request()."
          ],
          usage: `const http = require('http');
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
  
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "os",
          description: "Provides information about the operating system.",
          details: [
            "Functions: Retrieve OS-specific details like platform, architecture, memory, etc.",
            "Common Methods: os.platform(), os.arch(), os.freemem()."
          ],
          usage: `const os = require('os');
  
  console.log('OS Platform:', os.platform());
  console.log('Architecture:', os.arch());
  console.log('Free Memory:', os.freemem());`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "events",
          description: "Implements the event-driven architecture of Node.js.",
          details: ["Functions: Define and listen to custom events.", "Class: EventEmitter."],
          usage: `const EventEmitter = require('events');
  const eventEmitter = new EventEmitter();
  
  // Listener
  eventEmitter.on('greet', (name) => {
    console.log(\`Hello, \${name}!\`);
  });
  
  // Emit Event
  eventEmitter.emit('greet', 'John');`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "crypto",
          description: "Provides cryptographic functionalities.",
          details: ["Functions: Hashing, encryption, decryption, etc.", "Common Methods: createHash(), createCipheriv()."],
          usage: `const crypto = require('crypto');
  
  const hash = crypto.createHash('sha256').update('password').digest('hex');
  console.log('Hash:', hash);`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "stream",
          description: "Manages streaming data efficiently.",
          details: ["Functions: Reading, writing, and transforming streams.", "Stream Types: Readable, Writable, Duplex, Transform."],
          usage: `const fs = require('fs');
  
  const readStream = fs.createReadStream('./example.txt', 'utf8');
  readStream.on('data', (chunk) => {
    console.log('Chunk:', chunk);
  });`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "url",
          description: "Used to parse and manipulate URLs.",
          usage: `const { URL } = require('url');
  
  const myUrl = new URL('http://example.com:8000/path?name=JohnDoe');
  console.log('Hostname:', myUrl.hostname);
  console.log('Pathname:', myUrl.pathname);
  console.log('Search Params:', myUrl.searchParams.get('name'));`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "child_process",
          description: "Executes shell commands and spawns subprocesses.",
          usage: `const { exec } = require('child_process');
  
  exec('ls', (err, stdout, stderr) => {
    if (err) {
      console.error('Error:', err.message);
      return;
    }
    console.log('Output:', stdout);
  });`,
          path: "/docs/nodejs/modules"
        }
      ],
      path: "/docs/nodejs/modules"
    },
    {
      title: "Local Modules",
      purpose: "Custom modules created by developers to organize and reuse code.",
      usage: `// math.js
  exports.add = (a, b) => a + b;
  exports.subtract = (a, b) => a - b;
  
  // main.js
  const math = require('./math');
  console.log('Add:', math.add(5, 3));
  console.log('Subtract:', math.subtract(5, 3));`,
      path: "/docs/nodejs/modules"
    },
    {
      title: "Third-Party Modules",
      purpose: "External modules installed via npm to extend Node.js functionalities.",
      items: [
        {
          title: "Express",
          description: "Web framework for building RESTful APIs.",
          usage: `const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
  
  app.listen(3000, () => console.log('Server running on http://localhost:3000/'));`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "Mongoose",
          description: "MongoDB ODM for Node.js.",
          usage: `const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "Lodash",
          description: "Utility library for data manipulation.",
          usage: `const _ = require('lodash');
  console.log(_.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]`,
          path: "/docs/nodejs/modules"
        },
        {
          title: "Dotenv",
          description: "Load environment variables.",
          usage: `require('dotenv').config();
  console.log(process.env.MY_SECRET);`,
          path: "/docs/nodejs/modules"
        }
      ],
      path: "/docs/nodejs/modules"
    }
  ];
  