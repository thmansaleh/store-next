

 'use client'
 import { useRouter } from 'next/router'
//import { useSearchParams } from 'next///navigation'
 
import Flip from '@/app/components/flip/Flip'
import Slider from '../Slider'
import ProductInformation from '@/app/product/information/ProductInformation'
import AddToCartButton from '@/app/product/AddToCartButton'
import Description from '../description/Description'
import FreeDelivery from '@/app/product/FreeDelivery'
import Size from '@/app/product/Size'
//import SetNave from '@/components/SetNave'


const data= async () => {
// const searchParams = useSearchParams()
 
 const router = useRouter()
const id = router.query.product-id
     const product=   await fetch(`https://dummyjson.com/products/${id}`)
    const productData = await data.json()
    return productData

    }


export default async function ProductId() {
const productsData=await data()
  return <> 
    
    <Slider images={productsData.images}/>
<div className="p-2">

    <ProductInformation product={productsData}/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description description={productsData.description}/>

</div>
<AddToCartButton item={productsData}/>
   
    </>
}
