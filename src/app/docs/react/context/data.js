export const reactContext = [
    {
      title: "What is Context API?",
      page: "/docs/react/context",
      description: "The Context API is a React structure that enables you to share data (state, functions, etc.) across multiple components without having to pass props manually at every level.",
      details: [
        "Example Problem Without Context:",
        "In a deeply nested component tree, a piece of state in a parent component needs to be passed to a deeply nested child. This requires prop drilling, where the state is passed as props through each intermediary component, even if they don’t use it.",
        "Solution: The Context API allows the state to be provided at a higher level and consumed directly by any child component in the tree."
      ]
    },
    {
      title: "Why Use Context API?",
      page: "/docs/react/context",
      reasons: [
        "Avoid Prop Drilling: Simplifies passing props through many levels of nested components.",
        "Global State Management: It’s a lightweight alternative to state management libraries like Redux for managing global state.",
        "Readability and Maintainability: Components no longer need to forward props that they don’t use themselves."
      ]
    },
    {
      title: "How Context API Works",
      page: "/docs/react/context",
      steps: [
        "React.createContext: Creates a context object.",
        "Provider: Makes the context data available to any child component.",
        "Consumer or useContext: Retrieves and uses the context data in a child component."
      ]
    },
    {
      title: "How to Use Context API",
      page: "/docs/react/context",
      steps: [
        {
          step: "Step 1: Create the Context",
          code: `
            import React, { createContext } from 'react';
  
            // Create a context
            const UserContext = createContext();
          `
        },
        {
          step: "Step 2: Provide the Context",
          code: `
            function App() {
              const user = { name: "Alice", age: 25 };
  
              return (
                <UserContext.Provider value={user}>
                  <Profile />
                </UserContext.Provider>
              );
            }
          `
        },
        {
          step: "Step 3: Consume the Context",
          options: [
            {
              method: "Using useContext (Recommended)",
              code: `
                import React, { useContext } from 'react';
  
                function Profile() {
                  const user = useContext(UserContext); // Access context value
                  return <h1>{\`Hello, \${user.name}!\`}</h1>;
                }
              `
            },
            {
              method: "Using Context.Consumer",
              code: `
                function Profile() {
                  return (
                    <UserContext.Consumer>
                      {user => <h1>{\`Hello, \${user.name}!\`}</h1>}
                    </UserContext.Consumer>
                  );
                }
              `
            }
          ]
        }
      ]
    },
    {
      title: "Example: A Theme Switcher Using Context API",
      page: "/docs/react/context",
      steps: [
        {
          step: "Create Context and Provider",
          code: `
            import React, { createContext, useState } from 'react';
  
            // Create a context
            const ThemeContext = createContext();
  
            export function ThemeProvider({ children }) {
              const [theme, setTheme] = useState("light");
  
              const toggleTheme = () => {
                setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
              };
  
              return (
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  {children}
                </ThemeContext.Provider>
              );
            }
          `
        },
        {
          step: "Use the Provider in App",
          code: `
            import React from 'react';
            import { ThemeProvider } from './ThemeContext';
            import ThemedButton from './ThemedButton';
  
            function App() {
              return (
                <ThemeProvider>
                  <ThemedButton />
                </ThemeProvider>
              );
            }
  
            export default App;
          `
        },
        {
          step: "Consume the Context",
          code: `
            import React, { useContext } from 'react';
            import { ThemeContext } from './ThemeContext';
  
            function ThemedButton() {
              const { theme, toggleTheme } = useContext(ThemeContext);
  
              return (
                <button
                  style={{
                    background: theme === "light" ? "#fff" : "#333",
                    color: theme === "light" ? "#000" : "#fff",
                  }}
                  onClick={toggleTheme}
                >
                  Toggle Theme
                </button>
              );
            }
  
            export default ThemedButton;
          `
        }
      ]
    },
    {
      title: "Advantages of Using Context API",
      page: "/docs/react/context",
      points: [
        {
          title: "Simplicity",
          details: [
            "Built into React (no external library needed).",
            "Easy to set up and use compared to other state management solutions like Redux or MobX."
          ]
        },
        {
          title: "Avoids Prop Drilling",
          details: ["Passes data to deeply nested components directly without intermediate components."]
        },
        {
          title: "Fine-Grained Access Control",
          details: ["Components only subscribe to specific context values, reducing unnecessary re-renders."]
        },
        {
          title: "Lightweight Solution",
          details: ["Suitable for applications with moderate state-sharing needs (e.g., themes, user authentication)."]
        }
      ]
    },
    {
      title: "Limitations of Context API",
      page: "/docs/react/context",
      points: [
        {
          title: "Performance Concerns",
          details: [
            "Updating a context triggers a re-render in all components consuming it. This can affect performance if not managed properly.",
            "Solution: Use React.memo or split your contexts into smaller, focused contexts."
          ]
        },
        {
          title: "Overuse",
          details: [
            "Using Context API everywhere can make components tightly coupled with global state, reducing reusability."
          ]
        }
      ]
    },
    {
      title: "Best Practices",
      page: "/docs/react/context",
      practices: [
        "Split contexts into smaller, focused contexts to improve maintainability.",
        "Memoize context values using `useMemo` to prevent unnecessary re-renders.",
        "Provide default values when creating context.",
        "Combine Context with Reducers for scalable state management."
      ]
    }
  ];
  