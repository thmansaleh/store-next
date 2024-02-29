'use client'
import Button from "./Button"
export default function PromotionCode() {

   return <> 
     <Button/>

<div onClick={() => console.log(1)} className="h-0 w-full  transition-all overflow-y-hidden">
  <div className="mt-5 flex px-4">
    <input className="flex-1 rounded-s-xl border-2 border-black p-2 focus:outline-none" placeholder="ادخل الكود" type="text" defaultValue />
    <button className="flex w-20 justify-center rounded-e-xl bg-black p-2 text-white  hover:bg-opacity-80">تفعيل</button>
  </div>
</div>



</>

}