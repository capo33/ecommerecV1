import { Link } from "react-router-dom";

import { ICategory } from "../../interfaces";

interface IFeatureCardProps {
  cards: ICategory[];
  limit?: number;
}

const FeatureCard = ({ cards, limit }: IFeatureCardProps) => {
  console.log(cards);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5  mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4'>
          {cards
            ?.map((card, index) => (
              <div
                className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'
                key={index}
              >
                <h2 className='text-gray-900 text-lg title-font font-medium flex items-center'>
                  {card}
                </h2>
                <div className='flex-grow'>
                  <Link
                    to={`/categories/${card}`}
                    className=' text-indigo-500 inline-flex items-center cursor-pointer hover:text-gray-900'
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
