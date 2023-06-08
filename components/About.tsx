import AppLink from "@/components/AppLink";
import Card from "components/Card";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Card className="xl:w-2/4 md:w-3/4 p-5">
        <section className="grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-2">
          <div className="h-full max-h-full relative col-span-1 flex justify-center w-full">
            <Image
              src="/images/main_area.jpg"
              alt="main-area"
              className="rounded-xl object-cover"
              fill
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>
              Στο
              <strong className="text-accent-focus">
                &nbsp;I Ching : balance way&nbsp;
              </strong>
              προσφέρουμε υπηρεσίες σωματικής ευεξίας.
              <br /> Η
              <strong className="text-accent-focus">
                &nbsp;Κατερίνα Δημητρακοπούλου&nbsp;
              </strong>
              έχει πιστοποιηθεί στη θερμοθεραπεία με
              <AppLink href="/wiki/tecar-therapy">&nbsp;μόξα</AppLink>, στη
              μάλαξη με
              <AppLink href="/wiki/tecar-therapy">
                &nbsp;βεντούζες φωτιάς
              </AppLink>
              , στη
              <AppLink href="/wiki/tecar-therapy">
                &nbsp;συμβουλευτική διατροφής&nbsp;
              </AppLink>
              σύμφωνα με την κινεζική ιατρική και στο
              <AppLink href="/wiki/tecar-therapy">
                &nbsp;βελονισμό Balance
              </AppLink>
              .
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
