"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { swrSingleProduct } from '@/app/libs/swr/singleProduct';
import SliderLoading from '@/app/product/[id]/SliderLoading';
import SwiperImageComponent from '@/app/components/ImageComponent';

export default function ProductSwiper({ id }) {
  const { data, error, isLoading } = swrSingleProduct(id);

  if (isLoading) return <SliderLoading />;
  if (error) return <h1>Error</h1>;

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "black",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "7px",
        "--swiper-pagination-bullet-horizontal-gap": "4px"
      }}
      className='left-pagination'
      modules={[Pagination]}
      spaceBetween={50}
      rewind={true}
      slidesPerView={1}
      loop={data.images.length}
      pagination={{ clickable: true }}
    >
      {data.images.map((href, i) => (
        <SwiperSlide key={i}    >
        
         

<SwiperImageComponent
      src={href}
      height='170px'
//       fill={true}
//       alt="Picture of th"
// style={{objectFit:"contain"}}
    />




        </SwiperSlide>
      ))}
    </Swiper>
  );
}
