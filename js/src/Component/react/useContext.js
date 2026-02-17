// The **`useContext` hook** in React is used to access data from a **Context** without manually passing props through every level of a component tree (avoiding “prop drilling”).

// ---

// ## 🔹 Why `useContext` is Useful

// Imagine you want to share:

// * Logged-in user info
// * Theme (dark/light)
// * Language preference

// Instead of passing these as props through multiple components, you can use **Context**.

// ---

// ## 🔹 Basic Steps to Use `useContext`

// ### 1️⃣ Create a Context

// ```jsx
// import { createContext } from "react";

// const ThemeContext = createContext();
// ```

// ---

// ### 2️⃣ Provide the Context Value

// Wrap components with a **Provider**.

// ```jsx
// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }
// ```

// ---

// ### 3️⃣ Consume the Context with `useContext`

// ```jsx
// import { useContext } from "react";

// function Toolbar() {
//   const theme = useContext(ThemeContext);

//   return <div>Current theme: {theme}</div>;
// }
// ```

// ---

// ## 🔹 How It Works

// * `createContext()` → Creates a context object
// * `<Context.Provider value={...}>` → Supplies the data
// * `useContext(Context)` → Reads the data inside a component

// Any component inside the Provider can access the value directly.

// ---

// ## 🔹 Real-World Example (User Context)

// ```jsx
// const UserContext = createContext();

// function App() {
//   const user = { name: "Alice" };

//   return (
//     <UserContext.Provider value={user}>
//       <Profile />
//     </UserContext.Provider>
//   );
// }

// function Profile() {
//   const user = useContext(UserContext);

//   return <h1>Hello, {user.name}</h1>;
// }
// ```

// ---

// ## 🔹 When to Use `useContext`

// ✅ Global themes
// ✅ Authentication state
// ✅ Language settings
// ✅ App-wide configuration

// 🚫 Avoid for frequently changing large state (can cause re-renders)

// ---

// ## 🔹 Important Notes

// * Component **must be inside the Provider**
// * Updating the context value re-renders all consuming components
// * Works only inside functional components (hooks)

// ---

// If you'd like, I can also explain:

// * 🔁 How it differs from props
// * 🧠 How it works internally
// * ⚡ How to optimize performance with `useMemo`
// * 🆚 `useContext` vs Redux

// Just tell me 🙂