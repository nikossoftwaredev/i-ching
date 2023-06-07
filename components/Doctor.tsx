import Card from "components/Card";
import AppLink from "@/components/AppLink";

const Doctor = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Card className="xl:w-2/4 md:w-3/4 items-center justify-center p-5">
        <section className="grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-3">
          <div className="h-full max-h-full relative col-span-1">
            <img
              src="/images/doctor.jpg"
              alt="main-area"
              className="rounded-xl w-full"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <span>
              Η{" "}
              <AppLink href="/about">
                &nbsp;Κατερίνα Δημητρακοπούλου &nbsp;
              </AppLink>
              είναι θεραπεύτρια εκπαιδευμένη στην
              <AppLink href="/wiki/chinese-medicine">
                &nbsp;κινέζικη ιατρική&nbsp;
              </AppLink>
              και στις
              <AppLink href="/wiki/tecar-therapy">
                &nbsp;ολιστικές θεραπείες. &nbsp;
              </AppLink>
            </span>
            <AppLink href="/about" className="mt-2 self-start">
              Δειτε το βιογραφικο....
            </AppLink>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default Doctor;
