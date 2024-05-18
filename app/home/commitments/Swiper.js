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

export default function SwiperCommitments() {
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
        className="h-full w-fit"

      >
        

     <SwiperSlide>
<div className="flex items-center justify-center">خصوصية آمنة</div>
</SwiperSlide>
 <SwiperSlide>
<div className="flex items-center justify-center">دفع آمن</div>
</SwiperSlide>

      </Swiper>
    </>
  );
}