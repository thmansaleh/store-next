"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShareHeartIcons from "./ShareHeartIcons"
import SliderLoading from "./SliderLoading"

export default function Slider({product}) {
console.log(product.images)
return <>

<Swiper 
style={{
  "--swiper-pagination-color": "black ",
"--swiper-pabgination-bottom":"-10px",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}

className=' relative  product-swiper-container' modules={[Pagination]}
spaceBetween={50}
rewind={true}
slidesPerView={1}
 pagination={{
 clickable: true ,
 dynamicBullets: true,



}}

>


<ShareHeartIcons/>

{product.images?product.images.map(href=>{

return <SwiperSlide style={{ textAlign: 'center', height: '50vh', width: '100%', margin: 0 }}>
  
    <img className="w-100 product-img-slider" src={href}  alt="My Image" />
  </SwiperSlide>


}):<SliderLoading/>}










</Swiper>

</>

};
