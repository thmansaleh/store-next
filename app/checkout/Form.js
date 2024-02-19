export default function Form(){
return <form className="w-full max-w-lg  p-4 rounded-xl border border-gray-300 ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-first-name">
        الاسم
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder />
      <p className="text-red-500 hidden text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3  md:mb-0">
      <label className="block  tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-first-name"> البريد الإلكتروني (إختياري)
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        الإمارة
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>ابوظبي</option>
          <option>دبي</option>
          <option>عجمان</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        المنطقة
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>ابوهيل</option>
          <option>البرشاء</option>
          <option>مدينة زايد</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        الشارع &amp; الشقة
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder />
      <p className="text-gray-600 text-xs italic">مثال: الشارع -رقم الشقة</p>
    </div>
  </div>
</form>

}