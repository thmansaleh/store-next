"use client"
import { createSlice } from '@reduxjs/toolkit';

const wishlist= createSlice({
  name: 'wishlist',
  initialState: {
items:[]
},




  reducers: {




 addItemToWishlist: (state, action) => {

state.items.push(action.payload);
console.log(state.items)



    },








removeItemFromWishlist:(state,action) =>{
const idToRemove = action.payload;
const newItems = state.items.filter(item => item.id !== idToRemove);

state.items=newItems
},
















  },








});

export const { removeItemFromWishlist,addItemToWishlist } = wishlist.actions;

export default wishlist.reducer;