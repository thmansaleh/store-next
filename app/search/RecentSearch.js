import React from 'react'

function RecentSearch() {
  return (
    <div className="w-full p-3">
    <h3 className="text-sm font-semibold mb-3 ">قمت بالبحث مؤخرا</h3>   
       <div className="w-full text-sm py-3   border-b border-gray-200">اكسسوارات</div>
      <div className="w-full text-sm py-3   border-b border-gray-200">هواتف</div>
      <div className="w-full text-sm py-3   border-b border-gray-200">مخاوير</div>
      <div className="w-full text-sm py-3   border-b border-gray-200">ساعات</div>
      <div className="w-full text-sm py-3   border-b border-gray-200">مكسرات</div>
      <div className="w-full text-sm py-3   border-b border-gray-200">سراويل</div>
    </div>
  )
}

export default RecentSearch