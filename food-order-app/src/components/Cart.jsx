import { useContext } from "react";
import { ShoppingCartContext } from "../store/cart-context";
import { formatPrice } from "../util/priceFormatter";

function Cart() {
  const { cartItems, updateItemQuantity } = useContext(ShoppingCartContext);
    console.log('cartItems', cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = formatPrice(totalPrice);

  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}
      {cartItems.length > 0 && (
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = formatPrice(item.price);
            

            return (
              <li key={item.id} className="cart-item">
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
      <p className="cart-total">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  )
  
}

export default Cart;