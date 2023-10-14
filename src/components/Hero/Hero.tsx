import { useNavigate } from 'react-router-dom';

import HeroImage from '../../assets/main2.jpg'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='text-gray-600 body-font mt-20'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Before they sold out 
            <br className='hidden lg:inline-block' />
            readymade gluten
          </h1>
          <p className='mb-8 leading-relaxed'>
          Lots of valuable products are available in your store. You can buy them with our discount codes and purchase them with a good price. discount is available for all products till the end of this month. Hurry up and buy your favorite products.         
          </p>
          <div className='flex justify-center'>
            <button 
              onClick={() => navigate('/products')}
            className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Get Started
            </button>
            <button 
              onClick={() => navigate('/about')}
            className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Learn More
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover rounded'
            alt='hero'
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
