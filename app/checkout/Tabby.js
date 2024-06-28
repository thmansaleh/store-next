'use client'

import { useSelector } from "react-redux"
import SpiltPrice from "./SplitPrice"

function Tabby() {
    const paymentMethod=useSelector(state=>state.checkout.paymentMethod)
  
    if(paymentMethod=='tabby') return <>
    <h3 className="text-md my-4 font-semibold">تــــابي</h3>
    <h4 className="text-sm m-3 text-gray-500" > قسط الفاتورة 4 أقساط </h4>

  <SpiltPrice/>
  </>
}

export default Tabby