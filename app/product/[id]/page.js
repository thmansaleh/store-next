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

 export default function ({params}){
    const dispatch=useDispatch()
    
  const id = params.id
  const {data,error,isLoading} =swrSingleProduct(id)
  if (error) return <div>failed to load</div>
  if (data) {
dispatch(setProduct(data))
  }
  
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