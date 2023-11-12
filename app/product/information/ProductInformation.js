
export default function ProductInformation(){
  return <div className="bg-white p-4 shadow rounded-lg">
  <div className="text-lg font-bold text-gray-800">NINE WEST</div>
  <div className="text-sm text-gray-500">FANTASY EMBELLISHED POINTED TOE PUMPS</div>
  <div className="flex items-baseline mt-2">
    <div className="text-xl font-bold text-red-600">AED 149</div>
    <div className="text-sm text-gray-500 line-through ml-2">AED 449</div>
    <div className="text-sm font-semibold text-red-500 ml-2">On Sale -67% Off</div>
  </div>
  <div className="text-sm text-gray-500 mt-1">Delivery by <span className="text-green-400">16 Nov, Thursday</span></div>
  <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline">
    Select Area
  </button>
</div>
}
