"use client"
import Flip from '@/app/components/flip/Flip';
import AddToCartButton from './AddToCartButton';
import FreeDelivery from './FreeDelivery';
import ProductInformation from './ProductInformation';

import SimilarProducts from './SimilarProducts';

import Slider from './Slider';

import Description from './Description';


import Advantages from './Advantages';

 export default function Content ({product}){
    
  return <>
<Slider images={product.images}/>

<div className='p-3'>
  
 <ProductInformation product={product}/>
<Description   description={product.description}/>
<FreeDelivery/>
<SimilarProducts id={product.product_id}/>
<Advantages advantages={product.advantages}/>

</div>

</>

}