// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        auth: authSliceReducer
    }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1,
//             // showCounter: state.showCounter,
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.amount,
//             // showCounter: state.showCounter,
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1,
//             // showCounter: state.showCounter,
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             ...state,
//             showCounter: !state.showCounter,
//             // counter: state.counter,
//         }
//     }
//     return state;

// }