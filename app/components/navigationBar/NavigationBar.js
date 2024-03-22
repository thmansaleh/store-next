"use client"
import styles from './styles.css'
 
import {icons} from "./NavigationIcons"
export default function NavigationBar(){





return  <div id="navs" className=" nav fixegd rounded-t-lg bottom-0  w-screen py-4 bg-white  flex items-center  justify-around ">
  
  {icons.map((e,i)=>{
 return  <div className="navs flex items-center justify-center bg-grvay-500 px-4 h-10   overflow-hidden   relative">
    <input type="radio" id={e.page} className={styles.navigation-input} name="nav"/>
    <label  for={e.page}>
    
{e.icon}
      <span className="bg-black  -bottom-2 inset-x-1/2    translate-x-1/2 absolute  size-1.5 rounded-full  transition-all duration-150"></span>
    </label>
  
  </div>


})}
  

  
</div>
 
}