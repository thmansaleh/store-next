"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
name:'home',
show:true
},
  reducers: {
    setItemCart: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.show;
    }

  },
});

export const { setItemCart } = navigationSlice.actions;

export default cartSlice.reducer;