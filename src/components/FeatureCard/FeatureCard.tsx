import { Link } from "react-router-dom";

import { ICategory } from "../../interfaces";
import { Loading } from "..";

interface IFeatureCardProps {
  cards: ICategory[];
  limit?: number;
  isLoading?: boolean;
}

const FeatureCard = ({ cards, limit, isLoading }: IFeatureCardProps) => {
  return (
    <section className='text-gray-600 body-font'>
      {isLoading ? <Loading /> : null}
      <div className='container px-5  mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4'>
          {cards
            ?.map((card, index) => (
              <div
                className='flex rounded-lg h-full bg-gray-300 p-8 flex-col'
                key={index}
              >
                <h2 className='text-gray-900 text-lg title-font font-medium flex items-center'>
                  {card}
                </h2>
                <div className='flex-grow'>
                  <Link
                    to={`/categories/${card}`}
                    className='inline-flex items-center cursor-pointer hover:text-gray-900'
                  >
                    View
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
            ))
            .slice(0, limit)}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
