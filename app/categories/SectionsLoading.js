
"use client"
import styles from  "./styles.css"
export default function SectionsLoading(){

return <div className="animate-pulse  flex flex-col gap-y-2">

  <div className="  h-8 w-full bg-gray-200"></div>
{[1,1,1,1,1,1,1,1].map(e=>{
 return  <div className="  h-8 w-full bg-gray-200"></div>

})}
 
</div>
}