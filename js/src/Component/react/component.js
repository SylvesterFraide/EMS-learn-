// In **React**, a **component** is a reusable, self-contained piece of UI. It’s basically a JavaScript function
//  (or class) that returns JSX (HTML-like code).


// ## Types of React Components

// ### 1. **Functional Components** (most common ✅)

// They are plain JavaScript functions.

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;
```

Using **props**

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```

// ### 2. **Class Components** (older, less used)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Welcome;
```

// ## Components with State (using Hooks)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```


// ## Using a Component

```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}

export default App;
```

// ### Key Points

// * Components start with a **capital letter**
// * They can be **reused**
// * They can receive **props**
// * They can manage **state**

// If you want, I can explain **props**, **state**, **hooks**, or build a **real example component**
//  (like a login form or navbar).


// In React, **Class Components** and **Function Components** are two ways to define components. Today, **function components with Hooks are the standard and recommended approach**, but understanding both is useful.

// ---

// # 🔹 1. Syntax Difference

// ### ✅ Function Component

// ```jsx
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// ```

// Or with arrow function:

// ```jsx
// const Welcome = ({ name }) => {
//   return <h1>Hello, {name}</h1>;
// };
// ```

// ---

// ### ✅ Class Component

// ```jsx
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// ```

// ---

// # 🔹 2. State Management

// ### 🟢 Function Component (with Hooks)

// Uses `useState` hook:

// ```jsx
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }
// ```

// ---

// ### 🔵 Class Component

// Uses `this.state`:

// ```jsx
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         Count: {this.state.count}
//       </button>
//     );
//   }
// }
// ```

// ---

// # 🔹 3. Lifecycle Methods

// ### 🟢 Function Component (Hooks)

// Uses `useEffect` instead of lifecycle methods:

// ```jsx
// import { useEffect } from "react";

// useEffect(() => {
//   console.log("Component mounted");

//   return () => {
//     console.log("Component unmounted");
//   };
// }, []);
// ```

// ---

// ### 🔵 Class Component Lifecycle

// ```jsx
// componentDidMount() {
//   console.log("Mounted");
// }

// componentWillUnmount() {
//   console.log("Unmounted");
// }
// ```

// ---

// # 🔹 4. this Keyword

// * Class components use `this`
// * Function components do NOT use `this`
// * Function components are simpler and avoid binding issues

// ---

// # 🔹 5. Performance

// No major performance difference.
// Function components are generally:

// * Cleaner
// * Easier to read
// * Less boilerplate
// * Preferred in modern React

// ---

// # 🔹 6. Which Should You Use?

// ✅ **Use Function Components**

// * Modern React (16.8+)
// * Hooks replace lifecycle methods
// * Officially recommended by React team

// 🚫 Class components are mostly legacy now.

// ---

// # 🔹 Quick Comparison Table

// | Feature      | Function Component | Class Component       |
// | ------------ | ------------------ | --------------------- |
// | Syntax       | Simple             | More boilerplate      |
// | State        | useState Hook      | this.state            |
// | Lifecycle    | useEffect          | componentDidMount etc |
// | this keyword | ❌ No               | ✅ Yes                 |
// | Recommended  | ✅ Yes              | ❌ Legacy              |

// ---

// # 🔥 Conclusion

// 👉 Today, **Function Components + Hooks = Best Practice**
// Class components are mainly found in older codebases.

// ---

// If you'd like, I can also explain:

// * When class components are still useful
// * How to convert class → function
// * Interview-focused differences 🚀
// * Common pitfalls to avoid



// In React, **controlled** and **uncontrolled** components refer to how form data (like input fields) is managed.

// ---

// ## 🔹 Controlled Components

// A **controlled component** is one where form data is controlled by React state.

// * The input value is stored in `useState`
// * React controls the value via the `value` prop
// * Updates happen through `onChange`
// * Single source of truth = React state

// ### Example:

// ```jsx
// import { useState } from "react";

// function ControlledInput() {
//   const [name, setName] = useState("");

//   return (
//     <input
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter name"
//     />
//   );
// }
// ```

// ### ✅ Advantages

// * Easier validation
// * Instant control over input
// * Predictable behavior
// * Better for dynamic forms

// ### ❌ Disadvantages

// * Slightly more code
// * Re-renders on every change

// ---

// ## 🔹 Uncontrolled Components

// An **uncontrolled component** stores form data in the DOM itself.

// * Uses `ref` to access value
// * No state management for input value
// * React does not control the input

// ### Example:

// ```jsx
// import { useRef } from "react";

// function UncontrolledInput() {
//   const inputRef = useRef();

//   const handleSubmit = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <>
//       <input ref={inputRef} placeholder="Enter name" />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }
// ```

// ### ✅ Advantages

// * Less code
// * Slightly better performance for large simple forms
// * Good for quick/simple forms

// ### ❌ Disadvantages

// * Harder validation
// * Less control
// * Not ideal for complex UI logic

// ---

// ## 🔥 Key Differences

// | Feature           | Controlled     | Uncontrolled |
// | ----------------- | -------------- | ------------ |
// | Data stored in    | React state    | DOM          |
// | Uses `value` prop | ✅ Yes          | ❌ No         |
// | Uses `ref`        | ❌ Not required | ✅ Yes        |
// | Validation        | Easy           | Harder       |
// | Best for          | Complex forms  | Simple forms |

// ---

// ## 🧠 When to Use What?

// * Use **controlled components** in most real-world apps.
// * Use **uncontrolled components** for simple forms or when integrating with non-React libraries.

// ---

// If you want, I can also explain:

// * Controlled vs uncontrolled in React Hook Form
// * Performance differences in large forms
// * How this works in React 18+
// * Interview-focused explanation 🚀
