
import styles from './page.module.css'
import Product from './components/product/Product'
import SetNave from './components/SetNave'
import Footer from './components/footer/Footer'

export default function Home() {

  return <>

  <SetNave name='/' show={true}/>
  <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>

  <Product/>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
  <Product/>

  </div>
  <Footer/>
  </>
}
