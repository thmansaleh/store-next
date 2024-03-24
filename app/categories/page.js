
import Category from './Category'
import Sections  from "./Sections"
//import Brands from './Brands'
import SetNave from '@/app/components/SetNave'
import BottomSheett from "./BottomSheet"

export default function Categories() {

  return <>
          <SetNave name='categories' display={false}/>

     <div class="grid grid-cols-4 ">
<Sections/>
  <div class="bg-white p-2 col-span-3">
<Category/>
</div>

  
</div>
<BottomSheett/>
  </>
}
