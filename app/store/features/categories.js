"use client"
import { createSlice } from '@reduxjs/toolkit';

const categories= createSlice({
  name: 'categories',
  initialState: {
sectionId:0,
},




  reducers: {




 updateSectionId: (state, action) => {

state.sectionId=action.payload
console.log(action)




    },








removeItemFromWishlist:(state,action) =>{
const idToRemove = action.payload;
const newItems = state.items.filter(item => item.id !== idToRemove);

state.items=newItems
},
















  },








});

export const { updateSectionId } = categories.actions;

export default categories.reducer;