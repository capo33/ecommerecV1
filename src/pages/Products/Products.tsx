import { useEffect } from "react";

import { ProductList, TitleText } from "../../components";
import { useAppSelector, useAppDispatch } from "../../redux/app/store";
import { getAllProducts } from "../../redux/features/product/productSlice";

const Products = () => {
  const { allProducts, isLoading } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <TitleText text2='List of all available products' />
      <ProductList products={allProducts} isLoading={isLoading} />
    </div>
  );
};

export default Products;
