"use client"
import { createSlice } from '@reduxjs/toolkit';

const wishlist= createSlice({
  name: 'wishlist',
  initialState: {
items:[]
},




  reducers: {




    addItemToWishlist: (state, action) => {


console.log(state.items)

const newItem={
    "id": action.payload.id,
    "title": action.payload.title,
    "description": action.payload.description,
    "price": action.payload.price,
    "thumbnail":action.payload.thumbnail
}

if(state.items.length>0){
const exists = state.items.some(item => item.id === newItem.id);

if (exists) {
//console.log("exists")

} else {
  state.items.push(newItem);

}
}
else{

state.items.push(newItem);

}
    },








removeItemFromWishlist:(state,action) =>{
const idToRemove = action.payload;
const newItems = state.items.filter(item => item.id !== idToRemove);

state.items=newItems
},
















  },








});

export const { removeItemFromWishlist,addItemToWishlist } = wishlist.actions;

export default wishlist.reducer;