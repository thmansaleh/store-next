'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrSections (){
 const url ="https://dummyjson.com/products/categories"
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher,{ refreshInterval: 10000000 })
return {
  data,
  isLoading,
   error
}
}