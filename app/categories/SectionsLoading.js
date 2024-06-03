
"use client"
import  "./styles.css"
export default function SectionsLoading(){

return <div className="animate-pulse  flex  items-center justify-center my-3 gap-x-2">

  {/* <div className="  h-8 w-full bg-gray-200 items-center gab-x-4 flex justify-center"> </div> */}
{[1,1,1,4].map(e=>{
 return  <div className="  h-5 w-20 bg-gray-200 rounded-md"></div>

})}
 
</div>
}