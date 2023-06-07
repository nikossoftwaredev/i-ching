import { ADDRESS, DOMAIN, MAIL, PHONE } from "data/general";
import Link from "next/link";
import {
  MdMailOutline,
  MdOutlineCalendarToday,
  MdOutlinePhone,
  MdLocationPin,
  MdAccessTime,
} from "react-icons/md";

const footerSections = [
  {
    title: "Ωράριο λειτουργίας",
    subtitles: [
      { icon: <MdOutlineCalendarToday />, value: "Δευτέρα - Παρασκευή" },
      { icon: <MdAccessTime />, value: "13:00 - 16:30" },
      { icon: <MdOutlineCalendarToday />, value: "Σάββατο - Κυριακή" },
      { icon: <MdAccessTime />, value: "12:00 - 20:00" },
    ],
  },
  {
    title: "Επικοινωνία",
    subtitles: [
      { icon: <MdLocationPin />, value: ADDRESS },
      { icon: <MdOutlinePhone />, value: PHONE },
      { icon: <MdMailOutline />, value: MAIL },
    ],
  },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-base-300 flex items-center flex-col py-10">
      <div className="flex justify-center items-start gap-20 pb-7  sm:flex-col md:flex-row flex-wrap">
        {footerSections.map((footerSection) => (
          <section key={footerSection.title}>
            <h4 className="text-3xl pb-4 font-bold text-accent">
              {footerSection.title}
            </h4>
            {footerSection.subtitles.map((subtitle) => (
              <div
                className="text-lg flex  items-center justify-start gap-2"
                key={subtitle.value}
              >
                {subtitle.icon} {subtitle.value}
              </div>
            ))}
          </section>
        ))}
      </div>
      <section className="text-center">
        © Copyright 2023 <strong>{DOMAIN}</strong> <br />
        Με την επιφύλαξη παντός δικαιώματος.
        <br />
        Made by
        <Link
          href="https://www.linkedin.com/in/nikosdim97/"
          className="text-accent hover:accent-focus font-bold"
        >
          &nbsp; Nikos Dimitrakopoulos&nbsp;
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
