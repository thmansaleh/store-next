"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Link from 'next/link'
import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShareHeartIcons from "./ShareHeartIcons"
import SliderLoading from "./SliderLoading"

export default function SimilarProducts({product}) {
console.log(product.images)
return <>

<Swiper 
style={{
  "--swiper-pagination-color": "black ",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}

className='' modules={[Pagination]}
spaceBetween={20}
rewind={true}
slidesPerView={2.5}
 pagination={{
 clickable: true ,
 dynamicBullets: true,



}}

>



{[1,2,1,2,1].map(href=>{

return <SwiperSlide className="">

    <Link href={{
    pathname: '/product',
    query: { product_id: e.id},
  }} className=" relative overflow-hidden shadow-lg rounded-lg inline-block w-44">
  <img className="w-full h-48 object-contain " src="https://www.sephora.ae/dw/image/v2/BCZG_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw8bfb7a5e/images/hi-res/SKU/SKU_2487/553961_swatch.jpg?sw=265&sh=265&sm=fit" alt />
  <span className=" line-clamp-2 text-sm my-2 px-2">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</span>
  <div className="p-2 space-x-px text-sm bg-zinc-100  "><span>899</span>
    <span className="text-green-600">د.أ</span></div>
  <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم 20%</span>
</Link>



  </SwiperSlide>


}):<SliderLoading/>}










</Swiper>

</>

};