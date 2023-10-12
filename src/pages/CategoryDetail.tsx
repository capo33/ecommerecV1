import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { getCategoryByname } from "../redux/features/category/categorySlice";

const CategoryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { category } = useAppSelector((state) => state.category);
console.log(category);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryByname(name as string));
  }, [dispatch, name]);

  return (
    <div>
      <h1>{name} {}</h1>
    </div>
  );
};

export default CategoryDetail;
