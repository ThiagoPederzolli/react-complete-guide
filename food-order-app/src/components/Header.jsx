import { useContext, useRef } from 'react';
import ReactFoodLogo from '../assets/logo.jpg';
import { ShoppingCartContext } from '../store/cart-context';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';
function Header() {
  const { cartItems } = useContext(ShoppingCartContext);

    const cartModal = useRef();
    const checkoutModal = useRef();

    const cartQuantity = cartItems.length;

    function handleOpenCartClick() {
        checkoutModal.current.open();
    }
    return (
      <>
        <CartModal
            ref={cartModal}
            title="Your Cart"
        />
        <CheckoutModal
            ref={checkoutModal}
            title="Checkout"
        />
        <header id="main-header">
            <div id="title">
                <img src={ReactFoodLogo} alt="reactfood logo" />
                <h1>REACTFOOD</h1>
            </div>            
            <button className="text-button" onClick={handleOpenCartClick}>
                Cart {!!cartQuantity && `(${cartQuantity})`}
            </button>
        </header>
      </>    
    )
}

export default Header;