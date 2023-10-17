import SetNave from '../components/SetNave'
import Item from './Item'
import './style.css'

export default function Cart(){

  return <div className='cart'>
    <SetNave name='cart' show={true}/>
   <Item/>
   </div>
}
