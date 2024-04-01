

'use client'
 import {useState,  useEffect} from "react"
import { useSearchParams } from 'next/navigation'
 
import Flip from '@/app/components/flip/Flip'
import Slider from './Slider'
import ProductInformation from '@/app/product/information/ProductInformation'
import AddToCartButton from '@/app/product/AddToCartButton'
import Description from './description/Description'
import FreeDelivery from '@/app/product/FreeDelivery'
import Size from '@/app/product/Size'
//import SetNave from '@/components/SetNave'
import SimilarProducts from "./SimilarProducts"
import SliderLoading from "./SliderLoading"
import { Suspense } from 'react';
import {useProduct} from  "@/app/api/product"


export default  function ProductId() {
const searchParams = useSearchParams()
 
  const id = searchParams.get('product_id')
const url= 
`https://dummyjson.com/products/${id}`
const {data,isLoading, isError} = useProduct(url)
console.log(data,isLoading, isError)
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

    fetchData();

  }, []); 



  return <> 


<Suspense fallback={<SliderLoading />}>



    <Slider product={product} />
</Suspense>

<div className="p-2">
{data?<h1>data</h1>:null}
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