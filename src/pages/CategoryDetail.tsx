import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { name } = useParams<{ name: string }>();

  return <div>
    <h1>
      {name}
    </h1>
  </div>;
};

export default CategoryDetail;
