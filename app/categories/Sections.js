

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
  "مناسبات",
  "othman"
];

  

return <div>
  {categories. map((e,i)=>{
return <div key={i+43}  className=" bg-gray-100  ">
    <input className="hidden categoryInput" type="radio" id={e} name="category" />
    <label className=" w-full p-2 block" htmlFor={e}>
      {e}
    </label>
  </div>

})}
</div>


}