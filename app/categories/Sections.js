import styles from "./styles.css"
export default function Sections(){
const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home ",
  "Beauty ",
  "Toys",
  "Sports ",
  "Wellness",
  "Automotive",
  "Grocery",
  "Furniture",
  "Jewelry",
  "Pet Supplies",
  "Tools ",
  "Office"
];
  

return <div>
  {categories. map(e=>{
return <div className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e} name="category" />
    <label className=" w-full p-2 block" htmlFor={e}>
      {e}
    </label>
  </div>

})}
</div>


}