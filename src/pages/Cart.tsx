import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/app/store";
import { removeFromCart } from "../redux/features/cart/cartSlice";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <>
      {cart.length === 0 && (
        <div className='flex justify-center items-center'>
          <div className='mt-4 m-1 font-medium py-1 px-2 rounded-md text-yellow-700 bg-yellow-100 border border-yellow-300 '>
            <div className='text-xl font-normal py-2'>
              Your cart is empty 😔
            </div>
          </div>
        </div>
      )}
      {cart &&
        cart.length > 0 &&
        cart.map((item) => (
          <div className='h-screen bg-gray-100 pt-20'>
            <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
            <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
              <div className='rounded-lg md:w-2/3'>
                <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
                  <img
                    src={item?.thumbnail}
                    alt={item.title}
                    className='w-full sm:w-32 object-contain sm:h-24 rounded-lg'
                  />
                  <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                    <div className='mt-5 sm:mt-0'>
                      <p className='mt-1 text-xs text-gray-700'>
                        {item?.brand}
                      </p>
                      <h2 className='text-lg font-bold text-gray-900'>
                        {item?.title}
                      </h2>

                      <p className='text-sm'>{item?.price}€</p>
                    </div>
                    <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                      <div className='flex items-center border-gray-100'>
                        <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                          -
                        </span>
                        <input
                          className='h-8 w-8 border bg-white text-center text-xs outline-none'
                          type='text'
                          defaultValue={2}
                          min={1}
                        />
                        <span className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                          +
                        </span>
                      </div>
                      <div
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className='center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white cursor-pointer'
                      >
                        <div className='mt-px'>Remove</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sub total */}
              <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
                <div className='mb-2 flex justify-between'>
                  <p className='text-gray-700'>Subtotal</p>
                  <p className='text-gray-700'>$129.99</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-700'>Shipping</p>
                  <p className='text-gray-700'>$4.99</p>
                </div>
                <hr className='my-4' />
                <div className='flex justify-between'>
                  <p className='text-lg font-bold'>Total</p>
                  <div>
                    <p className='mb-1 text-lg font-bold'>$134.98 USD</p>
                    <p className='text-sm text-gray-700'>including VAT</p>
                  </div>
                </div>
                <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
                  Check out
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cart;
