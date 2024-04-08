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

export default function StoresSwiper() {
    const data =[
        {
            img:'https://img.tamara.co/dXh_QHsAD1IEwbrg9vjG8-kYJUxCDT8CUGV6HOTx828/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2YxZThkZjhmLWUzMGYtNDMxMS1hYjVmLTFmNTBkMzJlMWEyZC0xNjg5NzgxMTkxLnBuZw.jpg',
            title:'لاكوست',
            subTitle:'تصفح قائمة العطور',
            route:'/'
        },
        {
            img:'https://img.tamara.co/sM1I2Ym48J6_bg4Y7O5zlokABYDRJ5Nx6utBy55SEcI/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50LzQ0OWI3M2YzLWZjNTItNGE3ZS1iMWI5LTQyNTI4YzA3ZmNkYy0xNjg5NzgyMzc3LnBuZw.jpg',
            title:'بوما',
            subTitle:'جميع انواع العبايات',
            route:'/'

        },
        {
            img:'https://img.tamara.co/liWiD59Vb0av-KsX21aMJap1bLH8KMHVTmNCVhWSRaA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2NjYjkwMjdiLWMzYzUtNGNiNi1iZWZiLWMxMmQ0YzRkNTA0OS0xNjk1NzE4NTY0LnBuZw.jpg',
            title:'نمشي ',
            subTitle:'ساعات ذكية',
            route:'/'

        },
        {
            img:'https://img.tamara.co/IxsyrD3UIMkl81ArNCo3gorHyKR6HfNMJgjaZ-xU78o/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50LzQzNzY1ZDQ3LTYxNTUtNGU5MS05MzcxLTE5MWQzZGNhMjM0Yy0xNjg5NzgwMDg2LnBuZw.jpg',
            title:' نكست',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
        {
            img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
            title:' ستايلي',
            subTitle:'',
            route:'/'

        },
    ]
  return (
    <>
    <div className='text-lg text-black font-semibold my-4 px-2'>متاجر مختارة</div>
      <Swiper
          
        slidesPerView={4}
        // spaceBetween={30}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode]}
        className="mb-8  px-5"
      >
      
     




      {data.map((e,i)=>{
        return  <SwiperSlide key={i}>  <Link href={e.route} 
        className='flex flex-col items-center space-y-2 inline-block  '>
       <div className='ring-2 ring-gray-100 flex overflow-hidden justify-center items-center rounded-full w-14 h-14 object-contain'>
        <img src={e.img} alt='frnij' />
       </div>
       <div className='text-sm font-semibold text-black'>{e.title}</div>

       
        </Link>  </SwiperSlide>
       })}
      

      </Swiper>
    </>
  );
}
