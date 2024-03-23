export default function Sections(){
const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Toys & Games",
  "Sports & Outdoors",
  "Health & Wellness",
  "Automotive",
  "Grocery",
  "Furniture",
  "Jewelry",
  "Pet Supplies",
  "Tools & Home Improvement",
  "Office Supplies"
];
  

return <div>
  {categories. map(e=>{
return <div className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e} name="category" />
    <label className="bg-red-200 w-full p-2 block" htmlFor={e}>
      {e}
    </label>
  </div>

})}
</div>


}