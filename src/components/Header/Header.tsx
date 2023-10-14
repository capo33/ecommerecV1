import { Link } from "react-router-dom";
import { navigations } from "../../config";
import { useAppSelector } from "../../redux/app/store";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <>
      <div className=''>
        <div className=' '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4'>
            <div className='flex items-center justify-between md:justify-start'>
              <button
                type='button'
                className='md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center'
              >
                <svg
                  className='text-gray-500 w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>

              <a href='#' className='font-bold text-gray-700 text-2xl'>
                Shop.
              </a>

              <div className='hidden md:flex space-x-3 flex-1 lg:ml-8'>
                <a
                  href='#'
                  className='px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600'
                >
                  Electronics
                </a>
                <a
                  href='#'
                  className='px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600'
                >
                  Fashion
                </a>
                <a
                  href='#'
                  className='px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600'
                >
                  Tools
                </a>
                <a
                  href='#'
                  className='px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600'
                >
                  Books
                </a>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='relative hidden md:block'>
                  <input
                    type='search'
                    className='pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none'
                    placeholder='Search'
                  />
                  <svg
                    className='h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className='text-gray-600 body-font shadow'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to='/'
            className='flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
            </svg>
            <span className='ml-3 text-xl'>ECommerce</span>
          </Link>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            {navigations.map((nav) => (
              <Link
                to={nav.path}
                key={nav.path}
                className='mr-5 hover:text-gray-900'
              >
                {nav.name}
              </Link>
            ))}
          </nav>
          {/* <button className='inline-flex text-white items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0'>
          Cart
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'
            >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </button> */}
          <Link
            to='/cart'
            className='flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner'
          >
            {cart.length > 0 ? (
              <svg
                className='h-6 w-6 leading-none text-green-300 stroke-current'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6 leading-none text-gray-300 stroke-current'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
            )}
            <span className='pl-1 text-gray-800 text-md'>
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
