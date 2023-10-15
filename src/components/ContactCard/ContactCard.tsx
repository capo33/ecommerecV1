interface ContactCardProps {
  icon: JSX.Element;
  details: string;
  title: string;
}
const ContactCard = ({ icon, details, title }: ContactCardProps) => {
  return (
    <div className='flex rounded-lg h-full bg-gray-300 p-8 flex-col'>
      <h2 className='text-gray-900 text-lg title-font font-medium flex items-center'>
        {icon}
        <span className='ml-3'>{title}</span>
      </h2>
      <div className='flex-grow'>
        <h2 className='text-gray-900 text-lg title-font font-medium'></h2>
        <p className='leading-relaxed text-base'>{details}</p>
      </div>
    </div>
  );
};

export default ContactCard;
