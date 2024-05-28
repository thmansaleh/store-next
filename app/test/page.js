
"use client"
import MyImageComponent from "./MyImageComponent"
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';
export default function(){
 
  const {data,error,isLoading} =swrSingleProduct(40)
  if (error) return <div>failed to load</div>
if(data) return data.images.map(e=>{
return  <MyImageComponent src={e} />})
}
