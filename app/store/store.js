"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
import wishlist from "./features/wishlist"
import categories from './features/categories';
const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        checkout: checkoutReducer,
        cart:cart,
        wishlist:wishlist,
        categories:categories,

    },
  });
  
  export default store;