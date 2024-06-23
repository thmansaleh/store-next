'use client'
import SingleProduct from "./SingleProduct"
import { useProducts} from '../api/products'
import ProductsLoading from './ProductsLoading'
import { swrHomeProducts } from "../libs/swr/homeProducts"
export default function Products(){
  const {data,error,isLoading} =swrHomeProducts(170,0)
  if(error) return <h1>error</h1>
  if(isLoading) return <ProductsLoading/>
return <div className="grid grid-cols-2 gap-2 bg-white">

   <div className=" bg-white  flex justify-around flex-wrap">
{


data.products.map((product,i) => {
if(i%2 !=0)
return <SingleProduct key={product.id} data={product}/>
})

}
</div>
      


 <div className=" bg-white  flex justify-around flex-wrap">
{
data.products.map((product,i) => {
if(i%2===0)
return <SingleProduct key={product.id}  data={product}/>
})
}
</div>


</div>

}