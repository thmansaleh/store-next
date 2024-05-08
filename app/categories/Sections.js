"use client"
import styles from "./styles.css"
import {swrSections} from "@/app/swr/sections"
export default function Sections(){
  const {data,error,isLoading} =swrSections()


  
if(error) console.log(error)
if(isLoading) return "loading"
if(data) {
console.log(data)
return <div>
  {data. map((e,i)=>{
return <div key={i+43}  className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e.id} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.id}>
      {e.ar}
    </label>
  </div>

})}
</div>

}
}