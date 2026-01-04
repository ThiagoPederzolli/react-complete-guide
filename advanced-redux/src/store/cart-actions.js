import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchCart = async() => {
            const response = await fetch('https://redux-demo-5a30f-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok) {
                throw new Error ('sending data fail')
            }
            const data = await response.json();
            return data;
        }
        try {
            const items = await fetchCart();
            console.log("items", items);
            dispatch(cartActions.replaceCart({
                items
            }))

            
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }        
    }
}

export const sendCartData = (items) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data'
            })
        )
        const sendRequest = async() => {
            const response = await fetch('https://redux-demo-5a30f-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(items),
            });
            if(!response.ok) {
                throw new Error ('sending data fail')
            }
        }
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully'
                })
            )
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }))
        }        
    }
}