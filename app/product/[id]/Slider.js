"use client"
import ImageComponent from "../../components/ImageComponent"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShareHeartIcons from "./share-heart/ShareHeartIcons"
import SliderLoading from "./SliderLoading"
import { useProduct } from '@/app/api/product';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';

export default function Slider({images}) {
  // console.log(images[0])
  // return null
return <>


<Swiper 
// loop={images.length}
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


{/* <ShareHeartIcons/> */}

{images.map((href,i)=>{

if(href.image_url.length>3) <SwiperSlide key={href.image_id} 


className="mb-8"  >
  
   

<ImageComponent src={href.image_url}       height='50vh'
/>





  </SwiperSlide>


})}










</Swiper>

</>

};
