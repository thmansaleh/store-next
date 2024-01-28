export default function Serach(){
return <div dir="rtl">
  <div className=" bg-white sticky top-0  bottom-0   py-4 flex items-center justify-between p-2 px-3 bg-white border-b border-zinc-200">
    <svg className="w-5 object-contain h-5  fill-back-500 bg-white" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={512} height={512}>
      <path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z" />
    </svg>
    <input placeholder="بحث" type="search" className="bg-gray-100 rounded outline-0 px-3 py-2 text-sm w-3/4 " />
    <button className=" text-xs font-semibold ">بحث</button>
  </div>
  <div className=" w-full bg-white mt-3 p-4">
    <h3 className="text-sm font-semibold mb-3 ">استكشف البحث</h3>
    <div className="w-10/12 bg-f-200  py-3">
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">عباية طويلة</span>
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">
        <svg className=" inline 
w-5 object-contain h-5 
fill-red-500 " xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M22,6h-7v2h5.586l-7.586,7.586-6-6L.03,16.556l1.414,1.414,5.556-5.556,6,6,9-9v5.586h2v-7c0-1.103-.897-2-2-2Z" /></svg>
        سروال داخلي
      </span>
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">منشفة</span>
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">جاكيت</span>
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">نقاب</span>
      <span className="bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">
        <svg className=" inline 
w-5 object-contain h-5 
fill-red-500 " xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M22,6h-7v2h5.586l-7.586,7.586-6-6L.03,16.556l1.414,1.414,5.556-5.556,6,6,9-9v5.586h2v-7c0-1.103-.897-2-2-2Z" /></svg>
        قفازات</span>
      <span className="  bg-gray-100 text-xs rounded  text-zinc-600 p-2 m-1 inline-block ">
        <svg className=" inline 
w-5 object-contain h-5 
fill-red-500 " xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M22,6h-7v2h5.586l-7.586,7.586-6-6L.03,16.556l1.414,1.414,5.556-5.556,6,6,9-9v5.586h2v-7c0-1.103-.897-2-2-2Z" /></svg>
        هواتف</span>
    </div>
  </div>
  <div className="w-full p-3">
    <div className="w-full text-sm py-3   border-b border-gray-200">اكسسوارات</div>
    <div className="w-full text-sm py-3   border-b border-gray-200">هواتف</div>
    <div className="w-full text-sm py-3   border-b border-gray-200">مخاوير</div>
    <div className="w-full text-sm py-3   border-b border-gray-200">ساعات</div>
    <div className="w-full text-sm py-3   border-b border-gray-200">مكسرات</div>
    <div className="w-full text-sm py-3   border-b border-gray-200">سراويل</div>
  </div>
</div>

}