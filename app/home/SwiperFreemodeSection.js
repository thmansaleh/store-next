'use client'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import './styles.css';

// import required modules
import { FreeMode } from 'swiper';
import Link from 'next/link';

export default function SwiperFreemodeSection() {
    const data =[
        {
            img:'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-elegant-luxury-perfume-atmosphere-golden-banner-image_179699.jpg',
            title:'عطور',
            subTitle:'تصفح قائمة العطور',
            route:'/'
        },
        {
            img:'https://cdn.arabsstock.com/uploads/images/92903/image-92903-fashion-elegance-beauty-models-gulf-abayas-dresses-jalabiy-thumbnail.webp',
            title:'عبايات',
            subTitle:'جميع انواع العبايات',
            route:'/'

        },
        {
            img:'https://img.pikbest.com/ai/illus_our/20230423/ceca83011ac0d00aaad5085ee820d4ed.jpg!w700wp',
            title:'ساعات ',
            subTitle:'ساعات ذكية',
            route:'/'

        },
        {
            img:'https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-kitchen-essentials-3d-rendered-set-of-home-appliances-image_3797261.jpg',
            title:'اجهزة منزلية',
            subTitle:'',
            route:'/'

        },
    ]
  return (
    <>
      <Swiper
          
        slidesPerView={1.3}
        // spaceBetween={30}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode]}
        className="mb-8  px-5"
      >
      
     




      {data.map((e,i)=>{
        return  <SwiperSlide key={i}>  <Link href={e.route} className='block w-64 mx-2 h-44 bg-gray-300 relative rounded-2xl overflow-hidden'>
        <img className='w-full h-full object-cover ' src={e.img} alt='hjhkk'/>
        <div className='absolute  bottom-6 start-2  font-semibold'>
            <div className='text-xl text-white'> {e.title}</div>
            <div className='text-sm  text-gray-200'>{e.subTitle} </div>

        </div>
        </Link>  </SwiperSlide>
       })}
      

      </Swiper>
    </>
  );
}
