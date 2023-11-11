import SetNave from '../components/SetNave'
import Item from './item/Item'
import EmptyCart from './item/empty-cart/EmptyCart'

export default function Cart(){

  return <div className='cart'>
    <SetNave name='cart' show={true}/>
   {/* <Item/> */}
   <EmptyCart/>
   </div>
}
