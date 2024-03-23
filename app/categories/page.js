
import Category from './Category'

//import Brands from './Brands'
import SetNave from '../components/SetNave'

export default function Categories() {

  return <>
          <SetNave name='categories' show={true}/>

     <div class="grid grid-cols-4 ">

  <div class="bg-gray-100 p-2 col-span-3">
<Category/>
</div>

  
</div>
  </>
}
