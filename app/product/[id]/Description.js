
const Description = ({description}) => {
 
if(description) return <div className="w-1/2">
  <h2 className="text-md font-bold mb-4">الوصف</h2>
  <p className="text-gray-700 mb-4 text-sm ">{description}</p>

</div>

  
}

export default Description
