import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { getlimitProducts } from "../redux/features/product/productSlice";
import {
  Hero,
  ProductList,
  StarCard,
  Footer,
  Categories,
  TitleText,
} from "../components";

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

      <TitleText text1='Categoties' text2='Browse by our top categories' />
      <Categories limit={4} />

      <TitleText text1='Products' text2='Most Popular Products' />
      <ProductList products={limitedproducts} isLoading={isLoading} />

      <StarCard />

      <Footer />
    </>
  );
};

export default Home;
