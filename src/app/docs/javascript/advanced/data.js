export const jsAdvancedConcepts = [
  {
    title: "Closures and Lexical Scope",
    description: "A closure is a function that remembers its lexical scope even when executed outside that scope.",
    details: "Closures allow inner functions to access outer function variables even after the outer function has finished execution.",
    code: `
      function createCounter() {
        let count = 0;
        return function() {
          count++;
          return count;
        };
      }
      const counter = createCounter();
      console.log(counter()); // Output: 1
      console.log(counter()); // Output: 2
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Asynchronous JavaScript (Promises, async/await)",
    description: "Promises represent the eventual completion (or failure) of an asynchronous operation.",
    examples: [
      {
        type: "Promise",
        code: `
          const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data received"), 2000);
          });
          fetchData.then(data => console.log(data)); // Output: Data received after 2 seconds
        `
      },
      {
        type: "async/await",
        code: `
          async function fetchData() {
            try {
              const data = await fetch("https://api.example.com/data");
              const result = await data.json();
              console.log(result);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
          fetchData();
        `
      }
    ],
    page: "/docs/javascript/advanced"
  },
  {
    title: "Higher-Order Functions (HOFs)",
    description: "Functions that take other functions as arguments or return them as results, like map, filter, and reduce.",
    code: `
      const numbers = [1, 2, 3, 4, 5];
      const squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
      const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
      const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Prototypes and Inheritance",
    description: "JavaScript’s inheritance model is prototype-based, allowing objects to inherit from other objects.",
    code: `
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function() {
        console.log("Hello, " + this.name);
      };
      const person1 = new Person("Alice");
      person1.greet(); // Output: Hello, Alice
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "JavaScript Classes (ES6+)",
    description: "Classes offer a more understandable syntax for creating objects and implementing inheritance.",
    code: `
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          console.log(\`\${this.name} makes a noise\`);
        }
      }
      class Dog extends Animal {
        speak() {
          console.log(\`\${this.name} barks\`);
        }
      }
      const dog = new Dog("Rex");
      dog.speak(); // Output: Rex barks
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Modules and Import/Export (ES6 Modules)",
    description: "Modules allow splitting code into smaller files that export and import functionality as needed.",
    code: `
      // module.js
      export const greet = (name) => \`Hello, \${name}\`;

      // main.js
      import { greet } from './module.js';
      console.log(greet("Alice")); // Output: Hello, Alice
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Generators and Iterators",
    description: "Generators are functions that pause and resume execution using yield expressions.",
    code: `
      function* numberGenerator() {
        yield 1;
        yield 2;
        yield 3;
      }
      const gen = numberGenerator();
      console.log(gen.next().value); // Output: 1
      console.log(gen.next().value); // Output: 2
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Currying",
    description: "Transforms a function with multiple arguments into a series of functions each taking a single argument.",
    code: `
      const add = (a) => (b) => a + b;
      const addFive = add(5);
      console.log(addFive(3)); // Output: 8
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "JavaScript Design Patterns",
    description: "Reusable solutions to common problems in software design.",
    example: {
      type: "Singleton Pattern",
      code: `
        class Singleton {
          constructor() {
            if (!Singleton.instance) {
              Singleton.instance = this;
            }
            return Singleton.instance;
          }
        }
        const instance1 = new Singleton();
        const instance2 = new Singleton();
        console.log(instance1 === instance2); // Output: true
      `
    },
    page: "/docs/javascript/advanced"
  },
  {
    title: "JavaScript Memory Management",
    description: "Understanding memory management, garbage collection, references, and closures helps write optimized code.",
    page: "/docs/javascript/advanced"
  },
  {
    title: "Event Loop and Asynchronous Patterns",
    description: "JavaScript’s event loop handles asynchronous code execution, coordinating the call stack, task queue, and microtask queue.",
    page: "/docs/javascript/advanced"
  },
  {
    title: "Decorators",
    description: "Functions that wrap other functions, modifying their behavior.",
    code: `
      function logExecution(targetFunction) {
        return function(...args) {
          console.log(\`Calling with args: \${args}\`);
          return targetFunction(...args);
        };
      }
      const add = (a, b) => a + b;
      const decoratedAdd = logExecution(add);
      console.log(decoratedAdd(3, 4)); // Logs: Calling with args: [3,4] then Output: 7
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Proxy and Reflect API",
    description: "Proxy intercepts and customizes object behavior, useful for validation, logging, and more.",
    code: `
      const handler = {
        get: (obj, prop) => prop in obj ? obj[prop] : \`No such property as "\${prop}"\`
      };
      const person = new Proxy({ name: "Alice", age: 25 }, handler);
      console.log(person.name); // Output: Alice
      console.log(person.address); // Output: No such property as "address"
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Advanced Error Handling with Try/Catch and Error Objects",
    description: "Using custom error types to handle different types of errors.",
    code: `
      class CustomError extends Error {
        constructor(message) {
          super(message);
          this.name = "CustomError";
        }
      }
      try {
        throw new CustomError("This is a custom error");
      } catch (error) {
        console.error(error.name); // Output: CustomError
        console.error(error.message); // Output: This is a custom error
      }
    `,
    page: "/docs/javascript/advanced"
  },
  {
    title: "Practice and Resources",
    description: "Building projects with complex requirements and exploring resources like MDN, 'You Don’t Know JS,' and advanced courses on freeCodeCamp.",
    page: "/docs/javascript/advanced"
  }
];
