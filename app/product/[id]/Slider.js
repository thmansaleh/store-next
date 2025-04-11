"use client"
import { useState } from 'react';
import ImageComponent from "../../components/ImageComponent"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';

import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import ShareHeartIcons from "./share-heart/ShareHeartIcons"
import SliderLoading from "./SliderLoading"
import { useProduct } from '@/app/api/product';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';

export default function Slider({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <div className="slider-container">
      <Swiper 
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
        className='relative product-swiper-container' 
        modules={[Pagination, Thumbs]}
        spaceBetween={50}
        rewind={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((href, i) => {
          if(href.image_url.length > 3) 
            return (
              <SwiperSlide key={href.image_id} className="mb-8">
                <ImageComponent src={href.image_url} height='50vh' />
              </SwiperSlide>
            );
        })}
      </Swiper>
      
      {/* Thumbnail Swiper */}
      <div className="thumbnail-container mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="thumbnail-swiper"
        >
          {images.map((href, i) => {
            if(href.image_url.length > 3) 
              return (
                <SwiperSlide key={`thumb-${href.image_id}`} className="thumbnail-slide">
                  <div className="soldier-thumbnail">
                    <ImageComponent 
                      src={href.image_url} 
                      height='100%'
                      className="thumbnail-image"
                    />
                    <div className="soldier-overlay">
                      <div className="soldier-icon"></div>
                    </div>
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      </div>
    </div>
  );
}