import { UpdateModalBtn } from "./UpdateModal"

function SingleAddress() {
  return (
    <div className="bg-white rounded-lg p-5 shadow transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-light border border-transparent">
    <span className="inline-block bg-success text-white text-xs px-2 py-1 rounded mb-2">Default</span>
    <h3 className="text-lg font-semibold mb-2">المنزل</h3>
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
        <span className="ml-1">تعديل</span>
      </button>
      {/* <UpdateModalBtn/> */}
      <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-danger hover:bg-red-50 rounded">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        <span className="ml-1">حذف</span>
      </button>
    </div>
  </div>  )
}

export default SingleAddress