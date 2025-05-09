"use client"
import Link from 'next/link'
import logo from '@/public/logo.png'
import Image from 'next/image'
export default function Header(){


return <div className=" p-2 sticky top-0 bg-white flex items-center z-50 justify-between">



  <Link href="/search">
    <svg className="cursor-auto w-10 h-10 p-2  fill-back-500 bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={512} height={512}><g id="_01_align_center" data-name="01 align center"><path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></g></svg>
  </Link>





  <div className="relative w-1/2 h-12 bg-white">
{/*   
  <Image
  src={logo}

  className='w-full h-full object-contain'
  /> */}


  </div>



  <Link href="/account/wishlist">
    <svg className="cursor-auto w-10 h-10 p-2  fill-back-500 bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={512} height={512}><g id="_01_align_center" data-name="01 align center"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" /></g></svg>
  </Link>


</div>

}