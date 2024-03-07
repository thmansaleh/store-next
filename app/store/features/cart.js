"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
items:[]
},
  reducers: {
    addItemToCart: (state, action) => {
const newItem = action.payload;
if(state.items.length>0){
const exists = state.items.some(item => item.id === newItem.id);

if (exists) {
  
} else {
  state.items.push(newItem);
}
}
else{

state.items.push(newItem);
}
     
    }













  },

});

export const {addItemToCart} = cartSlice.actions;

export default cartSlice.reducer;