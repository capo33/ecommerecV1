import { useEffect, useState } from "react";

import { Card, Pagination, TitleText } from "../../components";
import { useAppSelector, useAppDispatch } from "../../redux/app/store";
import { getAllProducts } from "../../redux/features/product/productSlice";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { allProducts, isLoading } = useAppSelector((state) => state.product);

  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "/products/";
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  //   return (
  //     <div>
  //       <ProductList products={allProducts} isLoading={isLoading} />
  //       <Pagination />
  //     </div>
  //   );
  // };

  return (
    <section className='text-gray-600 body-font bg-zinc-100'>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-3xl'>Loading...</h1>
        </div>
      ) : null}
      <div className='m-auto container px-2 pb-10'>
        <TitleText text2='List of all available products' />
        <div className='mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:mt-16'>
          {allProducts &&
            allProducts
              ?.slice((page - 1) * 10, (page - 1) * 10 + 10) // from 0 to 10 and display 10 items

              .map((product) => (
                <Card key={product.id} product={product} redirect={redirect} />
              ))
              .slice(0, 8)}
        </div>
        <Pagination page={page} setPage={setPage} products={allProducts} />
      </div>
    </section>
  );
};

export default Products;
