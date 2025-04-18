'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay,Pagination } from 'swiper';

export default function SwiperPrice({price}) {
  let random = Math.floor(Math.random() * 101)

  const tomorrowName=()=>{
    let today = new Date();
let dayOfWeek = today.getDay();
let dayOfWeekTomorrow = (dayOfWeek + 1) % 7;

let weekdays = ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

let tomorrowName = weekdays[dayOfWeekTomorrow];
return tomorrowName
  }
 if(random<=30) return (
    <>
      <Swiper
allowTouchMove={false}
        direction={'vertical'}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        loop={2}
            modules={[Pagination,Autoplay]}
        className="h-10 w-full  "
        
      >

{price>15&&<SwiperSlide><div className='text-green-500 text-xs px-2 '>
            <span>احصل عليه بسعر 
               {Number(price).toFixed(1) - 10 } د.إ عند الطلب لأول مرة
               </span>
            </div>  </SwiperSlide>
}


        <SwiperSlide><div className='text-green-500 text-xs px-2 flex gap-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 fill-green-500' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.576,6.429l-1.91-3.171L12,.036,2.334,3.258,.442,6.397c-.475,.792-.563,1.742-.243,2.607,.31,.839,.964,1.488,1.8,1.793l-.008,9.844,10,3.333,10-3.333,.008-9.844c.846-.296,1.507-.946,1.819-1.788,.317-.857,.229-1.797-.242-2.582Zm-5.737-2.338l-5.831,1.946-5.833-1.951,5.825-1.942,5.839,1.946ZM2.156,7.428l1.292-2.145,7.048,2.357-1.529,2.549c-.239,.398-.735,.581-1.173,.434l-5.081-1.693c-.297-.099-.53-.324-.639-.618-.108-.293-.079-.616,.082-.883Zm1.843,4.038l3.163,1.054c1.343,.448,2.792-.088,3.521-1.302l.316-.526-.005,10.843-7-2.333,.006-7.735Zm8.994,10.068l.005-10.849,.319,.532c.556,.928,1.532,1.459,2.561,1.459,.319,0,.643-.051,.96-.157l3.161-1.053-.006,7.734-7,2.333Zm8.95-13.216c-.105,.285-.331,.503-.619,.599l-5.118,1.706c-.438,.147-.934-.035-1.173-.434l-1.526-2.543,7.051-2.353,1.305,2.167c.156,.26,.186,.573,.08,.858Z"/></svg>
            <span>توصيل مجاني</span>
            </div>  </SwiperSlide>

            <SwiperSlide><div className='text-green-500 text-xs px-2'>احصل عليه يوم {tomorrowName()}</div>  </SwiperSlide>

   
      </Swiper>
    </>
  );
}
