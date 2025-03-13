"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
import wishlist from "./features/wishlist"
import categories from './features/categories';
import productPage from './features/productPage';
import home from './features/home';
import search from './features/search';
import addressSlice from './features/address'
const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        checkout: checkoutReducer,
        cart:cart,
        wishlist:wishlist,
        categories:categories,
        productPage:productPage,
        home:home,
        search:search,
address:addressSlice,


    },
  });
  
  export default store;