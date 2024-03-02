
import Link from 'next/link'
export default function Products({products}){


const productss = products
return [1,2,2,2,2,2,2,2,2].map((e,i) => { <Link href="product/hthhh" className=" relative rounded-lg  my-2 shadow-md overflow-hidden  w-44 bg-white   h-fit ">
    <span className=" bg-red-700 text-white top-0 right-0 text-center absolute rounded-bl-lg px-3 text-xs bg-blend-multiply line-height opacity-80 ">خصم 20%</span>
    <div className="  ">
      <img className="h-48 w-full object-contain " src="https://jomla.ae/_next/image/?url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2022%2F11%2F71LinfGHuL._AC_SX466_.jpg&w=750&q=75" alt />
    </div>
    <span className=" line-clamp-2 text-sm my-2 px-2">باور بانك أنكر 24000 مللي أمبير Anker 737 Power Bank (PowerCore 24K)</span>
    <div className="p-2 text-sm bg-zinc-100  ">
      <span>190</span>
      <span className="text-green-600">د.أ</span>
    </div>
  </Link>

})


}