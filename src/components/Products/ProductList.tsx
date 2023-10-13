import { useLocation } from "react-router-dom";

import { Card } from "..";
import { IProduct } from "../../interfaces";

type ProductsProp = {
  products: IProduct[] | undefined;
  isLoading: boolean;
};

const ProductList = ({ products, isLoading }: ProductsProp) => {
  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "/products/";

  return (
    <section className='text-gray-600 body-font'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-3xl'>Loading...</h1>
        </div>
      ) : null}
      <section className='bg-white py-12 text-gray-700 sm:py-16 lg:py-20'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className='mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 lg:mt-16'>
            {products &&
              products.map((product) => (
                <Card key={product.id} product={product} redirect={redirect} />
              ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductList;
