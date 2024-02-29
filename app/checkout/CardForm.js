"use client"
import { useSelector } from 'react-redux';
import { useRef,  useEffect} from "react"
    
export default function CardForm(){

    const paymentMethod = useSelector(state => state.checkout.paymentMethod);


const containerRef= useRef(null)
useEffect(() => {
console.log(paymentMethod)
if(paymentMethod=="card"){
 containerRef.current.classList.add("h-44")
}else{
containerRef.current.classList.remove("h-44")
}
}

  },[paymentMethod]);


return <div ref={containerRef} className="w-full py-3 px-6
transition-all overflow-y-hidden h-0">
  <input type="number" className="w-full p-2 text-center text-sm border-b outline-none " placeholder="Card Number" />
  <div className="flex w-full ">
    <input className="w-1/2 text-sm  border-b rtl:border-l ltr:border-r outline-none text-center" type="number" placeholder="CCV" />
    <input className="w-1/2 p-2   text-sm border-b outline-none text-center " type="text" placeholder="الانتهاء" />
  </div>
  <input type="text" className="w-full p-2 text-sm text-center outline-none border-b" placeholder="اسم حامل البطاقة" />
  <div className="my-2 inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlfor="check">
      <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="check" />
      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlfor="check">
      حفظ البطاقة 
    </label>
  </div> 
</div>

}