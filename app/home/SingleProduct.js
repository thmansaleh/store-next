"use client"
import Link from "next/link"
import Image from 'next/image'
import SwiperPrice from "./SwiperPrice"
export default function SingleProduct({data}){
  let random = Math.floor(Math.random() * 101)

 
const url =`product/${data.id}`
return <Link  scroll={true}
prefetch={true} href={{
    pathname: url,

  }} className=" inline-block relative rounded-lg  my-2 shadow-md overflow-hidden  w-44 bg-white   h-fit ">

    {random<=20&&<span className=" bg-red-700 text-white top-0  text-center z-20 absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">{data.discountPercentage} %</span>}

    <div className=" h-44 overflow-hidden  relative ">



     

<Image
      src={data.thumbnail}
      fill={true}
      alt={data.title}
style={{
objectFit:"contain",
position:"absolute", 
top:"0",
left:"0", 
right:"0",
bottom:"0"

}}

    />







    </div>
    <span className=" line-clamp-2 text-sm my-2 px-2">{data.description}</span>
    <SwiperPrice price={data.price}/>
    <div className="p-2 text-sm bg-zinc-100  ">
      <span>{data.price}</span>
      <span className="text-green-600 mx-px inline-block">د.أ</span>
    </div>
  </Link>
}
