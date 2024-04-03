

'use client'
 import {useState,  useEffect} from "react"
import { useSearchParams } from 'next/navigation'
 
import Flip from '@/app/components/flip/Flip'
import Slider from './Slider'
import ProductInformation from '@/app/product/[id]/ProductInformation'
import AddToCartButton from '@/app/product/[id]/AddToCartButton'
import Description from './[id]/Description'
import FreeDelivery from '@/app/product/[id]/FreeDelivery'
import Size from '@/app/product/[id]/Size'
//import SetNave from '@/components/SetNave'
import SimilarProducts from "./[id]/SimilarProducts"
import SliderLoading from "./SliderLoading"
import { Suspense } from 'react';



export default   function ProductId() {
const searchParams = useSearchParams()
 
  const id = searchParams.get('product_id')
const url= 
`https://dummyjson.com/products/${id}`
 

const [product, setProduct]= useState(false)
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`,{ next: { revalidate: 0} });
        const responseData = await response.json();

setProduct(responseData)
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   const {data}= fetchData();
console.log(data)
  }, []); 



  return <> 


<Suspense fallback={<SliderLoading />}>



    <Slider product={product} />
</Suspense>

<div className="p-2">

    <ProductInformation product={product}/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description/>
<SimilarProducts/>

</div>
<AddToCartButton item={product}/>

    </>
}