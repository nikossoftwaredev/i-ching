"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import MobileHeader from "@/components/header/MobileHeader";
import { Locale } from "i18n-config";
import AppointmentScroll from "@/components/header/AppoinmentSroll";
import { headerInfo } from "@/components/header/headerConfig";
import useWindowSize from "@/hooks/useWindowSize";

const Header = ({ dictionary, lang }: { dictionary: any; lang: Locale }) => {
  const pathname = usePathname();
  const { width } = useWindowSize();

  const linksConfig = useMemo(
    () => [
      { path: `/${lang}`, text: dictionary.header.home },
      { path: `/${lang}/services`, text: dictionary.header.services },
      { path: `/${lang}/about`, text: dictionary.header.about },
      { path: `/${lang}/wiki`, text: dictionary.header.wiki },
      { path: `/${lang}/contact`, text: dictionary.header.contact },
      { path: `/${lang}/themes`, text: dictionary.header.themes },
    ],
    [dictionary, lang]
  );

  const isMobile = width < 667;

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header>
      <nav className="bg-base-100">
        <div className="flex flex-wrap justify-center items-center sm:justify-end sm:items-end  w-full mb-4 bg-base-300 gap-7  py-3 pr-1">
          {headerInfo.map(({ href, icon, text }) => (
            <Link
              className="text-md flex gap-2 items-center"
              href={href}
              key={href}
            >
              {icon}
              <span className="hidden sm:inline-block">{text}</span>
            </Link>
          ))}
        </div>
        <ul className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center mr-1">
          <Link href="/" className="flex items-center animate-pulse-scale">
            <img src="/images/logo.png" alt="Flowbite Logo" width="100px" />
          </Link>
          {linksConfig.map((linkConfig) => {
            let isActive = pathname === linkConfig.path;

            if (linkConfig.path !== "/" && pathname) {
              isActive = pathname === linkConfig.path;
            }

            return (
              <li key={linkConfig.path}>
                <Link
                  href={linkConfig.path}
                  className={`font-bold hover:text-accent ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {linkConfig.text}
                </Link>
              </li>
            );
          })}
          <AppointmentScroll />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
