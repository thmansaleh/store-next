"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
import wishlist from "./features/wishlist"
const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        checkout: checkoutReducer,
        cart:cart,
        wishlist:wishlist
    },
  });
  
  export default store;