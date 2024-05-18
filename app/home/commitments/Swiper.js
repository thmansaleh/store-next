'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay,Pagination } from 'swiper';

export default function Swiper() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        loop={2}
            modules={[Pagination,Autoplay]}
        className="h-full"

      >
        

     <SwiperSlide>
<div>خصوصية آمنة</div>
</SwiperSlide>
 <SwiperSlide>
<div>دفع آمن</div>
</SwiperSlide>

      </Swiper>
    </>
  );
}