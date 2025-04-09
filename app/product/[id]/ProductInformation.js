
'use client'
import { useProduct } from '@/app/api/product';

export default function ProductInformation({product}){

function calculateOriginalPrice(price) {
   let number=price / (1 - price / 100)
 return Math.round(number * 10) / 10;


}


 


  
    function getArabicDate() {
      const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    
     const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const today = new Date();
     const dayName = days[today.getDay() +1];
    const monthName = months[today.getMonth()];
    
    // تنسيق التاريخ
    const arabicDate = `${dayName}، ${today.getDate()+1} ${monthName}`;
    
    return arabicDate;
}


 


  return <div className="bg-white py-4 ">
  <div className="text-lg font-bold text-gray-800">{product.name}</div>
  <div className="text-sm text-gray-500">{product.name}</div>
  <div className="flex items-baseline mt-2">
    <div className="text-xl font-bold text-red-600">{product.price} د.إ</div>
    <div className="text-sm text-gray-500 line-through ml-2">{calculateOriginalPrice(product.price)} د.إ</div>
    <div className="text-sm font-semibold text-red-500 ml-2">تخفيض  {product.price}%</div>
  </div>
  <div className="text-sm text-gray-500 mt-1">توصيل في  <span className="text-green-400">{getArabicDate()}</span></div>

</div>
}
