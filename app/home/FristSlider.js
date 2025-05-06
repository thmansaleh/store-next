"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function CleanSlider() {
  const images = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743789819976%2F1000200857.jpg?alt=media&token=50ffefde-24dc-4ecd-946a-a694e9d42b65',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743790508956%2F1000200868.jpg?alt=media&token=8b8fa7d5-d8e7-4bbc-8208-95a0c49345e2',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743790205450%2F1000200861.jpg?alt=media&token=2292f196-8113-4ba3-a71b-ba57ba175525',
    },
  ];

  // ثابت للارتفاع - تقريباً ثلث ارتفاع شاشة iPhone Pro Max
  const fixedHeight = 930;

  return (
    <div className="max-w-6xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        rewind={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="py-4"
        style={{ height: `${fixedHeight}px` }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} style={{ height: '100%' }}>
            <div className="h-full w-full overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                src={item.img} 
                alt={`Slide ${i+1}`} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}