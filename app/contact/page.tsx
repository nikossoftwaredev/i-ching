import { ADDRESS, BUSINESS_NAME, MAIL, MAP_IFRAME, NAVIGATION, PHONE } from 'data/general';
import { cloneElement } from 'react';
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle';
import Link from 'next/link';

const contactInfo = [
  {
    icon: (
      <Link href={NAVIGATION} target='_blank'>
        <MdLocationPin className='text-bg-primary-content hover:text-black' size={70} />
      </Link>
    ),
    title: 'Διεύθνση',
    value: ADDRESS
  },
  {
    icon: (
      <Link href={`tel:${PHONE}`}>
        <MdOutlinePhone className='text-bg-primary-content hover:text-black' size={70} />
      </Link>
    ),
    title: 'Τηλέφωνο',
    value: PHONE
  },
  {
    icon: (
      <Link href={`mailto:${MAIL}`}>
        <MdMailOutline className='text-bg-primary-content hover:text-black' size={70} />
      </Link>
    ),
    title: 'Email',
    value: MAIL
  }
];

const ContactPage = () => {
  return (
    <main className='flex items-center justify-center p-4'>
      <div className='sm:w-full xl:w-2/4 flex items-center justify-center flex-col gap-2'>
        <SectionTitle title='ΕΠΙΚΟΙΝΩΝΙΑ' className='mt-10' />
        <div className='grid sm:grid-cols-1 md:grid-cols-2 w-full gap-14 items-center justify-center'>
          <span className='flex items-center justify-center'>
            <img alt='out-view' src='/images/out-view.jpg' className='object-cover rounded-lg' />
          </span>
          <div className='flex items-start justify-start gap-4 flex-col'>
            <h1 className='font-extrabold text-2xl'>{BUSINESS_NAME}</h1>
            {contactInfo.map(info => (
              <section key={info.title} className='flex items-center justify-center gap-4'>
                {cloneElement(info.icon)}
                <span className='flex flex-col gap-2'>
                  <p className='font-extrabold'>{info.title}</p>
                  <p> {info.value}</p>
                </span>
              </section>
            ))}
          </div>
          <div className='col-span-full'>
            <iframe
              title='map'
              src={MAP_IFRAME}
              className='rounded-lg border-hidden'
              width='100%'
              height='400px'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;