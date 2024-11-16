export const reactHooks = [
  {
    title: "useState",
    page: "/docs/react/hooks",
    purpose: "Adds state to function components.",
    reason: "Before hooks, managing state was only possible in class components using this.state and this.setState. With useState, you can now manage state inside function components.",
    usage: `
      import { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0); // Initial state is 0
        
        return (
          <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }
    `
  },
  {
    title: "useEffect",
    page: "/docs/react/hooks",
    purpose: "Performs side effects in function components (e.g., fetching data, manually changing the DOM, subscribing to events, or interacting with external APIs).",
    reason: "Previously, lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount were used in class components for side effects. useEffect consolidates this functionality in function components.",
    usage: `
      import { useState, useEffect } from 'react';

      function FetchData() {
        const [data, setData] = useState(null);
        
        useEffect(() => {
          fetch('https://api.example.com/data')
            .then((response) => response.json())
            .then((data) => setData(data));
        }, []); // Empty dependency array ensures this effect runs only once (on mount)
        
        if (!data) return <p>Loading...</p>;
        
        return <div>{JSON.stringify(data)}</div>;
      }
    `,
    commonPatterns: [
      "Running on mount: useEffect(() => {}, [])",
      "Running on every render: useEffect(() => {})",
      "Running on specific state/prop changes: useEffect(() => {}, [dependencies])"
    ]
  },
  {
    title: "useContext",
    page: "/docs/react/hooks",
    purpose: "Allows you to subscribe to React context without introducing prop drilling.",
    reason: "Before hooks, sharing state between distant components required using React Context API in combination with class components. useContext simplifies consuming context in function components.",
    usage: `
      import { useContext } from 'react';

      const UserContext = React.createContext();

      function DisplayUser() {
        const user = useContext(UserContext);
        return <p>Hello, {user.name}</p>;
      }

      function App() {
        const user = { name: 'Alice' };
        
        return (
          <UserContext.Provider value={user}>
            <DisplayUser />
          </UserContext.Provider>
        );
      }
    `
  },
  {
    title: "useReducer",
    page: "/docs/react/hooks",
    purpose: "An alternative to useState, it’s more appropriate for managing more complex state logic, especially when the state depends on previous state or when there are multiple state transitions.",
    reason: "In more complex scenarios where you need to perform multiple state updates or have complex actions to manage state, useState can become cumbersome. useReducer allows for cleaner, more maintainable code, similar to how Redux works.",
    usage: `
      import { useReducer } from 'react';

      const initialState = { count: 0 };
      const reducer = (state, action) => {
        switch (action.type) {
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          default:
            return state;
        }
      };

      function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        return (
          <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
          </div>
        );
      }
    `
  },
  {
    title: "useCallback",
    page: "/docs/react/hooks",
    purpose: "Returns a memoized version of the callback function that only changes if one of the dependencies has changed.",
    reason: "Prevents the unnecessary re-creation of functions on every render, improving performance when passing callbacks to child components that depend on referential equality (e.g., in optimization with React.memo).",
    usage: `
      import { useState, useCallback } from 'react';

      function Parent() {
        const [count, setCount] = useState(0);
        
        const increment = useCallback(() => {
          setCount(count + 1);
        }, [count]); // Only recreate the function when \`count\` changes

        return <Child onIncrement={increment} />;
      }

      function Child({ onIncrement }) {
        return <button onClick={onIncrement}>Increment</button>;
      }
    `
  }
];
