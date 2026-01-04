import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Notification from './components/UI/Notification';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions'

function App() {
  const { cartIsVisible } = useSelector((state) => state.ui);
  const { items } = useSelector((state) => state.cart);
  const { notification } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchCartData())

  }, [dispatch])

  useEffect(() => {
      if (!items.length) {
        return;   
      }  
      dispatch(sendCartData(items))

  }, [items, dispatch])
  return (
    <>
      {notification && (
        <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
