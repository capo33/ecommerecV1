import { useEffect } from "react";

import { FeatureCard, TitleText } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import {
  getCategories,
  getCategoryByname,
} from "../../redux/features/category/categorySlice";

const Categories = () => {
  const { categories } = useAppSelector((state) => state.category);

  const dispatch = useAppDispatch();

  const isRedirect = true;

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCategoryByname("groceries"));
  }, [dispatch]);

  return (
    <div className='mb-12'>
      <TitleText text1='Categoties' text2='Browse by our top categories' />
      <FeatureCard cards={categories} isRedirect={isRedirect} />
    </div>
  );
};

export default Categories;
