'use client'

import { useSelector } from "react-redux"
import SpiltPrice from "./SplitPrice"

function Tamara() {
    const paymentMethod=useSelector(state=>state.checkout.paymentMethod)
  
    if(paymentMethod=='tamara') return <>
    <h3 className="text-md my-4 font-semibold">تمـــارا</h3>
    <h4 className="text-sm m-3 text-gray-500">قسط الفاتورة 4 أقساط بدون رسوم تأخير</h4>

  <SpiltPrice/>
  </>
}

export default Tamara