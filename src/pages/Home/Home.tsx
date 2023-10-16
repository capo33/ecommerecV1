import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { getlimitProducts } from "../../redux/features/product/productSlice";
import {
  Hero,
  ProductList,
  Footer,
  TopCategories,
  TitleText,
} from "../../components";

const Home = () => {
  const { isLoading, limitedproducts } = useAppSelector(
    (state) => state.product
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getlimitProducts());
  }, [dispatch]);

  return (
    <div className='bg-zinc-100'>
      <Hero />

      <TitleText text2='Browse by our top categories' />
      <TopCategories limit={4} />

      <TitleText text2='Browse by our top products' />
      <ProductList products={limitedproducts} isLoading={isLoading} />

      <Footer />
    </div>
  );
};

export default Home;
