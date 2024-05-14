'use client'
import SingleProduct from "./SingleProduct"
import { useProducts} from '../api/products'
import ProductsLoading from './ProductsLoading'
export default function Products(){
  const {data,error,isLoading} =useProducts()
  if(error) return <h1>error</h1>
  if(isLoading) return <ProductsLoading/>
return <div className="p-2 flex  justify-around bg-white  flex-wrap">

{data.products.map((product,i) => {
return <SingleProduct data={product}/>

})}
</div>

}