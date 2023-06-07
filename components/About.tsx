import AppLink from "@/components/AppLink";
import Card from "components/Card";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Card className="xl:w-2/4 md:w-3/4 items-center justify-center p-5">
        <section className="grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-3">
          <div className="h-full max-h-full relative col-span-1">
            <img
              src="/images/main_area.jpg"
              alt="main-area"
              className="rounded-xl h-full object-cover "
            />
          </div>
          <div className="flex flex-col col-span-2 justify-center">
            <span>
              Στο <strong>I Ching : balance way</strong> παρέχουμε ένα πλήρες
              εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία
              του ανθρώπινου οργανισμού. Εκτός από συγκεκριμένες εσωτερικές και
              εξωτερικές παθήσεις, η ολιστική προσέγγιση και η κινέζικη ιατρική
              συμπληρώνουν έναν υγιή και ισορροπημένο τρόπο ζωής.
            </span>
            <AppLink href="/services" className="mt-2 self-start">
              Υπηρεσίες που προσφέρουμε...
            </AppLink>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default About;
