
import Brands from './Brands'
import Category from './Category'
import Sections  from "./Sections"
import Header from "@/app/components/header/Header"
import CategoriesItems from "./Categories"

export default function Categories() {


return <>
  <Header/>
 <CategoriesItems/>
</>
  return <>
          <Header/>

     <div >
<Sections/>
  <div className="bg-white p-2 space-y-4 col-span-3">
<Category/>
<Brands/>
</div>

  
</div>
  </>
}
