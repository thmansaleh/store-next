import Link from 'next/link'

import SetNave from "../components/SetNave"
import Login from "./login/page"
import CurrencyModal from'./CurrencyModal'
import LanguageModal from './LanguageModal'
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
  <div className="w-full h-28  bg-white rounded-2xl  flex items-center justify-around">


    <Link href="./account/wishlist" className="w-24 inline-block rounded-lg text-center  py-1 hover:bg-neutral-200 ">
      <svg className="w-full h-7 fill-red-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" /></svg>
      <span className="text-sm text-black font-semibold select-none">المفضلة</span>
      <span className="block text-gray-400 text-sm select-none">10</span>
    </Link>
    <div className="w-24 rounded-lg text-center  py-1 hover:bg-neutral-200 ">
      <svg className="w-full h-7 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style={{"enable-background":"new 0 0 24 24"}} xmlSpace="preserve" width={512} height={512}>
        <g>
          <path d="M23.11,4.433H0.89C0.398,4.433,0,4.832,0,5.324v13.353c0,0.492,0.398,0.891,0.89,0.891h22.22   c0.492,0,0.89-0.399,0.89-0.891V5.324C24,4.832,23.602,4.433,23.11,4.433z M4.708,15.187l-1.313-5.085   c-0.081-0.314-0.15-0.428-0.392-0.561C2.606,9.327,1.953,9.126,1.376,9l0.04-0.185h2.804c0.357,0,0.679,0.238,0.76,0.65   l0.694,3.688L7.39,8.815h1.732l-2.67,6.372H4.708z M8.465,15.187l1.364-6.372h1.649l-1.364,6.372H8.465z M13.079,15.288   c-0.737-0.009-1.449-0.162-1.834-0.339l0.298-1.397c0.384,0.179,0.865,0.416,1.694,0.403c0.474-0.008,0.982-0.195,0.986-0.623   c0.002-0.28-0.212-0.48-0.855-0.792c-0.625-0.305-1.454-0.817-1.443-1.734c0.01-1.24,1.157-2.106,2.786-2.106   c0.634,0,1.145,0.138,1.542,0.282l-0.289,1.351c-0.738-0.339-1.389-0.316-1.626-0.284c-0.476,0.061-0.694,0.304-0.699,0.534   c-0.017,0.752,2.317,0.844,2.309,2.525C15.944,14.431,14.811,15.288,13.079,15.288z M20.252,15.187l-0.199-0.952h-2.115   l-0.343,0.952h-1.73l2.472-5.905C18.455,9,18.721,8.815,19.038,8.815h1.407l1.331,6.372H20.252z M18.412,12.929h1.367l-0.499-2.393   L18.412,12.929z" />
        </g>
      </svg>
      <span className="text-sm text-black font-semibold select-none">البطاقات</span>
      <span className="block text-gray-400 text-sm select-none">2</span>
    </div>
    <div className="w-24 rounded-lg text-center  py-1 hover:bg-neutral-200 ">
      <svg className="w-full h-7 fill-lime-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={512} height={512}><path d="M16,0h-.13a2.02,2.02,0,0,0-1.941,1.532,2,2,0,0,1-3.858,0A2.02,2.02,0,0,0,8.13,0H8A5.006,5.006,0,0,0,3,5V21a3,3,0,0,0,3,3H8.13a2.02,2.02,0,0,0,1.941-1.532,2,2,0,0,1,3.858,0A2.02,2.02,0,0,0,15.87,24H18a3,3,0,0,0,3-3V5A5.006,5.006,0,0,0,16,0Zm2,22-2.143-.063A4,4,0,0,0,8.13,22H6a1,1,0,0,1-1-1V17H7a1,1,0,0,0,0-2H5V5A3,3,0,0,1,8,2l.143.063A4.01,4.01,0,0,0,12,5a4.071,4.071,0,0,0,3.893-3H16a3,3,0,0,1,3,3V15H17a1,1,0,0,0,0,2h2v4A1,1,0,0,1,18,22Z" /><path d="M13,15H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /></svg>
      <span className="text-sm select-none text-black font-semibold">القسائم</span>
      <span className="select-none block text-gray-400 text-sm">10</span>
    </div>
  </div>



  <div className="w-full py-4 px-2 mt-4  bg-white rounded-2xl ">
  
<LanguageModal/>
<CurrencyModal/>


   
  </div>





  <div className="w-full py-4 px-2 mt-4  bg-white rounded-2xl ">


    <Link href="account/orders" className="w-full h-12 p-3 block  rounded-lg hover:bg-neutral-200 my-1">
      <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={512} height={512}><circle cx={7} cy={22} r={2} /><circle cx={17} cy={22} r={2} /><path d="M23.685,1.336a1,1,0,0,0-1.414,0L17.112,6.5,15.561,4.881a1,1,0,0,0-1.442,1.386l1.614,1.679a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553L23.685,2.75A1,1,0,0,0,23.685,1.336Z" /><path d="M21.9,9.016a1,1,0,0,0-1.162.807l-.128.709A3,3,0,0,1,17.657,13H5.418l-.94-8H11a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.113l.128-.71A1,1,0,0,0,21.9,9.016Z" /></svg>
      <span className="mx-2 text-sm text-black 700px font-semibold select-none">المشتريات</span>
    </Link>

    <div className="w-full h-12 p-3  rounded-lg hover:bg-neutral-200 my-1">
      <svg className=" h-full  inline-block w-8 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m17.5,0c-2.346,0-4.359,2.19-5.5,5.54C10.859,2.19,8.846,0,6.5,0,2.855,0,0,5.271,0,12s2.855,12,6.5,12c2.346,0,4.359-2.19,5.5-5.54,1.141,3.35,3.154,5.54,5.5,5.54,3.645,0,6.5-5.271,6.5-12S21.145,0,17.5,0ZM6.5,22c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502C2,6.106,4.372,2,6.5,2s4.5,4.106,4.5,10-2.372,10-4.5,10Zm11,0c-1.48,0-3.075-1.988-3.911-5.178.283.111.589.178.911.178,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.559,0-1.07.191-1.487.502-.004-.168-.013-.331-.013-.502,0-5.894,2.372-10,4.5-10s4.5,4.106,4.5,10-2.372,10-4.5,10Z" /></svg>
      <span className="mx-2 text-sm text-black 700px select-none font-semibold">شاهدته مؤخرا</span>
    </div>
  </div>
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


