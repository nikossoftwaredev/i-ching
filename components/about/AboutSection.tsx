import AppLink from "@/components/AppLink";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { FC } from "react";

const AboutCard: FC<{ [key: string]: any }> = ({ children }) => (
  <Card className="grid grid-cols-1 lg:grid-cols-2 justify-center md:w-3/4 p-4 leading-8 text-lg font-medium">
    {children}
    <p></p>
    <AppLink className="ml-auto btn btn-outline" href={"/contact"}>
      ΠΕΡΙΣΣΟΤΕΡΑ
    </AppLink>
  </Card>
);

const AboutSection: FC<{ [key: string]: any }> = () => (
  <section
    id="about-section"
    className="w-full flex flex-col items-center justify-center gap-4"
  >
    <SectionTitle title="ΓΝΩΡΙΣΤΕ ΜΑΣ" />

    <AboutCard>
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/doctor.webp"
          alt="katerina-dimitrakopoulou"
          className="rounded-xl object-cover"
          height={300}
          loading="lazy"
        />
      </figure>
      <div className="p-3">
        <div>
          Η <b>Κατερίνα Δημητρακοπούλου</b> άρχισε τις σπουδές της στις
          εναλλακτικές θεραπείες το 2020 στη σχολή OM training centre. Μέσα στην
          καραντίνα αγάπησε την Κινέζικη ιατρική και τις εφαρμογές της. Έτσι
          δημιούργησε το I Ching: balance way για να μοιραστεί την ολιστική
          ιατρική με ανθρώπους που στοχεύουν για έναν ισορροπημένο τρόπο ζωής.
        </div>
        <div className="font-bold mt-2">
          &quot; Στο ιατρείο και κέντρο αποκατάστασης του πατέρα μου είχα την
          πρώτη μου επαφή με τη θεραπεία του πόνου και την οργάνωση που απαιτεί
          ένας τέτοιος χώρος. <br /> Με κάθε νέο ασθενή αγαπούσα όλο και
          περισσότερο το ρόλο του θεραπευτή &quot;
        </div>
      </div>
    </AboutCard>
    <AboutCard>
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/main_area.webp"
          alt="main-area"
          className="rounded-xl object-cover"
          loading="lazy"
        />
      </figure>
      <p className="p-3">
        Το I Ching: balance way (Ι Τσινγκ) είναι ένα αρχαίο κινέζικο κείμενο που
        ονομάζεται “Βιβλίο των αλλαγών”. Μέσω της εκπαίδευσής μου στο βελονισμό
        Balance, γνώρισα την έννοια της ισορροπίας και της ελλειπτικής κίνησης
        της ζωής. Έτσι σε κάθε θεραπεία κατανοώ πως όλα συνδέονται, κάνουν τον
        κύκλο τους, αλλά προχωρούν μπροστά, και πως κάποιος χρειάζεται προσωπική
        ισορροπία για να μπορέσει να &quot;διορθώσει&quot; τις ανισορροπίες των
        άλλων.
      </p>
    </AboutCard>
  </section>
);

export default AboutSection;
