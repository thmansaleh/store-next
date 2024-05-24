

'use client'
const Description = ({id}) => {
  const {data,error,isLoading} =swrSingleProduct(id)
if(data) return <div className="md:flex md:justify-around px-2 gap-x-3 bg-white ">
<div className="">
  <h2 className="text-md font-bold mb-4">الوصف</h2>
  <p className="text-gray-700 mb-4 text-sm ">{data.description}</p>

</div>
<div>
  <h3 className="text-md font-semibold mb-2">المميزات</h3>
  <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
    <li>الاسم: GRYDY Quilted Crossbody Bag</li>
    <li>اللون: أصفر</li>
    <li>اسم البراند: Aldo</li>
    {/* Add more list items here */}
  </ul>
  <div className="pt-4 border-t">
    <p className="text-sm text-gray-500">SKU: 23GRYDY-740-YELLOW</p>
  </div>

</div>
</div>
  
}

export default Description
