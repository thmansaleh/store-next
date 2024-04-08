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

export default function FliP() {
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

  className='' modules={[Autoplay]}
  spaceBetween={0}
  direction={'horizontal'}
  rewind={true}
  slidesPerView={1}


  autoplay={{
    delay: 2000,
    disableOnInteraction: true,
  }}

>


{[1,2,2,2,2].map((e,i)=>{

return <SwiperSlide key={i} className="mb-8 h-12"  >
  
    <div className=' text-center h-12  py-2'>price {i+300}</div>
   
  </SwiperSlide>


})}










</Swiper>

</>

};
