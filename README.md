# React - The Complete Guide 2025 (incl. Next.js, Redux)

This course covers React.js comprehensively, from fundamentals to advanced topics, with a practical, project-based approach. It includes multiple demo applications and follows the latest React 19 patterns and best practices.


#### Core topics covered:

- React fundamentals: components, props, hooks, state management
- Advanced patterns: Context API, Redux Toolkit, custom hooks
- Fullstack development with Next.js 14+ and React Server Components
- Routing, authentication, form handling, and HTTP requests
- Professional practices: TypeScript, testing, styling, deployment

## [00-starting-js-proj]()
A comprehensive JavaScript fundamentals review covering modern ES6+ syntax and concepts essential for React development. This module focuses on understanding how React projects differ from vanilla JavaScript and the build process involved.

#### Key topics covered:

- Modern JavaScript syntax: arrow functions, destructuring, spread operator
- ES6 modules: import/export statements
- Array methods (map, filter, reduce) crucial for React
- Functions as values and higher-order functions
- Objects, classes, and reference vs primitive values
- DOM manipulation concepts (and why React handles it differently)
- Control structures and operators

## [01-starting-project]()
An in-depth exploration of React's core concepts, building a solid foundation in component-based architecture, state management, and dynamic UI rendering. This module covers everything from creating basic components to handling events and managing application state.

#### Key topics covered:

- Components & JSX: Creating reusable components, understanding the component tree
- Props & composition: Making components flexible with props, children prop, and component composition
- Event handling: Responding to user interactions, passing functions as props, custom event arguments
- State management: Using hooks (useState), deriving data from state, updating UI reactively
- Dynamic rendering: Conditional content, rendering lists dynamically, dynamic styling
- Best practices: Project structure, file organization, component splitting strategies
- Advanced patterns: Fragments, forwarding props, multiple JSX slots, dynamic component types, default prop values

## [Tic-Tac-Toe Game]()
A fully functional two-player Tic-Tac-Toe game built with React, focusing on advanced state management patterns and component composition. The game features player name customization, turn-based gameplay, win/draw detection, and a complete game-over screen with restart functionality.
#### Key topics covered:
- State management patterns: Lifting state up, deriving computed values, avoiding unnecessary state
- Immutable state updates: Properly updating arrays and objects without mutations
- Component architecture: Splitting components by feature, creating reusable UI elements, component isolation
- Two-way binding: Managing user input for dynamic player names
- Advanced rendering: Multi-dimensional lists (game board), conditional content rendering
- State derivation: Computing values from other computed values, reducing state complexity
- Best practices: Updating state based on previous state, avoiding intersecting states, data organization in separate files

## [Investment Calculator]()
A financial calculator application that computes investment returns over time based on user inputs. Built independently to reinforce React fundamentals, featuring dynamic calculations, real-time updates, and a clean user interface for financial planning.

#### Key topics covered:

- Component composition: Fragments, flexible components with prop forwarding, multiple JSX slots
- State management: Two-way binding for form inputs, lifting state for shared data access
- Dynamic rendering: Conditional content display, rendering calculated results dynamically
- Computed values: Deriving financial calculations from state without unnecessary re-renders
- Immutable state updates: Properly managing complex state objects
- Component patterns: Dynamic component types, default prop values, component splitting strategies
- Best practices: Separating data logic, avoiding redundant state, efficient state derivation

## [CSS Module Project]()
A comprehensive exploration of different styling approaches in React, from vanilla CSS to modern CSS-in-JS solutions and utility-first frameworks. This project demonstrates the implementation of the same application using multiple styling methodologies, comparing their strengths, limitations, and use cases.

#### Key topics covered:

- Vanilla CSS: Splitting CSS across multiple files, understanding global scope limitations, pros and cons
- Inline styles: Dynamic and conditional styling with JavaScript objects, performance considerations
- CSS Modules: Scoping CSS rules to components, preventing style conflicts, local vs global styles
- Styled Components: CSS-in-JS approach, creating flexible styled components, component-based styling
- Advanced Styled Components: Pseudo selectors, nested rules, media queries, dynamic props-based styling
- Tailwind CSS: Utility-first framework setup, responsive design with media queries, pseudo selectors
- Dynamic styling patterns: Conditional classes, dynamic inline styles, props-based styling across different approaches
- Component architecture: Creating reusable styled components, component combinations, maintaining flexibility
- Comparison & best practices: Evaluating pros and cons of each approach, choosing the right styling solution

## [Debugging Investment Calculator]()
### React Debugging & Developer Tools
A focused project on mastering debugging techniques and tools essential for React development. This module emphasizes identifying, diagnosing, and resolving common React errors through systematic debugging approaches and professional developer tools.

#### Key topics covered:

