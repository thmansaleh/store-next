

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




export default  function ProductId() {
const searchParams = useSearchParams()
 
  const id = searchParams.get('product_id)
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []); 



  return <> 

    <Slider />
<div className="p-2">

    <ProductInformation />
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description/>

</div>
<AddToCartButton item="0"/>

    </>
}