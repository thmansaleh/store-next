"use client"
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice= createSlice({
  name: 'navigation',
  initialState: {name:'/',display:true},
  reducers: {
    setNav: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.display;
    }
   
  },
});

export const { setNav } = navigationSlice.actions;
export default navigationSlice.reducer;