- Error diagnosis: Reading and understanding React error messages, stack traces, and warnings
- Browser debugging: Using browser DevTools debugger, setting breakpoints, stepping through code
- React Strict Mode: Understanding double-rendering behavior, identifying side effects, development vs production mode
- React DevTools: Component tree inspection, props and state debugging, performance profiling
- Debugging strategies: Systematic error identification, isolating problems, testing solutions
- Best practices: Preventing common errors, writing debuggable code, using development tools effectively

## [Refs and Portals Project]()
A deep dive into React's advanced DOM manipulation and component communication patterns through Refs and Portals. This project explores when and how to access DOM elements directly, manage non-state values, and render components outside the normal DOM hierarchy for better UI architecture.

#### Key topics covered:

- State management review: Two-way binding patterns, managing user input with state, fragments for cleaner JSX
- Refs fundamentals: Connecting to HTML elements via useRef, accessing and reading DOM values, when to use refs vs state
- DOM manipulation: Direct DOM access through refs, understanding the differences between refs and state values
- Beyond DOM connections: Using refs for persistent values across renders, managing timers and intervals with refs
- Modal components: Building reusable modal dialogs, conditional rendering patterns, user interaction handling
- Forwarding refs: Passing refs to custom components with forwardRef, exposing child component APIs to parents
- useImperativeHandle hook: Creating imperative APIs for components, exposing controlled methods to parent components
- Advanced ref patterns: Combining refs with state, keyboard event handling (ESC key), cleanup patterns
- Portals introduction: Rendering components outside the DOM hierarchy, semantic HTML improvements, overlay patterns
- Best practices: Choosing between refs and state, component API design, accessibility considerations

## [Project Management]()
A complete React project management application demonstrating state management, component architecture, and advanced React patterns. This project builds a full-featured app for creating, viewing, and managing projects with associated tasks, emphasizing component reusability and clean code organization.

#### Key topics covered:

- Component architecture: Building a sidebar navigation, splitting components for better reusability, organizing JSX and Tailwind styles
- Tailwind CSS styling: Styling buttons, inputs, sidebars, and modals using Tailwind utility classes, creating consistent UI patterns
- State management patterns: Managing application state to switch between different views (project list, new project form, project details)
- Refs and forwarded refs: Collecting user input with useRef, forwarding refs to custom components with forwardRef for flexible input handling
- Form handling: Managing project creation forms, collecting multiple input values, handling form submission
- Input validation: Validating user input before processing, providing feedback for incomplete or invalid data
- Modal components: Building error modals for user feedback, styling modals with Tailwind CSS
- useImperativeHandle hook: Exposing imperative component APIs to parent components, controlling modal visibility from outside
- Dynamic UI updates: Adding new projects to the UI, rendering project lists, making projects selectable
- Project details view: Displaying selected project information, switching between different project views
- Project deletion: Implementing delete functionality, updating state to remove projects, handling UI updates
- Task management: Adding a tasks component, managing tasks within projects, adding and displaying tasks
- Prop drilling: Understanding and managing data flow through multiple component layers, passing state and handlers through props
- Task operations: Clearing individual tasks, fixing edge cases and minor bugs in task management
- Component communication: Coordinating between sibling components, lifting state up, managing complex component interactions

## [Advanced State Management]()
An in-depth exploration of React's Context API and useReducer hook for managing complex state and avoiding prop drilling. This module demonstrates how to refactor applications to use global state management patterns, making data accessible across component trees without passing props through every level.

#### Key topics covered:

- Prop drilling problems: Understanding the limitations of passing props through multiple component layers, identifying when prop drilling becomes problematic
- Component composition: Using component composition as an alternative solution to prop drilling, restructuring component hierarchies
- Context API introduction: Understanding React Context as a solution for sharing data across components, when to use Context vs props
- Creating context: Setting up context with createContext, defining context structure and default values
- Providing context: Wrapping components with Context Provider, making context values available to component trees
- Consuming context: Accessing context values in child components using useContext hook, reading data from context
- Context with state: Linking Context API with useState, managing dynamic context values that change over time
- Alternative consumption patterns: Different ways to consume context (useContext hook vs Context.Consumer), choosing the right approach
- Context value updates: Understanding how context changes trigger re-renders, performance considerations with context updates
- Full migration: Refactoring an entire project to use Context API, removing prop drilling throughout the application
- Provider components: Creating separate provider components, outsourcing context and state logic for better organization and reusability
- useReducer hook introduction: Understanding useReducer as an alternative to useState for complex state logic, reducer function patterns
- Actions and dispatching: Dispatching actions to update state, editing state through reducer functions, action types and payloads
- State management patterns: Comparing useState vs useReducer, choosing the right state management approach for different scenarios
- Best practices: Organizing context providers, structuring reducer logic, combining Context API with useReducer for robust state management

