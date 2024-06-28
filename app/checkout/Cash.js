'use client'

import { useSelector } from "react-redux"

function Cash() {
    const paymentMethod=useSelector(state=>state.checkout.paymentMethod)
  
    if(paymentMethod=='cash') return <>
    <h3 className="text-md my-4 font-semibold">الدفع نقدا عند الإستلام</h3>
    <h4 className="text-sm m-3 text-gray-500" > سيتم احتساب رسوم 20 درهم عند الدفع نقدا  </h4>

  </>
}

export default Cash