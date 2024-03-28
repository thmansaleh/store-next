"use client"
import Link from "next/link"
import {useSelector} from "react-redux"
export default function FirstSecton(){
const wishlistCount = useSelector(state=>state.wishlist.items. length)

const icons =[
{
name:'المفضلة',
icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,
count:wishlistCount,
route:"./account/wishlist"
},





{
name:"البطاقات",
icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,
count:0,
route:"./account/cards"
},





{
name:"القسائم",
icon:<svg className="w-full h-7 fill-red-500"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,0h-.13a2.02,2.02,0,0,0-1.941,1.532,2,2,0,0,1-3.858,0A2.02,2.02,0,0,0,8.13,0H8A5.006,5.006,0,0,0,3,5V21a3,3,0,0,0,3,3H8.13a2.02,2.02,0,0,0,1.941-1.532,2,2,0,0,1,3.858,0A2.02,2.02,0,0,0,15.87,24H18a3,3,0,0,0,3-3V5A5.006,5.006,0,0,0,16,0Zm2,22-2.143-.063A4,4,0,0,0,8.13,22H6a1,1,0,0,1-1-1V17H7a1,1,0,0,0,0-2H5V5A3,3,0,0,1,8,2l.143.063A4.01,4.01,0,0,0,12,5a4.071,4.071,0,0,0,3.893-3H16a3,3,0,0,1,3,3V15H17a1,1,0,0,0,0,2h2v4A1,1,0,0,1,18,22Z"/><path d="M13,15H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/></svg>
,
count:0,
route:"./account/coupons"
}




]


return <div className="w-full h-28  bg-white rounded-2xl  flex items-center justify-around" >
{icons.map((e,i)=>{


return <Link className="w-24 inline-block rounded-lg text-center  py-1 hover:bg-neutral-200 " href={e.route}>
 {e.icon}
<span className="text-sm text-black font-semibold select-none">{e.name}</span><span className="block text-gray-400 text-sm select-none">{e.count}</span>
</Link>





})}

</div>
}