## [Side Effects & useEffect Hook]()
A comprehensive exploration of side effects in React and the useEffect hook for managing them. This module covers when and how to handle side effects properly, understanding effect dependencies, cleanup patterns, and optimization techniques to prevent common pitfalls like infinite loops and unnecessary re-renders.

#### Key topics covered:

- Side effects fundamentals: Understanding what side effects are in React, identifying side effects in components through practical examples
- Infinite loop problems: Recognizing how side effects can cause infinite render loops, understanding why some side effects are problematic
- useEffect hook introduction: Using useEffect to handle side effects safely, managing when effects run during component lifecycle
- When useEffect is unnecessary: Identifying side effects that don't require useEffect, avoiding overuse of useEffect for simple operations
- Event handlers vs effects: Understanding when to handle side effects in event handlers instead of useEffect, choosing the right approach
- Browser API synchronization: Using useEffect to sync with browser APIs (localStorage, timers, etc.), managing external system interactions
- Effect dependencies: Understanding the dependency array, controlling when effects re-run, specifying dependencies correctly
- Bug fixing: Identifying and resolving common useEffect-related bugs, debugging effect behavior
- Cleanup functions: Introducing useEffect's cleanup function, preventing memory leaks and stale effects, cleaning up subscriptions and timers
- Cleanup patterns: Multiple examples of cleanup function usage, understanding when and why cleanup is needed
- Object and function dependencies: Understanding problems with objects and functions as dependencies, dealing with reference equality issues
- useCallback hook: Memoizing functions with useCallback, preventing unnecessary effect re-runs caused by function recreations
- State update optimization: Optimizing state updates within effects, using functional updates to avoid dependency issues
- Best practices: Choosing between useEffect and event handlers, managing complex dependencies, writing efficient and maintainable effects
## [Quiz Application Project]()
A complete quiz application built with React, demonstrating advanced state management, timer implementation, and component architecture patterns. This project showcases practical application of useEffect, useCallback, and component composition while building a fully-featured quiz with timed questions, answer validation, and result tracking.

#### Key topics covered:

- Component setup: Building the initial quiz component structure, managing quiz state with useState
- Derived values: Computing values from existing state, outputting dynamic questions, registering and tracking user answers
- Answer shuffling: Randomizing answer order for each question, implementing quiz logic and flow control
- Timer implementation: Adding countdown timers to questions, managing time-based state updates, handling timer expiration
- Effect dependencies management: Working with complex useEffect dependencies, using useCallback to stabilize function references
- Cleanup functions: Using effect cleanup to clear timers, preventing memory leaks with proper cleanup patterns
- Component reset with keys: Using React keys to force component remounts, resetting component state effectively
- Answer highlighting: Implementing visual feedback for selected answers, managing multiple state values for UI updates
- State management patterns: Tracking answer states (selected, correct, incorrect), managing complex UI state transitions
- Component splitting: Breaking down large components into smaller, focused components to solve state and rendering problems
- Moving state down: Refactoring state to live in components that actually use it, improving component organization and performance
- Conditional timers: Setting different timer durations based on answer selection and validation state
- Quiz results: Calculating and displaying final quiz results, showing score and answer summary
- Component architecture: Organizing quiz logic across multiple components, managing parent-child communication effectively
- Performance optimization: Preventing unnecessary re-renders, optimizing effect execution with proper dependencies

## [React Performance Optimization & Behind The Scenes]()
A deep dive into React's internal workings and performance optimization techniques. This module explores how React builds and manages the component tree, when components re-render, and various strategies to optimize application performance through memoization, proper component structure, and understanding React's rendering mechanism.

#### Key topics covered:

- Component tree structure: Understanding how React builds and manages the component tree, exploring React's internal architecture
- React DevTools Profiler: Analyzing component function executions, identifying performance bottlenecks, measuring render performance
- memo() optimization: Using React.memo() to prevent unnecessary component re-renders, understanding when memoization helps
- Component structuring: Avoiding re-renders through clever component organization, optimizing component hierarchy without additional APIs
- useCallback hook deep dive: Understanding useCallback for memoizing functions, preventing child component re-renders caused by function recreation
- useMemo hook: Memoizing expensive calculations with useMemo, optimizing derived values and complex computations
- Virtual DOM exploration: Understanding React's Virtual DOM concept, how React compares and updates the actual DOM efficiently
- Keys and state management: Why keys are crucial for proper state management, how React uses keys to identify components
- Key importance: Additional scenarios demonstrating why keys matter, preventing state bugs with proper key usage
- Resetting components with keys: Using key changes to force component remounts, managing component lifecycle through keys
- State scheduling: Understanding how React schedules state updates, batching multiple state updates for performance
- State batching: How React batches updates together, optimizing rendering by grouping state changes
- Advanced optimization: Introduction to MillionJS for React optimization, exploring third-party performance enhancement tools
- Best practices: When to optimize and when not to, balancing code complexity with performance gains, measuring before optimizing