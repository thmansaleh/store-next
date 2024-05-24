
'use client'
import { useProduct } from '@/app/api/product';
import { swrSingleProduct } from '@/app/libs/swr/singleProduct';

export default function ProductInformation({id}){

  const {data,error,isLoading} =swrSingleProduct(id)
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
    <div className="text-sm text-gray-500 line-through ml-2">{data.price} د.إ</div>
    <div className="text-sm font-semibold text-red-500 ml-2">تخفيض -60% عند الشراء </div>
  </div>
  <div className="text-sm text-gray-500 mt-1">توصيل في  <span className="text-green-400">16 نوفمبر, الثلاثاء</span></div>

</div>
}
