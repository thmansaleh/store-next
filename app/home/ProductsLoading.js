
// 'use client'
export default function ProductsLoading(){

    return <div className="  w-full ">
    <div className="animate-pulse ">

      <div className="w-full  justify-around  flex flex-wrap gap-y-3 ">
{
    [1,1,1,1,1,1,1].map((e,i)=>{
        return         <div key={i} className="w-44 h-64 bg-gray-200  rounded-lg"></div>

    })
}      </div>
    </div>
  </div>
}