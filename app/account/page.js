import Link from 'next/link'

import SetNave from "../components/SetNave"
import Login from "./login/page"
import CurrencyModal from'./CurrencyModal'
import LanguageModal from './LanguageModal'
import FirstSecton from "./FirstSecton"
import Section from './Section'
 export default function page() {

 return (
    <>
    <SetNave name='account' display={true}/>
 
<div className="bg-gray-100 p-3 h-f  dark:bg-gray-700">
  <div className="w-full   py-3 flex items-center mb-3 mt-1 justify-between ">
    <svg className="w-10 h-10 rounded-full mx-2 fill-black-700 bg-white p-2 hover:bg-neutral-200" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm1.75,14.22c-.568-.146-1.157-.22-1.75-.22-3.86,0-7,3.14-7,7,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9,.762,0,1.519,.095,2.25,.284,.535,.138,.856,.683,.719,1.218-.137,.535-.68,.856-1.218,.719Zm12.371-4.341c-1.134-1.134-3.11-1.134-4.243,0l-6.707,6.707c-.755,.755-1.172,1.76-1.172,2.829v1.586c0,.552,.448,1,1,1h1.586c1.069,0,2.073-.417,2.828-1.172l6.707-6.707c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-6.708,6.707c-.377,.378-.879,.586-1.414,.586h-.586v-.586c0-.534,.208-1.036,.586-1.414l6.708-6.707c.377-.378,1.036-.378,1.414,0,.189,.188,.293,439,.293,.707s-.104,.518-.293,.707Z" /></svg>
    <div className="  flex items-center ">
      <svg className="w-10 h-10 p-2 rounded-full hover:bg-neutral-200 fill-back-500 bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={512} height={512}><g id="_01_align_center" data-name="01 align center"><path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" /></g></svg>
      <svg className="w-11 h-10 p-2 rounded-full bg-white fill-black-700 mx-4 hover:bg-neutral-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={512} height={512}><g id="_01_align_center" data-name="01 align center"><path d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" /></g></svg>
    </div>
  </div>









<FirstSecton/>
















  <div className="w-full py-4 px-2 mt-4  bg-white rounded-2xl ">
  
<LanguageModal/>
<CurrencyModal/>


   
  </div>



<Section/>

 
  <div className="w-full py-4 px-2 mt-4  bg-white rounded-2xl ">
    <div className="w-full h-12 p-3  rounded-lg hover:bg-neutral-200 my-1">
      <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m21,21.5v2.5h-2v-2.5c0-1.379-1.121-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5v2.5h-2v-2.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5ZM12.824,6.095c1.255.289,2.278,1.304,2.575,2.557.201.847.091,1.659-.238,2.348h1.306c.501,0,.939-.368.997-.866.068-.587.043-1.202-.091-1.831-.444-2.079-2.131-3.756-4.213-4.184-3.537-.727-6.659,1.97-6.659,5.381,0,1.469.579,2.805,1.52,3.792.04-.848.346-1.627.836-2.256-.228-.464-.356-.986-.356-1.537,0-2.199,2.038-3.931,4.324-3.405Zm-5.953-2.067c1.529-1.433,3.531-2.141,5.63-2.011,3.924.254,6.999,3.669,6.999,7.774,0,1.77-1.439,3.209-3.209,3.209h-2.397c-.243-.831-1.01-1.439-1.92-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.539,0,1.029-.214,1.388-.561h2.928c2.872,0,5.209-2.337,5.209-5.209C21.5,4.634,17.604.342,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.787,1.675-2.861,3.996-2.99,6.432h2.003c.123-1.903.948-3.654,2.355-4.973Z" />
      </svg>
      <span className="mx-2 text-sm text-black 700px font-semibold select-none">خدمة العملاء</span>
    </div>
  </div>
  <button className="w-full rounded-lg bg-white text-sm text-red-700 font-semibold py-3 my-4 hover:bg-red-500 hover:text-white">تسجيل الخروج</button>
</div>
    </>
 )
}


