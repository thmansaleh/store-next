"use client"
import { createSlice } from '@reduxjs/toolkit';

const categories= createSlice({
  name: 'categories',
  initialState: {
sectionId:'Beauty',
},


  reducers: {
 updateSectionId: (state, action) => {

state.sectionId=action.payload
console.log(action)




    },

  },

});

export const { updateSectionId } = categories.actions;

export default categories.reducer;