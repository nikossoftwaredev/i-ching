import ServicesSection from "@/components/services/ServicesSection";
import { BUSINESS_NAME, LAST_NAME, NAME } from "@/data/general";
import { servicesInfo } from "@/data/services";
import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import AboutSection from "@/components/about/AboutSection";

const staticKeywords = [
  "πόνος στην πλάτη",
  "βελονισμός ηλιούπολη",
  "πονος στον αυχενα",
  "πονος",
  "πονος ηλιούπολη",
  NAME,
  LAST_NAME,
];

const description =
  "Στο I Ching : balance way παρέχουμε ένα πλήρες εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία του ανθρώπινου οργανισμού.  Εκτός από συγκεκριμένες εσωτερικές και εξωτερικές παθήσεις, η ολιστική προσέγγιση και η κινέζικη ιατρική συμπληρώνουν έναν υγιή και ισορροπημένο τρόπο ζωής.";

const keywords = staticKeywords
  .concat(
    servicesInfo.map((service) => `${service.title}: ${service.description}`)
  )
  .join(", ");

export const metadata: Metadata = {
  title: BUSINESS_NAME,
  description,
  keywords,
  applicationName: BUSINESS_NAME,
  robots: "index, follow",
  openGraph: {
    title: BUSINESS_NAME,
    description,
    images: "https://ichingbalance.gr/images/main_area.webp",
  },
};

const Home = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-4 pt-4">
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </section>
  );
};

export default Home;
