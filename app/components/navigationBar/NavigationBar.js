"use client"
import styles from './styles.css'
 import { useSelector } from 'react-redux';
import {useRef ,useEffect} from "react"
 import { useRouter } from 'next/navigation'
import {icons} from "./NavigationIcons"
export default function NavigationBar(){
    const alert = useSelector(state => state.cart.alert);
const cartItems = useSelector(state => state.cart.items);

const router = useRouter()
const navigationRef =useRef(null)
const navigation = (page)=>{
router.push('/cart')
}





return  <div ref={navigationRef}  className=" z-50 fixed border-solid border-t border-inherit  fixegd rounded-t-lg bottom-0  w-screen py-4 bg-white  flex items-center  justify-around ">
  
  {icons.map((e,i)=>{
 return  <div key={i} onClick={()=>{
router.push(`/${e.page}`,{ scroll: false })
}}

className="flex items-center justify-center bg-grvay-500  h-10   overflow-hidden   relative">
{e.page=="cart"? alert&&<span class="bg-red-500 flex items-center justify-center w-2 absolute top-0 left-1 scale-75 transition-all  h-2 p-2 text-white  text-xs rounded-full ">
      {cartItems.length}
    </span>:null}
    <input type="radio" id={e.page} className="navigationInput" name="nav"/>
    <label className="px-4"  htmlFor={e.page}>
    
{e.icon}
      <span className="bg-black  -bottom-2 inset-x-1/2    translate-x-1/2 absolute  h-1.5 w-1.5  rounded-full  transition-all duration-300"></span>
    </label>
  
  </div>


})}
  

  
</div>
 
}