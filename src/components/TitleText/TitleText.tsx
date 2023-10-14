interface TitleTextProps {
  text1: string;
  text2: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text1, text2 }) => {
  return (
    <div className='flex flex-col text-center w-full mb-10'>
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-lg text-indigo-800 tracking-widest font-medium title-font mb-1 u'>
          {text1}
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
          {text2}
        </h1>
      </div>
    </div>
  );
};

export default TitleText;
