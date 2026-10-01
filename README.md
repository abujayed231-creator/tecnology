# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
What does the useState hook do, and where did you use it in this project?

What does the useEffect hook do, and why did you need it to load the JSON data?

Why does every item in a .map() list need a unique key prop?

What is conditional rendering? Show one place you used it (example: the empty stack message).

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?



1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript files.

Why it is used: It makes writing UI structures intuitive and declarative. Instead of calling imperative DOM-manipulation methods or nested React methods like React.createElement('div', null, 'Hello'), JSX allows you to write code that visually represents the rendered UI structure directly within your component logic.
FeatureProps (Properties)StateDefinitionData passed into a component from its parent.Internal data managed within a component.MutabilityRead-only (Immutable) in the receiving child component.Mutable, updated via its state updater function (e.g., setState).ControlControlled by the parent component.Controlled entirely by the component itself.PurposeConfigures a child component or passes callbacks down.Holds dynamic data that changes over time and triggers UI re-renders when updated.
3. useState Hook
The useState hook allows functional components to store and manage local state. When state updates via the setter function, React automatically triggers a re-render to reflect the new state in the UI.

In React applications (such as a stack visualizer or items list), useState is commonly used to manage dynamic data structures
4. useEffect Hook & Loading JSON Data
The useEffect hook manages side effects in functional components (such as fetching data, subscribing to events, or manually modifying the DOM).

Why it's used for JSON data: Data fetching is asynchronous and should not happen directly during component rendering (which causes rendering bugs or infinite loops). useEffect runs after the initial render (or when specified dependencies change), making it the safe and standard place to execute fetch() requests and populate component state once the response arrives.
5. Why Every Item in a .map() List Needs a Unique key Prop
React uses the key prop to identify which items in a list have changed, been added, or been removed.

Reconciliation Efficiency: When state updates, React compares the new list with the old one (Diffing Algorithm). A unique key allows React to reuse existing DOM elements efficiently rather than re-creating the entire list from scratch.

Avoiding UI Bugs: Without stable unique keys (or if you rely on array index keys while items can reorder/delete), React can misassociate component state, leading to broken inputs, animations, or incorrect renderings.

6. Conditional Rendering
Conditional Rendering means displaying different UI components or elements based on specific conditions or state values (similar to an if statement in JavaScript).

Example: Empty Stack Message
Using the logical && operator or a ternary operator (? :):
