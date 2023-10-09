import { FeatureCard, Hero, Products } from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
          Products
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
          Most Popular Products
        </h1>
      </div>
      <Products />
      <FeatureCard />
    </>
  );
};

export default Home;
