
import BackArrowBtn from '@/app/components/BackArrowBtn'
import Header from '@/app/components/header/Header'
import logo from '@/public/logo.png'
import facebook from '@/public/Facebook.png'
import google from '@/public/Google.webp'
import apple from '@/public/apple.webp'
import Image from 'next/image'
export default function Login(){
  return <>
  <BackArrowBtn/>
  <div className=" select-none bg-white w-full   p-3">
  <div className="  p-2 w-full bg-white rounded-lg mt-12  ">

<div className='flex items-center justify-center mb-4'>
<Image src={logo} className="w-36  object-contain "  alt="google"  />

</div>

    <h3 className="text-2xl font-6 text-center  font-semibold py-6 ">تسجيل دخول</h3>
    <div className=" shadow mx-1 mt-4 flex items-center overflow-hidden  rounded-3xl border text-base px-2  "><input className="flex-auto p-3 text-sm placeholder-zinc-400 outline-none" placeholder="الإيميل أو رقم الهاتف" name="email" />
      <div className="flex border  h-9 w-9 items-center justify-center rounded-full bg-white text-white border-zinc-400"><svg className="fill-zinc-400" stroke="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg></div>
    </div>
    <button className="w-full  text-base  font-medium  bg-black py-2 my-6 select-none text-white rounded-lg">دخول</button>
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-3/4 h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <span className="absolute px-3  text-gray-400 -translate-x-1/2 bg-white left-1/2  text-xs ">أو سجل من خلال</span>
    </div>
    <div className="flex w-full justify-around items-center mb-4 px-6">
      <Image src={facebook} className="w-6 h-6 object-contain"  alt="fcaebook"  />
      <Image src={google} className="w-6 h-6 object-contain"  alt="google"  />
      <Image src={apple} className="w-6 h-6 object-contain"  alt="apple"  />
      {/* <img className="w-6 h-6" src="fingerprint.png" alt /> */}
    </div>
  </div>
</div>
</>

}
