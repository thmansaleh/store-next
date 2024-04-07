'use client'
import Link from 'next/link'
 export default function Categories(){ 
  
   return <div>      
  <h1 className="block text-sm font-semibold p-2">تسوق حسب الفئة</h1>
  <div className="flex justify-around gap-4 bg-white flex-wrap py-2 ">
   { [1,1,1,1,1,1,1].map((e,i)=>{
    return <Link href='iuyt'
    className='flex flex-col items-center space-y-2 inline-block  '>
   <div className='ring-2 ring-gray-100 flex overflow-hidden justify-center items-center rounded-full w-14 h-14 '>
    <img src='https://alkalej.com/cdn/shop/files/PhotoRoom_047_20230813_024400.jpg?v=1693780269&width=1000' className='object-contain h-full ' />
   </div>
   <div className='text-sm font-semibold text-black'>khkh</div>

   
    </Link>
   })}
  </div>
</div>
 }
