// data.js
export const reactDocs = [
    {
      title: "What is React?",
      content: `
        React is a JavaScript library for building user interfaces.
        Developed by Facebook and maintained by Meta and an open-source community.
        React focuses on building single-page applications (SPAs) and managing the view layer in an application.
        It uses a component-based architecture, where each component represents a part of the UI.
      `,
      code: null, // No code for this section
      path: "/docs/react/introduction",
    },
    {
      title: "Key Features of React",
      content: `
        - **Declarative**: Describe what the UI should look like for a given state, and React handles the updates.
        - **Component-Based**: Build encapsulated components that manage their state, making code reusable and organized.
        - **Virtual DOM**: React uses an in-memory Virtual DOM to efficiently update only parts of the actual DOM that have changed.
        - **Unidirectional Data Flow**: Data flows in a single direction, making data management predictable and debugging easier.
        - **JSX Syntax**: React allows the use of JSX (JavaScript XML), which makes writing HTML-like code directly in JavaScript possible.
      `,
      code: null, // No code for this section
      path: "/docs/react/key-features",
    },
    {
      title: "Setting Up a React Environment",
      content: `
        **Use Create React App (CRA) to set up a basic React environment.**
      `,
      code: `
        npx create-react-app my-app
        cd my-app
        npm start
      `,
      path: "/docs/react/setup",
    },
    {
      title: "React Components",
      content: `
        - **Function Components**: The recommended way to write components; typically use hooks for managing state and lifecycle.
        Components can be composed within each other to build complex UIs.
      `,
      code: `
        function MyComponent() {
          return <h1>Hello, World!</h1>;
        }
      `,
      path: "/docs/react/components",
    },
    {
      title: "JSX Syntax",
      content: `
        JSX is a syntax extension that resembles HTML but can contain JavaScript expressions using curly braces \`{}\`.
      `,
      code: `
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
      `,
      path: "/docs/react/jsx",
    },
    {
      title: "Props (Properties)",
      content: `
        Props are inputs to a component, passed as attributes in JSX. They are **immutable**, meaning a component cannot modify its own props.
        Props are used to make components reusable by accepting dynamic data.
      `,
      code: `
        function Greeting(props) {
          return <h1>Hello, {props.name}</h1>;
        }
      `,
      path: "/docs/react/props",
    },
    {
      title: "State in React",
      content: `
        State is a built-in object that allows components to manage dynamic data.
      `,
      code: `
        import { useState } from 'react';
  
        function Counter() {
          const [count, setCount] = useState(0);
          return (
            <div>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
        }
      `,
      path: "/docs/react/state",
    },
    {
      title: "Handling Events",
      content: `
        Events in React are written in camelCase (e.g., \`onClick\`, \`onSubmit\`) and accept functions as handlers.
      `,
      code: `
        function ClickHandler() {
          const handleClick = () => alert("Button clicked!");
          return <button onClick={handleClick}>Click me</button>;
        }
      `,
      path: "/docs/react/events",
    },
    {
      title: "Conditional Rendering",
      content: `
        Render elements conditionally using JavaScript operators like ternary operators or \`&&\`.
      `,
      code: `
        function Greeting(props) {
          return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
        }
      `,
      path: "/docs/react/conditional-rendering",
    },
    {
      title: "Lists and Keys",
      content: `
        Render lists in React using \`.map()\` and provide each list item with a unique \`key\` prop.
      `,
      code: `
        const items = ["Apple", "Banana", "Cherry"];
        const listItems = items.map((item) => <li key={item}>{item}</li>);
        return <ul>{listItems}</ul>;
      `,
      path: "/docs/react/lists-keys",
    },
    {
      title: "Lifecycle Methods",
      content: `
        - **Mounting**: \`componentDidMount()\`
        - **Updating**: \`componentDidUpdate()\`
        - **Unmounting**: \`componentWillUnmount()\`
  
        With function components, use \`useEffect\` for lifecycle events.
      `,
      code: null, // No code for this section
      path: "/docs/react/lifecycle-methods",
    },
    {
      title: "useEffect Hook",
      content: `
        The \`useEffect\` hook performs side effects in function components, such as data fetching, setting up subscriptions, etc.
      `,
      code: `
        import { useEffect } from 'react';
  
        function App() {
          useEffect(() => {
            console.log("Component mounted or updated");
          }, []); // Empty dependency array means it only runs on mount
        }
      `,
      path: "/docs/react/useeffect-hook",
    },
    {
      title: "React Router",
      content: `
        React Router is a library for routing in single-page applications.
      `,
      code: `
        npm install react-router-dom
      `,
      path: "/docs/react/router",
    },
    {
      title: "Context API for State Management",
      content: `
        Context API allows sharing state across components without prop drilling.
      `,
      code: `
        import { createContext, useContext, useState } from "react";
  
        const UserContext = createContext();
  
        function App() {
          const [user, setUser] = useState("Alice");
          return (
            <UserContext.Provider value={user}>
              <Profile />
            </UserContext.Provider>
          );
        }
  
        function Profile() {
          const user = useContext(UserContext);
          return <h1>Hello, {user}</h1>;
        }
      `,
      path: "/docs/react/context-api",
    },
    {
      title: "Higher-Order Components (HOCs)",
      content: `
        A Higher-Order Component is a function that takes a component and returns a new component, useful for reusing logic.
      `,
      code: `
        function withGreeting(WrappedComponent) {
          return function EnhancedComponent(props) {
            return <WrappedComponent {...props} greeting="Hello!" />;
          };
        }
      `,
      path: "/docs/react/hocs",
    },
    {
      title: "Custom Hooks",
      content: `
        Custom hooks allow you to reuse logic across components.
      `,
      code: `
        import { useState, useEffect } from "react";
  
        function useFetch(url) {
          const [data, setData] = useState(null);
          useEffect(() => {
            fetch(url).then(response => response.json()).then(data => setData(data));
          }, [url]);
          return data;
        }
      `,
      path: "/docs/react/custom-hooks",
    },
    {
      title: "React DevTools",
      content: `
        React DevTools is a browser extension to inspect the React component tree and debug components more efficiently.
      `,
      code: null, // No code for this section
      path: "/docs/react/devtools",
    }
  ];
  