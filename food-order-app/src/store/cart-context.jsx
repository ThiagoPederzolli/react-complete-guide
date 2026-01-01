import { createContext, useReducer, useState, useEffect } from "react";

export const ShoppingCartContext = createContext({
  productsList: [],
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  submitOrder: () => {}
});

function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
      const updatedItems = [...state.cartItems];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = action.payload.productsList?.find((product) => product.id === action.payload.id);
        updatedItems.push({
          id: action.payload.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        cartItems: updatedItems,
      };
    }
    if (action.type === 'UPDATE_ITEM_QUANTITY') {
      const updatedItems = [...state.cartItems];
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
        cartItems: updatedItems,
      };
    }

    if (action.type === "CLEAR_CART") {
      console.log()
      return {
        cartItems: action.payload
      }
    }
    return state;
  }

export default function ShoppingCartProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    cartItems: [],
  });
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductList() {
            setIsloading(true);
            const response = await fetch('http://localhost:3000/meals');
            const resData = await response.json();
            if (!response.ok) {
                setError('Failed to fetch products')
                setIsloading(false);
                throw new Error(response.statusText);
            }
            setProductsList(resData);
            setIsloading(false);
        }
        fetchProductList();

    }, []);
  

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        productsList
      },
    })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: productId,
        amount,
      },
    })
  }

  function handleClearCart() {
    shoppingCartDispatch({
      type: 'CLEAR_CART',
      payload: []
    });
  }

    async function submitOrder(userInformation) {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInformation),
    });

    if (!response.ok) {
      return;
    }

    
  }
  console.log('cartItems', shoppingCartState.cartItems)
  return (
    <ShoppingCartContext.Provider
      value={{ 
        productsList,
        cartItems: shoppingCartState.cartItems,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
        submitOrder,
        isLoading,
        error,
        handleClearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

