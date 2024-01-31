export default function Size(){
  return <div className="p-2 bg-grbay-200">
  <div className="flex py-1 
  text-sm justify-between items-center bg-white">
    <div>Size</div>
    <div className="p-2 bg-zinc-100 rounded-full text-gray-600">Size guide</div>
  </div>
  <div className="text-sm my-2 flex w-full overflow-auto bg-white py-1  ">
    <div className="text-sm  text-gray-600 mx-2 px-6 py-2 bg-zinc-100 rounded-full hover:border-black hover:border hover:text-black">S</div>
    <div className="hover:text-black hover:border-black hover:border  text-sm mx-2 px-6 py-2 bg-zinc-100 rounded-full text-gray-600">M</div>
    <div className=" hover:text-black hover:border-black hover:border text-sm  mx-2 px-6 py-2 bg-zinc-100 rounded-full text-gray-600">L</div>
    <div className=" hover:text-black text-sm hover:border-black hover:border  mx-2 px-6 py-2 bg-zinc-100 rounded-full text-gray-600">XL</div>
    <div className="hover:text-black hover:border-black hover:border text-sm mx-2 px-6 py-2 bg-zinc-100 rounded-full text-gray-600">XXL</div>
  </div>
</div>

}