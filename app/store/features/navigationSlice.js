"use client"
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice= createSlice({
  name: 'navigation',
  initialState: {name:'home',show:true},
  reducers: {
    setNav: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.show;
    }
   
  },
});

export const { setNav } = navigationSlice.actions;
export default navigationSlice.reducer;