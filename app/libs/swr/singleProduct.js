'use client'
import useSWR from 'swr'
import axios from 'axios'
export   function swrSingleProduct(id){
 
    const url =`https://dummyjson.com/products/${id}`
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