"use client"
import styles from "./styles.css"
import {swrSections} from "@/app/swr/sections" 

export default async function Sections(){
  const {data,error,isLoading} =swrSections()


  
if(error) return <h1>errore</h1>
if(isLoading) return "loading"
console.log("data is ",data)
 return <div>

  {["هلا"].map((e,i)=>{

return <div key={i+43}  className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e} name="category" />
    <label className=" w-full p-2 block" htmlFor={e}>
      {e}
    </label>
  </div>

})}
</div>


}