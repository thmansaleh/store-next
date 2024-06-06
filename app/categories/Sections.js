"use client"

import {swrSections} from "@/app/libs/swr/sections" 
import SectionsLoading from "./SectionsLoading"
import { useDispatch } from "react-redux"
import { updateSectionId } from "../store/features/categories"
export default function Sections(){
  const {data,error,isLoading} =swrSections()
  const dispatch =useDispatch()


  
if(error) return <h1>errore</h1>
if(isLoading) return <SectionsLoading/>
 return <div className="flex w-full  justify-center gap-x-5">

  {
   data.slice(0,4).map((e,i)=>{

if (i==0) {
  return <div onClick={

    ()=>
    {
      dispatch(updateSectionId(e.name))
  }
  } key={e.id}  className=" ">
    <input  defaultChecked className="hidden categoryInput" type="radio" id={e.name} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.name}>
      {e.name}
    </label>
  </div>
} else {
  return <div  onClick={

    ()=>
    {
      dispatch(updateSectionId(e.name))
  }
  }  key={e.name}  >
    <input  className="hidden categoryInput" type="radio" id={e.name} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.name}>
      {e.name}
    </label>
  </div>
}

})}
</div>


}