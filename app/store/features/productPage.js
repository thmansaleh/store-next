"use client"
import { createSlice } from '@reduxjs/toolkit';

const productPage= createSlice({
  name: 'productPage',
  initialState: {
product:null,
},


  reducers: {
 setProduct: (state, action) => {

state.product=action.payload

    },

  },

});

export const { setProduct } = productPage.actions;

export default productPage.reducer;