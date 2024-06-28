"use client"
import Card from "./Card"
import Cash from "./Cash"
import PaymentMethods from "./PaymentMethods"
import Tabby from "./Tabby"
import Tamara from "./Tamara"
export default function page(){

return <div  className=" p-3">
    <h2 className="py-4">أختر وسيلة الدفع</h2>
<PaymentMethods/>
<Card/>
<Tamara/>
<Tabby/>
<Cash/>
</div>
}