import Doctor from "@/components/Doctor";
import SectionTitle from "@/components/SectionTitle";
import ServicesCarousel from "@/components/ServicesCarousel";
import { BUSINESS_NAME, NAME } from "@/data/general";
import { servicesInfo } from "@/data/services";
import About from "components/About";
import { Metadata } from "next";

const staticKeywords = [
  "πόνος στην πλάτη",
  "βελονισμός ηλιούπολη",
  "Κατερινα Δημητρακοπούλου",
  "πονος στον αυχενα",
  "πονος",
  "πονος ηλιούπολη",
];

const keywords = staticKeywords
  .concat(
    servicesInfo.map((service) => `${service.title}: ${service.subtitle}`)
  )
  .join(", ");

export const metadata: Metadata = {
  title: NAME,
  description:
    "Στο I Ching : balance way παρέχουμε ένα πλήρες εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία του ανθρώπινου οργανισμού.",
  keywords,
  applicationName: BUSINESS_NAME,
  robots: "index, follow",
  openGraph: {
    title: NAME,
    description: keywords,
    images: ["/images/favicon.ico", "/images/main_area.webp"],
  },
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
