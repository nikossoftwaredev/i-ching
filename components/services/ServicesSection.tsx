import Card from "@/components/Card";
import CarouseButtons from "@/components/CarouselButtons";
import Chip from "@/components/Chip";
import SectionTitle from "@/components/SectionTitle";
import { servicesInfo } from "@/data/services";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div id="services-section">
      <SectionTitle title="ΥΠΗΡΕΣΙΕΣ" />
      <section className="w-full flex flex-col items-center justify-center">
        <Card className="relative xl:w-2/4 md:w-3/4 max-w-full p-5">
          <CarouseButtons scrollableDivId="scrollable-div" />
          <div
            id="scrollable-div"
            className="flex overflow-x-auto gap-4 justify-between p-2"
          >
            {servicesInfo.map(({ serviceId, title, image, tags }) => (
              <Link
                href={`/wiki/${serviceId}`}
                key={serviceId}
                className="overflow-y-hidden rounded-lg shadow-xl relative h-[500px] w-[400px] grid grid-flow-row grid-rows-5 brightness-100 hover:brightness-75 transition ease-in-out duration-300"
              >
                <div className="rounded-t-lg grow bg-white flex flex-row justify-center items-center p-2 font-bold text-2xl text-accent-focus gap-2">
                  <h2 className="text-center ">{title}</h2>
                </div>
                <img
                  src={image}
                  className="object-cover row-span-4 w-full h-full"
                  alt={title}
                  loading="lazy"
                />
                <div className="absolute p-2 bottom-0 rounded-b-lg flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <Chip key={tag} text={tag} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default ServicesSection;
