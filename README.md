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