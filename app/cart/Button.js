'use client'
export default function Button() {

   return <>
<div onClick={() => console.log("button")} className=" bg-red-700 rounded-lg text-sm font-semibold text-black   my-3 py-2 border-dashed border-6 w-full ">

    
    إضافة كوبون خصم

  </div>
<div onClick={() => console.log(1)} className="h-0 w-full  transition-all overflow-y-hidden">
  <div className="mt-5 flex px-4">
    <input className="flex-1 rounded-s-xl border-2 border-black p-2 focus:outline-none" placeholder="ادخل الكود" type="text" defaultValue />
    <button className="flex w-20 justify-center rounded-e-xl bg-black p-2 text-white  hover:bg-opacity-80">تفعيل</button>
  </div>
</div>
</>

}