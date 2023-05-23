import Image from 'next/image';
import Card from 'ui/Card';
import Link from 'next/link';

const About = (): JSX.Element => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <Card className='xl:w-2/4 md:w-3/4 items-center justify-center p-5'>
        <section className='grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-3'>
          <div className='h-full max-h-full relative col-span-1'>
            <img src='/images/main_area.jpg' alt='main-area' className='rounded-xl w-full' />
          </div>
          <div className='flex flex-col col-span-2'>
            <span>
              Στο <strong>I Ching : balance way</strong> παρέχουμε ένα πλήρες εφαρμοσμένο
              θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία του ανθρώπινου οργανισμού.
              Εκτός από συγκεκριμένες εσωτερικές και εξωτερικές παθήσεις, η ολιστική προσέγγιση και
              η κινέζικη ιατρική συμπληρώνουν έναν υγιή και ισορροπημένο τρόπο ζωής.
            </span>
            <Link href='/services' className='text-bgPrimary hover:text-textSecondary mt-2'>
              Υπηρεσίες που προσφέρουμε...
            </Link>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default About;
