import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { servicesInfo } from "@/data/services";

const ServicesCarousel = () => {
  return (
    <span>
      <SectionTitle title="ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ" />
      <section className="w-full flex flex-col items-center justify-center">
        <Card className="xl:w-2/4 md:w-3/4 p-5 max-w-full">
          <div className="flex overflow-x-auto gap-4">
            {servicesInfo.map((service) => (
              <Card
                key={service.serviceId}
                className="rounded-lg relative h-[300px] w-[300px] max-h-[300px] max-w-[300px] overflow-hidden flex-shrink-0"
              >
                <img
                  src={service.image}
                  className="rounded-t-lg object-cover h-2/3 w-full"
                  alt={service.title}
                />

                <div className="rounded-b-lg grow flex items-center justify-center gap-2 bg-base-300 p-4">
                  <h1 className="text-center font-bold text-2xl text-accent">
                    {service.title}
                  </h1>
                  <ButtonLink
                    className="btn-accent"
                    href={`/wiki#${service.serviceId}`}
                  >
                    ΠΕΡΙΣΣΟΤΕΡΑ
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </section>
    </span>
  );
};

export default ServicesCarousel;
