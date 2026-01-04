import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
        state.items = action.payload.items;
        },
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if(!existingItem) {
                state.items.push({
                    title: newItem.title,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart: (state, action) => {
            const removedItem = action.payload;
            const existingItem = state.items.find((item) => item.id === removedItem.id);
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== removedItem.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    }
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;