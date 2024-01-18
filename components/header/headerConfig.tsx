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
import { SiTiktok, SiFacebook, SiInstagram } from "react-icons/si";
import { MdMailOutline, MdOutlinePhone, MdLocationPin } from "react-icons/md";

export const headerLinks = [
  { path: "/#home", text: "Αρχική" },
  { path: `/#about-section`, text: "Γνωρίστε μας" },
  { path: `/#services-section`, text: "Υπηρεσίες" },
  { path: `/#contact-section`, text: "Επικοινωνία" },
];

export interface ContactInfo {
  href: string;
  icon: JSX.Element;
  title: string;
  value: string;
}

export const contactInfo: ContactInfo[] = [
  {
    href: NAVIGATION,
    icon: (
      <MdLocationPin
        className="text-bg-primary-content hover:text-black"
        size={40}
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
        size={40}
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
        size={40}
      />
    ),
    title: "Email",
    value: MAIL,
  },
];

export const socialInfo: ContactInfo[] = [
  {
    href: INSTAGRAM_URL,
    icon: (
      <SiInstagram
        className="text-bg-primary-content hover:text-black"
        size={40}
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
        size={40}
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
        size={40}
      />
    ),
    title: "Tik Tok",
    value: TIKTOK,
  },
];
