'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper';

export default function SwiperCommitments() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 4100,
            disableOnInteraction: false,
        }}
        loop={2}
            modules={[Autoplay]}
        className="h-full flex items-center justify-center w-fit "
style={{display:'flex'}}
      >
        

     <SwiperSlide className='flex items-center flex-col justify-center w-fit' style={{display:'flex'}} ><span>دفع آمن</span>
</SwiperSlide>

     <SwiperSlide className='flex items-center flex-col justify-center w-fit' style={{display:'flex'}} ><span>خصوصية آمنة</span>
</SwiperSlide>


   


 {/* <SwiperSlide className="flex items-center justify-center">
<div className="flex items-center justify-center">دفع آمن</div>
</SwiperSlide> */}

      </Swiper>
    </>
  );
}