import SectionTitle from "@/components/SectionTitle";

import {
  ADDRESS,
  FACEBOOK,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  ΙΝSTAGRAM,
  MAIL,
  NAVIGATION,
  PHONE,
  TIKTOK_URL,
  TIKTOK,
} from "data/general";
import { cloneElement } from "react";
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import { SiTiktok, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import MapSection from "@/components/map/MapSection";
import {
  ContactInfo,
  contactInfo,
  socialInfo,
} from "@/components/header/headerConfig";

const ContactIcon = ({ href, icon, title, value }: ContactInfo) => {
  return (
    <Link target="_blank" href={href} key={title} className="flex gap-4">
      {cloneElement(icon)}
      <span className="flex flex-col gap-2">
        <p className="font-extrabold">{title}</p>
        <p> {value}</p>
      </span>
    </Link>
  );
};

const ContactSection = () => {
  // Take the id and the title from a config
  return (
    <span id="contact-section">
      <SectionTitle title="ΕΠΙΚΟΙΝΩΝΙΑ" />
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {[...socialInfo, ...contactInfo].map((info) => (
            <ContactIcon key={info.value} {...info} />
          ))}
        </div>
      </div>
      <MapSection />
    </span>
  );
};

export default ContactSection;
