import { ContactCard } from "../../components";
import { Address, Email, Phone } from "../../assets/svg/ContactSVG";

const Contact = () => {
  return (
    <section className='text-gray-600 body-font '>
      <div className='container px-5 py-32 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ContactCard
            icon={Email}
            title='Email'
            details='madel413@gmail.com'
          />
          <ContactCard icon={Phone} title='Phone' details='+358 44 208 0939' />
          <ContactCard
            icon={Address}
            title='Address'
            details='Helsinki, Finland'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
