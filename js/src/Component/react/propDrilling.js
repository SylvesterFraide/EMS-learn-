// **Prop drilling** is a pattern in component-based frameworks (most commonly in React) where you pass data
//  (props) from a parent component down to deeply nested child components — even when intermediate components 
// don’t actually use that data.

// ---

// ## 🔍 What Prop Drilling Looks Like

// Imagine this structure:

// ```
// App
//  └── Dashboard
//       └── Profile
//            └── Avatar
// ```

// If `App` owns `user` data, but only `Avatar` needs it, you might do this:

// ```jsx
// <App>
//   <Dashboard user={user} />
// </App>

// <Dashboard>
//   <Profile user={user} />
// </Dashboard>

// <Profile>
//   <Avatar user={user} />
// </Profile>
// ```

// Even though `Dashboard` and `Profile` don’t use `user`, they must pass it along.

// ### 🚨 Problems with Prop Drilling

// * Components become tightly coupled
// * Refactoring becomes harder
// * Code becomes repetitive and harder to maintain
// * Makes deeply nested trees messy

// ---

// # ✅ How to Solve Prop Drilling

// There are several common solutions depending on app size and complexity:

// ---

// ## 1️⃣ Use Context (Best Built-in Solution in React)

// React Context API allows you to share data across components without manually passing props.

// ### Example:

// ```jsx
// const UserContext = React.createContext();

// function App() {
//   return (
//     <UserContext.Provider value={user}>
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// function Avatar() {
//   const user = React.useContext(UserContext);
//   return <img src={user.avatar} />;
// }
// ```

// ✔ No more passing props through unused components.

// **Best for:** global or widely shared state (theme, auth user, language)

// ---

// ## 2️⃣ Use State Management Libraries (For Larger Apps)

// If your app grows large, external state management helps.

// Popular options:

// * Redux
// * Zustand
// * Recoil

// These store state centrally so any component can access it directly.

// ✔ Great for complex, large-scale applications
// ⚠ Slightly more setup and learning curve

// ---

// ## 3️⃣ Component Composition (Often Overlooked)

// Instead of passing data down, pass components down.

// ```jsx
// function App() {
//   return <Dashboard avatar={<Avatar user={user} />} />;
// }
// ```

// This reduces the need for intermediate components to know about the data.

// ✔ Clean and simple
// ✔ Works well in many cases
// ❌ Not ideal for deeply dynamic data

// ---

// ## 4️⃣ Lift State Up Strategically

// Sometimes prop drilling signals poor state placement.

// Ask:

// * Does this state really belong at the top?
// * Can it live closer to where it's used?

// ---

// # 🧠 When Is Prop Drilling OK?

// It’s not always bad.

// For:

// * Small apps
// * Shallow component trees
// * Clear parent-child relationships

// Prop drilling is simple and perfectly fine.

// ---

// # 🎯 Summary

// | Situation          | Best Solution             |
// | ------------------ | ------------------------- |
// | Small app          | Pass props normally       |
// | Shared global data | Context API               |
// | Large complex app  | Redux / Zustand           |
// | Structural issue   | Composition or move state |

// ---

// If you'd like, I can also explain how this differs in frameworks like Vue.js or Angular.