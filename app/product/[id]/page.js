
 'use client'

import Flip from '@/app/components/flip/Flip';
import AddToCartButton from './AddToCartButton';
import FreeDelivery from './FreeDelivery';
import ProductInformation from './ProductInformation';
import Size from './Size';
//  import axios from 'axios';
import Slider from './Slider';

 import { useProduct } from '@/app/api/product';
import Description from './Description';
import SimilarProducts from './SimilarProducts';

 export default function ({params}){
  const id = params.id
   const {data,error,isLoading} =useProduct(id)
  if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
 
//   // render data
return <>
 <Slider id={id}/>



<div className="px-2">
 <ProductInformation id={id}/>
    <Size id={id}/>
<FreeDelivery id={id}/>
    <Flip id={id}/>
    <Description id={id}/>
<SimilarProducts id={id}/>
 <AddToCartButton id={id}/>
</div>

</>
  




}