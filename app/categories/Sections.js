"use client"

import {swrSections} from "@/app/libs/swr/sections" 
import SectionsLoading from "./SectionsLoading"

export default function Sections(){
  const {data,error,isLoading} =swrSections()


  
if(error) return <h1>errore</h1>
if(isLoading) return <SectionsLoading/>
 return <div className="flex w-full  justify-center gap-x-5">

  {data.map((e,i)=>{

if (i===0) {
  return <div key={e.id}  className="    ">
    <input  defaultChecked className="hidden categoryInput" type="radio" id={e.id} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.id}>
      {e.ar}
    </label>
  </div>
} else {
  return <div key={e.id}  className="    ">
    <input  className="hidden categoryInput" type="radio" id={e.id} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.id}>
      {e.ar}
    </label>
  </div>
}

})}
</div>


}