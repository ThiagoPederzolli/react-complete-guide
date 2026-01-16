# React - The Complete Guide 2025 (incl. Next.js, Redux)

This course covers React.js comprehensively, from fundamentals to advanced topics, with a practical, project-based approach. It includes multiple demo applications and follows the latest React 19 patterns and best practices.


#### Core topics covered:

- React fundamentals: components, props, hooks, state management
- Advanced patterns: Context API, Redux Toolkit, custom hooks
- Fullstack development with Next.js 14+ and React Server Components
- Routing, authentication, form handling, and HTTP requests
- Professional practices: TypeScript, testing, styling, deployment

## [00-starting-js-proj](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/00-starting-js-proj)
A comprehensive JavaScript fundamentals review covering modern ES6+ syntax and concepts essential for React development. This module focuses on understanding how React projects differ from vanilla JavaScript and the build process involved.

#### Key topics covered:

- Modern JavaScript syntax: arrow functions, destructuring, spread operator
- ES6 modules: import/export statements
- Array methods (map, filter, reduce) crucial for React
- Functions as values and higher-order functions
- Objects, classes, and reference vs primitive values
- DOM manipulation concepts (and why React handles it differently)
- Control structures and operators

## [01-starting-project](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/01-starting-project)
An in-depth exploration of React's core concepts, building a solid foundation in component-based architecture, state management, and dynamic UI rendering. This module covers everything from creating basic components to handling events and managing application state.

#### Key topics covered:

- Components & JSX: Creating reusable components, understanding the component tree
- Props & composition: Making components flexible with props, children prop, and component composition
- Event handling: Responding to user interactions, passing functions as props, custom event arguments
- State management: Using hooks (useState), deriving data from state, updating UI reactively
- Dynamic rendering: Conditional content, rendering lists dynamically, dynamic styling
- Best practices: Project structure, file organization, component splitting strategies
- Advanced patterns: Fragments, forwarding props, multiple JSX slots, dynamic component types, default prop values

## [Tic-Tac-Toe Game](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/07-tic-tac-toe-starting-project)
A fully functional two-player Tic-Tac-Toe game built with React, focusing on advanced state management patterns and component composition. The game features player name customization, turn-based gameplay, win/draw detection, and a complete game-over screen with restart functionality.
#### Key topics covered:
- State management patterns: Lifting state up, deriving computed values, avoiding unnecessary state
- Immutable state updates: Properly updating arrays and objects without mutations
- Component architecture: Splitting components by feature, creating reusable UI elements, component isolation
- Two-way binding: Managing user input for dynamic player names
- Advanced rendering: Multi-dimensional lists (game board), conditional content rendering
- State derivation: Computing values from other computed values, reducing state complexity
- Best practices: Updating state based on previous state, avoiding intersecting states, data organization in separate files

## [Investment Calculator](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/investiment-calculator)
A financial calculator application that computes investment returns over time based on user inputs. Built independently to reinforce React fundamentals, featuring dynamic calculations, real-time updates, and a clean user interface for financial planning.

#### Key topics covered:

- Component composition: Fragments, flexible components with prop forwarding, multiple JSX slots
- State management: Two-way binding for form inputs, lifting state for shared data access
- Dynamic rendering: Conditional content display, rendering calculated results dynamically
- Computed values: Deriving financial calculations from state without unnecessary re-renders
- Immutable state updates: Properly managing complex state objects
- Component patterns: Dynamic component types, default prop values, component splitting strategies
- Best practices: Separating data logic, avoiding redundant state, efficient state derivation

## [CSS Module Project](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/css-module-project)
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

## [Debugging Investment Calculator](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/debugging-investment-calculator)
### React Debugging & Developer Tools
A focused project on mastering debugging techniques and tools essential for React development. This module emphasizes identifying, diagnosing, and resolving common React errors through systematic debugging approaches and professional developer tools.

#### Key topics covered:

- Error diagnosis: Reading and understanding React error messages, stack traces, and warnings
- Browser debugging: Using browser DevTools debugger, setting breakpoints, stepping through code
- React Strict Mode: Understanding double-rendering behavior, identifying side effects, development vs production mode
- React DevTools: Component tree inspection, props and state debugging, performance profiling
- Debugging strategies: Systematic error identification, isolating problems, testing solutions
- Best practices: Preventing common errors, writing debuggable code, using development tools effectively

