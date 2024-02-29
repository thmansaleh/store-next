"use client"
import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice= createSlice({
  name: 'checkout',
  initialState: {
paymentMethod:'othman',
name:"",
cardHolderName:"",
cardNumber:0,
ccv:0,


},
  reducers: {
    changePaymentMethod: (state, action) => {
      state.paymentMethod=action.payload;
    }

  },
});

export const { changePaymentMethod } = checkoutSlice.actions;

export default checkoutSlice.reducer;