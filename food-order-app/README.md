# 🍔 Food Order App – Frontend Practice Project

This project is a **frontend-only Food Order application** built as a practice module for a React course. The goal of this app is not only to implement common UI patterns, but also to apply **real-world development practices**, such as clear task breakdown, predictable state management, and clean separation of concerns.

The application simulates a simple food ordering flow: browsing products, adding items to a cart, reviewing the order, and submitting a checkout form.

---

## 🎯 Project Goals

- Practice building a React application from scratch
- Apply component-based architecture
- Manage global state using React Context
- Handle asynchronous API calls
- Implement basic form validation
- Maintain a clean and understandable project structure

This project intentionally avoids over-engineering and advanced abstractions in favor of **clarity, correctness, and learning value**.

---

## 🧩 Features

- Fetch and display a list of food products
- Reusable product card component
- Cart management with quantity control
- Modal-based cart and checkout flows
- Form validation during checkout
- Order submission with success and error feedback

---

## 🗂️ Folder Structure

```txt
src/
├── components/
│   ├── ProductList/
│   ├── ProductCard/
│   ├── CartModal/
│   ├── CheckoutModal/
│   └── UI/
│
├── store/
│   └── cart-context.js
│
├── util/
│   ├── api.js
│   └── validation.js
│
├── App.jsx
└── main.jsx
```



### Folder Responsibilities

### `components/`

Contains all presentational and container components used in the application. Each feature is isolated to keep components easy to understand and maintain.

### `store/`

Holds global state management logic. Currently, this includes the Cart Context responsible for managing cart items and related operations.

### `util/`

Utility functions and helpers that are not tied to UI rendering.

- `api.js`: Handles all HTTP requests (fetching products and submitting orders)
- `validation.js`: Contains reusable form validation functions

---

## 🌐 API Handling

All network requests are centralized in `util/api.js`.

### Available API Functions

- `fetchProducts()` – Fetches the list of available products
- `submitOrder(orderData)` – Submits the user order

### Design Decisions

- API functions are **pure and UI-agnostic**
- Error handling is done by throwing errors
- Components decide how to handle loading and error states

This keeps data access predictable and easy to refactor.

---

## 🛒 Cart State Management

Cart state is managed globally using **React Context**.

### Cart Context Responsibilities

- Store cart items and quantities
- Add and remove products
- Increase or decrease item quantities
- Calculate the total order amount
- Clear the cart after a successful order

### Why Context?

- Cart data is needed by multiple unrelated components
- Avoids prop drilling
- Simple and sufficient for the scope of this project

---

## 🧾 Checkout & Validation

The checkout flow is handled inside a modal and includes:

- Controlled form inputs
- Client-side validation
- Disabled submission until the form is valid
- Loading, success, and error feedback states

Form validation logic is intentionally simple and implemented without external libraries to reinforce core React concepts.

---

## 🛠️ Technical Decisions

- No custom `useFetch` The hook was implemented
    - Only two API calls exist
    - Different request lifecycles
    - Direct calls keep the logic easier to follow
- No state management libraries (Redux, Zustand, etc.)
    - Context API is sufficient for current needs
- No UI frameworks
    - Focus is on logic, structure, and React fundamentals

---

## 🚀 Getting Started

npm install

npm start

---

## 📌 Notes

This project is meant as a **learning exercise**, not a production-ready application. Decisions were made intentionally to prioritize:

- Readability
- Simplicity
- Maintainability

---

## 📚 Learnings

Through this project, the focus was on:

- Thinking in user stories and acceptance criteria
- Structuring a React app like a real-world project
- Making conscious architectural trade-offs

---

Happy coding! 🎉