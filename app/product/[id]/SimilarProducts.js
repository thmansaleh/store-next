"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import Link from 'next/link'
import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import { swrHomeProducts } from '@/app/libs/swr/homeProducts';

export default function SimilarProducts({id}) {
  const {data,error,isLoading} =swrHomeProducts(10,id)
if(error) return 'error'
if(isLoading) return 'loading....'

return <div className='p-3'>
  <h2 className="text-md font-bold mt-4">منتجات قد تعجبك</h2>
<Swiper 
style={{
zIndex:0,
"--swiper-pagination-bullet-border-radius":"0px",
"--swiper-pagination-bullet-width":"25px",
"--swiper-pagination-bullet-height":"5px",
  "--swiper-pagination-color": "black ",
  "--swiper-pagination-bullet-inactive-color": "rgb(0 0 0 / 14%)",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  
  "--swiper-pagination-bullet-horizontal-gap": "0px"
}}

className='' modules={[Pagination]}
spaceBetween={20}
rewind={true}
slidesPerView={2.5}
 pagination={{
 clickable: true 
}}

>

{
data.products.map((product) =>{

return <SwiperSlide key={product.id} className="my-8">

    <Link href={{
    pathname: `/product/${product.id}`
 
  }} className=" relative overflow-hidden shadow-lg rounded-lg inline-block w-36">
  <img className="w-full h-40 object-contain " src={product.thumbnail} alt={product.title} />
  <span className=" line-clamp-2 text-sm my-2 px-2">{product.description}</span>
  <div className="p-2 space-x-px text-sm bg-zinc-100  "><span>{product.price}</span>
    <span className=" inline-block text-green-600 mx-px">د.أ</span></div>
  <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم 20%</span>
</Link>



  </SwiperSlide>


})
}










</Swiper>

</div>

};