'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrHomeProducts (limit,skip){
    const url =`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
return {
  data,
  isLoading,
   error
}
}