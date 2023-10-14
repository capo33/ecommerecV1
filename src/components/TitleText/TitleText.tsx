interface TitleTextProps {
  text1?: string;
  text2: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text1, text2 }) => {
  return (
    <section className='flex flex-col text-center w-full mb-10'>
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-lg text-indigo-800 tracking-widest font-medium title-font mb-1'>
          {text1}
        </h2>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          {text2}
        </h2>
      </div>
    </section>
  );
};

export default TitleText;
