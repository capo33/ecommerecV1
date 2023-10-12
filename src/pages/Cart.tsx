import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/app/store";
const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);

  console.log("cart", cart);

  return (
    // <div className='container mx-auto mt-10'>
    //   <div className='flex shadow-md my-10'>
    //     <div className='w-3/4 bg-white px-10 py-10'>
    //       <div className='flex justify-between border-b pb-8'>
    //         <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
    //         <h1 className='font-semibold text-2xl'>
    //           {cart.length} {cart.length > 1 ? "items" : "item"}
    //         </h1>
    //       </div>

    //       {cart &&
    //         cart.length > 0 &&
    //         cart.map((item) => (
    //           // <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
    //           //   <img
    //           //     src={item?.thumbnail}
    //           //     alt={item.title}
    //           //     className='w-full  rounded-lg sm:w-1/4 sm:object-contain sm:h-48'
    //           //   />
    //           //   <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
    //           //     <div className='mt-5 sm:mt-0'>
    //           //       <h2 className='text-lg font-bold text-gray-900'>
    //           //         {item?.title}
    //           //       </h2>
    //           //       <p className='mt-1 text-xs text-gray-700'>
    //           //         {item?.description}
    //           //       </p>
    //           //     </div>
    //           //     <div className='mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
    //           //       <div className='flex items-center border-gray-100'>
    //           //         <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'>
    //           //           -
    //           //         </span>
    //           //         <input
    //           //           className='h-8 w-8 border bg-white text-center text-xs outline-none'
    //           //           type='number'
    //           //           defaultValue={2}
    //           //           min={1}
    //           //         />
    //           //         <span className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
    //           //           +
    //           //         </span>
    //           //       </div>
    //           //       <div className='flex items-center space-x-4'>
    //           //         <p className='text-sm'>
    //           //           {item?.price}€
    //           //         </p>

    //           //       </div>
    //           //     </div>
    //           //   </div>
    //           // </div>

    //           <div className='flex items-center hover:bg-gray-100 -mx-0 px-6 py-5'>
    //             <div className='flex w-2/5'>
    //               <div className='w-20'>
    //                 <img
    //                   className='h-24 object-contain'
    //                   src={item?.thumbnail}
    //                   alt={item.title}
    //                 />
    //               </div>
    //               <div className='flex flex-col justify-between ml-4 flex-grow'>
    //                 <span className='font-bold text-sm'>{item?.title}</span>
    //                 <span className='text-red-500 text-xs'>
    //                   {item?.category}
    //                 </span>
    //                 <div className='font-semibold hover:text-red-500 text-gray-500 text-xs'>
    //                   Remove
    //                 </div>
    //               </div>
    //             </div>

    //             <span className='text-center w-1/5 font-semibold text-sm'>
    //               <svg
    //                 viewBox='0 0 448 512'
    //                 className='fill-current text-gray-600 w-3'
    //               >
    //                 <path d='M416208H32-17.67 0-32 14.33-32 32v32c0 17.67-14.33 32-32 32zm-32-32h32v32h-32z' />
    //               </svg>
    //               <input className='mx-2 border text-center w-8' type='text'  value={1}/>
    //               <svg
    //                 viewBox='0 0 448 512'
    //                 className='fill-current text-gray-600 w-3'
    //               >
    //                 <path d='M416208H32-17.67 0-32 14.33-32 32v32c0 17.67-14.33 32-32 32zm-32-32h32v32h-32z' />
    //               </svg>
    //             </span>
    //             <span className='text-center w-1/5 font-semibold text-sm'>
    //               {item?.price}€
    //             </span>
    //           </div>
    //         ))}

    //       <Link
    //         className='flex font-semibold text-indigo-600 text-sm mt-10'
    //         to='/products'
    //       >
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='currentColor'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='fill-current mr-2 text-indigo-600 w-4'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
    //           />
    //         </svg>
    //         Continue Shopping
    //       </Link>
    //     </div>
    //     <div id='summary' className='w-1/4 px-8 py-10'>
    //       <h1 className='font-semibold text-2xl border-b pb-8'>
    //         Order Summary
    //       </h1>
    //       <div className='flex justify-between mt-10 mb-5'>
    //         <span className='font-semibold text-sm uppercase'>Items 3</span>
    //         <span className='font-semibold text-sm'>€3.30</span>
    //       </div>
    //       <div>
    //         <label className='font-medium inline-block mb-3 text-sm uppercase'>
    //           Shipping
    //         </label>
    //         <select className='block p-2 text-gray-600 w-full text-sm'>
    //           <option>Standard shipping - €10.00</option>
    //         </select>
    //       </div>
    //       <div className='py-10'>
    //         <label
    //           htmlFor='promo'
    //           className='font-semibold inline-block mb-3 text-sm uppercase'
    //         >
    //           Promo Code
    //         </label>
    //         <input
    //           type='text'
    //           id='promo'
    //           placeholder='Enter your code'
    //           className='p-2 text-sm w-full'
    //         />
    //       </div>
    //       <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>
    //         Apply
    //       </button>
    //       <div className='border-t mt-8'>
    //         <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
    //           <span>Total cost</span>
    //           <span>€13.30</span>
    //         </div>
    //         <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
    //           Checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='h-screen bg-gray-100 pt-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => (
            <div className='rounded-lg md:w-2/3'>
              <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
                <img
                  src={item?.thumbnail}
                  alt={item.title}
                  className='w-full sm:w-32 object-contain'
                />
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                  <div className='mt-5 sm:mt-0'>
                    <p className='mt-1 text-xs text-gray-700'>{item?.brand}</p>
                    <h2 className='text-lg font-bold text-gray-900'>
                      {item?.title}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                      Price: {item?.price}
                    </p>
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
                    <div className=''>
                      <p className='text-sm'>{item?.price}€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default Cart;
