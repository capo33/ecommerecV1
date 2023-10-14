import { Link } from "react-router-dom";

import { StarRatings } from "..";
import { IProduct } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { addToCart } from "../../redux/features/cart/cartSlice";

interface CardProps {
  product: IProduct;
  redirect: string;
}
const Card: React.FC<CardProps> = ({ product, redirect }) => {
  const {cart} = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <div className='m-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link to={`${redirect}${product.id}`} key={product.id}>
        <img
          className='p-8 object-contain h-64 w-auto mx-auto'
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>
      <div className=''></div>
      <div className='px-5 pb-5'>
        <p className='text-sm font-medium tracking-tight text-green-700 dark:text-white'>
          {product?.category}
        </p>
        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {product?.title}
        </h5>
        <div className='flex items-center mt-2.5 mb-5'>
          <StarRatings rating={product?.rating} />
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-lg font-bold text-gray-900 dark:text-white'>
            {product?.price}€
          </span>
        </div>
      </div>
      <button
        className='group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600'
        onClick={() => dispatch(addToCart(product))}
        disabled={cart.some((item) => item.id === product.id)}
      >
        <div className='flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-blue-600 group-hover:text-white'>
          Add
        </div>
        <div className='flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-blue-500 group-hover:text-white'>
          +
        </div>
      </button>
    </div>
  );
};

export default Card;
