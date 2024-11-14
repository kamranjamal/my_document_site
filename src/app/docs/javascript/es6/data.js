export  const es6Features = [
    {
      title: "let and const",
      description: "let and const replace var for declaring variables. let is block-scoped and allows reassignment, while const is block-scoped and does not allow reassignment.",
      code: `
        let age = 25;
        age = 26; // Works
  
        const name = "Alice";
        // name = "Bob"; // Error: Assignment to constant variable.
      `
    },
    {
      title: "Arrow Functions",
      description: "Provides a shorthand syntax for functions and does not bind its own this.",
      code: `
        const add = (a, b) => a + b;
        const greet = name => \`Hello, \${name}\`;
      `
    },
    {
      title: "Template Literals",
      description: "Allows embedded expressions and multi-line strings using backticks `.",
      code: `
        const name = "Alice";
        const greeting = \`Hello, \${name}!\`; // Output: Hello, Alice!
      `
    },
    {
      title: "Default Parameters",
      description: "Enables default values for function parameters.",
      code: `
        function greet(name = "Guest") {
          return \`Hello, \${name}\`;
        }
        greet(); // Output: Hello, Guest
      `
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
      `
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
      `
    },
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
      `
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
      `
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
      `
    },
    {
      title: "Promises",
      description: "Provides a way to handle asynchronous operations, replacing older callback syntax.",
      code: `
        const fetchData = new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data received"), 1000);
        });
        fetchData.then(data => console.log(data)); // Output: Data received
      `
    },
    {
      title: "Symbols",
      description: "A unique, immutable data type used as identifiers for object properties.",
      code: `
        const sym1 = Symbol("uniqueIdentifier");
        const obj = { [sym1]: "value" };
        console.log(obj[sym1]); // Output: value
      `
    },
    {
      title: "Iterators and Generators",
      description: "Iterators are objects that implement the next() method, allowing custom iteration. Generators are functions that can pause execution (yield) and resume (next()).",
      code: `
        function* generatorFunction() {
          yield 1;
          yield 2;
          yield 3;
        }
        const generator = generatorFunction();
        console.log(generator.next().value); // Output: 1
      `
    },
    {
      title: "Map, Set, WeakMap, and WeakSet",
      description: "Map stores key-value pairs, where keys can be of any type. Set stores unique values of any type.",
      code: `
        const map = new Map();
        map.set("name", "Alice");
        console.log(map.get("name")); // Output: Alice
  
        const set = new Set([1, 2, 2, 3]);
        console.log(set); // Output: Set { 1, 2, 3 }
      `
    },
    {
      title: "for...of Loop",
      description: "Iterates over iterable objects like arrays and strings.",
      code: `
        const arr = [10, 20, 30];
        for (const value of arr) {
          console.log(value); // Output: 10, 20, 30
        }
      `
    },
    {
      title: "Object.assign() and Object.entries()",
      description: "Object.assign() copies properties from one or more source objects to a target object. Object.entries() returns an array of a given object’s key-value pairs.",
      code: `
        const target = { a: 1 };
        const source = { b: 2 };
        const obj = Object.assign(target, source); // { a: 1, b: 2 }
  
        const person = { name: "Alice", age: 25 };
        console.log(Object.entries(person)); // Output: [["name", "Alice"], ["age", 25]]
      `
    }
  ];

  