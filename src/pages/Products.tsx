import { useEffect } from "react";
import { ProductList } from "../components";
import Categories from "../components/Categories/Categories";
import { useAppSelector, useAppDispatch } from "../redux/app/store";
import { getAllProducts } from "../redux/features/product/productSlice";

const Products = () => {
  const { allProducts, limitedproducts, isLoading } = useAppSelector(
    (state) => state.product
  );
  console.log('allProducts', allProducts);
  

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <Categories />
      <ProductList products={allProducts} isLoading={isLoading} />
    </div>
  );
};

export default Products;
