import { useNavigate } from "react-router-dom";

import HeroImage from "../../assets/main2.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Before they sold out
            <br className='lg:inline-block' />
            readymade gluten
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lots of valuable products are available in your store. You can buy
            them with our discount codes and purchase them with a good price.
            discount is available for all products till the end of this month.
            Hurry up and buy your favorite products.
          </p>
          {/* Make button on large size horizontal and on small size vertical */}
          <div className='flex justify-center'>
            <button
              className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
              onClick={() => navigate("/products")}
            >
              Products
            </button>
            <button
              className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
              onClick={() => navigate("/contact")}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img className='object-cover rounded' alt='hero' src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
