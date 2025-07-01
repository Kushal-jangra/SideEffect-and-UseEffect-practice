# SideEffect and useEffect Practice Project

This project is a React-based practice setup focused on understanding **side effects** in React components using the `useEffect` Hook. It demonstrates various common scenarios where side effects occur and how to manage them effectively using React's functional components.

## 🚀 Project Overview

React components not only render UI based on state and props but often need to perform **side effects**, such as:

* Fetching data from an API
* Setting up event listeners
* Updating the DOM directly
* Starting timers or intervals
* Cleaning up resources when a component unmounts

This project showcases practical examples of these situations using `useEffect`.

---

## 🛠️ Concepts Covered

### ✅ What is a Side Effect?

A side effect is any operation inside a component that affects something outside the scope of the function, like:

* Network requests
* DOM manipulation
* Subscribing to external events
* Timers or intervals

### ✅ `useEffect` Hook

`useEffect` lets you perform side effects in function components. The hook runs **after every render by default**, but you can control its execution using the dependency array.

**Syntax Example:**

```js
useEffect(() => {
  // Side effect logic here

  return () => {
    // Cleanup logic (runs when component unmounts or before next effect)
  };
}, [dependencies]);
```

---

## 💡 Key Examples in the Project

* **Running Effects After Every Render**
* **Running Effects Only Once (Component Mount)**
* **Using Cleanup Functions to Avoid Memory Leaks**
* **Dependency Arrays Controlling Re-Runs**
* **Practical Scenarios like Timers or Event Listeners**

---

## 📂 Project Structure

```
/src
├── App.js           # Main component
├── TimerComponent.js  # Example using setInterval with cleanup
├── EventListenerExample.js # Example adding/removing event listeners
└── index.js         # Entry point
```

---

## 💾 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kushal-jangra/SideEffect-and-UseEffect-practice.git
cd SideEffect-and-UseEffect-practice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm start
```

---

## 🎯 Learning Outcomes

After exploring this project, you will:

✅ Understand when and why side effects are needed in React
✅ Know how to properly use `useEffect` with and without dependencies
✅ Be able to manage component cleanup to avoid bugs and memory leaks
✅ Get hands-on with real examples of side effects in modern React

---

## 📚 Prerequisites

* Basic knowledge of React fundamentals (components, state, props)
* Familiarity with functional components and Hooks

---

## 🏷️ Tags

`React` `useEffect` `Side Effects` `React Hooks` `Cleanup` \`Pr
