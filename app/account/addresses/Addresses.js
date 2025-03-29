import SingleAddress from "./SingleAddress";

export default function Addresses(){
  

 return <div className="max-w-7xl mx-auto">
  {/* Page Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-4 border-b border-gray-200">
    <h1 className="text-2xl font-semibold mb-4 md:mb-0">عنوايني</h1>
    <button className="inline-flex w-fit items-center px-4 py-2 bg-gray-700 text-white rounded-lg font-medium transition duration-300 hover:bg-primary-dark hover:-translate-y-0.5 shadow-sm">
      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1={12} y1={5} x2={12} y2={19} />
        <line x1={5} y1={12} x2={19} y2={12} />
      </svg>
      اضافة عنوان جديد
    </button>
  </div>
  {/* Address Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {/* Default Address Card */}
   <SingleAddress/>
   
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
  
</div>
}