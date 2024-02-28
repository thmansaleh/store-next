"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
name:'home',
show:true
},
  reducers: {
    setNav: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.show;
    }

  },
});

export const { setNav } = navigationSlice.actions;