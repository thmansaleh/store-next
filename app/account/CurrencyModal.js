"use client"

import {useState, useRef} from "react"
export default function CurrencyModal(){
const modal = useRef();
const currencies = [
  { english: "Bahraini Dinar", arabic: "دينار بحريني" },
  { english: "Saudi Riyal", arabic: "ريال سعودي" },
  { english: "Emirati Dirham", arabic: "درهم إماراتي" },
  { english: "Qatari Riyal", arabic: "ريال قطري" },
  { english: "Kuwaiti Dinar", arabic: "دينار كويتي" },
  { english: "Omani Rial", arabic: "ريال عماني" },
 
 
  
  { english: "US Dollar", arabic: "دولار أمريكي" },
  { english: "British Pound", arabic: "جنيه إسترليني" }
];


const OpenModal = () => {
    modal.current.style.display='flex'
  };

const closeModal = () => {
    modal.current.style.display='none'
console.log("close")
  };


return <>

      <div  onClick={OpenModal} className="w-full h-12 p-3  rounded-lg hover:bg-neutral-200 my-1">
      <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-2-12c0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733,0,1.654-1.346,3-3,3v2h-2v-2c-1.654,0-3-1.346-3-3h2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1,0-.378-.271-.698-.644-.76l-3.041-.507c-1.342-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-2h2v2c1.654,0,3,1.346,3,3h-2c0-.551-.448-1-1-1h-2c-.552,0-1,.449-1,1Z" /></svg>
      <span className="mx-2 text-sm text-black 700px select-none font-semibold">العملة</span>
    </div>


<div ref={modal} className=" hidden bg-gray-100 bg-opacity-75  transition-all modal-container flex overflow-y-auto overflow-x-hidden fixed  z-40 inset-y-0 inset-x-0 justify-center items-center     max-h-full">
  <div id="div" className="z-50   shadow relative rounded-lg w-3/4 bg-white transition-all">



        <button onClick={closeModal} type="button" className=" m-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>


    <div className=" flex flex-col gap-1 p-2 font-sans text-base font-normal text-black">








{currencies.map((currency, index) => (
           <div key={index} role="button" className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-neutral-200  hover:bg-opacity-80  focus:bg-gray-50 focus:bg-opacity-80 focus:text-gray-900 active:bg-gray-50 active:bg-opacity-80 active:text-gray-900">
        <label htmlfor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
          <div className="grid mr-3 place-items-center">
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlfor="vertical-list-react">
                <input name="vertical-list" id="vertical-list-react" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx={8} cy={8} r={8} />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400 px-2">
            {currency.arabic}
          </p>
        </label>
      </div>



        ))}




      



      



    </div>
  </div>
</div>


</>

}