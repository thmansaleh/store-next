import React from 'react'

function CashOnDelivery() {
  return (
<div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">طريقة الدفع</h2>
              
              <div className="p-4 border rounded-lg border-emerald-500 bg-emerald-50">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full ml-3 flex items-center justify-center border-2 border-emerald-500">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-gray-800">الدفع عند الاستلام</span>
                  </div>
                </div>
              </div>
            </div>  )
}

export default CashOnDelivery