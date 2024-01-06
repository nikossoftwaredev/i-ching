import { MAP_IFRAME } from "data/general";
import Card from "@/components/Card";

const MapSection = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="sm:w-full md:w-3/4 shadow-md mt-4 flex items-center justify-center">
        <iframe
          title="map"
          src={MAP_IFRAME}
          className="rounded-lg border-hidden "
          width="100%"
          height="400px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>
    </div>
  );
};

export default MapSection;
