"use client"

export default function Card(){

return <div className="mx-auto max-w-lg mt-10 ring-2 rounded-lg ring-gray-500 ">
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        <img className="h-8" src="https://www.svgrepo.com/show/499847/company.svg" alt="Workflow logo" />
        <input placeholder="تاريخ الانتهاء" type="text" className="font-medium outline-none w-1/4 text-gray-600" />
      </div>
      <div className="mt-4">
        <input type="text" className="font-bold outline-none text-gray-800 text-md" placeholder="رقم البطاقة" />
        <div className="flex justify-between items-center mt-2">
          <input type="text" className="text-sm outline-none font-semibold text-gray-600" placeholder="اسم حامل البطاقة" />
          <img className="h-10 w-10" src="https://www.svgrepo.com/show/362011/mastercard.svg" alt="Mastercard logo" />
        </div>
      </div>
    </div>
    <div className="bg-gray-100 px-6 py-4">
      <input type="number" className=" outline-none text-md w-fit bg-transparent font-bold text-gray-800 mt-2" placeholder="CVC" />
    </div>
  </div>
</div>
}