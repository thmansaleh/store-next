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

 export default function ({params}){
    const dispatch=useDispatch()
    
  const id = params.id
  const {data,error,isLoading} =swrSingleProduct(id)
  if (error) return <div>failed to load</div>
  if (data) {
dispatch(setProduct(data))
  }
  
return <div className="pb-20">
<div className='md:flex lg:flex lg:p-3 md:p-3'>
  
 <Slider id={id}/>
 <ProductInformation id={id}/>
</div>

<div className="px-2">
    <Size id={id}/>
<FreeDelivery id={id}/>
    <Flip id={id}/>
    <div className='lg:flex justify-around gap-x-3'>
      
    <Description id={id}/>
    <Advantages/>
    </div>
<SimilarProducts id={id}/>
 <AddToCartButton id={id}/>
</div>


<div/>
  




}