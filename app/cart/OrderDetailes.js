export default function (){
return <div className="px-4 py-2 font-sans bg-gray-50 fixed bottom-0 left-0 w-full mb-24">
  <div className="text-md font-semibold">ORDER DETAILS</div>
  <div className="flex justify-between  py-2">
    <span>Subtotal</span>
    <span className="font-semibold">AED 1415</span>
  </div>
  <div className="flex justify-between border-b py-2">
    <span>Shipping fee</span>
    <span className="ml-2 text-green-600 font-semibold">FREE</span>
  </div>
  <div className="flex justify-between pt-2">
    <span className="font-semibold">Total Amount</span>
    <span className="font-semibold">AED 1415</span>
  </div>
  <button className="bg-black rounded-lg w-full text-white py-2 my-2">Checkout</button>
</div>
}