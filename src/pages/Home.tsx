import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { getlimitProducts } from "../redux/features/product/productSlice";
import { Hero, ProductList, StarCard, Footer, Categories } from "../components";

const Home = () => {
  const { isLoading, limitedproducts } = useAppSelector(
    (state) => state.product
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getlimitProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Categories limit={4} />
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
          Products
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
          Most Popular Products
        </h1>
      </div>
      <ProductList products={limitedproducts} isLoading={isLoading} />
      <StarCard />
      <Footer />
    </>
  );
};

export default Home;
