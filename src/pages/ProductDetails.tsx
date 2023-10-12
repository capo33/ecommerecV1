import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { getProductById } from "../redux/features/product/productSlice";
import { StarRatings } from "../components";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { product } = useAppSelector((state) => state.product);
  console.log(product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById(id as string));
  }, [dispatch, id]);

  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt={product?.title}
            className='lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded'
            src={product?.thumbnail}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest uppercase'>
              {product?.category} | {product?.brand}
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {product?.title}
            </h1>
            <div className='flex mb-4'>
              <span className='flex items-center'>
                <StarRatings rating={product?.rating as number} />

                <span className='text-gray-600 ml-3'>
                  {product?.rating} <span className='text-gray-400'>/</span> 5
                </span>
              </span>
            </div>
            <p className='leading-relaxed'>{product?.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <div className='flex'>
                <span className='mr-3'>Color</span>
                <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none' />
                <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none' />
                <button className='border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none' />
              </div>
              <div className='flex ml-6 items-center'>
                <span className='mr-3'>
                  {product?.stock}{" "}
                  <span className='text-gray-400'>in stock</span>
                </span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                €{product?.price}
              </span>
              <div className='flex'>
                <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded me-2'>
                  Buy it now
                </button>
                <button 
                onClick={() => dispatch(addToCart(product))}
                className='flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded'>
                  Add to cart
                </button>
                <button 
                onClick={() => dispatch(removeFromCart(product?.id))}
                className='flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded'>
                  Remove from cart
                </button>
              </div>
              <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
