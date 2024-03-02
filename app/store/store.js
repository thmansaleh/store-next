"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        checkout: checkoutReducer,
        cart:cart
    },
  });
  
  export default store;