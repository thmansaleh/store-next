'use client'

import axios from 'axios';
import { useSelector } from 'react-redux';

import useSWR from 'swr'

export function swrSearchResult (){
    const searchValue=useSelector(state=>state.search.searchValue)
    // const searchValue='phone'

 const url =`https://dummyjson.com/products/search?q=${searchValue}`
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}
}