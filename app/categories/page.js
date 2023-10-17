

import './style.css'
import Category from './Category'
import SetNav from '../components/SetNav'
export default function Categories(){

  return <div className="categories" >
        <SetNave name='categories' show={true}/>
      <Category 
      name="عبايات ملونة"
      img="https://kitchen.sayidaty.net/uploads/small/f5/f5275c258d4c03b1fc8b1ab888ec642a_w240_h240.jpg"
  
    />
        </div>
}
