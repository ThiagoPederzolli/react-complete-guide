import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  function toggleCart() {
    dispatch(uiActions.toggle())
  }
  const { items } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  console.log("items", items)
  console.log("cart", cart)
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
