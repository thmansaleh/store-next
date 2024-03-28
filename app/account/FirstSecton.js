"use client"
import Link from "next/link"
export default function FirstSecton(){

const icons =[
{
name:'المفضلة',
icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,
count:0,
route:"black"
},





{
name:"البطاقات",
icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,
count:0,
route:""
},





{
name:"القسائم",
icon:<svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>,
count:0,
route:""
}




]


return <div className="w-full h-28  bg-white rounded-2xl  flex items-center justify-around" >
{icons.map((e,i)=>{


return <Link className="w-24 inline-block rounded-lg text-center  py-1 hover:bg-neutral-200 " href="./account/wishlist">
{e.icon}
<span className="text-sm text-black font-semibold select-none">{e.name}</span><span className="block text-gray-400 text-sm select-none">{e.count}</span>
</Link>





})}

</div>
}