## [Refs and Portals Project](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/refs-and-portals)
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

## [Project Management](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/project-management)
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

## [Advanced State Management](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/advanced-state-management)
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

## [Side Effects & useEffect Hook](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/side-effects)
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

## [Quiz Application Project](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/quiz-project)
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

## [React Performance Optimization & Behind The Scenes](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/behind-the-scenes)
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

## [Class-based Components](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/class-components-project)
An exploration of React's class-based component syntax and lifecycle methods. This module covers the traditional approach to building React components before hooks were introduced, understanding component lifecycle, and learning about error boundaries - a feature still exclusive to class components.

#### Key topics covered:

- Class components introduction: Understanding what class-based components are, why they were used historically, when they're still relevant today
- Creating class components: Adding the first class-based component, converting functional components to class syntax, understanding the class component structure
- State and events in classes: Managing state with this.state and this.setState(), handling events in class components, binding methods correctly
- Component lifecycle: Understanding the component lifecycle exclusive to class-based components, learning lifecycle phases (mounting, updating, unmounting)
- Lifecycle methods: Implementing lifecycle methods in action (componentDidMount, componentDidUpdate, componentWillUnmount), understanding when each method runs
- Context in class components: Using Context API with class-based components, accessing context with this.context and Context.Consumer
- Comparison summary: Class-based vs functional components comparison, understanding the differences in syntax and capabilities, when to use each approach
- Error boundaries: Introducing error boundaries for catching JavaScript errors in component trees, implementing componentDidCatch and getDerivedStateFromError
- Error handling: Creating error boundary components to gracefully handle errors, displaying fallback UI when errors occur, understanding error boundary limitations
- Modern React context: Understanding that class components are legacy but still supported, recognizing that functional components with hooks are the modern standard

## [HTTP Requests & Data Fetching](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/http-requests)
A comprehensive guide to connecting React applications with backend APIs and databases. This module covers best practices for fetching and sending data, handling asynchronous operations, managing loading and error states, and implementing optimistic UI updates for better user experience.

#### Key topics covered:

- Database connection fundamentals: Understanding why direct database connections from React are problematic, learning the proper architecture for data fetching
- Backend API setup: Starting with a dummy backend API, preparing the development environment for HTTP requests
- App preparation: Structuring the app to handle data fetching, setting up components for async data operations
- Common mistakes: Learning how NOT to send HTTP requests, understanding why certain approaches are wrong and cause problems
- GET requests with useEffect: Properly sending HTTP GET requests using useEffect hook, fetching data when components mount
- Async/await syntax: Using modern async/await syntax for cleaner asynchronous code, handling promises effectively
- Loading states: Implementing loading indicators, managing UI state during data fetching, providing user feedback
- Error handling: Catching and handling HTTP errors gracefully, displaying error messages to users, recovering from failed requests
- Data transformation: Processing and transforming fetched data before using it in components, mapping API responses to component needs
- Code organization: Extracting data fetching logic into reusable functions, improving code structure and maintainability
- POST requests: Sending data to the server with POST requests, creating new resources, handling request payloads
- Optimistic updates: Implementing optimistic UI updates for instant user feedback, updating UI before server confirmation, handling rollback scenarios
- DELETE requests: Removing data via DELETE HTTP requests, managing state after deletions, confirming destructive actions
- Practice exercises: Hands-on practice with data fetching patterns, reinforcing learned concepts through application
- Best practices: Proper error boundaries, loading state management, request cancellation, avoiding race conditions

## [Custom React Hooks](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/custom-hooks)
A focused exploration of creating custom React hooks to extract and reuse component logic. This module teaches how to build flexible, reusable hooks that encapsulate stateful logic, side effects, and complex functionality that can be shared across multiple components, following React's rules of hooks.

#### Key topics covered:

