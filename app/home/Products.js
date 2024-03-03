
import Link from 'next/link'
export default function Products({products}){

return products.map((e,i) => {
const url =`product/${e.id}`
return <Link href={url} className=" relative rounded-lg  my-2 shadow-md overflow-hidden  w-44 bg-white   h-fit ">
    <span className=" bg-red-700 text-white top-0 right-0 text-center absolute rounded-bl-lg px-3 text-xs bg-blend-multiply line-height opacity-80 ">خصم 20%</span>
    <div className="  ">
      <img className="h-48 w-full object-contain " src={e.thumbnail} alt />
    </div>
    <span className=" line-clamp-2 text-sm my-2 px-2">{e.description}</span>
    <div className="p-2 text-sm bg-zinc-100  ">
      <span>{e.price}</span>
      <span className="text-green-600">د.أ</span>
    </div>
  </Link>

})


}