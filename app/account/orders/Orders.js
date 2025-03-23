export default function Orders(){

return <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold">Your Orders</h1>
  </header>
  <div className="flex flex-col sm:flex-row gap-4 mb-6 flex-wrap">
    <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Search orders..." className="border-none outline-none text-sm bg-transparent w-full" />
    </div>
    <select className="border border-gray-200 rounded-md px-3 py-2 bg-white text-sm cursor-pointer">
      <option value>All Orders</option>
      <option value="delivered">Delivered</option>
      <option value="processing">Processing</option>
      <option value="cancelled">Cancelled</option>
    </select>
    <select className="border border-gray-200 rounded-md px-3 py-2 bg-white text-sm cursor-pointer">
      <option value>Last 6 months</option>
      <option value="3months">Last 3 months</option>
      <option value="1month">Last month</option>
      <option value="all">All time</option>
    </select>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {/* Order 1 */}
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b border-gray-100">
        <div>
          <div className="font-semibold">Order #765432</div>
          <div className="text-gray-500 text-sm">March 15, 2025</div>
        </div>
        <div className="mt-2 sm:mt-0 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">Delivered</div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center mb-3 pb-3 border-b border-gray-100">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">Wireless Headphones</div>
              <div className="text-xs text-gray-500 mb-1">Black | Premium Edition</div>
              <div className="font-semibold">$129.99</div>
            </div>
            <div className="text-sm text-gray-500">x1</div>
          </div>
          <div className="flex items-center">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">USB-C Charging Cable</div>
              <div className="text-xs text-gray-500 mb-1">3ft | White</div>
              <div className="font-semibold">$19.99</div>
            </div>
            <div className="text-sm text-gray-500">x2</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-4 border-t border-gray-100 text-sm">
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="font-semibold mb-2">Shipping Address</div>
            <div>John Doe</div>
            <div>123 Main Street</div>
            <div>Apt 4B</div>
            <div>New York, NY 10001</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold mb-2">Order Summary</div>
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>$169.97</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping</span>
              <span>$5.99</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>$14.00</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total</span>
              <span>$189.96</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">Track Order</button>
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-indigo-700 transition-colors">Buy Again</button>
        </div>
      </div>
    </div>
    {/* Order 2 */}
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b border-gray-100">
        <div>
          <div className="font-semibold">Order #765289</div>
          <div className="text-gray-500 text-sm">March 10, 2025</div>
        </div>
        <div className="mt-2 sm:mt-0 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600">Processing</div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">Smart Watch Series 5</div>
              <div className="text-xs text-gray-500 mb-1">Silver | 44mm</div>
              <div className="font-semibold">$349.99</div>
            </div>
            <div className="text-sm text-gray-500">x1</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-4 border-t border-gray-100 text-sm">
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="font-semibold mb-2">Shipping Address</div>
            <div>John Doe</div>
            <div>123 Main Street</div>
            <div>Apt 4B</div>
            <div>New York, NY 10001</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold mb-2">Order Summary</div>
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>$349.99</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>$28.88</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total</span>
              <span>$378.87</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">Track Order</button>
          <button className="px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">Cancel Order</button>
        </div>
      </div>
    </div>
    {/* Order 3 */}
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b border-gray-100">
        <div>
          <div className="font-semibold">Order #764998</div>
          <div className="text-gray-500 text-sm">February 28, 2025</div>
        </div>
        <div className="mt-2 sm:mt-0 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">Cancelled</div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center mb-3 pb-3 border-b border-gray-100">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">Laptop Sleeve</div>
              <div className="text-xs text-gray-500 mb-1">15" | Navy Blue</div>
              <div className="font-semibold">$39.99</div>
            </div>
            <div className="text-sm text-gray-500">x1</div>
          </div>
          <div className="flex items-center">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">Wireless Mouse</div>
              <div className="text-xs text-gray-500 mb-1">Black</div>
              <div className="font-semibold">$24.99</div>
            </div>
            <div className="text-sm text-gray-500">x1</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-4 border-t border-gray-100 text-sm">
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="font-semibold mb-2">Shipping Address</div>
            <div>John Doe</div>
            <div>123 Main Street</div>
            <div>Apt 4B</div>
            <div>New York, NY 10001</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold mb-2">Order Summary</div>
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>$64.98</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>$5.36</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total</span>
              <span>$75.33</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-indigo-700 transition-colors">Buy Again</button>
        </div>
      </div>
    </div>
    {/* Order 4 */}
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b border-gray-100">
        <div>
          <div className="font-semibold">Order #764512</div>
          <div className="text-gray-500 text-sm">February 15, 2025</div>
        </div>
        <div className="mt-2 sm:mt-0 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">Delivered</div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center">
            <img src="/api/placeholder/100/100" alt="Product" className="w-14 h-14 rounded object-cover mr-3 bg-gray-100" />
            <div className="flex-1">
              <div className="font-medium">Bluetooth Speaker</div>
              <div className="text-xs text-gray-500 mb-1">Red | Waterproof</div>
              <div className="font-semibold">$89.99</div>
            </div>
            <div className="text-sm text-gray-500">x1</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-4 border-t border-gray-100 text-sm">
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="font-semibold mb-2">Shipping Address</div>
            <div>John Doe</div>
            <div>123 Main Street</div>
            <div>Apt 4B</div>
            <div>New York, NY 10001</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold mb-2">Order Summary</div>
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>$89.99</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>$7.42</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total</span>
              <span>$102.40</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">Write a Review</button>
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-indigo-700 transition-colors">Buy Again</button>
        </div>
      </div>
    </div>
  </div>
  {/* Pagination */}
  <div className="flex justify-center mt-8 gap-1">
    <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer hover:bg-gray-100">«</div>
    <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer bg-primary text-white font-medium">1</div>
    <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer hover:bg-gray-100">2</div>
    <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer hover:bg-gray-100">3</div>
    <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer hover:bg-gray-100">»</div>
  </div>
  {/* Empty state (hidden by default, show when no orders) */}
  <div className="hidden text-center p-12 bg-white rounded-lg shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
    <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
    <p className="text-gray-500 mb-6">When you place your first order, it will appear here</p>
    <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-indigo-700 transition-colors">Start Shopping</button>
  </div>
</div>
}