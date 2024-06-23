
'use client'
import { useProduct } from '@/app/api/product';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';

export default function ProductInformation({id}){

function calculateOriginalPrice(finalPrice, discountPercentage) {
   let number=finalPrice / (1 - discountPercentage / 100)
 return Math.round(number * 10) / 10;


}


  const {data,error,isLoading} =swrSingleProduct(id)


  function getArabicDate() {
      const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    
     const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const today = new Date();
     const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    
    // تنسيق التاريخ
    const arabicDate = `${dayName}، ${today.getDate()} ${monthName}`;
    
    return arabicDate;
}



  if(isLoading) return <div className="  w-full ">
<div className="animate-pulse my-4 ">

  <div className="w-full space-y-3 ">
    <div className="h-8 bg-gray-200  rounded-md w-20"></div>
    <div className="h-6 bg-gray-200 rounded-md w-12"></div>
    <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
    <div className="h-4 bg-gray-200 rounded-md w-20"></div>

  </div>
</div>
</div>

  return <div className="bg-white py-4 ">
  <div className="text-lg font-bold text-gray-800">{data.brand}</div>
  <div className="text-sm text-gray-500">{data.title}</div>
  <div className="flex items-baseline mt-2">
    <div className="text-xl font-bold text-red-600">{data.price} د.إ</div>
    <div className="text-sm text-gray-500 line-through ml-2">{calculateOriginalPrice(data.price,data.discountPercentage)} د.إ</div>
    <div className="text-sm font-semibold text-red-500 ml-2">تخفيض  {data.discountPercentage}%</div>
  </div>
  <div className="text-sm text-gray-500 mt-1">توصيل في  <span className="text-green-400">{getArabicDate()}</span></div>

</div>
}
