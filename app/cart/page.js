
"use client"
import {useEffect} from "react"
import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import PromotionCode from "./PromotionCode"
 import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {changeAlertStatus} from "@/app/store/features/cart"
import Items from "./Items"
import  EmptyCart from "./EmptyCart"
export default function Cart(){
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items);
console.log(cartItems)

useEffect(()=>{

dispatch(changeAlertStatus())
},[])
if(cartItems.length>0){
  return <div style={{"background-color":"#f7f7f7"}} className=" p-3">
  <div className="my-2">

<SetNave name='cart' display={true}/>
<Items cartItems={cartItems}/>
<PromotionCode/>
<OrderDetailes items={cartItems}/>
</div>
</div>
}else{
return <EmptyCart/>
}
}




