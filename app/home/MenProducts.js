'use client'
import Link from 'next/link'
import { menP } from '../api/menP'
import ProductsLoading from './ProductsLoading'
export default function MenProducts(){
  const {data,error,isLoading} =menP()
  if(error) return <h1>error</h1>
  if(isLoading) return <ProductsLoading/>
return <div className="p-2 flex  justify-around bg-white  flex-wrap">

{data.data.items.map((e,i) => {
const url =`product/${e.id}`
return <Link href={{
    pathname: url,
    
  }} className=" inline-block relative rounded-lg  my-2 shadow-md overflow-hidden  w-44 bg-white   h-fit ">
    <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم 20%</span>
    <div className="  ">
      {/* <img className="h-48 w-full object-contain " src='jhi' /> */}
      <img className="h-48 w-full object-contain " src={e.images[1].url} alt={e.title} />
    </div>
    <span className=" line-clamp-2 text-sm my-2 px-2">{e.name}</span>
    {/* <span className=" line-clamp-2 text-sm my-2 px-2">{e.description}</span> */}
    <div className="p-2 text-sm bg-zinc-100  ">
      <span>ثتي</span>
      {/* <span>{e.price}</span> */}
      <span className="text-green-600 mx-px. inline-block">د.أ</span>
    </div>
  </Link>

})}
</div>

}