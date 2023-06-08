import ServicesCarousel from "@/components/ServicesCarousel";
import About from "components/About";

const Home = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-4 pt-4">
        <About />
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default Home;
