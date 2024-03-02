
"use client"

import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import Item from './item/Item'
import Link from "next/link"
import PromotionCode from "./PromotionCode"
 import { useSelector } from 'react-redux';

import Items from "./Items"
export default function Cart(){
    const items = useSelector(state => state.cart.items);
console.log(items)

  return <div style={{"background-color":"#f7f7f7"}} className=" p-3">
  <div className="
my-2">
<SetNave name='cart' show={false}/>
<Items/>


    


<PromotionCode/>
<OrderDetailes/>

</div>
}
