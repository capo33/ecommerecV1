import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { getCategoryByname } from "../../redux/features/category/categorySlice";
import { ProductList, TitleText } from "../../components";

const CategoryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { category, isLoading } = useAppSelector((state) => state.category);
  console.log(category);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryByname(name as string));
  }, [dispatch, name]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <TitleText text2={name as string} />
      <ProductList products={category?.products} isLoading={isLoading} />
    </div>
  );
};

export default CategoryDetail;
