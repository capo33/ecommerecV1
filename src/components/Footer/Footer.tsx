import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

interface IFakeLinks {
  name: string;
}
const FakeLinks = ({ name }: IFakeLinks) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
      <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
        {name}
      </h2>
      <nav className='list-none mb-10'>
        <li className='text-gray-600 hover:text-gray-800'>First Link</li>
        <li className='text-gray-600 hover:text-gray-800'>Second Link</li>
        <li className='text-gray-600 hover:text-gray-800'>Third Link</li>
        <li className='text-gray-600 hover:text-gray-800'>Fourth Link</li>
      </nav>
    </div>
  );
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <img src={Logo} alt='logo' className='w-10 h-10' />

            <span className='ml-3 text-xl'>Ecommerce store</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            We have in our store almost all the products you need
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <FakeLinks name='HOME' />
          <FakeLinks name='PRODUCTS' />
          <FakeLinks name='CATEGORIES' />
          <FakeLinks name='CONTACT' />
        </div>
      </div>
      <div className='bg-gray-100'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © {year} Ecommerce —
            <Link
              to='https://mohamed-dev-portfolio.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 ml-1'
            >
              @mohamed
            </Link>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <Link
              to='https://www.linkedin.com/in/mohamed-capo/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 ml-1'
            >
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={0}
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                />
                <circle cx={4} cy={4} r={2} stroke='none' />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
