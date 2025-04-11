"use client"
import Flip from '@/app/components/flip/Flip';
// import AddToCartButton from './AddToCartButton1';
import FreeDelivery from './FreeDelivery';
import ProductInformation from './ProductInformation';

import SimilarProducts from './SimilarProducts';

import Slider from './Slider';

import Description from './Description';


import Advantages from './Advantages';
import AddToCartButton from './AddToCartButton';
import Options from './options/Options';

 export default function Content ({product}){
  const handleAddedToCart = ({ cartId, productId, quantity }) => {
    console.log(`Added product ${productId} to cart ${cartId}`);
    // You could show a confirmation message or update a cart icon counter
  };

  return <>
<Slider images={product.images}/>

<div className='p-3'>
 <ProductInformation product={product}/>
  <Options options={product.options}/>
<Description   description={product.description}/>
<Advantages advantages={product.advantages}/>
<FreeDelivery/>
<SimilarProducts id={product.product_id}/>
<AddToCartButton          productId={product.product_id}
          onAddToCart={handleAddedToCart}
/>

</div>

</>

}