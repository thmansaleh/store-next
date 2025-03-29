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
    {
        name:'العنواين',
        icon: <svg className=" h-full  inline-block w-8 fill-gray-500"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>        ,
        route:'account/addresses'
    },
    {
        name:'اللغة',
        icon:  <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m7.508,9.196c-.107-.464-.403-.886-.842-1.07-.206-.086-.413-.126-.613-.126-.689,0-1.287.475-1.443,1.147l-1.475,6.252c-.072.307.16.601.476.601.226,0,.422-.155.475-.375l.389-1.625h3.115l.374,1.621c.051.222.249.379.476.379h.012c.314,0,.546-.292.476-.598l-1.422-6.206Zm-2.793,3.804l.869-3.627c.051-.219.244-.373.469-.373.073,0,.149.016.226.049.111.046.213.197.253.371l.827,3.58h-2.645Zm14.805-9H4.52C2.038,4,.02,6.019.02,8.5v7c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5ZM1.02,15.5v-7c0-1.93,1.57-3.5,3.5-3.5h7v14h-7c-1.93,0-3.5-1.57-3.5-3.5Zm22,0c0,1.93-1.57,3.5-3.5,3.5h-7V5h7c1.93,0,3.5,1.57,3.5,3.5v7Zm-1-6.009v.018c0,.271-.22.491-.491.491h-.546c-.107.917-.517,2.904-2.085,4.341.701.354,1.574.595,2.658.648.26.013.464.229.464.49v.018c0,.281-.235.505-.516.491-1.469-.071-2.605-.448-3.484-.986-.879.538-2.015.915-3.484.986-.28.014-.516-.21-.516-.491v-.018c0-.26.204-.477.464-.49,1.085-.054,1.957-.295,2.659-.648-.54-.495-.943-1.055-1.243-1.614-.176-.329.059-.727.432-.727.181,0,.345.1.432.259.291.534.695,1.066,1.257,1.519,1.474-1.185,1.862-2.925,1.964-3.777h-5.473c-.271,0-.491-.22-.491-.491v-.018c0-.271.22-.491.491-.491h3.009v-.509c0-.271.22-.491.491-.491h.018c.271,0,.491.22.491.491v.509h3.009c.271,0,.491.22.491.491Z" /></svg>
        ,
        route:'account/language'
    },
    {
        name:'خدمة العملاء',
        icon: <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m21,21.5v2.5h-2v-2.5c0-1.379-1.121-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5v2.5h-2v-2.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5ZM12.824,6.095c1.255.289,2.278,1.304,2.575,2.557.201.847.091,1.659-.238,2.348h1.306c.501,0,.939-.368.997-.866.068-.587.043-1.202-.091-1.831-.444-2.079-2.131-3.756-4.213-4.184-3.537-.727-6.659,1.97-6.659,5.381,0,1.469.579,2.805,1.52,3.792.04-.848.346-1.627.836-2.256-.228-.464-.356-.986-.356-1.537,0-2.199,2.038-3.931,4.324-3.405Zm-5.953-2.067c1.529-1.433,3.531-2.141,5.63-2.011,3.924.254,6.999,3.669,6.999,7.774,0,1.77-1.439,3.209-3.209,3.209h-2.397c-.243-.831-1.01-1.439-1.92-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.539,0,1.029-.214,1.388-.561h2.928c2.872,0,5.209-2.337,5.209-5.209C21.5,4.634,17.604.342,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.787,1.675-2.861,3.996-2.99,6.432h2.003c.123-1.903.948-3.654,2.355-4.973Z" />
      </svg>        ,
        route:'contact-us'
    },
]

    return <div className="w-full py-4 px-2 mt-4  bg-gray-50 rounded-2xl ">


    {icons.map((e,i)=>{
        return <Link href={e.route} className="w-full h-12 p-3 block  rounded-lg hover:bg-neutral-200 my-1">
        {e.icon}
        <span className="mx-2 text-sm text-black 700px font-semibold select-none">{e.name}</span>
      </Link>
    })}

  </div>

}