"use client"
export default function SearchInput(){


return <div className=" relative   w-full ">
  <svg className="absolute fill-gray-400 mx-2 right-0 translate-y-1/2" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height={25} width={25} xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" /></svg>
  <input placeholder="what are you looking for?" className="w-full p-3 rounded-lg focus:border-gray-400 border-2 outline-0 border-inherit text-sm" />
  <div className="absolute rounded-lg text-slate-700 bg-gray-50 text-sm p-2 w-full mt-1 ">
    <div className=" p-3 border-b">xjdid</div>
    <div className=" p-3 border-b">xjdid</div>
    <div className=" p-3">xjdid</div>
  </div>
</div>
}