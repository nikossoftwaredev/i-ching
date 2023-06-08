import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { servicesInfo } from "@/data/services";
import Link from "next/link";

const ServicesCarousel = () => {
  return (
    <span>
      <SectionTitle title="ΟΛΙΣΤΙΚΕΣ ΘΕΡΑΠΕΙΕΣ" />
      <section className="w-full flex flex-col items-center justify-center">
        <Card className="xl:w-2/4 md:w-3/4 p-5 max-w-full ">
          <div className="flex overflow-x-auto gap-4 justify-between p-2">
            {servicesInfo.map((service) => (
              <Link
                href={`/wiki#${service.serviceId}`}
                key={service.serviceId}
                className="overflow-y-hidden rounded-lg shadow-xl relative h-[300px] w-[250px]  flex flex-col flex-shrink-0 brightness-100 hover:brightness-75 transition ease-in-out duration-300"
              >
                <div className="rounded-t-lg grow bg-base-300 flex flex-col justify-center items-center p-2">
                  <h1 className="text-center font-bold text-2xl text-accent-focus">
                    {service.title}
                  </h1>
                  {/* <h2 className="text-center font-bold text-xl ">
                    ({service.subtitle})
                  </h2> */}
                </div>
                <img
                  src={service.image}
                  className="rounded-b-lg object-cover h-4/5 w-full"
                  alt={service.title}
                />
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </span>
  );
};

export default ServicesCarousel;
