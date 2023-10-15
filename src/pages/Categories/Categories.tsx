import { useEffect } from "react";

import { FeatureCard, TitleText } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { getCategories } from "../../redux/features/category/categorySlice";

const Categories = () => {
  const { categories } = useAppSelector((state) => state.category);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='mb-12 bg-zinc-100'>
      <TitleText text2='List of all available categories' />
      <FeatureCard cards={categories} />
    </div>
  );
};

export default Categories;
