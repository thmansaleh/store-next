import Link from "next/link"
export default function Section(){
const icons = [
    {
        name:'المشتريات',
        icon:<svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={512} height={512}><circle cx={7} cy={22} r={2} /><circle cx={17} cy={22} r={2} /><path d="M23.685,1.336a1,1,0,0,0-1.414,0L17.112,6.5,15.561,4.881a1,1,0,0,0-1.442,1.386l1.614,1.679a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553L23.685,2.75A1,1,0,0,0,23.685,1.336Z" /><path d="M21.9,9.016a1,1,0,0,0-1.162.807l-.128.709A3,3,0,0,1,17.657,13H5.418l-.94-8H11a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.113l.128-.71A1,1,0,0,0,21.9,9.016Z" /></svg>
        ,
        route:'account/orders'
    },
    {
        name:'شاهدته مؤخرا',
        icon: <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m17.5,0c-2.346,0-4.359,2.19-5.5,5.54C10.859,2.19,8.846,0,6.5,0,2.855,0,0,5.271,0,12s2.855,12,6.5,12c2.346,0,4.359-2.19,5.5-5.54,1.141,3.35,3.154,5.54,5.5,5.54,3.645,0,6.5-5.271,6.5-12S21.145,0,17.5,0ZM6.5,22c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502C2,6.106,4.372,2,6.5,2s4.5,4.106,4.5,10-2.372,10-4.5,10Zm11,0c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502,0-5.894,2.372-10,4.5-10s4.5,4.106,4.5,10-2.372,10-4.5,10Z" /></svg>
        ,
        route:'account/orders'
    },
]

    return <div className="w-full py-4 px-2 mt-4  bg-white rounded-2xl ">


    {icons.map((e,i)=>{
        return <Link href={e.route} className="w-full h-12 p-3 block  rounded-lg hover:bg-neutral-200 my-1">
        {e.icon}
        <span className="mx-2 text-sm text-black 700px font-semibold select-none">{e.name}</span>
      </Link>
    })}

  </div>

}