import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { getCategories } from "../../redux/features/category/categorySlice";
import { FeatureCard } from "..";

interface CategoriesProps {
  limit?: number;
}
const TopCategories = ({ limit }: CategoriesProps) => {
  const { categories } = useAppSelector((state) => state.category);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <FeatureCard cards={categories} limit={limit} />;
};

export default TopCategories;