- Rules of hooks review: Revisiting the fundamental rules of hooks (only call at top level, only in React functions), understanding why hooks exist and their benefits
- Custom hook creation: Building your first custom hook, understanding custom hook naming conventions (use prefix), extracting reusable logic
- State management in hooks: Managing state within custom hooks using useState, returning state values to components that use the hook
- Returning multiple values: Structuring return values from custom hooks (objects vs arrays), providing both state and updater functions
- Exposing nested functions: Creating and exposing helper functions from custom hooks, building complete APIs for hook consumers
- Hook reusability: Using the same custom hook in multiple components, sharing logic without code duplication, managing independent state instances
- Flexible hook design: Creating configurable custom hooks that accept parameters, building hooks that adapt to different use cases and requirements
- Best practices: Designing intuitive hook APIs, choosing what to expose and what to keep internal, making hooks truly reusable and maintainable

## [Working with Forms & User Input](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/forms-project)
A comprehensive guide to handling forms in React, covering multiple approaches to collecting and validating user input. This module explores different strategies for form management, from basic state handling to custom hooks and third-party libraries, with emphasis on validation patterns and creating reusable form components.

#### Key topics covered:

- Forms fundamentals: Understanding what makes forms tricky in React, identifying common challenges with form handling and validation
- Form submission: Handling form submit events, preventing default browser behavior, extracting form data on submission
- State-based input management: Managing input values with state, creating generic change handlers, two-way binding patterns
- Refs for input values: Getting user input via refs as an alternative to state, understanding when refs are appropriate for forms
- FormData API: Using native browser FormData API, leveraging built-in form handling capabilities, extracting multiple input values efficiently
- Form reset: Implementing form reset functionality, clearing inputs after submission, resetting to initial state
- Keystroke validation: Validating input on every keystroke using state, providing real-time feedback, managing validation state
- Blur validation: Validating input when fields lose focus, implementing onBlur handlers, showing errors after user interaction
- Submit validation: Validating entire form upon submission, preventing invalid form submission, displaying validation errors
- Built-in validation: Using HTML5 validation attributes (required, pattern, min, max), leveraging browser validation capabilities
- Mixed validation approaches: Combining custom JavaScript validation with built-in HTML validation, creating comprehensive validation strategies
- Reusable input components: Building generic Input components with built-in validation, creating composable form building blocks
- Validation logic extraction: Outsourcing validation functions for reusability, separating validation logic from component code
- Custom useInput hook: Creating a custom hook to manage input state and validation, encapsulating form input logic for maximum reusability
- Third-party libraries: Introduction to form libraries (React Hook Form, Formik), understanding when to use external solutions
- Best practices: Choosing the right approach for different scenarios, balancing complexity with functionality, user experience considerations

## [React Form Actions](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/form-actions-project) & [Advanced Form Handling](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/demo-form-actions-project)
An exploration of React's modern form handling capabilities using Form Actions and related hooks. This module covers the new server-centric form patterns, managing form state with specialized hooks, handling asynchronous operations, and implementing optimistic updates for enhanced user experience.

#### Key topics covered:

- Form Actions introduction: Understanding what Form Actions are, how they differ from traditional form handling, when to use Form Actions
- Validation with actions: Adding validation checks within Form Actions, handling validation errors, providing user feedback
- useActionState hook: Managing form-dependent state with useActionState(), handling action results and errors, updating UI based on action outcomes
- User input handling: Processing and using user input within Form Actions, accessing form data in action functions
- Action function organization: Moving action functions outside components for better code structure, separating concerns and improving maintainability
- Demo application: Building a practical demo app to demonstrate Form Action patterns, applying concepts in a real-world scenario
- Form submission handling: Managing form submissions with actions, preventing default behavior, coordinating client and server logic
- Asynchronous actions: Working with async Form Actions, handling promises and async operations, managing loading states during async work
- useFormStatus hook: Updating UI based on form submission status with useFormStatus(), showing pending states, disabling inputs during submission
- Multiple form actions: Registering and managing multiple actions within a single form, handling different submit buttons with different actions
- HTTP requests in actions: Sending HTTP requests directly from Form Actions, integrating with backend APIs, handling response data
- Pending state management: Using the pending state from useActionState(), providing visual feedback during form processing
- Optimistic updates: Implementing optimistic UI updates with Form Actions, updating UI immediately before server confirmation, handling rollback scenarios
- Best practices: Choosing between traditional handlers and Form Actions, progressive enhancement, error handling strategies, user experience optimization

