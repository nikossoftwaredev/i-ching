import Image from 'next/image';
import Card from 'components/Card';
import Link from 'next/link';

const Doctor = (): JSX.Element => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <Card className='xl:w-2/4 md:w-3/4 items-center justify-center p-5'>
        <section className='grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-3'>
          <div className='h-full max-h-full relative col-span-1'>
            <img src='/images/doctor.jpg' alt='main-area' className='rounded-xl w-full' />
          </div>
          <div className='flex flex-col col-span-2'>
            <span>
              Η
              <Link
                href='/about'
                className='text-primary-content hover:text-accent-focus font-bold'
              >
                &nbsp;Κατερίνα Δημητρακοπούλου &nbsp;
              </Link>
              είναι θεραπεύτρια εκπαιδευμένη στην
              <Link
                href='/wiki/chinese-medicine'
                className='text-primary-content hover:text-accent-focus font-bold'
              >
                &nbsp;κινέζικη ιατρική&nbsp;
              </Link>
              και στις
              <Link
                href='/wiki/tecar-therapy'
                className='text-primary-content hover:text-accent-focus font-bold'
              >
                &nbsp;ολιστικές θεραπείες. &nbsp;
              </Link>
            </span>
            <Link
              href='/about'
              className='text-primary-content hover:text-accent-focus font-bold mt-2 self-start'
            >
              Δειτε το βιογραφικο....
            </Link>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default Doctor;
