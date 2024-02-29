"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import checkoutReducer from './features/checkout'

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
    },
  });
  
  export default store;