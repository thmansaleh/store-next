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

export default function Slider({product}) {
console.log(product)
return <>

<Swiper 
style={{
  "--swiper-pagination-color": "black ",
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

{images.map(e=>{

return <SwiperSlide style={{ textAlign: 'center', height: '50vh', width: '100%', margin: 0 }}>
  
    <img className="w-100 product-img-slider" src='https://media.cnn.com/api/v1/images/stellar/prod/170321162454-dubai-police-bugatti.jpg?q=h_619,w_1024,x_0,y_31,c_crop/h_619,w_1100,c_lpad,b_rgb:061015/h_720,w_1280' alt="My Image" />
  </SwiperSlide>


})}










</Swiper>

</>

};
