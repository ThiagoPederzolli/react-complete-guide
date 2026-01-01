import { useContext, useRef } from 'react';
import ReactFoodLogo from '../assets/logo.jpg';
import { ShoppingCartContext } from '../store/cart-context';
import CartModal from './CartModal';
function Header() {
  const { cartItems } = useContext(ShoppingCartContext);

    const modal = useRef();

    const cartQuantity = cartItems.length;

    function handleOpenCartClick() {
        modal.current.open();
    }
    return (
        <>
            <CartModal
                ref={modal}
                title="Your Cart"
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