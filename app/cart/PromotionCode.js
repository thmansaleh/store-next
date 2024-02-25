"use client"
import {useRef} from  "react"


export default function PromotionCode(){
const code = useRef()

const openInput = () => {
console.log("toggle")
code.current.classList.toggle('h-20')
}


  return <div>
  <button onclick={openInput} className="flex  bg-white rounded-lg text-sm font-semibold text-black justify-center items-center my-3 py-2 border-dashed border-2 w-full ">
    <svg className="w-7 h-7  mx-2  fill-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M18,0H14V1a2,2,0,0,1-4,0V0H6A3,3,0,0,0,3,3V24h7V23a2,2,0,0,1,4,0v1h7V3A3,3,0,0,0,18,0ZM15.874,22a4,4,0,0,0-7.748,0H5V17H8V15H5V3A1,1,0,0,1,6,2H8.126a4,4,0,0,0,7.748,0H18a1,1,0,0,1,1,1V15H16v2h3v5Z" /><rect x={10} y={15} width={4} height={2} /></g></svg>
    إضافة كوبون خصم
  </button>







<div ref={code} className="h-0 w-full  transition-all overflow-y-hidden">
  <div className="mt-5 flex px-4">
    <input className="flex-1 rounded-s-xl border-2 border-black p-2 focus:outline-none" placeholder="ادخل الكود" type="text" defaultValue />
    <button className="flex w-20 justify-center rounded-e-xl bg-black p-2 text-white  hover:bg-opacity-80">تفعيل</button>
  </div>
</div>



<div/>

}