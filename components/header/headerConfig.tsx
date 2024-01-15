import { MdMail, MdPhone, MdLocationPin } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import {
  ADDRESS,
  INSTAGRAM_URL,
  MAIL,
  NAVIGATION,
  PHONE,
  ΙΝSTAGRAM,
} from "data/general";

export const headerLinks = [
  { path: "/#home", text: "Αρχική" },
  { path: `/#about-section`, text: "Γνωρίστε μας" },
  { path: `/#services-section`, text: "Υπηρεσίες" },
  { path: `/#contact-section`, text: "Επικοινωνία" },
];

export const headerInfo = [
  { href: INSTAGRAM_URL, icon: <BsInstagram size={30} />, text: ΙΝSTAGRAM },
  { href: `tel:${PHONE}`, icon: <MdPhone size={30} />, text: PHONE },
  { href: `mailto:${MAIL}`, icon: <MdMail size={30} />, text: MAIL },
  { href: NAVIGATION, icon: <MdLocationPin size={30} />, text: ADDRESS },
];
