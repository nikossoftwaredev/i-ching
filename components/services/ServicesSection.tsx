import Chip from "@/components/Chip";
import SectionTitle from "@/components/SectionTitle";
import { servicesInfo } from "@/data/services";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div id="services-section">
      <SectionTitle title="ΥΠΗΡΕΣΙΕΣ" />
      <section className="flex flex-wrap justify-center items-center gap-4 p-4">
        {servicesInfo.map(({ serviceId, title, image, tags }) => (
          <Link
            href={`/wiki/${serviceId}`}
            key={serviceId}
            className="shadow-xl relative h-[400px] w-[300px]  grid grid-flow-row grid-rows-5 brightness-100 hover:brightness-75 transition ease-in-out duration-300"
          >
            <div className="rounded-t-lg grow bg-white flex flex-row justify-center items-center p-2 font-bold text-2xl ">
              <h2 className="text-center ">{title}</h2>
            </div>
            <img
              src={image}
              className="object-cover row-span-4 w-full h-full rounded-b-lg"
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
      </section>
    </div>
  );
};

export default ServicesSection;
