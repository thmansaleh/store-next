
"use client"
import Link from "next/link"
import { useSelector } from "react-redux";
import { selectCartItemsCount, selectCartTotal } from "../store/features/cart";
export default function OrderDetailes() {

  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemsCount);

return  <div className=" my-2 overflow-hidden rounded-xl border border-gray-300 bg-white px-4 py-6 md:mx-4">
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">المجموع الفرعي</span> <span className="font-bold text-sm">{total} AED</span>
    </div>
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">رسوم الشحن</span><span className="flex items-center font-bold text-sm text-green-600">مجانا</span>
    </div><hr className="my-5 border-gray-300" />
    <div className="my-4 flex justify-between">
      <span className="text-md font-bold text-gray-500">المجموع</span><span className="text-md font-bold">{total} د.أ</span>
    </div>
 
  </div>
}