"use client"
import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice= createSlice({
  name: 'checkout',
  initialState: {
paymentMethod:'nnjnjn',
name:"",
cardHolderName:"",
cardNumber:0,
ccv:0,


},
  reducers: {
    changePaymentMethod: (state, action) => {
      console.log(action.payload)
      state.paymentMethod=action.payload;
    }

  },
});

export const { changePaymentMethod } = checkoutSlice.actions;

export default checkoutSlice.reducer;