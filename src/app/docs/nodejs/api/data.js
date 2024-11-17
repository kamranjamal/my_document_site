export const nodeJsApi = [
    {
      title: "What is an API?",
      path: "/docs/nodejs/api",
      description:
        "An API (Application Programming Interface) is a set of rules that allows applications to communicate with each other. In the context of Node.js, APIs are often used to expose server-side functionalities to clients or allow applications to interact with databases, services, or other applications.",
    },
    {
      title: "Types of APIs",
      path: "/docs/nodejs/api",
      details: [
        "REST APIs: Representational State Transfer APIs that use HTTP methods (GET, POST, PUT, DELETE).",
        "GraphQL APIs: APIs that allow clients to request only the data they need.",
        "WebSocket APIs: Enable real-time, two-way communication between client and server.",
        "Third-Party APIs: APIs provided by external services (e.g., Twitter, Stripe).",
      ],
    },
    {
      title: "Creating APIs in Node.js",
      path: "/docs/nodejs/api",
      description:
        "Node.js provides several tools and libraries to create APIs, with Express.js being the most popular for RESTful APIs.",
    },
    {
      title: "Steps to Create a REST API",
      path: "/docs/nodejs/api",
      steps: [
        {
          step: "Install Node.js and Initialize Project",
          code: `npm init -y\nnpm install express`,
        },
        {
          step: "Set Up a Basic Server",
          code: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.listen(port, () => console.log(\`Server running on http://localhost:\${port}\`));`,
        },
        {
          step: "Define Routes (Endpoints)",
          code: `app.get('/api/users', (req, res) => {\n    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);\n});\n\napp.post('/api/users', (req, res) => {\n    res.json({ message: 'User created successfully' });\n});`,
        },
      ],
    },
    {
      title: "Key Concepts in APIs",
      path: "/docs/nodejs/api",
      points: [
        {
          title: "HTTP Methods",
          details: [
            "GET: Retrieve data.",
            "POST: Create new data.",
            "PUT: Update existing data.",
            "DELETE: Remove data.",
          ],
        },
        {
          title: "Endpoints",
          details: [
            "An endpoint is a specific URL where an API interacts with resources.",
            "Example: /api/users, /api/products/123.",
          ],
        },
        {
          title: "Request and Response",
          details: [
            "Request: Sent by the client and contains data like query parameters, headers, and body.",
            "Response: Sent by the server and contains data or status.",
          ],
        },
      ],
    },
    {
      title: "Building a RESTful API with Express",
      path: "/docs/nodejs/api",
      description:
        "A comprehensive guide on setting up and building a RESTful API with Express.js, including CRUD operations.",
      steps: [
        {
          step: "Install Required Dependencies",
          code: `npm install express body-parser cors mongoose`,
        },
        {
          step: "Code Example",
          code: `const express = require('express');\nconst bodyParser = require('body-parser');\nconst mongoose = require('mongoose');\nconst cors = require('cors');\n\nconst app = express();\nconst port = 3000;\n\n// Middleware\napp.use(bodyParser.json());\napp.use(cors());\n\n// Connect to MongoDB\nmongoose.connect('mongodb://localhost:27017/test', {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n}).then(() => console.log('MongoDB Connected'));\n\n// Define Schema and Model\nconst userSchema = new mongoose.Schema({\n    name: String,\n    email: String,\n});\nconst User = mongoose.model('User', userSchema);\n\n// API Routes\n\n// GET all users\napp.get('/api/users', async (req, res) => {\n    const users = await User.find();\n    res.json(users);\n});\n\n// GET a user by ID\napp.get('/api/users/:id', async (req, res) => {\n    const user = await User.findById(req.params.id);\n    if (!user) return res.status(404).json({ message: 'User not found' });\n    res.json(user);\n});\n\n// POST (Create a user)\napp.post('/api/users', async (req, res) => {\n    const newUser = new User(req.body);\n    await newUser.save();\n    res.status(201).json(newUser);\n});\n\n// PUT (Update a user)\napp.put('/api/users/:id', async (req, res) => {\n    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });\n    if (!updatedUser) return res.status(404).json({ message: 'User not found' });\n    res.json(updatedUser);\n});\n\n// DELETE a user\napp.delete('/api/users/:id', async (req, res) => {\n    const deletedUser = await User.findByIdAndDelete(req.params.id);\n    if (!deletedUser) return res.status(404).json({ message: 'User not found' });\n    res.json({ message: 'User deleted successfully' });\n});\n\n// Start Server\napp.listen(port, () => console.log(\`API running on http://localhost:\${port}\`));`,
        },
      ],
    },
   
  ];
  