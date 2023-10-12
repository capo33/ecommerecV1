import { Link, useLocation } from "react-router-dom";

import { ICategory } from "../../interfaces";
import { TitleText } from "..";

interface IFeatureCardProps {
  cards: ICategory[];
}

const FeatureCard = ({ cards }: IFeatureCardProps) => {
  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/categories/";

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <TitleText text1='Categoties' text2='Browse by our top categories' />
        </div>
        <div className='flex flex-wrap -m-4'>
          {cards?.map((card, index) => (
            <div className='p-4 md:w-1/3' key={index}>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    {card}
                  </h2>
                </div>
                <div className='flex-grow'>
                  <Link
                    to={`${redirect}${card}`}
                    className='mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-gray-900'
                  >
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
