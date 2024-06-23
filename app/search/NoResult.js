import React from 'react'

function NoResult() {
  return (
    <div className='mt-8 text-center p-3'>
        <h3 className='text-gray-400 text-lg'>لم يتم العثور على نتائج</h3>
        <h3 className='text-gray-400 text-md mt-4'>حاول استخدام كلمات بحث اخرى</h3>
    </div>
  )
}

export default NoResult