## [Food Order Application](https://github.com/ThiagoPederzolli/react-complete-guide/tree/main/food-order-app)

A complete, production-ready food ordering application built entirely from scratch, demonstrating end-to-end React development from initial planning through implementation. This project showcases not just coding skills, but the full software development lifecycle including task breakdown, project management, and PR-based workflow.

**Project Planning & Execution:**
- Complete solo development with self-directed task breakdown and prioritization
- [Created detailed user stories from Product Owner perspective](https://www.notion.so/PO-Perspective-2dca862b193b800b8c4ad2b366a8afb6?source=copy_link)
- [Defined technical acceptance criteria from Tech Lead perspective](https://www.notion.so/TL-perspective-2dca862b193b80a78198f2b52d1f9ce2?source=copy_link)
- [Implemented kanban-style project board to track progress](https://www.notion.so/2dba862b193b800c8820fe70ca96e3fe?v=2dba862b193b8009b671000cca3ac6fa&source=copy_link)
- [Followed professional PR workflow with comprehensive descriptions for each feature](https://github.com/ThiagoPederzolli/react-complete-guide/pulls?q=is%3Apr+is%3Aclosed)
- Demonstrated ability to plan, structure, and execute a complex frontend application independently

#### Key Features Implemented:

- **Product Browsing**: Dynamic product list with API integration, loading states, error handling, and responsive card-based layout
- **Shopping Cart**: Full cart management with add/remove items, quantity adjustments, real-time total calculation, and persistent state via Context API
- **Checkout Flow**: Multi-step process from cart review to checkout form to order confirmation with proper modal chaining
- **Form Handling**: Modern React patterns using useActionState hook, comprehensive validation (email, postal code, required fields), user-friendly error messages
- **Order Submission**: Backend integration with POST requests, loading states during submission, success/error handling, cart clearing after successful orders
- **State Management**: Context API with useReducer for predictable state updates, proper separation of concerns, elimination of prop drilling

#### Technical Implementation:

- **Architecture**: Clean separation between API layer, business logic (Context), and UI components; centralized data fetching and validation utilities
- **Modern React Patterns**: useActionState for form handling, useReducer for complex state, useImperativeHandle for modal control, React Portals for proper modal rendering
- **Form Actions**: Server-centric form pattern with validation, async submission handling, success/error state management, form reset strategies using key prop
- **Error Handling**: Comprehensive error handling at API, validation, and UI levels; graceful degradation for network failures; user-friendly error messages
- **User Experience**: Loading indicators during async operations, disabled states during submissions, form value preservation on validation errors, success confirmation screens, modal flow optimization
- **Component Design**: Reusable, composable components with clear responsibilities; stateless components where appropriate; proper use of refs for imperative operations

#### Development Process Highlights:

- **Task Breakdown**: Decomposed complex application into manageable features (Product List → Product Card → Cart → Checkout → Success)
- **Incremental Development**: Built features progressively with clear acceptance criteria for each step
- **Documentation**: Created detailed PR descriptions explaining changes, technical decisions, and user flows
- **Best Practices**: Followed React conventions, maintained clean code structure, implemented proper validation, ensured accessibility considerations
- **Problem Solving**: Addressed challenges like form state reset, modal chaining, cart synchronization, and optimistic UI updates

#### Key Topics Demonstrated:

- Form Actions with useActionState hook for modern form handling
- Context API for global state management without prop drilling
- useReducer for predictable complex state updates
- Async operations with proper loading and error states
- Form validation strategies (client-side with action functions)
- Modal management with React Portals and imperative control
- Component composition and reusability patterns
- API integration with centralized request handling
- User experience optimization (loading states, error handling, success feedback)
- Professional development workflow (task planning, PR descriptions, incremental delivery)

This project demonstrates the ability to not only write code, but to think through architecture, plan features systematically, manage development workflow professionally, and deliver a polished user experience from start to finish.

## [Redux & Redux Toolkit]()
A comprehensive introduction to Redux for state management in React applications. This module covers Redux fundamentals, core concepts, and modern Redux Toolkit patterns for managing complex application state. Learn when to use Redux over Context API, how Redux works internally, and how to integrate Redux with React components efficiently.

#### Key topics covered:

- State management review: Analyzing different state management approaches in React apps, understanding when local state isn't enough
- Redux vs Context API: Comparing Redux with React Context, understanding the trade-offs, when to choose Redux for state management
- Redux fundamentals: How Redux works under the hood, understanding the core Redux flow (store, actions, reducers), one-way data flow
- Core Redux concepts: Exploring fundamental Redux concepts in depth, working with store, actions, and reducers, understanding immutability
- Redux basics: Additional foundational Redux patterns, setting up the Redux architecture, organizing Redux code
- Project setup: Preparing a new React project for Redux integration, installing necessary dependencies
- Creating Redux store: Setting up a Redux store for React applications, configuring the store with reducers
- Provider setup: Providing the Redux store to React components, wrapping the app with Provider component
- Accessing Redux state: Using Redux data in React components with useSelector hook, subscribing to store updates
- Dispatching actions: Dispatching actions from components using useDispatch hook, triggering state updates from UI
- Class-based components: Using Redux with class-based components, connect() HOC, mapStateToProps and mapDispatchToProps
- Action payloads: Attaching data to actions, passing dynamic values to reducers, updating state based on payload data
- Multiple state properties: Managing complex state with multiple properties, organizing state structure, handling related data
- State immutability: Working with Redux state correctly, avoiding state mutations, using immutable update patterns
- Redux challenges: Identifying common Redux problems (boilerplate, immutability complexity), introducing Redux Toolkit as a solution
- Redux Toolkit slices: Creating state slices with createSlice, simplifying reducer logic with built-in immutability
- Connecting Toolkit state: Using Redux Toolkit state in components, accessing slice state with useSelector
- Migration to Toolkit: Converting vanilla Redux to Redux Toolkit, refactoring reducers and actions, simplifying existing code
- Multiple slices: Working with multiple state slices, combining slices in the store, managing different features separately
- Slice integration: Reading and dispatching from multiple slices, coordinating between different parts of the state
- Code organization: Splitting Redux code into separate files, organizing slices and store configuration, maintaining clean architecture
- Best practices: Structuring Redux applications, choosing between Redux and alternatives, optimizing performance, avoiding common pitfalls

## [Advanced Redux: Side Effects & Async Operations]()
An advanced exploration of handling asynchronous operations and side effects in Redux applications. This module covers where to place async logic, integrating Redux with backend services, managing HTTP requests, and using Redux middleware patterns like thunks for complex async workflows while maintaining clean and maintainable code architecture.

#### Key topics covered:

- Redux and side effects: Understanding the relationship between Redux and side effects, why Redux reducers must be pure, handling asynchronous code challenges
- Redux refresher practice: Comprehensive hands-on practice building Redux applications, reinforcing core concepts through practical implementation (parts 1 & 2)
- Firebase backend integration: Setting up Firebase as a backend service, connecting Redux applications to real databases and APIs
- Redux async patterns: Understanding different approaches to handling async code with Redux, deciding where async logic should live
- Frontend vs backend logic: Separating concerns between client and server code, understanding what logic belongs where, API design considerations
- Logic placement strategies: Deciding where to put business logic (components, action creators, reducers), evaluating trade-offs of different approaches
- useEffect with Redux: Combining useEffect hook with Redux for side effects, syncing Redux state with external systems, managing component lifecycle with Redux
- useEffect problems: Identifying issues with using useEffect for Redux side effects, understanding timing and dependency problems
- HTTP state management: Handling loading, error, and success states for HTTP requests in Redux, providing user feedback during async operations
- Action creator thunks: Using thunk middleware for async action creators, returning functions instead of action objects, handling async logic in action creators
- Data fetching patterns: Getting started with fetching data in Redux applications, structuring fetch operations, managing request lifecycle
- Finalizing fetch logic: Completing data fetching implementation, error handling, optimizing fetch patterns, managing cache and updates
- Redux DevTools: Exploring Redux DevTools for debugging, time-travel debugging, inspecting actions and state changes, performance monitoring
- Best practices: Choosing between different async patterns, organizing async code, handling race conditions, error boundaries for async operations

## [React Router & Single-Page Applications]()
A comprehensive guide to building multi-page single-page applications using React Router. This module covers routing fundamentals, navigation patterns, data fetching strategies with loaders and actions, error handling, and advanced features like deferred data loading for building performant and user-friendly React applications with multiple views.

#### Key topics covered:

- Routing fundamentals: Understanding routing in single-page applications, how multiple pages work without full page reloads
- Project setup: Installing and configuring React Router, setting up the router in a React application
- Defining routes: Creating route definitions, mapping URLs to components, configuring the router
- Multiple routes: Adding and managing multiple routes, building route hierarchies, organizing application structure
- Alternative route definitions: Exploring different ways to define routes (JSX vs object notation), choosing the right approach
- Navigation with Links: Using Link components for client-side navigation, preventing full page reloads, maintaining SPA behavior
- Layouts and nested routes: Creating layout components, implementing nested routing patterns, sharing UI across multiple routes
- Error handling: Showing error pages with errorElement, handling 404s and route errors, creating custom error boundaries
- NavLink components: Working with NavLink for active link styling, implementing navigation menus, showing current route visually
- Programmatic navigation: Navigating with useNavigate hook, redirecting users programmatically, handling navigation in event handlers
- Dynamic routes: Defining routes with parameters, accessing URL parameters, building flexible route patterns
- Dynamic links: Creating links to dynamic routes, passing parameters in URLs, building navigation for dynamic content
- Relative vs absolute paths: Understanding path resolution, using relative and absolute paths correctly, avoiding routing bugs
- Index routes: Working with index routes for default child routes, organizing nested route structures
- Practice project: Hands-on practice building a complete routing solution, applying learned concepts in a real project
- Loader functions: Data fetching with loader() functions, loading data before route components render, preventing loading states in components
- Using loader data: Accessing loader data in components with useLoaderData hook, consuming fetched data
- Advanced loader patterns: Additional loader data usage patterns, organizing loader code, where to store loader functions
- Loader execution timing: Understanding when and how loader functions are executed, lifecycle of data loading
- Navigation state: Reflecting current navigation state in UI, showing loading indicators during navigation, using useNavigation hook
- Loader responses: Returning proper responses from loaders, handling different response types, working with response objects
- Loader code guidelines: Understanding what code belongs in loaders vs components, separation of concerns
- Custom error handling: Creating custom error pages, throwing custom errors from loaders, providing user-friendly error messages
- Error data extraction: Extracting error data with useRouteError, throwing Response objects, structured error handling
- json() utility: Using the json() utility function for cleaner response handling, simplifying data returns
- Dynamic route loaders: Combining dynamic routes with loader functions, loading data based on URL parameters
- useRouteLoaderData hook: Accessing loader data from parent routes, sharing data across route hierarchies
- Data submission planning: Planning form submission strategies, designing data flow for mutations
- Action functions: Working with action() functions for form submissions, handling POST/PUT/DELETE requests, processing form data
- Programmatic submissions: Submitting data with useSubmit hook, triggering submissions from code, handling complex submission flows
- Submission status: Updating UI based on submission status with useNavigation, showing pending states, providing feedback
- Input validation: Validating user input in actions, outputting validation errors, returning error responses to forms
- Request methods: Reusing actions for different HTTP methods, handling multiple operations in single action, checking request methods
- useFetcher hook: Working with useFetcher for background data operations, submitting without navigation, loading data independently
- Deferred data loading: Deferring data fetching with defer(), streaming data to components, improving perceived performance
- Controlling deferred data: Choosing which data to defer and which to await, optimizing critical vs non-critical data loading

## [Authentication in React Apps]()
A complete guide to implementing authentication in React applications using React Router. This module covers authentication fundamentals, token-based auth flows, protecting routes, managing user sessions, and handling token expiration for secure and user-friendly authentication systems.

#### Key topics covered:

- Authentication fundamentals: Understanding how authentication works in single-page applications, client-server auth flow, token-based authentication
- Project and route setup: Setting up a new project for authentication, configuring routes for auth pages (login, signup)
- Query parameters: Working with query parameters for auth flows, switching between login and signup modes, managing URL state
- Auth action implementation: Implementing authentication action functions, handling login and signup requests, communicating with backend auth APIs
- Input validation: Validating user credentials, outputting validation errors from the server, displaying error messages to users
- User login: Adding login functionality, processing login credentials, storing authentication tokens
- Token attachment: Attaching auth tokens to outgoing HTTP requests, securing API calls, including authorization headers
- User logout: Implementing logout functionality, clearing auth tokens, resetting authentication state
- UI based on auth status: Updating navigation and UI elements based on authentication status, showing/hiding content for authenticated users
- Loader requirements: Understanding that loaders must return values (null or data), proper loader return patterns
- Route protection: Adding route guards to protect authenticated routes, redirecting unauthenticated users, securing sensitive pages
- Automatic logout: Implementing automatic logout on token expiration, handling expired sessions gracefully
- Token expiration management: Managing token expiration timestamps, calculating remaining session time, refreshing tokens when needed
- Best practices: Secure token storage, handling auth errors, user experience during auth flows, session management strategies

## [Deploying React Applications]()
A practical guide to deploying React applications to production. This module covers optimization techniques like lazy loading, building for production, deployment processes, and essential server configuration for single-page applications to ensure your React apps run efficiently in production environments.

#### Key topics covered:

- Deployment overview: Understanding the steps required to deploy a React application, preparing apps for production environments
- Lazy loading fundamentals: Understanding lazy loading and code splitting, why lazy loading improves performance, when to use lazy loading
- Implementing lazy loading: Adding lazy loading to React components with React.lazy() and Suspense, splitting code into smaller chunks, optimizing bundle size
- Production builds: Building React code for production with optimization, minification and bundling processes, generating production-ready files
- Deployment walkthrough: Step-by-step deployment example, deploying to a hosting platform, configuring deployment settings
- Server-side routing: Understanding server-side routing requirements for SPAs, configuring servers to handle client-side routes, preventing 404 errors on page refresh
- Server configuration: Required server configurations for React Router, setting up URL rewriting and fallback routes, ensuring all routes serve the index.html
- Best practices: Optimizing bundle sizes, monitoring performance, choosing deployment platforms, configuring build processes for production

## [React Query (Tanstack Query)]()
A comprehensive exploration of React Query (Tanstack Query) for efficient data fetching and state management. This module covers query and mutation patterns, cache management, optimistic updates, and integration with React Router for building performant applications with minimal boilerplate and excellent user experience.

#### Key topics covered:

- Project setup: Setting up the demo project, overview of the application structure and requirements
- React Query introduction: Understanding what React Query is, why it's beneficial over manual data fetching, solving common data fetching challenges
- Installation and basics: Installing Tanstack Query, using useQuery hook, seeing immediate benefits of automatic caching and background refetching
- Cache and stale data: Understanding and configuring query behaviors, managing cache lifetime, controlling when data is considered stale
- Dynamic queries: Creating dynamic query functions with parameters, using query keys for identification and cache management
- Query configuration: Working with the query configuration object, aborting requests for cleanup, controlling query behavior
- Conditional queries: Enabling and disabling queries based on conditions, preventing unnecessary requests, controlling query execution
- Mutations: Changing data with useMutation hook, handling POST/PUT/DELETE operations, managing mutation state
- Mutation testing: Fetching more data to test mutations, verifying data changes, working with mutation results
- Invalidation: Acting on mutation success, invalidating queries to trigger refetches, keeping UI in sync with server state
- Hands-on challenge: Practice problem and solution for applying React Query concepts, reinforcing learning through implementation
- Refetch control: Disabling automatic refetching after invalidations, fine-tuning refetch behavior, optimizing network requests
- Advanced mutations: Enhancing the demo app with more mutations, repeating and reinforcing mutation concepts
- React Query advantages: Seeing React Query benefits in action, comparing with traditional approaches, understanding performance improvements
- Data updates: Updating existing data with mutations, handling edit operations, managing update flows
- Optimistic updates: Implementing optimistic UI updates, updating cache before server confirmation, rolling back on errors
- Query keys as input: Using query keys as query function parameters, simplifying dynamic queries, leveraging query key structure
- React Router integration: Combining React Query with React Router, using queries in loaders, prefetching data for routes, building seamless navigation experiences
- Best practices: Structuring queries and mutations, cache management strategies, error handling patterns, performance optimization