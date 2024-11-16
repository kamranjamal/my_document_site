export const nodeJsOverview = [
    {
      title: "Introduction",
      page: "/docs/nodejs/overview",
      purpose: `
        Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side execution of JavaScript code.
        It uses an event-driven, non-blocking I/O model, making it lightweight and efficient for scalable network applications.
      `,
      reason: `
        Node.js revolutionized JavaScript by allowing it to be used on the server-side, making it possible to create full-stack applications using a single language. 
        Its non-blocking I/O model and event-driven architecture are ideal for handling high-traffic applications, like real-time chat apps and APIs.
      `,
    },
    {
      title: "Features",
      page: "/docs/nodejs/overview",
      purpose: `
        Key features of Node.js make it ideal for building scalable, high-performance applications.
      `,
      items: [
        "Asynchronous I/O: Supports non-blocking I/O operations for better performance.",
        "Single-Threaded: Uses a single thread with event looping for handling multiple concurrent requests.",
        "Rich Ecosystem: Provides built-in modules and access to millions of third-party libraries via npm.",
        "Cross-Platform: Runs on major operating systems, including Windows, Linux, and macOS.",
      ],
    },
    {
      title: "Built-In Modules",
      page: "/docs/nodejs/overview",
      purpose: `
        Node.js comes with a set of built-in modules that provide essential functionality for building applications.
      `,
      examples: [
        {
          name: "File System (fs)",
          description: "Used to work with the file system.",
          usage: `
  const fs = require('fs');
  
  // Reading a file
  fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
  // Writing to a file
  fs.writeFile('./example.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully.');
  });
          `,
        },
        {
          name: "HTTP",
          description: "Used to create servers and handle HTTP requests and responses.",
          usage: `
  const http = require('http');
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
  
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });
          `,
        },
        {
          name: "Path",
          description: "Provides utilities for working with file and directory paths.",
          usage: `
  const path = require('path');
  
  // Join paths
  console.log(path.join(__dirname, 'public', 'index.html'));
  
  // Get file extension
  console.log(path.extname('example.txt'));
  
  // Parse a path
  console.log(path.parse('/home/user/example.txt'));
          `,
        },
      ],
    },
    {
      title: "Third-Party Libraries",
      page: "/docs/nodejs/overview",
      purpose: `
        Node.js's rich ecosystem of third-party libraries extends its functionality, making it suitable for a wide range of applications.
      `,
      examples: [
        {
          name: "Express",
          description: "Fast, unopinionated web framework.",
          installation: "npm install express",
          usage: `
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
  
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
  });
          `,
        },
        {
          name: "Mongoose",
          description: "MongoDB object modeling for Node.js.",
          installation: "npm install mongoose",
          usage: `
  const mongoose = require('mongoose');
  
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
  
  const schema = new mongoose.Schema({ name: String });
  const User = mongoose.model('User', schema);
  
  const user = new User({ name: 'John' });
  user.save().then(() => console.log('User saved.'));
          `,
        },
        {
          name: "Socket.IO",
          description: "Enables real-time, bidirectional communication.",
          installation: "npm install socket.io",
          usage: `
  const http = require('http');
  const socketIo = require('socket.io');
  
  const server = http.createServer();
  const io = socketIo(server);
  
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (msg) => console.log('Message:', msg));
  });
  
  server.listen(3000, () => console.log('Socket.IO server running on http://localhost:3000/'));
          `,
        },
      ],
    },
  ];
  