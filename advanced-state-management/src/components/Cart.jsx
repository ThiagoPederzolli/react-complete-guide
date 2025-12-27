// for ContextAPI we have two hooks: useContext or use
// the use is a little bit more versatile but more complex to use
// the use can be used with multiple contexts at once and also allows
// to select only specific parts of the context value to avoid unnecessary re-renders
// also can be used inside conditional statements and loops
// but is only available in React 19 and later
// but for most cases useContext is sufficient and easier to use
// import { use } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";

export default function Cart() {
  // this is the standard way to use context in React
  // when you access the context value this way
  // the component will re-render whenever the context value changes
  const { items, updateItemQuantity } = useContext(ShoppingCartContext);

  // what is a Reducer?
  // a reducer is a function that takes the current state and an action
  // and returns a new state based on the action
  // reducers are commonly used in state management libraries like Redux
  // to handle complex state updates in a predictable way
  // but in this case we are not using a reducer
  // we are just using the context value directly
  // calculating total price of items in the cart
  // this is a built in array method that reduces the array to a single value
  // in this case we are summing up the total price of all items in the cart
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  )
  

  
}


// return (
//     // but in some older codebases you might still see the Consumer pattern
//     <ShoppingCartContext.Consumer>
//       {(cartContext) => {
//           const totalPrice = cartContext.items.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//             0
//           );
//           const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
//         return (
//           <div id="cart">
//             {cartContext.items.length === 0 && <p>No items in cart!</p>}
//             {cartContext.items.length > 0 && (
//               <ul id="cart-items">
//                 {cartContext.items.map((item) => {
//                   const formattedPrice = `$${item.price.toFixed(2)}`;

//                   return (
//                     <li key={item.id}>
//                       <div>
//                         <span>{item.name}</span>
//                         <span> ({formattedPrice})</span>
//                       </div>
//                       <div className="cart-item-actions">
//                         <button onClick={() => updateItemQuantity(item.id, -1)}>
//                           -
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => updateItemQuantity(item.id, 1)}>
//                           +
//                         </button>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//             <p id="cart-total-price">
//               Cart Total: <strong>{formattedTotalPrice}</strong>
//             </p>
//           </div>
//         )
//       }}
      
//     </ShoppingCartContext.Consumer>
//   );