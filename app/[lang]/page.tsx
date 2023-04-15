import About from 'ui/About';
import Doctor from 'ui/Doctor';

const Home = () => {
  return (
    <section>
      <div className='w-full flex flex-col gap-4 pt-4'>
        <About />
        <Doctor />
      </div>
    </section>
  );
};

export default Home;
