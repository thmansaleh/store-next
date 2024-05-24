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
import { useProduct } from '@/app/api/product';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';

export default function Slider({id}) {
   const {data,error,isLoading} =swrSingleProduct(id)
   if(isLoading) return <SliderLoading/>
   if(error) return <h1>err</h1>
return <>


<Swiper 
loop={data.images.length}
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

{data.images.map((href,i)=>{

return <SwiperSlide key={i} 
style={{height:'50vh',width: '100%', position:'relative',margin: '0'}} 

className="mb-8"  >
  
    <img 

className="w-full h-full object-contain absolute top-0 left-0 "

 src={href}  alt="My Image" />
  </SwiperSlide>


})}










</Swiper>

</>

};
