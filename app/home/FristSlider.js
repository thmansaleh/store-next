"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

// import './slider.css'
// import 'swiper/css';
// import 'swiper/css/autoplay'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { useProduct } from '@/app/api/product';

export default function Slider() {
  const images =[
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
  //  const {data,error,isLoading} =useProduct(id)
  //  if(isLoading) return <SliderLoading/>
  //  if(error) return <h1>err</h1>
return <>


<Swiper 
style={{
  "--swiper-pagination-bullet-border-radius":"0px",
  "--swiper-pagination-bullet-width":"25px",
  "--swiper-pagination-bullet-height":"5px",
    "--swiper-pagination-color": "black ",
    "--swiper-pagination-bullet-inactive-color": "rgb(0 0 0 / 14%)",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    
    "--swiper-pagination-bullet-horizontal-gap": "0px"
  }}

  className='' modules={[Pagination,Autoplay]}
  spaceBetween={0}
  rewind={true}
  slidesPerView={1}
   pagination={{
   clickable: true 
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: true,
  }}

>


{images.map((e,i)=>{

return <SwiperSlide key={i} className="mb-8"  style={{ textAlign: 'centenr', height: '40vh', width: ' ', margin: 0 }}>
  
    <img className="w-full h-full object-cover" src={e.img}  alt="My Image" />
  </SwiperSlide>


})}










</Swiper>

</>

};
