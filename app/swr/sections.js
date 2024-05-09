'use client'

import axios from 'axios';
import useSWR from 'swr'

export function swrSections(){


const url ="https://dull-plum-antelope-tutu.cyclic.cloud/sections"

 const fetchSections= async () => {
   const response = await axios.get(url);

   return response.data;
 };


  const fetcher = async () => {
   const response = await fetchSections()
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}