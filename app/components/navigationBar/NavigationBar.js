"use client"
import styles from './styles.css'
 import { useSelector } from 'react-redux';
import {useRef ,useEffect} from "react"
 import { useRouter } from 'next/navigation'
import {icons} from "./NavigationIcons"
export default function NavigationBar(){
    const display = useSelector(state => state.navigation.display);
const router = useRouter()
const navigationRef =useRef(null)
const navigation = (page)=>{
router.push('/cart')
}

useEffect(()=>{
if(display){
navigationRef. current.style.display="flex"
}else{
navigationRef. current.style.display="none"
}

},[display])



return  <div ref={navigationRef}  className=" z-1 fixed border-solid border-t border-inherit  fixegd rounded-t-lg bottom-0  w-screen py-4 bg-white  flex items-center  justify-around ">
  
  {icons.map((e,i)=>{
 return  <div onClick={()=>{
router.push(`/${e.page}`)
}}
{e.alert?<span className="bg-red-500 flex items-center justify-center w-2 absolute top-0 left-1 scale-75 transition-all  h-2 p-2 text-white  text-xs rounded-full ">
  2
</span>:null}
className="flex items-center justify-center bg-grvay-500  h-10   overflow-hidden   relative">
    <input type="radio" id={e.page} className="navigationInput" name="nav"/>
    <label className="px-4"  for={e.page}>
    
{e.icon}
      <span className="bg-black  -bottom-2 inset-x-1/2    translate-x-1/2 absolute  h-1.5 w-1.5  rounded-full  transition-all duration-150"></span>
    </label>
  
  </div>


})}
  

  
</div>
 
}