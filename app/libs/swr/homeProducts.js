'use client'
import useSWR from 'swr'
import axios from 'axios'
export   function swrHomeProducts (){
 
    const url ="https://dummyjson.com/products"
const fetcher = url => axios.get(url).then(res => res.data)
    // const fetcher =  async ()=> {return await fetchHomeProducts()}
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