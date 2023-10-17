"use client" 
  
 export default function Category({name,img}){ 
  
   return <div> 
       <img  src={img} alt="" /> 
        <span>{name}</span> 
     </div> 
 }
