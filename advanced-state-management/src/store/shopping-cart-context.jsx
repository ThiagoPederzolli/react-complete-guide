import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const ShoppingCartContext = createContext({
    // setting this default value to avoid errors in case
    // a component tries to access the context
    // without being wrapped in a provider
    // and helps with autocompletion in some IDEs
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// the function is outside of the component
// so that it is not recreated on every render as we dont need any information
// from the component scope
// it receives the current state and the action dispatched
// and the function needs to receive that because useReducer will call it with those two arguments
// after React calls the dispatch function
// the state parameter is the current state snapshot
// the action parameter is an object that describes what change should be made to the state
function shoppingCartReducer(state, action) {
    // reducer logic will go here
    if (action.type === 'ADD_ITEM') {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state, // not need here because we have only one property
        items: updatedItems,
      };
    }
    if (action.type === 'UPDATE_ITEM_QUANTITY') {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state, // not need here because we have only one property
        items: updatedItems,
      };
    }
    return state;
  }

export default function ShoppingCartProvider({ children }) {
  // useReducer also gives you an array with two elements:
  // the current state and a dispatch function to send actions to the reducer
  // to connect the function to useReducer we pass a pointer as argument to useReducer
  // as a second argument we pass the initial state
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });
  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    })
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];

    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id
    //   );
    //   const existingCartItem = updatedItems[existingCartItemIndex];

    //   if (existingCartItem) {
    //     const updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };
    //     updatedItems[existingCartItemIndex] = updatedItem;
    //   } else {
    //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    //     updatedItems.push({
    //       id: id,
    //       name: product.title,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }

    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: productId,
        amount,
      },
    })
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //   const updatedItemIndex = updatedItems.findIndex(
    //     (item) => item.id === productId
    //   );

    //   const updatedItem = {
    //     ...updatedItems[updatedItemIndex],
    //   };

    //   updatedItem.quantity += amount;

    //   if (updatedItem.quantity <= 0) {
    //     updatedItems.splice(updatedItemIndex, 1);
    //   } else {
    //     updatedItems[updatedItemIndex] = updatedItem;
    //   }

    //   return {
    //     items: updatedItems,
    //   };
    // });
  }
  return (
    <ShoppingCartContext.Provider
      value={{ 
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

