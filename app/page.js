
import styles from './page.module.css'
import Product from './components/product/Product'
import SetNave from './components/SetNave'

export default function Home() {

  return <>
 
  <SetNave name='/' show={true}/>
  <Product/>

  </>
}
