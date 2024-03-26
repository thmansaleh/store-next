"use client"
import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
items:[],
alert:false 
},
  reducers: {
    addItemToCart: (state, action) => {
//const newItem = action.payload;
state.alert=true 
const newItem={
    "id": action.payload.id,
    "title": action.payload.title,
    "description": action.payload.description,
    "price": action.payload.price,
    "thumbnail":action.payload.thumbnail,
    "quantity": 1
}
if(state.items.length>0){
const exists = state.items.some(item => item.id === newItem.id);

if (exists) {
console.log("exists")
 
  
} else {
  state.items.push(newItem);


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
{
let itemIndex = state.items.findIndex(item => item.id === action.payload); // Find the index of 'item2'
if (itemIndex !== -1) { // If 'item2' is found
    state.items[itemIndex].quantity += 1; // Increase the quantity by 1
}

},






decreaseQuantity:(state,action) => {
let itemIndex = state.items.findIndex(item => item.id === action.payload); // Find the index of 'item2'
if (itemIndex !== -1) { 
    if(state.items[itemIndex].quantity > 1) {
state.items[itemIndex].quantity -= 1;
}
}

},







changeAlertStatus:(state, payload)=>{
state.alert=false 


},









  },

});

export const {addItemToCart,removeItemFromCart,increaseQuantity, decreaseQuantity, changeAlertStatus} = cartSlice.actions;

export default cartSlice.reducer;