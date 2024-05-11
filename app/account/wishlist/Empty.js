import Link from 'next/link'
export default function Empty (){
return <div className=" mt-6  flex flex-col items-center justify-center space-y-4">
  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="fill-zinc-500" height={80} width={80} xmlns="http://www.w3.org/2000/svg" style={{"color":"rgb(229, 45, 39)"}}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
  <h2 className="text-md font-bold">قائمة المفضلة فارغة</h2>
  <Link src="./" className="p-2 px-4 rounded-lg bg-black text-white">تسوق </Link>
</div>
}