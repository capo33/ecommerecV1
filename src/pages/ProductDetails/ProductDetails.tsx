import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { StarRatings } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { getProductById } from "../../redux/features/product/productSlice";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { product } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById(id as string));
  }, [dispatch, id]);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container py-24 m-auto'>
        <div className='lg:w-4/5 m-auto flex flex-wrap'>
          <img
            alt={product?.title}
            className='lg:w-1/2 w-full lg:h-auto     object-contain object-center rounded'
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
              <div className='flex  items-center'>
                <span>
                  {product?.discountPercentage}%{" "}
                  <span className='text-gray-400'>
                    {product?.discountPercentage &&
                    product.discountPercentage < 1
                      ? "discount"
                      : "discounts"}
                  </span>
                </span>
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
                {cart.length === 0 ? (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className='flex ml-auto border bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-white rounded'
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(removeFromCart(product?.id))}
                    className='flex ml-auto border text-white bg-red-500 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
