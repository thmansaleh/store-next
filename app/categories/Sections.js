"use client"
import styles from "./styles.css"
import {swrSections} from "@/app/swr/sections" 
import SectionsLoading from ="./SectionsLoading"

export default async function Sections(){
  const {data,error,isLoading} =swrSections()


  
if(error) return <h1>errore</h1>
if(isLoading) return <SectionsLoading/>
 return <div>

  {data.map(e=>{

return <div key={e.id}  className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e.id} name="category" />
    <label className=" w-full p-2 block" htmlFor={e.id}>
      {e.ar}
    </label>
  </div>

})}
</div>


}