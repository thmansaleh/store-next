"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
items:[1]
},
  reducers: {
    addItemToCart: (state, action) => {
if(state.items.length>0)
const newItem = action.payload;
const exists = state.items.some(item => item.id === newItem.id);

if (exists) {
  
} else {
  state.items.push(newItem);
}

     
    }













  },

});

export const {addItemToCart} = cartSlice.actions;

export default cartSlice.reducer;