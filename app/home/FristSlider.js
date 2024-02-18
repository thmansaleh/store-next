"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//import { Pagination } from 'swiper/modules';

export default function FristSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
      //  modules={[Pagination]}
        className="mySwiper my-3 "
      >
        <SwiperSlide>
  <img class="rounded-lg  h-64 object-contain border border-zinc-300 " src="https://m.media-amazon.com/images/I/31RJGO+PNNL._AC_SY580_.jpg" alt="">

</SwiperSlide>

   <SwiperSlide>
  <img class="rounded-lg  h-64 object-contain border border-zinc-300 " src="https://m.media-amazon.com/images/I/31RJGO+PNNL._AC_SY580_.jpg" alt="">

</SwiperSlide>
   <SwiperSlide>
  <img class="rounded-lg  h-64 object-contain border border-zinc-300 " src="https://m.media-amazon.com/images/I/31RJGO+PNNL._AC_SY580_.jpg" alt="">

</SwiperSlide>
   <SwiperSlide>
  <img class="rounded-lg  h-64 object-contain border border-zinc-300 " src="https://m.media-amazon.com/images/I/31RJGO+PNNL._AC_SY580_.jpg" alt="">

</SwiperSlide>
      

</>
)

