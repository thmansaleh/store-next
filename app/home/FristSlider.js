"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Slider() {
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

  return (
    <Swiper
      style={{
        "--swiper-pagination-bullet-border-radius": "0px",
        "--swiper-pagination-bullet-width": "25px",
        "--swiper-pagination-bullet-height": "5px",
        "--swiper-pagination-color": "black",
        "--swiper-pagination-bullet-inactive-color": "rgb(0 0 0 / 14%)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-horizontal-gap": "0px"
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      rewind={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
    >
      {images.map((e, i) => (
        <SwiperSlide key={i} className="mb-8 h-64 w-64  ">
          <img className="w-full h-full object-contain rounded-md  " src={e.img} alt={e.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
