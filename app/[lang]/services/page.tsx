import Card from 'ui/Card';
import Image from 'next/image';
import SectionTitle from 'ui/SectionTitle';
import { servicesInfo } from 'data/services';
import TextToHtml from 'ui/TextToHtml';
import ButtonLink from 'ui/ButtonLink';

const ServicesPage = () => {
  return (
    <main className='flex items-center justify-center flex-col'>
      <SectionTitle title='ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ' />
      <div className='w-4/5 items-center justify-items-center grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10'>
        {servicesInfo.map(service => (
          <Card
            key={service.title}
            className='flex flex-col max-w-[300px] overflow-x-hidden w-full hover:scale-105 transition ease-in-out duration-300 relative h-full'
          >
            <figure className='w-full h-[200px] m-h-[200px] relative z-0 brightness-75 transition ease-in-out duration-300 object-cover '>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={service.image}
                alt={service.title}
              />
            </figure>
            <main className='p-5 w-full z-10 flex flex-col flex-auto'>
              <h1 className='font-extrabold text-2xl mb-4'>{service.title}</h1>
              <span className='break-words leading-6 mb-10'>
                <TextToHtml text={service.description} />
              </span>
              <div className='flex mt-auto'>
                <ButtonLink className='ml-auto' href={`/scientific-articles#${service.serviceId}`}>
                  ΠΕΡΙΣΣΟΤΕΡΑ
                </ButtonLink>
              </div>
            </main>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
