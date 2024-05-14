"use client"
import Link from "next/link"
export default function SingleProduct({data}){


const url =`product/${data.id}`
return <Link key={data.id} href={{
    pathname: url,

  }} className=" inline-block relative rounded-lg  my-2 shadow-md overflow-hidden  w-44 bg-white   h-fit ">
    <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم 20%</span>
    <div className="  ">
      <img className="h-48 w-full object-contain " src={data.thumbnail} alt={data.title} />
    </div>
    <span className=" line-clamp-2 text-sm my-2 px-2">{data.description}</span>
    <div className="p-2 text-sm bg-zinc-100  ">
      <span>{data.price}</span>
      <span className="text-green-600 mx-px inline-block">د.أ</span>
    </div>
  </Link>
}
