
import Category from './Category'
import Sections  from "./Sections"
//import Brands from './Brands'
import SetNave from '../components/SetNave'

export default function Categories() {

  return <>
          <SetNave name='categories' show={true}/>

     <div class="grid grid-cols-4 ">
<Sections/>
  <div class="bg-white p-2 col-span-3">
<Category/>
</div>

  
</div>
  </>
}
