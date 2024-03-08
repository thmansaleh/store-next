"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
items:[]
},
  reducers: {
    addItemToCart: (state, action) => {
const newItem = action.payload;
newItem.quantity=1
if(state.items.length>0){
const exists = state.items.some(item => item.id === newItem.id);

if (exists) {
  
} else {
  state.items.push(newItem);
console.log(state.items)
}
}
else{

state.items.push(newItem);
console.log(state.items)
}
     
    }, 


removeItemFromCart:(state,action) =>{
const idToRemove = action.payload;
const newItems = state.items.filter(item => item.id !== idToRemove);

state.items=newItems
},









increaseQuantity:(state,action) => 
let itemIndex = state.items.findIndex(item => item.id === action.payload); // Find the index of 'item2'
if (itemIndex !== -1) { // If 'item2' is found
    state.items[itemIndex].quantity += 1; // Increase the quantity by 1
}

},






decreaseQuantity:(state,action) => 
let itemIndex = state.items.findIndex(item => item.id === action.payload); // Find the index of 'item2'
if (itemIndex !== -1) { 
    if(state.items[itemIndex].quantity > 0) {
state.items[itemIndex].quantity -= 1;
}
}

},












  },

});

export const {addItemToCart,removeItemFromCart,increaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;