
import Categories from './Categories'
import Sections from './Sections'
import Brands from './Brands'
import SetNave from '../components/SetNave'

export default function () {

  return <>
          <SetNave name='categories' show={true}/>

    <div dir="rtl" className="bg-gray-100 w-full  flex h-dvh">
  <div className="w-36 select-none bg-gray-200  overflow-auto">
    <div className="w-full py-3  text-sm text-black px-2 font-semibold  bg-black  text-white "> عبايات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> ملابس داخلية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">رجالي</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">ملابس أطفال</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">إلكترونيات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> سماعات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> أحذية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">هواتف ذكية</div>
    <div className="w-full py-3  text-sm text-black px-2 font-semibold   "> عبايات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold hover:border-b-2 border-gray-900"> ملابس داخلية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">رجالي</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">ملابس أطفال</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">إلكترونيات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> سماعات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> أحذية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">هواتف ذكية</div>
    <div className="w-full py-3  text-sm text-black px-2 font-semibold   "> عبايات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold hover:border-b-2 border-gray-900"> ملابس داخلية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">رجالي</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">ملابس أطفال</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">إلكترونيات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> سماعات</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold "> أحذية</div>
    <div className="w-full py-3 px-2  text-sm text-black   font-semibold ">هواتف ذكية</div>
  </div>
  <div className="w-full overflow-auto">
    <span className="block text-sm font-semibold p-2">تسوق حسب الفئة</span>
    <div className="w-full  select-none   h-fit flex justify-around flex-wrap p-1">
      <div className="px-2   my-2  bg-white rounded-lg text-center">
        <img className="w-16 h-16 inline-block object-contain" src="https://alkalej.com/cdn/shop/files/PhotoRoom_047_20230813_024400.jpg?v=1693780269&width=1000" alt="qqq" />
        <span className="text-xs py-1 text-gray-700 block font-semibold ">عبايات ملونة</span>
      </div>
      <div className="px-2 my-2  bg-white rounded-lg text-center">
        <img className="w-16 h-16 inline-block object-contain" src="https://alkalej.com/cdn/shop/files/11_2d484484-9265-462d-8bf7-039a27fdd236.jpg?v=1704819990&width=1000" alt="qqq" />
        <span className="text-gray-700 text-xs py-1 block font-semibold ">عبايات سوداء</span>
      </div>
      <div className="px-2 my-2   bg-white rounded-lg text-center">
        <img className="w-16 h-16 inline-block object-contain" src="https://img.kwcdn.com/product/open/2023-11-17/1700200320924-968d7c34c175480ca6ac8aa10a6eadec-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="qqq" />
        <span className="text-gray-700 text-xs py-1 block font-semibold ">عبايات شتوية</span>
      </div>
      <div className="px-2 min-w-24 my-2 py-1  bg-white rounded-lg text-center max-w-24">
        <img className="w-16 h-16 inline-block object-contain" src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4e4646ce546c621c38d893c8540db2f3.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="qqq" />
        <span className="text-gray-700 text-xs py-1 block font-semibold ">مخاوير </span>
      </div>
    </div>
    <div className=" my-2 w-full select-none bg-white">
      <span className="text-sm font-semibold p-2 block">البراندات</span>
      <div className="w-full  select-none   h-fit flex justify-around flex-wrap p-1 ">
        <div className="px-2   my-2    text-center">
          <img className="w-16 h-16 inline-block object-contain" src="https://alkalej.com/cdn/shop/files/PhotoRoom_047_20230813_024400.jpg?v=1693780269&width=1000" alt="qqq" />
          <span className="text-xs py-1 block font-semibold ">عبايات ملونة</span>
        </div>
        <div className="px-2 my-2   text-center">
          <img className="w-16 h-16 inline-block object-contain" src="https://alkalej.com/cdn/shop/files/11_2d484484-9265-462d-8bf7-039a27fdd236.jpg?v=1704819990&width=1000" alt="qqq" />
          <span className="text-xs py-1 block font-semibold ">عبايات سوداء</span>
        </div>
        <div className="px-2 my-2   text-center">
          <img className="w-16 h-16 inline-block object-contain" src="https://img.kwcdn.com/product/open/2023-11-17/1700200320924-968d7c34c175480ca6ac8aa10a6eadec-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="qqq" />
          <span className="text-xs py-1 block font-semibold ">عبايات شتوية</span>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
}
