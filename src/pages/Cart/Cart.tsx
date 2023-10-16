import { useState } from "react";
import { Link } from "react-router-dom";

import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
} from "../../redux/features/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "../../redux/app/store";
import Modal from "../../components/Modal/Modal";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const [modalOn, setModalOn] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  // Increment quantity
  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  // Decrement quantity
  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  // Get cart count
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  // Get cart total
  const getCartSubTotal = () => {
    return cart
      .reduce((price, item) => price + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle checkout
  const handleCheckOut = () => {
    setModalOn(true);
    dispatch(clearCart());
  };

  return (
    <section className='h-screen bg-gray-100 pt-20'>
      <h2 className='mb-10 text-center text-3xl font-bold'>
        Your shopping cart
      </h2>

      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div
                className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'
                key={item?.id}
              >
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className='w-full sm:w-32 object-contain sm:h-24 rounded-lg'
                />
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                  <div className='mt-5 sm:mt-0'>
                    <p className='mt-1 text-xs text-gray-700'>{item?.brand}</p>
                    <h2 className='text-lg font-bold text-gray-900'>
                      {item?.title}
                    </h2>

                    <p className='text-sm'>{item?.price}€</p>
                  </div>
                  <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                    <div className='flex items-center border-gray-100'>
                      <button
                        onClick={() => handleDecrementQuantity(item?.id)}
                        className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        disabled={item?.quantity === 1}
                      >
                        -
                      </button>

                      <input
                        className='h-8 w-8 border bg-white text-center text-xs outline-none'
                        type='text'
                        readOnly
                        onChange={(e) => e.target.value}
                        value={item?.quantity}
                      />
                      <button
                        onClick={() => handleIncrementQuantity(item?.id)}
                        className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        disabled={item?.stock === item?.quantity}
                      >
                        +
                      </button>
                    </div>
                    <div
                      onClick={() => dispatch(removeFromCart(item?.id))}
                      className='center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white cursor-pointer'
                    >
                      <div className='mt-px'>Remove</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='font-medium py-1 rounded-md bg-red-100 border '>
              <div className='text-xl py-2 justify-center flex  '>
                Your cart is empty
                <Link
                  to='/products'
                  className='text-blue-500 underline hover:text-blue-600 px-2'
                >
                  Buy something
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>Subtotal</p>
            <p className='text-gray-700'>
              €{getCartSubTotal()} ({getCartCount()} items)
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700'>Shipping</p>
            <p className='text-gray-700'>{getCartCount() > 0 ? "€10" : "€0"}</p>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div>
              <p className='mb-1 text-lg font-bold'>
                €{getCartSubTotal() + 10}
              </p>
              <p className='text-sm text-gray-700'>including VAT</p>
            </div>
          </div>
          <button
            onClick={handleCheckOut}
            className={
              cart.length === 0
                ? "mt-6 w-full rounded-md bg-blue-200 py-1.5 font-medium text-blue-50 outline-none"
                : "mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 outline-none focus:outline-none hover:bg-blue-600 hover:text-blue-100"
            }
            disabled={cart.length === 0}
          >
            Check out
          </button>
        </div>

        {modalOn && <Modal setModalOn={setModalOn} />}
      </div>
    </section>
  );
};

export default Cart;
