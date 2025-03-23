export default function Addresses(){

 return <div className="max-w-7xl mx-auto">
  {/* Page Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-4 border-b border-gray-200">
    <h1 className="text-2xl font-semibold mb-4 md:mb-0">My Addresses</h1>
    <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium transition duration-300 hover:bg-primary-dark hover:-translate-y-0.5 shadow-sm">
      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1={12} y1={5} x2={12} y2={19} />
        <line x1={5} y1={12} x2={19} y2={12} />
      </svg>
      Add New Address
    </button>
  </div>
  {/* Address Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {/* Default Address Card */}
    <div className="bg-white rounded-lg p-5 shadow transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-light border border-transparent">
      <span className="inline-block bg-success text-white text-xs px-2 py-1 rounded mb-2">Default</span>
      <h3 className="text-lg font-semibold mb-2">Home</h3>
      <div className="text-gray-600 mb-4">
        <p>John Doe</p>
        <p>123 Main Street, Apt 4B</p>
        <p>New York, NY 10001</p>
        <p>United States</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-primary hover:bg-primary-light rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          <span className="ml-1">Edit</span>
        </button>
        <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-danger hover:bg-red-50 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span className="ml-1">Delete</span>
        </button>
      </div>
    </div>
    {/* Work Address Card */}
    <div className="bg-white rounded-lg p-5 shadow transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-light border border-transparent">
      <span className="inline-block bg-primary-light text-primary text-xs px-2 py-1 rounded mb-2">Work</span>
      <h3 className="text-lg font-semibold mb-2">Office</h3>
      <div className="text-gray-600 mb-4">
        <p>John Doe</p>
        <p>456 Business Ave, Floor 12</p>
        <p>New York, NY 10018</p>
        <p>United States</p>
        <p>Phone: (555) 987-6543</p>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-primary hover:bg-primary-light rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          <span className="ml-1">Edit</span>
        </button>
        <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-danger hover:bg-red-50 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span className="ml-1">Delete</span>
        </button>
      </div>
    </div>
    {/* Add New Address Card */}
    <div className="bg-white rounded-lg p-5 shadow border border-dashed border-gray-300 flex justify-center items-center cursor-pointer transition duration-300 hover:border-primary hover:shadow-md">
      <div className="text-center text-gray-500">
        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1={12} y1={5} x2={12} y2={19} />
          <line x1={5} y1={12} x2={19} y2={12} />
        </svg>
        <p className="mt-2 font-medium">Add New Address</p>
      </div>
    </div>
  </div>
  {/* Address Form */}
  <div className="bg-white rounded-lg p-6 md:p-8 shadow mb-8">
    <h2 className="text-xl font-semibold mb-6">Add New Address</h2>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="addressName" className="block mb-2 font-medium">Address Name</label>
          <input type="text" id="addressName" placeholder="Home, Work, etc." className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
        <div>
          <label htmlFor="fullName" className="block mb-2 font-medium">Full Name</label>
          <input type="text" id="fullName" placeholder="John Doe" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="streetAddress" className="block mb-2 font-medium">Street Address</label>
        <input type="text" id="streetAddress" placeholder="123 Main Street" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
      </div>
      <div className="mb-6">
        <label htmlFor="aptSuite" className="block mb-2 font-medium">Apartment, Suite, etc. (optional)</label>
        <input type="text" id="aptSuite" placeholder="Apt 4B" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="city" className="block mb-2 font-medium">City</label>
          <input type="text" id="city" placeholder="New York" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
        <div>
          <label htmlFor="state" className="block mb-2 font-medium">State/Province</label>
          <input type="text" id="state" placeholder="NY" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
        <div>
          <label htmlFor="zip" className="block mb-2 font-medium">ZIP/Postal Code</label>
          <input type="text" id="zip" placeholder={10001} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="country" className="block mb-2 font-medium">Country</label>
        <select id="country" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition">
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          {/* More countries would be added here */}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
        <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
      </div>
      <div className="mb-6">
        <div className="flex items-center">
          <input type="checkbox" id="defaultAddress" className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label htmlFor="defaultAddress" className="ml-2">Set as default address</label>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-8">
        <button type="button" className="px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary-light transition">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition">
          Save Address
        </button>
      </div>
    </form>
  </div>
</div>
}