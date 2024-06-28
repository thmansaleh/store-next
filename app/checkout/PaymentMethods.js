"use client"

export default function(){

return <div className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-around ">
  <div className=" inline-block text-center  ">
    <input id="card" name="payment" className="hidden payments" type="radio" />
    <label htmlFor="card">
      <div className="w-20 h-20 overflow-hidden flex flex-wrap p-2  items-center justify-center bg-white rounded-lg ">
        <img className="grayscale w-full h-12   object-contain" src="card.png" alt="v" />
        <span className="text-sm   inline-block ">بطاقة</span>
      </div>
    </label>
  </div>
  <div className=" inline-block text-center  ">
    <input id="cash" name="payment" className="hidden payments" type="radio" />
    <label htmlFor="cash">
      <div className="w-20 h-20 overflow-hidden flex flex-wrap p-2  items-center justify-center bg-white rounded-lg ">
        <img className="grayscale w-full h-12   object-contain" src="cash.jpg" alt="v" />
        <span className="text-sm   inline-block ">نقدا</span>
      </div>
    </label>
  </div>
  <div className=" inline-block text-center  ">
    <input id="tamara" name="payment" className="hidden payments" type="radio" />
    <label htmlFor="tamara">
      <div className="w-20 h-20 overflow-hidden flex flex-wrap p-2  items-center justify-center bg-white rounded-lg ">
        <img className="grayscale w-full h-12   object-contain" src="tamara.png" alt="v" />
        <span className="text-sm   inline-block ">تمارا</span>
      </div>
    </label>
  </div>
  <div className=" inline-block text-center  ">
    <input id="tabby" name="payment" className="hidden payments" type="radio" />
    <label htmlFor="tabby">
      <div className="w-20 h-20 overflow-hidden flex flex-wrap p-2  items-center justify-center bg-white rounded-lg ">
        <img className="grayscale w-full h-12   object-contain" src="tabby.png" alt="v" />
        <span className="text-sm   inline-block ">تابي</span>
      </div>
    </label>
  </div>
</div>
}