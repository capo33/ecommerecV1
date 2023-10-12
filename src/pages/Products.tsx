import { useEffect } from "react";

import { ProductList, Categories, TitleText } from "../components";
import { useAppSelector, useAppDispatch } from "../redux/app/store";
import { getAllProducts } from "../redux/features/product/productSlice";

const Products = () => {
  const { allProducts, isLoading } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <Categories />
      <TitleText text1='product' text2='All products' />
      <ProductList products={allProducts} isLoading={isLoading} />
    </div>
  );
};

export default Products;
