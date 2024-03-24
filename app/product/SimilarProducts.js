"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import Link from 'next/link'
import './slider.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

export default function SimilarProducts() {

return <>
  <h2 className="text-md font-bold mt-4">منتجات قد تعجبك</h2>
<Swiper 
style={{
zIndex:0,
"--swiper-pagination-bullet-border-radius":"0px",
"--swiper-pagination-bullet-width":"25px",
"--swiper-pagination-bullet-height":"5px",
  "--swiper-pagination-color": "black ",
  "--swiper-pagination-bullet-inactive-color": "rgb(0 0 0 / 14%)",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  
  "--swiper-pagination-bullet-horizontal-gap": "0px"
}}

className='' modules={[Pagination]}
spaceBetween={20}
rewind={true}
slidesPerView={2.5}
 pagination={{
 clickable: true 



}}

>



{[
"https://cottonil.ae/cdn/shop/products/LwYrO69_87fe5f7f-7cd5-43b0-8153-4be98d524721.png?v=1703670623",


"https://izelfashion.com/wp-content/uploads/2023/05/full-front-2.png",

"https://uae.cottonmegastore.com/cdn/shop/products/tn0JH1P_8daf5004-72ff-42e2-91c9-42644c06a074.jpg?v=1709733827",

"https://static.zara.net/photos///2023/I/0/1/p/3739/250/800/2/w/404/3739250800_6_21_1.jpg?ts=1695893759658"

].map(e =>{

return <SwiperSlide className="my-8">

    <Link href={{
    pathname: './product',
    query: { product_id: e},
  }} className=" relative overflow-hidden shadow-lg rounded-lg inline-block w-36">
  <img className="w-full h-40 object-contain " src={e} alt />
  <span className=" line-clamp-2 text-sm my-2 px-2">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</span>
  <div className="p-2 space-x-px text-sm bg-zinc-100  "><span>899</span>
    <span className=" inline-block text-green-600 mx-px">د.أ</span></div>
  <span className=" bg-red-700 text-white top-0  text-center  absolute rounded-br-lg  rtl:rounded-bl-lg rtl:rounded-br-none  px-3 text-xs bg-blend-multiply line-height start-0 opacity-80 ">خصم 20%</span>
</Link>



  </SwiperSlide>


})
}










</Swiper>

</>

};