import AppLink from "@/components/AppLink";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { FC } from "react";

const AboutSection: FC<{ [key: string]: any }> = () => (
  <section
    id="#about-section"
    className="w-full flex flex-col items-center justify-center gap-6"
  >
    <SectionTitle title="ΓΝΩΡΙΣΤΕ ΜΑΣ" />
    <Card className="p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center w-3/4">
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/doctor.webp"
          alt="katerina-dimitrakopoulou"
          className="rounded-xl object-cover"
          height={300}
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col justify-center">
        Η Κατερίνα Δημητρακοπούλου άρχισε τις σπουδές της στις εναλλακτικές
        θεραπείες το 2020 στη σχολή OM training centre. Μέσα στην καραντίνα
        αγάπησε την Κινέζικη ιατρική και τις εφαρμογές της. Έτσι δημιούργησε το
        I Ching: balance way για να μοιραστεί την ολιστική ιατρική με ανθρώπους
        που στοχεύουν για έναν ισορροπημένο τρόπο ζωής. <br />
        &quot;Στο ιατρείο και κέντρο αποκατάστασης του πατέρα μου είχα την πρώτη
        μου επαφή με τη θεραπεία του πόνου και την οργάνωση που απαιτεί ένας
        τέτοιος χώρος. Με κάθε νέο ασθενή αγαπούσα όλο και περισσότερο το ρόλο
        του θεραπευτή.&quot;
      </div>
    </Card>
    <Card className="p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center  w-3/4">
      <div className="flex flex-col justify-center">
        Το I Ching: balance way (Ι Τσινγκ) είναι ένα αρχαίο κινέζικο κείμενο που
        ονομάζεται “Βιβλίο των αλλαγών”. Μέσω της εκπαίδευσής μου στο βελονισμό
        Balance, γνώρισα την έννοια της ισορροπίας και της ελλειπτικής κίνησης
        της ζωής. Έτσι σε κάθε θεραπεία κατανοώ πως όλα συνδέονται, κάνουν τον
        κύκλο τους, αλλά προχωρούν μπροστά, και πως κάποιος χρειάζεται προσωπική
        ισορροπία για να μπορέσει να &quot;διορθώσει&quot; τις ανισορροπίες των
        άλλων.
      </div>
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/main_area.webp"
          alt="main-area"
          className="rounded-xl object-cover"
          loading="lazy"
        />
      </figure>
    </Card>
  </section>
);

export default AboutSection;
