import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navigations } from "../../config";
import { useAppSelector } from "../../redux/app/store";

const Header = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  // to handle navbar with shadow on scroll
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  // to close navbar with escape key
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen]);

  // to close navbar on resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  // open handler
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`text-gray-600 body-font sticky top-0 ${
        !top && "sticky top-0 bg-white shadow-md z-50"
      }`}
    >
      <nav
        className={`container m-auto md:flex items-center justify-between bg-white py-4`}
      >
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          {/* Hamburger icon */}
          <button
            className='block border-0 bg-transparent px-1 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden'
            type='button'
            onClick={handleOpen}
          >
            {!isOpen && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 fixed z-10'
              onClick={handleOpen}
            >
              <div className='fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r'>
                <div className='flex px-14 h-16 shadow md:flex my-2 '>
                  <button>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                      />
                    </svg>
                  </button>
                  <Link
                    to='/'
                    className='flex title-font font-medium items-center text-gray-900'
                  >
                    <span className='ml-3'>ECommerce</span>
                  </Link>
                </div>
                <div className='overflow-y-auto overflow-x-hidden flex-grow'>
                  <ul className='flex flex-col py-4 space-y-1'>
                    {navigations.map((nav) => (
                      <li key={nav.path}>
                        <Link
                          to={nav.path}
                          className='flex p-10 items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                          onClick={handleOpen}
                        >
                          <span className='inline-flex justify-center items-center ml-4'>
                            {nav.icon}
                          </span>
                          <span className='ml-2 text-sm tracking-wide truncate'>
                            {nav.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className='hidden justify-between items-center lg:!flex lg:basis-auto '>
            <Link
              to='/'
              className='flex title-font cursor-pointer font-medium items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
                />
              </svg>

            </Link>
              <span className='ml-3 text-left'>ECommerce</span>
          </div>
            <ul
              className='hidden list-style-none lg:!flex flex-col lg:flex-row lg:items-center'
              data-te-navbar-nav-ref
            >
              {navigations.map((nav) => (
                <li className='text-gl lg:ml-3' key={nav.path}>
                  <Link
                    to={nav.path}
                    className='text-neutral-500 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 '
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>

          {/* Cart Icon */}
          <div className='relative flex items-center'>
            <Link
              to='/cart'
              className='flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner'
            >
              {cart.length > 0 ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 text-green-900'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              )}
              <span className='pl-1 text-gray-500 text-md'>
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
