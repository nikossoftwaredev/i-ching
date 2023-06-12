import Doctor from "@/components/Doctor";
import SectionTitle from "@/components/SectionTitle";
import ServicesCarousel from "@/components/ServicesCarousel";
import About from "components/About";

const Home = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-4 pt-4">
        <About />
        <ServicesCarousel />
        <SectionTitle title="Η ΘΕΡΑΠΕΥΤΡΙΑ" />
        <Doctor />
      </div>
    </section>
  );
};

export default Home;
