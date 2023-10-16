import { IProduct } from "../../interfaces";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  products: IProduct[] ;
 }

const Pagination = ({
  page,
  setPage,
  products,
 }: PaginationProps) => {
  return (
    <section className='flex items-centerbg-gray-100 font-poppins dark:bg-gray-800 '>
      <div className='justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6'>
        <div className='flex justify-center'>
          <ul className='flex items-center space-x-1'>
            <li>
              <button
                className='px-3 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-500'
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
            </li>
            <li>
              <button
                className='px-3 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-500'
                onClick={() => setPage(page + 1)}
                disabled={products && page === Math.ceil(products.length / 10)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pagination;
