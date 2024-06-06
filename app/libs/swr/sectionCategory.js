'use client'

import axios from 'axios';
import { useSelector } from 'react-redux';

import useSWR from 'swr'

export function swrSectionCategory (){
    const  sectionId =useSelector(state=>state.categories.sectionId)

 const url =`https://dummyjson.com/products/category/${sectionId}`
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