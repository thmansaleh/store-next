
 'use client'

//  import axios from 'axios';

 import useSWR from 'swr'

 import { useProduct } from '@/app/api/product';

 export default     function (){
   const {data,error,isLoading} =useProduct()
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
//   // render data
return <div> {data.title}</div>
  




}