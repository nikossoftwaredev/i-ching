"use client";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import AppointmentScroll from "@/components/header/AppoinmentSroll";
import AppLink from "@/components/AppLink";
import Button from "@/components/Button";
import { headerInfo, headerLinks } from "@/components/header/headerConfig";
import SectionTitle from "@/components/SectionTitle";

const MobileHeader = () => {
  return (
    <header>
      <nav className="bg-base-100 flex items-center justify-between pt-2">
        <Link href="/" className="animate-pulse-scale">
          <img src="/images/logo.png" alt="Flowbite Logo" width="80px" />
        </Link>
        <AppointmentScroll />
        <button className="btn w-[76px] flex justify-center mr-1">
          <MdMenu
            onClick={() => (window as any).my_modal_5.showModal()}
            size={40}
          />
        </button>

        <dialog
          id="my_modal_5"
          className="h-screen w-screen bg-base-200 rounded-lg max-h-screen max-w-none"
        >
          <form method="dialog" className="flex flex-col items-center">
            <SectionTitle title="ΜΕΝΟΥ" />
            {headerLinks.map(({ path, text }) => (
              <AppLink
                role="button"
                className="p-2 text-center text-2xl"
                href={path}
                key={path}
                onClick={() => (window as any).my_modal_5.close()}
              >
                {text}
              </AppLink>
            ))}
            <SectionTitle title="ΠΛΗΡΟΦΟΡΙΕΣ" />
            <section className="flex flex-col gap-3 center">
              {headerInfo.map(({ href, icon, text }) => (
                <Link
                  className="text-md flex gap-3 items-center"
                  href={href}
                  key={href}
                >
                  {icon}
                  <span className="">{text}</span>
                </Link>
              ))}
            </section>
            <Button
              className="absolute right-2 top-2"
              outlined={false}
              type="submit"
            >
              <MdClose size={40} />
            </Button>
          </form>
        </dialog>
      </nav>
    </header>
  );
};

export default MobileHeader;
