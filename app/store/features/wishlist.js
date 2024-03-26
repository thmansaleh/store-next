"use client"
import { createSlice } from '@reduxjs/toolkit';

const wishlist= createSlice({
  name: 'wishlist',
  initialState: {
items:[]
},




  reducers: {


    addItemTo wishlist: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.show;
    },











  },








});

export const { setItemCart } = navigationSlice.actions;

export default cartSlice.reducer;