"use client"
import axios from 'axios';

 const url ="https://dummyjson.com/products"
 export const fetchHomeProducts= async () => {
   const response = await axios.get(url);

   return response.data;
 };

