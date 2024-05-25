import Link from 'next/link';
import ProductSwiper from './ProductSwiper';
 import { swrSingleProduct } from '@/app/libs/swr/singleProduct';
function Product({ id }) {
  const url = `../product/${id}`;

  const { data, error, isLoading } = swrSingleProduct(id);

 
  return (
    <Link
      key={id}
      prefetch={true}
      href={url}
      className="inline-block relative rounded-lg my-2 shadow-md overflow-hidden w-44 bg-white h-fit"
    >
      <span className="bg-red-700 text-white top-0 text-center absolute z-20 rounded-br-lg rtl:rounded-bl-lg rtl:rounded-br-none px-3 text-xs bg-blend-multiply line-height start-0 opacity-80">
        خصم 20%
      </span>
      <ProductSwiper id={id} />
      <span className="line-clamp-2 text-sm my-2 px-2">
        {data?data.description:"...loading"}
      </span>
      <div className="p-2 text-sm bg-zinc-100">
        <span>280</span>
        <span className="text-green-600 mx-px inline-block">د.أ</span>
      </div>
    </Link>
  );
}

export default Product;
