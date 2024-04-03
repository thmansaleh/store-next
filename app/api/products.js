
'use client'

import axios from 'axios';

import useSWR from 'swr'
//  import { fetchProduct } from '@/app/api/product';

export function useProducts (){
 const url ='https://dummyjson.com/products'
  const fetchProducts = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProducts)
return {
  data,
  isLoading,
   error
}

}
 
