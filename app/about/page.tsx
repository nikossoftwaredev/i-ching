import AppLink from "@/components/AppLink";
import Card from "@/components/Card";
import { ADDRESS, LAST_NAME, NAME } from "data/general";

const Curriculum = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Card className="w-2/4 p-5 flex flex-col gap-4">
        <figure className="flex flex-col justify-center items-center">
          <img
            src="/images/doctor.jpg"
            alt="katerina-dimitrakopoulou"
            className="rounded-xl h-[300px] object-cover"
          />
        </figure>
        <section>
          Η
          <strong className="text-accent-focus">
            &nbsp;Κατερίνα Δημητρακοπούλου&nbsp;
          </strong>
          έχει πιστοποιηθεί στη θερμοθεραπεία με
          <AppLink href="/wiki/tecar-therapy">&nbsp;μόξα</AppLink>, στη μάλαξη
          με
          <AppLink href="/wiki/tecar-therapy">&nbsp;βεντούζες φωτιάς</AppLink>,
          στη
          <AppLink href="/wiki/tecar-therapy">
            &nbsp;συμβουλευτική διατροφής&nbsp;
          </AppLink>
          σύμφωνα με την κινεζική ιατρική και στο
          <AppLink href="/wiki/tecar-therapy">&nbsp;βελονισμό Balance</AppLink>
        </section>
      </Card>
    </section>
  );
};

export default Curriculum;
