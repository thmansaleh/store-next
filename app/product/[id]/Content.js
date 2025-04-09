"use client"
import Flip from '@/app/components/flip/Flip';
import AddToCartButton from './AddToCartButton';
import FreeDelivery from './FreeDelivery';
import ProductInformation from './ProductInformation';
import Size from './Size';
import Slider from './Slider';

import Description from './Description';
import SimilarProducts from './SimilarProducts';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';
import { useDispatch } from 'react-redux';
import { setProduct } from '@/app/store/features/productPage';
import { ToastContainer } from 'react-toastify';
import Advantages from './Advantages';
import Product from '@/app/components/product/Product';

 export default function Content ({product}){
    const dispatch=useDispatch()
    
//   if (product) {
// dispatch(setProduct(data))
//   }
  return <>
<Slider images={product.images}/>

<div className='p-3'>
  
 <ProductInformation product={product}/>
<Description discretion={product.description}
<FreeDelivery />
</div>

</>



return <div className="pb-20">
<div className='md:flex lg:flex lg:p-3 md:p-3'>
  
 

<div className="px-2">
    <Size id={id}/>

    <Flip id={id}/>
    <div className='lg:flex justify-around gap-x-3'>
      
    
    <Advantages/>
    </div>
<SimilarProducts id={id}/>
 <AddToCartButton id={id}/>
</div>


</div>
  }