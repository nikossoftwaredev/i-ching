import Doctor from "@/components/Doctor";
import SectionTitle from "@/components/SectionTitle";
import ServicesCarousel from "@/components/ServicesCarousel";
import { NAME } from "@/data/general";
import { servicesInfo } from "@/data/services";
import About from "components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: NAME,
  description: servicesInfo
    .map((service) => `${service.title}: ${service.subtitle}`)
    .join(", "),
};

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
