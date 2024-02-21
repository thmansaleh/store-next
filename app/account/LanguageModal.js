"use client"

import {useState} from "react"
export default function LanguageModal(){
  
const [display, setDisplay] = useState(flase)
return <>


{display&&<div className="   transition-all modal-container flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bottom-0 bg-gray-100 max-h-full">
  <div id="div" className="   shadow relative rounded-lg w-3/4 bg-white transition-all">
    <button onclick="send()" type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
    <div className=" flex gap-10 mt-12 pb-6 inline-block 
      bg-red-2y00 justify-center">
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlfor="html">
          <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="html" />
          <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx={8} cy={8} r={8} />
            </svg>
          </span>
        </label>
        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlfor="html">
          العربية
        </label>
      </div>
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlfor="react">
          <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="react" defaultChecked />
          <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx={8} cy={8} r={8} />
            </svg>
          </span>
        </label>
        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlfor="react">
          English 
        </label>
      </div>
    </div> 
  </div>
</div>}

</>

}