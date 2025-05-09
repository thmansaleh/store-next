"use client"
import { Eye } from "lucide-react"
import Link from "next/link"
import {useSelector} from "react-redux"
export default function FirstSecton(){
const wishlistCount = useSelector(state=>state.wishlist.items. length)

const icons =[
// {
// name:'المفضلة',
// icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,

// count:wishlistCount,
// route:"./account/wishlist"
// },

{
    name:'شاهدته مؤخرا',
    icon: <svg className=" w-full h-7  fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m17.5,0c-2.346,0-4.359,2.19-5.5,5.54C10.859,2.19,8.846,0,6.5,0,2.855,0,0,5.271,0,12s2.855,12,6.5,12c2.346,0,4.359-2.19,5.5-5.54,1.141,3.35,3.154,5.54,5.5,5.54,3.645,0,6.5-5.271,6.5-12S21.145,0,17.5,0ZM6.5,22c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502C2,6.106,4.372,2,6.5,2s4.5,4.106,4.5,10-2.372,10-4.5,10Zm11,0c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502,0-5.894,2.372-10,4.5-10s4.5,4.106,4.5,10-2.372,10-4.5,10Z" /></svg>
    // icon: Eye
    ,
    count:0,

    route:'account/orders'
},



{
name:"البطاقات",
icon:<svg className="w-full h-7 fill-black" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="5.5" cy="15.5" r="1.5"/><path d="M19,3H5A5.006,5.006,0,0,0,0,8v8a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,5H19a3,3,0,0,1,3,3H2A3,3,0,0,1,5,5ZM19,19H5a3,3,0,0,1-3-3V10H22v6A3,3,0,0,1,19,19Z"/></svg>,

count:0,
route:"./account/cards"
},





{
name:"القسائم",
icon:<svg className="w-full h-7 fill-gray-500"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,0h-.13a2.02,2.02,0,0,0-1.941,1.532,2,2,0,0,1-3.858,0A2.02,2.02,0,0,0,8.13,0H8A5.006,5.006,0,0,0,3,5V21a3,3,0,0,0,3,3H8.13a2.02,2.02,0,0,0,1.941-1.532,2,2,0,0,1,3.858,0A2.02,2.02,0,0,0,15.87,24H18a3,3,0,0,0,3-3V5A5.006,5.006,0,0,0,16,0Zm2,22-2.143-.063A4,4,0,0,0,8.13,22H6a1,1,0,0,1-1-1V17H7a1,1,0,0,0,0-2H5V5A3,3,0,0,1,8,2l.143.063A4.01,4.01,0,0,0,12,5a4.071,4.071,0,0,0,3.893-3H16a3,3,0,0,1,3,3V15H17a1,1,0,0,0,0,2h2v4A1,1,0,0,1,18,22Z"/><path d="M13,15H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/></svg>
,
count:0,
route:"./account/coupons"
}




]


return <div className="w-full py-5 p-x2  bg-gray-50 rounded-2xl  flex items-center  flex-wrap gap-3" >
{icons.map((e,i)=>{


return <Link key={i} className="w-24 inline-block rounded-lg text-center  py-1 hover:bg-neutral-200 " href={e.route}>
 {e.icon}
<span className="text-sm text-black font-semibold select-none">{e.name}</span><span className="block text-gray-400 text-sm select-none">{e.count}</span>
</Link>





})}

</div>
}