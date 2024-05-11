
"use client"
import Link from 'next/link'
import Empty from  "./Empty"
import {useSelector} from  "react-redux"
export default function page() {
   
const items = useSelector(state=>state.wishlist.items)
return <div className="p-3 flex justify-around flex-wrap gap-y-6">
 

 {items.length>0?items.map((e,i)=>{


return <Link key={i} href="/product?product_id=1" className=" inline-block relative rounded-lg   shadow-md overflow-hidden  w-36 bg-white   h-fit " >
    <div className="  "><img className="h-40 w-full object-contain " src={e.thumbnail}/></div><span className=" line-clamp-2 text-sm my-2 px-2">{e.description}</span>
    <div className="p-2 text-sm bg-zinc-100  flex justify-between items-center"><span>
        {e.price}
        <span className="text-green-600 mx-px inline-block">د.أ</span>
      </span>
      <svg className="fill-red-500 h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" /><path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd" /></svg>
    </div>
  </Link>

})
:<Empty />}




</div>

}