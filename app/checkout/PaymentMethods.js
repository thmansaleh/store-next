"use client"
import { useDispatch } from 'react-redux'
 import './payments.css'
import { changePaymentMethod } from '../store/features/checkout'
export default function(){
  const dispatch=useDispatch()

  const data=[
    {
      name:'بطاقة',
      value:'card',
      img:'credit.png'
    },

    {
      name:'تمارا',
      value:'tamara',
      img:'tamara.png'
    },
    {
      name:'تابي',
      value:'tabby',
      img:'tabby.png'
    },
    {
      name:'نقدا',
      value:'cash',
      img:'cash.webp'
    },
  ]
  if( true) return <div className="w-full p-2 border border-gray-300 rounded-lg flex items-center  justify-center gap-x-6 ">
    {data.map(payment=>{
      return  <div  key={payment.value} onClick={()=>dispatch(changePaymentMethod(payment.value))} className=" transition-all inline-block text-center  ">
      <input 
defaultChecked={payment.value =="card" }
id={payment.value} name="payment" className="hidden payments" type="radio" />
      <label htmlFor={payment.value}>
        <div className="w-20 h-20 overflow-hidden flex flex-wrap p-2  items-center transition-all justify-center bg-white rounded-lg ">
        <img className=" transition-all grayscale w-full h-12   object-contain" src={payment.img} alt={payment.value}/>
          <span className="text-sm   inline-block ">{payment.name}</span>
        </div>
      </label>
    </div>
    })}
  </div>


}