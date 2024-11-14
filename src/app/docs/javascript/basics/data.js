export 
const jsFundamentals = [
  {
    title: "JavaScript Basics",
    description: "Core concepts including variables, data types, and comments.",
    sections: [
      {
        heading: "Variables",
        content: "Used to store data. Variables can be declared with var, let, or const.",
        code: `let name = "Alice";    // Can be reassigned
const age = 25;        // Cannot be reassigned
var isStudent = true;  // Older way of declaring variables`
      },
      {
        heading: "Data Types",
        content: "JavaScript has different data types.",
        examples: [
          "String: 'Hello World'",
          "Number: 42",
          "Boolean: true or false",
          "Array: ['apple', 'banana', 'cherry']",
          "Object: { name: 'Alice', age: 25 }"
        ]
      },
      {
        heading: "Comments",
        content: "Use // for single-line comments and /* */ for multi-line comments.",
        code: `// This is a single-line comment
/* This is a
   multi-line comment */`
      }
    ]
  },
  {
    title: "Operators",
    description: "Arithmetic, comparison, and logical operators.",
    sections: [
      { heading: "Arithmetic Operators", content: "+, -, *, /, % (modulus)" },
      { heading: "Comparison Operators", content: "==, ===, !=, !==, <, >, <=, >=" },
      { heading: "Logical Operators", content: "&& (AND), || (OR), ! (NOT)" }
    ]
  },
  {
    title: "Control Structures",
    description: "Conditionals and loops for controlling the flow of code.",
    sections: [
      {
        heading: "Conditional Statements",
        code: `if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`
      },
      {
        heading: "Loops",
        subsections: [
          {
            title: "For Loop",
            code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
          },
          {
            title: "While Loop",
            code: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`
          }
        ]
      }
    ]
  },
  {
    title: "Functions",
    description: "Reusable blocks of code.",
    sections: [
      {
        heading: "Regular Function",
        code: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!`
      },
      {
        heading: "Arrow Functions (ES6)",
        code: `const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8`
      }
    ]
  },
  {
    title: "Objects",
    description: "Collections of key-value pairs used to model real-world entities.",
    sections: [
      {
        heading: "Object Example",
        code: `const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
console.log(person.name); // Output: Alice
person.greet();           // Output: Hello, Alice`
      }
    ]
  },
  {
    title: "Array Methods",
    description: "Built-in methods to work with arrays.",
    sections: [
      {
        heading: "Examples of Array Methods",
        code: `const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");      // Adds to the end
fruits.pop();               // Removes last item
fruits.shift();             // Removes first item
fruits.unshift("mango");    // Adds to the beginning
console.log(fruits);`
      }
    ]
  },
  {
    title: "Events and DOM Manipulation",
    description: "Interacting with the DOM in the browser.",
    sections: [
      {
        heading: "Adding Event Listeners",
        code: `document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});`
      }
    ]
  },
  {
    title: "JavaScript in HTML",
    description: "Including JavaScript in HTML files.",
    sections: [
      {
        heading: "Script Tags",
        content: "JavaScript can be included in HTML within <script> tags or in an external file.",
        code: `<script src="script.js"></script>`
      }
    ]
  },
  {
    title: "Basic Debugging",
    description: "Using console.log() for debugging.",
    sections: [
      {
        heading: "Using console.log()",
        code: `console.log("Debugging message here");`
      }
    ]
  },
  {
    title: "ES6 Features",
    description: "Modern JavaScript (ES6+) features for more efficient code.",
    sections: [
      {
        heading: "Template Literals",
        code: `const name = "Alice";
console.log(\`Hello, \${name}!\`); // Output: Hello, Alice!`
      },
      {
        heading: "Destructuring",
        code: `const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Output: Alice`
      },
      {
        heading: "Spread Operator",
        code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]`
      }
    ]
  },
  {
    title: "Practice and Resources",
    description: "Suggestions for practicing JavaScript and resources for further learning.",
    sections: [
      {
        heading: "Practice",
        content: "Try simple exercises like building a small calculator or an interactive webpage."
      },
      {
        heading: "Resources",
        content: "Recommended resources: MDN Web Docs, freeCodeCamp, and Codecademy for beginner-friendly JavaScript tutorials."
      }
    ]
  }
];