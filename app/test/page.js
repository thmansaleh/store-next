'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper';

export default function page() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper w-full bg-slate-500 my-9"
      >
        <SwiperSlide style={{
          height:'100px ',
          background:'red ',
          marginBottom:'50px'
        }} 
      >Slide 1</SwiperSlide>
 
        <SwiperSlide style={{
          height:'100px ',
          background:'red ',
          marginBottom:'50px'
        }} 
      >Slide 1</SwiperSlide>
 

      </Swiper>
    </>
  );
}
