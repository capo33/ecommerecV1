import { useEffect } from "react";

import { FeatureCard, Hero, Products, StarCard, Footer } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { getProducts } from "../redux/features/productSlice";

const Home = () => {
  const { isLoading, products } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
          Products
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
          Most Popular Products
        </h1>
      </div>

      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-3xl'>Loading...</h1>
        </div>
      ) : (
        <Products products={products} />
      )}
      {/* <Products />
      <FeatureCard />
      <StarCard />
      <Footer /> */}
    </>
  );
};

export default Home;
