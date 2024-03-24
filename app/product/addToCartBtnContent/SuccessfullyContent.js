"use client"
import Link from 'next/link'
export default function({img}){

return <div className="text-center py-3
flex items-center flex-col gap-4">
  <img
className="h-24 h-24 rounded-lg object-cover shadow-lg"
      alt="cart"
style={{objectFit: "cover",borderRadius:"10px"}}

  src={img}  />
  <span className="circle flex items-center  justify-center h-5 w-5 transition-all  inline-block  rounded-full bg-green-400">
    <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-inherit transition-all size-4 fill-white" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </span>
  <h2 className="text-sm font-semibold text-gray-600">تمت الإضافة للسة بنجاح</h2>
  <div className="flex items-center justify-around gap-3">
    <Link href="/cart" className="bg-black text-white text-sm ring-black ring-2 py-2 rounded-sm w-28" >عرض السلة</Link>
    <Link href="/" className="ring-2  text-black text-sm ring-gray-500 py-2 rounded-sm w-28" >مواصة التسوق</Link>
  </div>
</div>
}