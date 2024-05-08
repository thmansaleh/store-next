"use client"
import styles from "./styles.css"
import {swrSections} from "@/app/swr/sections"
export default function Sections(){
  const {data,error,isLoading} =swrSections()


  
if(error) console.log(error)
if(isLoading) return "loading"
if(data) console.log(data)


}