"use client"
import { createSlice } from '@reduxjs/toolkit';

const search= createSlice({
  name: 'search',
  initialState: {
    searchValue:'',
},


  reducers: {
 setSearcValue: (state, action) => {

state.searchValue=action.payload

    },

  },

});

export const { setSearcValue } = search.actions;

export default search.reducer;