"use client"
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice= createSlice({
  name: 'navigation',
  initialState: {name:'home'},
  reducers: {
    setNav: (state, action) => {
      state.name=action.payload;
    }
   
  },
});

export const { setNav } = navigationSlice.actions;
export default navigationSlice.reducer;