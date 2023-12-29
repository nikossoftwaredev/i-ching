import SectionTitle from "@/components/SectionTitle";

import {
  ADDRESS,
  BUSINESS_NAME,
  FACEBOOK,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  ΙΝSTAGRAM,
  MAIL,
  MAP_IFRAME,
  NAVIGATION,
  PHONE,
  TIKTOK_URL,
  TIKTOK,
} from "data/general";
import { cloneElement } from "react";
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import { SiTiktok, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import Card from "@/components/Card";

const contactInfo = [
  {
    href: NAVIGATION,
    icon: (
      <MdLocationPin
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Διεύθνση",
    value: ADDRESS,
  },
  {
    href: `tel:${PHONE}`,
    icon: (
      <MdOutlinePhone
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Τηλέφωνο",
    value: PHONE,
  },
  {
    href: `mailto:${MAIL}`,
    icon: (
      <MdMailOutline
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Email",
    value: MAIL,
  },
];

const socialInfo = [
  {
    href: INSTAGRAM_URL,
    icon: (
      <SiInstagram
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Instagram",
    value: ΙΝSTAGRAM,
  },
  {
    href: FACEBOOK_URL,
    icon: (
      <SiFacebook
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Facebook",
    value: FACEBOOK,
  },
  {
    href: TIKTOK_URL,
    icon: (
      <SiTiktok
        className="text-bg-primary-content hover:text-black"
        size={70}
      />
    ),
    title: "Tik Tok",
    value: TIKTOK,
  },
];

const ContactSection = () => {
  // Take the id and the title from a config
  return (
    <span id="contact-section">
      <SectionTitle title="ΕΠΙΚΟΙΝΩΝΙΑ" />
      <div className="w-full flex items-center justify-center gap-8">
        <div className="flex flex-col items-start justify-start gap-4">
          {socialInfo.map((info) => (
            <Link
              target="_blank"
              href={info.href}
              key={info.title}
              className="flex items-center justify-center gap-4"
            >
              {cloneElement(info.icon)}
              <span className="flex flex-col gap-2">
                <p className="font-extrabold">{info.title}</p>
                <p> {info.value}</p>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start justify-start gap-4">
          {contactInfo.map((info) => (
            <Link
              href={info.href}
              key={info.title}
              className="flex items-center justify-center gap-4"
            >
              {cloneElement(info.icon)}
              <span className="flex flex-col gap-2">
                <p className="font-extrabold">{info.title}</p>
                <p> {info.value}</p>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <SectionTitle title="ΧΑΡΤΗΣ" />
      <div className=" w-full flex items-center justify-center">
        <Card className="w-3/4 shadow-md mt-4 flex items-center justify-center">
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
    </span>
  );
};

export default ContactSection;
