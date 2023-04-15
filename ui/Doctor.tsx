import Image from 'next/image';
import doctorImage from 'public/images/doctor.jpg';
import Card from 'ui/Card';
import Link from 'next/link';

const Doctor = (): JSX.Element => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <Card className='xl:w-2/4 md:w-3/4 items-center justify-center p-5'>
        <section className='grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-3'>
          <div className='h-full max-h-full relative col-span-1'>
            <Image src={doctorImage} alt='main-area' className='rounded-xl w-full' />
          </div>
          <div className='flex flex-col col-span-2'>
            <span>
              Η <strong>Κατερίνα Δημητρακοπούλου</strong> είναι θεραπεύτρια εκπαιδευμένη στην&nbsp;
              <Link href='/about' className='text-textSecondary hover:text-textHover mt-2'>
                κινέζικη ιατρική
              </Link>
              &nbsp; και στις &nbsp;
              <Link href='/about' className='text-textSecondary hover:text-textHover mt-2'>
                ολιστικές θεραπείες.
              </Link>
              &nbsp;
            </span>
            <Link href='/about' className='text-textSecondary hover:text-textHover mt-2'>
              Δειτε το βιογραφικο....
            </Link>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default Doctor;
