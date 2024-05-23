'use client'

import ProductsLoading from "@/app/home/ProductsLoading"
import { swrHomeProducts } from "@/app/libs/swr/homeProducts"
import Product from "./Product"

export default function Products(){
  const {data,error,isLoading} =swrHomeProducts(20)
  if(error) return <h1>error</h1>
  if(isLoading) return <ProductsLoading/>
return <div className="grid grid-cols-2 gap-2 bg-white mt-7">

   <div class=" bg-white  flex justify-around flex-wrap">
{


data.products.map((product,i) => {
if(i%2 !=0)
return <Product id={product.id}/>
})

}
</div>
      





   


 <div class=" bg-white  flex justify-around flex-wrap">
{
data.products.map((product,i) => {
    console.log(product.id)
if(i%2===0)
    return <Product id={product.id}/>
})
}
</div>







</div>

}