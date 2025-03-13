
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentMethod: 'card', // default payment method
  cardDetails: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  },
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setCardDetails: (state, action) => {
      state.cardDetails = { ...state.cardDetails, ...action.payload };
    },
  },
});

export const { setPaymentMethod, setCardDetails } = checkoutSlice.actions;
export default checkoutSlice.reducer;
