import styles from "./styles.css"
export default function Sections(){
const categories = [
  "رجال",
  "نساء",
  "أطفال",
  "داخلية",
  "رياضية",
  "عربية",
  "فساتين",
  "جينز",
  "قمصان",
  "تنانير",
  "شتاء",
  "صيف",
  "موحدة",
  "إكسسوارات",
  "مناسبات"
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