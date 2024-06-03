
'use client'
export default function StoriesLoading(){

    return <div className="  w-full px-2 mt-4 mb-6 ">
    <div className="animate-pulse ">
<h1 className="w-16 h-5 rounded-lg bg-gray-200 my-4"></h1>
      <div className="w-full  justify-around  flex  items-center ">
{
    [1,1,1,,1].map((e,i)=>{
        return       <div
        className='flex flex-col items-center gap-y-3  '>
       <div className='bg-gray-200 flex  items-center rounded-full w-14 h-14 '>
        
       </div>
       <div className='w-14 h-4 bg-gray-200 rounded-lg'></div>

       
        </div> 

    })
}      </div>
    </div>
  </div>
}