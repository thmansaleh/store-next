

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
import Button from "./Button"



export default  function ProductId() {
const searchParams = useSearchParams()
 
  const id = searchParams.get('product_id')
const [product, setProduct]= useState(false)
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const responseData = await response.json();
console.log(responseData)
setProduct(responseData)
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []); 



  return <> 

    <Slider product={product} />
<div className="p-2">

    <ProductInformation product={product}/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description/>
<SimilarProducts/>
<Button/>

</div>
<AddToCartButton item={product}/>

    </>
}