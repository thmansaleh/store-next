"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Link from 'next/link'
import useSWR from 'swr'
import './slider.css'
import 'swiper/css';
import 'swiper/css/pagination';

export default function SimilarProducts({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://store-api-new.vercel.app/api/related-products/${id}`,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch related products');
      return res.json();
    }
  );

  if (error) return <div className="p-3 text-red-500">Error loading related products</div>;
  if (isLoading) return <div className="p-3">Loading related products...</div>;
  if (!data || data.length === 0) return null;

  return (
    <div className='p-3'>
      <h2 className="text-md font-bold mt-4">منتجات قد تعجبك</h2>
      <Swiper
        style={{
          zIndex: 0,
          "--swiper-pagination-bullet-border-radius": "0px",
          "--swiper-pagination-bullet-width": "25px",
          "--swiper-pagination-bullet-height": "5px",
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "rgb(0 0 0 / 14%)",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-horizontal-gap": "0px"
        }}
        modules={[Pagination]}
        spaceBetween={20}
        rewind={true}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
      >
        {data.map((product) => {
          const randomDiscount = Math.floor(Math.random() * 101) > 50 
            ? Math.floor(Math.random() * 30) + 10 
            : null;

          return (
            <SwiperSlide key={product.relation_id} className="my-8">
              <Link
                href={`/product/${product.relation_id}`}
                className="cursor-none relative overflow-hidden shadow-lg rounded-lg inline-block w-36"
              >
                <img
                  className="w-full h-40 object-contain"
                  src={product.img_url}
                  alt={product.name}
                  loading="lazy"
                />
                <span className="line-clamp-2 text-sm my-2 px-2">{product.name}</span>
                <div className="p-2 space-x-px text-sm bg-zinc-100">
                  <span>{product.price}</span>
                  <span className="inline-block text-green-600 mx-px">د.أ</span>
                </div>
                {randomDiscount && (
                  <span className="bg-red-700 text-white top-0 text-center absolute rounded-br-lg rtl:rounded-bl-lg rtl:rounded-br-none px-3 text-xs bg-blend-multiply line-height start-0 opacity-80">
                    خصم {randomDiscount}%
                  </span>
                )}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
} 