"use client"

import {useState, useRef} from "react"
export default function LanguageModal(){
const inputRef = useRef();

const OpenModal = () => {
    inputRef.current.style.display='flex'
  };

const closeModal = () => {
    inputRef.current.style.display='none'
  };


return <>

    <div onClick={OpenModal} className="w-full h-12 p-3  rounded-lg hover:bg-neutral-200">
      <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m7.508,9.196c-.107-.464-.403-.886-.842-1.07-.206-.086-.413-.126-.613-.126-.689,0-1.287.475-1.443,1.147l-1.475,6.252c-.072.307.16.601.476.601.226,0,.422-.155.475-.375l.389-1.625h3.115l.374,1.621c.051.222.249.379.476.379h.012c.314,0,.546-.292.476-.598l-1.422-6.206Zm-2.793,3.804l.869-3.627c.051-.219.244-.373.469-.373.073,0,.149.016.226.049.111.046.213.197.253.371l.827,3.58h-2.645Zm14.805-9H4.52C2.038,4,.02,6.019.02,8.5v7c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5ZM1.02,15.5v-7c0-1.93,1.57-3.5,3.5-3.5h7v14h-7c-1.93,0-3.5-1.57-3.5-3.5Zm22,0c0,1.93-1.57,3.5-3.5,3.5h-7V5h7c1.93,0,3.5,1.57,3.5,3.5v7Zm-1-6.009v.018c0,.271-.22.491-.491.491h-.546c-.107.917-.517,2.904-2.085,4.341.701.354,1.574.595,2.658.648.26.013.464.229.464.49v.018c0,.281-.235.505-.516.491-1.469-.071-2.605-.448-3.484-.986-.879.538-2.015.915-3.484.986-.28.014-.516-.21-.516-.491v-.018c0-.26.204-.477.464-.49,1.085-.054,1.957-.295,2.659-.648-.54-.495-.943-1.055-1.243-1.614-.176-.329.059-.727.432-.727.181,0,.345.1.432.259.291.534.695,1.066,1.257,1.519,1.474-1.185,1.862-2.925,1.964-3.777h-5.473c-.271,0-.491-.22-.491-.491v-.018c0-.271.22-.491.491-.491h3.009v-.509c0-.271.22-.491.491-.491h.018c.271,0,.491.22.491.491v.509h3.009c.271,0,.491.22.491.491Z" /></svg>
      <span className="mx-2 text-sm text-black select-none font-semibold">اللغة</span>
    </div>







<div  ref={inputRef} className="hidden bg-opacity-75 bg-gray-200 transition-all modal-container flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bottom-0  max-h-full">
  <div id="div" className=" z-50 opacity-100  shadow relative rounded-lg w-3/4 bg-white transition-all">
    <button onClick={closeModal} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
    <div className=" flex gap-10 mt-12 pb-6 inline-block 
       justify-center">
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlfor="html">
          <input defaultChecked name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-2000 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-5000 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="html" />
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
          <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-2000 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-5000 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"  />
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
</div>

</>

}