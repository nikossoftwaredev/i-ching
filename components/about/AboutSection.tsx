import AppLink from "@/components/AppLink";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { FC } from "react";

const AboutCard: FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Card className="grid grid-cols-1 lg:grid-cols-2 justify-center md:w-3/4 p-4 leading-8 text-lg font-medium">
    {children}
    <p></p>
    <a
      className="ml-auto btn btn-outline"
      href={href}
      target={href.startsWith("/") ? "_self" : "_blank"}
      rel="noreferrer"
    >
      ΠΕΡΙΣΣΟΤΕΡΑ
    </a>
  </Card>
);

const AboutSection: FC<{ [key: string]: any }> = () => (
  <section
    id="about-section"
    className="w-full flex flex-col items-center justify-center gap-4"
  >
    <SectionTitle title="ΓΝΩΡΙΣΤΕ ΜΑΣ" />

    <AboutCard href="/resume">
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/doctor.webp"
          alt="katerina-dimitrakopoulou"
          className="h-[300px] w-[300px] rounded-xl object-cover"
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
    <AboutCard href="https://en.wikipedia.org/wiki/I_Ching">
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/main_area.webp"
          alt="main-area"
          className="h-[300px] w-[300px] rounded-xl object-cover"
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
    <AboutCard href="https://eski.gr/history-of-chinese-medicine-tcm/?fbclid=IwAR1eMMW9AsYvUuBJwQkGgKyP1zNbzXY_utgdpgFb0xkNEbLapyQpE8Qnovs">
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/holistic.jpg"
          alt="main-area"
          className="h-[300px] w-[300px] rounded-xl object-cover"
          loading="lazy"
        />
      </figure>
      <p className="p-3">
        Η Κινέζικη Ιατρική είναι ένα σύστημα διαχείρισης της υγείας και της
        ασθένειας, με ρίζες που χάνονται στην αρχή της ιστορίας της
        ανθρωπότητας, και με τα αρχαιότερά της συγγράμματα να τοποθετούνται
        ιστορικά 2500 χρόνια πριν. Αναπτύχθηκε αρχικά και εξελίχθηκε στην
        διάρκεια των αιώνων, άρρηκτα συνδεδεμένη με την κουλτούρα, τον
        πολιτισμό, και την ιστορία ενός λαού που αναμετρήθηκε με το δικό του
        διαφορετικό τρόπο με τα πανανθρώπινα ερωτήματα για την προέλευση της
        ζωής και του σύμπαντος, για το νόημα της ύπαρξης και του θανάτου, για τη
        σχέση του ανθρώπου με το περιβάλλον του, συνθέτοντας μια κοσμοθεωρία που
        τροφοδότησε μια οργανωμένη απάντηση στο τι είναι η υγεία και πώς
        μπορούμε να τη διατηρήσουμε.
      </p>
    </AboutCard>
  </section>
);

export default AboutSection;
