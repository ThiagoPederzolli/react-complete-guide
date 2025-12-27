// import Header from './components/Header.jsx';
// import Shop from './components/Shop.jsx';
// import Product from './components/Product.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';
// import ShoppingCartProvider from './store/shopping-cart-context';

// function App() {
  

//   return (
//     <ShoppingCartProvider>
//       <Header />
//       <Shop>
//         {DUMMY_PRODUCTS.map((product) => (
//           <li key={product.id}>
//             <Product {...product} />
//           </li>
//         ))}
//       </Shop>
//     </ShoppingCartProvider>
//   );
// }

// export default App;

import React from 'react';
export function counterReducer(state, action) {
    if (action.type === 'INCREMENT') {
        const newValue = state.count + action.payload;
        return {
            count: newValue,
        };
    }
    if (action.type === 'DECREMENT') {
        const newValue = state.count - action.payload;
        return {
            count: newValue,
        };
    }
    if (action.type === 'RESET') {
        const newValue = action.payload;
        return {
            count: newValue,
        };
    }
    return state;
}

function App() {
    const [counter, counterDispatch] = React.useReducer(counterReducer, {
        count: 0
    });
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button
            onClick={() => {
            counterDispatch({
                type: "INCREMENT",
                payload: 1,
            })
        }}>Increment</button>
        <button
            onClick={() => {
            counterDispatch({
                type: "DECREMENT",
                payload: 1,
            })
        }}>Decrement</button>
        <button
        onClick={() => {
            counterDispatch({
                type: "RESET",
                payload: 0,
            })
        }}>Reset</button>
      </p>
      <p id="counter">{counter.count}</p>
    </div>
  );
}

export default App;

