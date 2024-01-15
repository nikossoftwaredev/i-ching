"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MobileHeader from "@/components/header/MobileHeader";
import AppointmentScroll from "@/components/header/AppointmentScroll";
import { headerInfo, headerLinks } from "@/components/header/headerConfig";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <header>
      <nav>
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <div className="flex flex-wrap justify-center items-center  w-full gap-7  py-3 pr-1">
            {headerInfo.map(({ href, icon, text }) => (
              <Link
                className="text-md flex gap-2 items-center"
                href={href}
                key={href}
              >
                {icon}
                {text}
              </Link>
            ))}
          </div>
          <ul className="p-2 w-full flex flex-row gap-6 justify-center items-center mr-1">
            <Link
              href="/"
              className="bg-slate-100 p-4 flex items-center animate-pulse-scale mr-10 rounded-full"
            >
              <img
                src="/images/logo.svg"
                alt="Flowbite Logo"
                className="w-[70px] h-[70px]"
              />
            </Link>
            {headerLinks.map((linkConfig, idx) => {
              let isActive = pathname === linkConfig.path;
              const isLastEl = idx === headerLinks.length - 1;

              if (linkConfig.path !== "/" && pathname) {
                isActive = pathname === linkConfig.path;
              }

              return (
                <li key={linkConfig.path}>
                  <a
                    href={linkConfig.path}
                    className={`font-bold hover:text-base-300 ${
                      isActive ? "text-base-300" : ""
                    } ${isLastEl ? "mr-10" : ""}`}
                  >
                    {linkConfig.text}
                  </a>
                </li>
              );
            })}
            <AppointmentScroll />
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
