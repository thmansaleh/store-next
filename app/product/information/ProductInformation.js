
export default function ProductInformation({product}){
  return <div className="bg-white py-4 ">
  <div className="text-lg font-bold text-gray-800">NINE WEST</div>
  <div className="text-sm text-gray-500">{product.title}</div>
  <div className="flex items-baseline mt-2">
    <div className="text-xl font-bold text-red-600">149 د.إ</div>
    <div className="text-sm text-gray-500 line-through ml-2">{product.price} د.إ</div>
    <div className="text-sm font-semibold text-red-500 ml-2">تخفيض -60% عند الشراء </div>
  </div>
  <div className="text-sm text-gray-500 mt-1">توصيل في  <span className="text-green-400">16 نوفمبر, الثلاثاء</span></div>

</div>
}
