"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
items:[1]
},
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    }

  },
});

export const {addItemToCart} = cartSlice.actions;

export default cartSlice.reducer;