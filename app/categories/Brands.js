export default function Brands(){
 return <div className=" my-2 w-full select-none bg-white">
  <h1 className="text-sm font-semibold p-2 block">البراندات</h1>
  <div className="w-full  select-none   h-fit flex justify-around flex-wrap p-1 ">


    {[1,1,7,1,1,].map()=>{
   return <div className="px-2   my-2    text-center">
      <img className="w-16 h-16 inline-block object-contain" src="https://alkalej.com/cdn/shop/files/PhotoRoom_047_20230813_024400.jpg?v=1693780269&width=1000" alt="qqq" />
      <span className="text-xs py-1 block font-semibold ">عبايات ملونة</span>
    </div>
}}
    



  </div>
</div>
}