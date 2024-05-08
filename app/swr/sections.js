'use client'

import axios from 'axios';
import {fetchSections} from "@/app/libs/services/fetchSections"
import useSWR from 'swr'

export function swrSections(){
 const url ="https://dull-plum-antelope-tutu.cyclic.cloud/sections"
  const fetcher = async () => {
   const response = await fetchSections()
 };
const { data , error, isLoading } = useSWR(url, fetcher())
return {
  data,
  isLoading,
   error
}


}