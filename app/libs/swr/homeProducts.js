'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrHomeProducts (){
    const url ="https://dummyjson.com/products"
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