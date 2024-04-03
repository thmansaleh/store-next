
'use client'

import axios from 'axios';

import useSWR from 'swr'
//  import { fetchProduct } from '@/app/api/product';

export function useProduct (id){
 const url =`https://dummyjson.com/products/${id}`
  const fetchProduct = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProduct,{ refreshInterval: 100000 })
return {
  data,
  isLoading,
   error
}
//  if (error) return <div>failed to load</div>
//  if (isLoading) return <div>loading...</div>

//  // render data
//  return <div> {data.title}</div>

}
 
