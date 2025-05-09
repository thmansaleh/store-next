'use client'

import ProductCard from "@/app/components/product/ProductCard"

// import SingleProduct from "./SingleProduct"
export default function Products({data}){
//   if(isLoading) return <ProductsLoading/>
return <div className="grid grid-cols-2 gap-2 bg-white">

   <div className=" bg-white  flex justify-around flex-wrap">
{


data.map((product,i) => {
if(i%2 !=0)
  return <ProductCard key={product.product_id} price={product.price} description={product.description} name={product.name} id={product.product_id} img={product.image_url}/>
})

}
</div>
      


 <div className=" bg-white  flex justify-around flex-wrap">
{
data.map((product,i) => {
if(i%2===0)
  return <ProductCard key={product.product_id} price={product.price} description={product.description} name={product.name} id={product.product_id} img={product.image_url}/>
})
}
</div>


</div>

}