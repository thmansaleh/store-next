export default function page(){
return <main className="py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <button className="text-primary font-medium">Mark all as read</button>
    </div>
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
      <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">All</button>
      <button className="px-4 py-2 bg-white text-text-secondary border border-border-color rounded-full text-sm font-medium hover:bg-gray-100 transition">Orders</button>
      <button className="px-4 py-2 bg-white text-text-secondary border border-border-color rounded-full text-sm font-medium hover:bg-gray-100 transition">Shipping</button>
      <button className="px-4 py-2 bg-white text-text-secondary border border-border-color rounded-full text-sm font-medium hover:bg-gray-100 transition">Promotions</button>
      <button className="px-4 py-2 bg-white text-text-secondary border border-border-color rounded-full text-sm font-medium hover:bg-gray-100 transition">Payment</button>
    </div>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-blue-50 border-b border-border-color hover:bg-blue-100 transition">
        <div className="flex gap-4 p-4 sm:p-6">
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center flex-shrink-0">
            <span className="material-icons">shopping_bag</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-text-primary">Order Confirmed</div>
              <div className="text-text-light text-xs">2 hours ago</div>
            </div>
            <div className="text-text-secondary mb-2 leading-relaxed">
              Your order #12345 has been confirmed and is being processed. Expected delivery: March 27, 2025.
            </div>
            <div className="flex gap-4 sm:flex-row">
              <button className="text-primary text-sm font-medium hover:underline">View Order</button>
              <button className="text-primary text-sm font-medium hover:underline">Track Package</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border-b border-border-color hover:bg-blue-100 transition">
        <div className="flex gap-4 p-4 sm:p-6">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="material-icons">local_offer</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-text-primary">Special Offer</div>
              <div className="text-text-light text-xs">5 hours ago</div>
            </div>
            <div className="text-text-secondary mb-2 leading-relaxed">
              Limited time offer: Get 20% off on all electronics until March 31, 2025. Use code: SPRING20 at checkout.
            </div>
            <div className="flex gap-4 sm:flex-row">
              <button className="text-primary text-sm font-medium hover:underline">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border-b border-border-color hover:bg-blue-100 transition">
        <div className="flex gap-4 p-4 sm:p-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
            <span className="material-icons">local_shipping</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-text-primary">Order Shipped</div>
              <div className="text-text-light text-xs">Yesterday</div>
            </div>
            <div className="text-text-secondary mb-2 leading-relaxed">
              Your order #12008 has been shipped and is on its way to you. Expected delivery: March 26, 2025.
            </div>
            <div className="flex gap-4 sm:flex-row">
              <button className="text-primary text-sm font-medium hover:underline">Track Package</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-border-color hover:bg-gray-50 transition">
        <div className="flex gap-4 p-4 sm:p-6">
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
            <span className="material-icons">payment</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-text-primary">Payment Successful</div>
              <div className="text-text-light text-xs">2 days ago</div>
            </div>
            <div className="text-text-secondary mb-2 leading-relaxed">
              Your payment of $149.99 for order #12008 was successful. Thank you for shopping with us!
            </div>
            <div className="flex gap-4 sm:flex-row">
              <button className="text-primary text-sm font-medium hover:underline">View Receipt</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-border-color hover:bg-gray-50 transition">
        <div className="flex gap-4 p-4 sm:p-6">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-red-500 flex items-center justify-center flex-shrink-0">
            <span className="material-icons">favorite</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-text-primary">Item Back in Stock</div>
              <div className="text-text-light text-xs">3 days ago</div>
            </div>
            <div className="text-text-secondary mb-2 leading-relaxed">
              Good news! The "Wireless Noise Cancelling Headphones" you've been watching is now back in stock.
            </div>
            <div className="flex gap-4 sm:flex-row">
              <button className="text-primary text-sm font-medium hover:underline">View Product</button>
              <button className="text-primary text-sm font-medium hover:underline">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      {/* You can uncomment this to show an empty state
          <div class="py-12 px-6 text-center">
              <div class="text-text-light text-4xl mb-4">
                  <span class="material-icons text-4xl">notifications_off</span>
              </div>
              <div class="text-lg font-semibold mb-2">No notifications yet</div>
              <div class="text-text-secondary mb-6">We'll notify you when there are updates on your orders, promotions, or account activity.</div>
              <button class="px-5 py-2.5 bg-primary text-white rounded font-medium hover:bg-primary/90 transition">Continue Shopping</button>
          </div>
          */}
    </div>
    <div className="flex justify-center mt-6 gap-2">
      <button className="w-9 h-9 rounded border border-border-color bg-white text-text-secondary flex items-center justify-center hover:bg-gray-100 transition">
        <span className="material-icons text-sm">chevron_left</span>
      </button>
      <button className="w-9 h-9 rounded border border-primary bg-primary text-white flex items-center justify-center">
        1
      </button>
      <button className="w-9 h-9 rounded border border-border-color bg-white text-text-secondary flex items-center justify-center hover:bg-gray-100 transition">
        2
      </button>
      <button className="w-9 h-9 rounded border border-border-color bg-white text-text-secondary flex items-center justify-center hover:bg-gray-100 transition">
        3
      </button>
      <button className="w-9 h-9 rounded border border-border-color bg-white text-text-secondary flex items-center justify-center hover:bg-gray-100 transition">
        <span className="material-icons text-sm">chevron_right</span>
      </button>
    </div>
  </div>
</main>
}