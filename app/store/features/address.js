// redux/addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressDetails: (state, action) => {
      state = { ...state, ...action.payload }; // Updates address details in state
      return state;
    },
  },
});

export const { setAddressDetails } = addressSlice.actions;
export default addressSlice.reducer;
