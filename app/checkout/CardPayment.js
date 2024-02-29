export default function CardPayment() {

return   <div className>
    <div className="inline-flex w-full  py-2 items-center">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlfor="custom-style1">
        <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 
  before:left-2/4 
  before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" id="custom-style1" />
        <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full scale-105">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlfor="custom-style1">
        <div className="flex  items-center">
          <svg className="fill-black w-8 h-8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style={{"enable-background":"new 0 0 24 24"}} xmlSpace="preserve" width={512} height={512}>
            <path d="M9.113,8.261l-3.142,7.497H3.921L2.376,9.775c-0.095-0.369-0.176-0.503-0.462-0.66C1.447,8.863,0.678,8.626,0,8.478  l0.047-0.218h3.299c0.421,0,0.799,0.281,0.894,0.764l0.817,4.339l2.018-5.103H9.113z M17.144,13.309  c0.009-1.977-2.736-2.085-2.716-2.97c0.005-0.27,0.261-0.556,0.822-0.628c0.278-0.037,1.044-0.064,1.913,0.334l0.34-1.589  c-0.467-0.17-1.068-0.332-1.814-0.332c-1.917,0-3.266,1.019-3.277,2.478c-0.013,1.079,0.963,1.681,1.698,2.04  c0.755,0.368,1.008,0.602,1.005,0.932c-0.005,0.503-0.603,0.723-1.16,0.733c-0.975,0.015-1.541-0.264-1.993-0.474l-0.351,1.644  c0.452,0.208,1.29,0.388,2.157,0.399C15.805,15.876,17.138,14.867,17.144,13.309 M22.206,15.757H24l-1.565-7.497h-1.656  c-0.372,0-0.686,0.217-0.826,0.55l-2.908,6.947h2.036l0.404-1.12h2.488L22.206,15.757z M20.042,13.101l1.021-2.815l0.587,2.815  H20.042z M11.884,8.261l-1.605,7.497H8.34l1.605-7.497H11.884z" />
          </svg>
          <span className=" text-black px-2 text-sm font-semibold ">الدفع بالبطاقة</span>
        </div>
      </label>
    </div>
  </div>
}