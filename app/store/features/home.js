"use client"
import { createSlice } from '@reduxjs/toolkit';

const home= createSlice({
  name: 'home',
  initialState: {
products:[],
},


  reducers: {
 addProducts: (state, action) => {

state.products.push(...action.payload)





    },

  },

});

export const { addProducts } = home.actions;

export default home.reducer;