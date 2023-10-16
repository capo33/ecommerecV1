import { useLocation } from "react-router-dom";

import { Card } from "..";
import { IProduct } from "../../interfaces";

type ProductsProp = {
  products: IProduct[] | undefined;
  isLoading: boolean;
  limit?: number;
};

const ProductList = ({ products, isLoading, limit }: ProductsProp) => {
  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "/products/";

  return (
    <section className='text-gray-600 body-font bg-zinc-100'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-3xl'>Loading...</h1>
        </div>
      ) : null}
      <div className='m-auto container px-2 pb-10'>
        <div className='mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:mt-16'>
          {products &&
            products
              ?.map((product) => (
                <Card key={product.id} product={product} redirect={redirect} />
              ))
              .slice(0, limit)}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
