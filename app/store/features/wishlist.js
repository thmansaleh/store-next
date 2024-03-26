"use client"
import { createSlice } from '@reduxjs/toolkit';

const wishlist= createSlice({
  name: 'wishlist',
  initialState: {
items:[]
},




  reducers: {




    addItemTo wishlist: (state, action) => {



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
//console.log(state.items)
}

    },














  },








});

export const { setItemCart } = navigationSlice.actions;

export default cartSlice.reducer;