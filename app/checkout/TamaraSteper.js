import { useSelector } from 'react-redux';
import { useRef,  useEffect} from "react"


export default function TamaraSteper(){
    const paymentMethod = useSelector(state => state.checkout.paymentMethod);


const containerRef= useRef(null)
useEffect(() => {

if(paymentMethod=="tamara"){
 containerRef.current.classList.add("h-44")
}else{
containerRef.current.classList.remove("h-44")
}


  },[paymentMethod]);



return <ul ref={containerRef} className="relative flex flex-col md:flex-row gap-2   px-2">
  {/* Item */}
  <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white h-7 w-7">
        1
      </span>
      <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700" />
    </div>
    <div className="grow md:grow-0 md:mt-3 pb-5">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        100 د.إ
      </span>
      <p className="text-sm text-gray-500">
        اليوم
      </p>
    </div>
  </li>
  {/* End Item */}
  {/* Item */}
  <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white h-7 w-7">
        2
      </span>
      <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700" />
    </div>
    <div className="grow md:grow-0 md:mt-3 pb-5">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        100 د.إ
      </span>
      <p className="text-sm text-gray-500">
        بعد شهر
      </p>
    </div>
  </li>
  {/* End Item */}
  {/* Item */}
  <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white
h-7 w-7">
        3
      </span>
      <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700" />
    </div>
    <div className="grow md:grow-0 md:mt-3 pb-5">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        100 د.إ
      </span>
      <p className="text-sm text-gray-500">
        بعد شهرين
      </p>
    </div>
  </li>
  {/* End Item */}
</ul>
}