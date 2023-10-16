import { useEffect, useState } from "react";

import { Pagination, ProductList, TitleText } from "../../components";
import { useAppSelector, useAppDispatch } from "../../redux/app/store";
import { getAllProducts } from "../../redux/features/product/productSlice";

const Products = () => {
  const { allProducts, isLoading } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const filteredProduct = allProducts.slice(
    (page! - 1) * 10,
    (page! - 1) * 10 + 10
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <TitleText text2='List of all available products' />
      <ProductList products={filteredProduct} isLoading={isLoading} limit={6} />
      <Pagination page={page} setPage={setPage} products={allProducts} />
    </>
  );
};

export default Products;
