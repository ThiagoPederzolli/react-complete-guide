import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import {cartActions} from '../../store/cart-slice'


const CartItem = (props) => {
  const { title, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();

  function handleIncrementToCart() {
    dispatch(cartActions.addItemToCart(props.item))
  }

   function handleDecrementToCart() {
    dispatch(cartActions.removeItemFromCart(props.item))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementToCart}>-</button>
          <button onClick={handleIncrementToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
