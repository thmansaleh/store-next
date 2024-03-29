
import Link from "next/link"
export default function EmptyCart(){

return <div className=" mt-24 flex items-center justify-center flex-col gap-7">
  <img className="w-36 h-36" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" alt />
  <h2 className="text-md text-gray-500">السلة فارغة</h2>
  <Link className="py-2 text-center w-36 inline-block font-semibold font bg-black text-white text-sm" href="./cart">تسوق</Link>
</div>

}