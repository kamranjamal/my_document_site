export const es6Features = [
    {
      title: "let and const",
      description: "let and const replace var for declaring variables. let is block-scoped and allows reassignment, while const is block-scoped and does not allow reassignment.",
      code: `
        let age = 25;
        age = 26; // Works
  
        const name = "Alice";
        // name = "Bob"; // Error: Assignment to constant variable.
      `,
      page: "/docs/javascript/es6" // Add page path
    },
    {
      title: "Arrow Functions",
      description: "Provides a shorthand syntax for functions and does not bind its own this.",
      code: `
        const add = (a, b) => a + b;
        const greet = name => \`Hello, \${name}\`;
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Template Literals",
      description: "Allows embedded expressions and multi-line strings using backticks `.",
      code: `
        const name = "Alice";
        const greeting = \`Hello, \${name}!\`; // Output: Hello, Alice!
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Default Parameters",
      description: "Enables default values for function parameters.",
      code: `
        function greet(name = "Guest") {
          return \`Hello, \${name}\`;
        }
        greet(); // Output: Hello, Guest
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Destructuring Assignment",
      description: "Allows unpacking values from arrays or properties from objects into distinct variables.",
      code: `
        // Array destructuring
        const [a, b] = [1, 2];
        console.log(a); // Output: 1
  
        // Object destructuring
        const person = { name: "Alice", age: 25 };
        const { name, age } = person;
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Spread and Rest Operators",
      description: "Spread expands iterable elements or object properties. Rest collects arguments into an array.",
      code: `
        // Spread example
        const arr = [1, 2, 3];
        const arr2 = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
  
        // Rest example
        function sum(...nums) {
          return nums.reduce((acc, curr) => acc + curr, 0);
        }
        sum(1, 2, 3); // Output: 6
      `,
      page: "/docs/javascript/es6"
    },
    // Continue adding `page` field for all other items
    {
      title: "Enhanced Object Literals",
      description: "Shorthand syntax for defining methods and properties.",
      code: `
        const name = "Alice";
        const person = {
          name,
          greet() {
            console.log(\`Hello, \${this.name}\`);
          }
        };
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Classes",
      description: "Provides syntactical sugar over JavaScript’s prototype-based inheritance.",
      code: `
        class Animal {
          constructor(name) {
            this.name = name;
          }
          speak() {
            console.log(\`\${this.name} makes a noise.\`);
          }
        }
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Modules (import and export)",
      description: "Allows code splitting into multiple files and reusing code across files.",
      code: `
        // Exporting
        export const greet = name => \`Hello, \${name}\`;
        export default greet;
  
        // Importing
        import greet from './greet.js';
      `,
      page: "/docs/javascript/es6"
    },
    {
      title: "Promises",
      description: "Provides a way to handle asynchronous operations, replacing older callback syntax.",
      code: `
        const fetchData = new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data received"), 1000);
        });
        fetchData.then(data => console.log(data)); // Output: Data received
      `,
      page: "/docs/javascript/es6"
    },
    // Complete for all items
  ];
  