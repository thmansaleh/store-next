"use client"
import Address from "./Address"
import CashOnDelivery from "./CashOnDelivery"
import PayButton from "./PayButton"
import PaymentSection from "./PaymentSection"
export default function page(){

return <div  className=" p-3">
    {/* <h2 className="py-4">أختر وسيلة الدفع</h2> */}

{/* <PayButton/> */}
<PaymentSection/>
<Address/>
<CashOnDelivery/>
<PayButton/>

</div>
}