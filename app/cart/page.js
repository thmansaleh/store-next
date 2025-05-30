
"use client"
import {useEffect} from "react"
import BackArrowBtn from "@/app/components/BackArrowBtn"
import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import PromotionCode from "./PromotionCode"
 import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {changeAlertStatus} from "@/app/store/features/cart"
import Items from "./Items"
import  EmptyCart from "./EmptyCart"
import Content from "./Content"
export default function Cart(){
  return <Content/>
  return null
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items);


useEffect(()=>{

dispatch(changeAlertStatus())
},[])


if(cartItems.length>0){
  return <>
   <div style={{"background-color":"#f7f7f7"}} className=" p-3">
   <BackArrowBtn/>

  <div className="my-2">

<SetNave name='cart' display={true}/>
<Items cartItems={cartItems}/>
<PromotionCode/>
<OrderDetailes items={cartItems}/>
</div>
</div>
</>
}else{
return <>
<BackArrowBtn/>
<EmptyCart/>
</>
}
}




