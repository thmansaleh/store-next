'use client'
import Image from 'next/image'
import { swrSearchResult } from '../libs/swr/searchResult'
import Link from 'next/link'
import ProductsLoading from './ProductsLoading'
import NoResult from './NoResult'

function ProductsList() {
    const {data,error,isLoading} =swrSearchResult()
    if(isLoading)  return <ProductsLoading/>
    // if(isLoading)  return <ProductsLoading/>
    if(data.products.length==0)  return <NoResult/>

    if(error) return 'eror..........'

      return <div className='flex flex-wrap gap-6 items-center mt-10 justify-around p-2'>

     {
      data.products.map((product) =>{
        
        let random = Math.floor(Math.random() * 101)
        return <Link href={{
          pathname: `/product/${product.id}`
       
        }} className=" cursor-pointer relative overflow-hidden shadow-lg rounded-lg inline-block w-44">
        <Image width={100} height={100} className="w-full h-44 object-contain " src={product.thumbnail} alt={product.title} />
        <span className=" line-clamp-2 text-sm my-2 px-2">{product.description}</span>
        <div className="p-2 space-x-px text-sm bg-zinc-100  "><span>{product.price}</span>
          <span className=" inline-block text-green-600 mx-px">د.أ</span></div>
          {random>50&&  <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم {product.discountPercentage}%</span>
          }
      </Link>
      
      
    })


    }

</div>
  
   
}

export default ProductsList