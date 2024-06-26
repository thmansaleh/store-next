
"use client"
import Link from "next/link"
export default function OrderDetailes({items}) {

    let totalPrice = Math.floor(items.reduce((total, item) => total + (item.price * item.quantity), 0))

return  <div className=" my-2 overflow-hidden rounded-xl border border-gray-300 bg-white px-4 py-6 md:mx-4">
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">المجموع الفرعي</span> <span className="font-bold text-sm">{totalPrice} AED</span>
    </div>
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">رسوم الشحن</span><span className="flex items-center font-bold text-sm text-green-600">مجانا</span>
    </div><hr className="my-5 border-gray-300" />
    <div className="my-4 flex justify-between">
      <span className="text-md font-bold text-gray-500">المجموع</span><span className="text-md font-bold">{totalPrice} د.أ</span>
    </div>
    <Link href="checkout" >
      <button className="md:w-24 w-full bg-black text-white text-md font-semibold rounded-lg py-2 my-2">
        الدفع 
      </button>
    </Link>
  </div>
}