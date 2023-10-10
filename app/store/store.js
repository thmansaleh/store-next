"use client"
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
    },
  });
  
  export default store;