"use client" 
  import Link from "next/link"
 export default function Category({name,img}){ 
  
   return <Link href='/'> 
       <img  src={img} alt="" /> 
        <span>{name}</span> 
     </Link> 
 }
