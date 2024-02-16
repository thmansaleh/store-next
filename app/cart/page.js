import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import Item from './item/Item'

export default function Cart(){

  return <div style={{"background-color":"#f7f7f7"}} className=" p-3">
  <div className="
my-2">
<SetNave name='cart' show={false}/>
    <div className="my-1.5 rounded-lg   border w-full flex border-gray-300 justify-between items-center bg-white p-3">
      <img className="object-contain w-24 mx-2" loading="lazy" src="https://jomla.ae/_next/image/?url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2021%2F12%2FN42661645A_1.jpg&w=256&q=75" />
      <div className>
        <h3 className="text-sm line-clamp-2">سكوتر درفت للأطفال Pedal Drift Scooter - Cool Baby</h3>
        <span className="text-md my-2 inline-block font-semibold">1230 AED</span>
        <div className="b flex justify-between items-center  ">
          <div>
            <button className="h-8 w-8 rounded-full border border text-xl leading-none text-black hover:bg-black hover:text-white">+</button>
            <input className="mx-1 h-8 w-14 appearance-none rounded-2xl border border-gray-600 text-center outline-none" type="number" max={20} min={1} defaultValue={1} /><button className="h-8 w-8 rounded-full border border text-xl leading-none text-primary hover:bg-black hover:text-white">-</button>
          </div>
          <svg className="fill-red-500  	h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div className=" my-1.5 rounded-lg  border w-full border-gray-300 flex justify-between items-center bg-white p-3">
      <img className="object-contain w-24 mx-2" loading="lazy" src="https://jomla.ae/_next/image/?url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2023%2F08%2F193.jpg&w=256&q=75" />
      <div className>
        <h3 className="text-sm line-clamp-2">العروسة اللعبة عدد 3 تصميم فتيات الحفلات لوتي Lottie Dress Up Party Multipack 3 Outfits</h3>
        <span className="text-md my-2 inline-block font-semibold">1230 AED</span>
        <div className="b flex justify-between items-center  ">
          <div>
            <button className="h-8 w-8 rounded-full border border text-xl leading-none text-black hover:bg-black hover:text-white">+</button>
            <input className="mx-1 h-8 w-14 appearance-none rounded-2xl border border-gray-600 text-center outline-none" type="number" max={20} min={1} defaultValue={1} /><button className="h-8 w-8 rounded-full border border text-xl leading-none text-primary hover:bg-black hover:text-white">-</button>
          </div>
          <svg className="fill-red-500  	h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <button className="flex  bg-white rounded-lg text-sm font-semibold text-black justify-center items-center my-3 py-2 border-dashed border-2 w-full ">
    <svg className="w-7 h-7  mx-2  fill-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M18,0H14V1a2,2,0,0,1-4,0V0H6A3,3,0,0,0,3,3V24h7V23a2,2,0,0,1,4,0v1h7V3A3,3,0,0,0,18,0ZM15.874,22a4,4,0,0,0-7.748,0H5V17H8V15H5V3A1,1,0,0,1,6,2H8.126a4,4,0,0,0,7.748,0H18a1,1,0,0,1,1,1V15H16v2h3v5Z" /><rect x={10} y={15} width={4} height={2} /></g></svg>
    إضافة كوبون خصم
  </button>
  <div className=" my-2 overflow-hidden rounded-xl border border-gray-300 bg-white px-4 py-6 md:mx-4">
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">المجموع الفرعي</span>
      <span className="font-bold text-sm">649 AED</span>
    </div>
    <div className="my-4 flex justify-between">
      <span className="text-gray-500 text-sm">رسوم الشحن</span><span className="flex items-center font-bold text-sm text-green-600">مجانا</span>
    </div><hr className="my-5 border-gray-300" />
    <div className="my-4 flex justify-between">
      <span className="text-md font-bold text-gray-500">المجموع</span><span className="text-md font-bold">669 د.أ</span>
    </div>
    <a href="#" className>
      <button className="md:w-24 w-full bg-black text-white text-md font-semibold rounded-lg py-2 my-2">
        الدفع 
      </button>
    </a>
  </div>
</div>
}
