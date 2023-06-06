'use client';

import { MdMail, MdPhone, MdLocationPin } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { ADDRESS, MAIL, NAVIGATION, PHONE, ΙΝSTAGRAM } from 'data/general';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import Button from 'components/Button';
import MobileHeader from 'components/MobileHeader';
import { Locale } from 'i18n-config';

const Header = ({ dictionary, lang }: { dictionary: any; lang: Locale }) => {
  const pathname = usePathname();

  const linksConfig = useMemo(
    () => [
      { path: `/${lang}`, text: dictionary.header.home },
      { path: `/${lang}/services`, text: dictionary.header.services },
      { path: `/${lang}/about`, text: dictionary.header.about },
      { path: `/${lang}/wiki`, text: dictionary.header.wiki },
      { path: `/${lang}/contact`, text: dictionary.header.contact },
      { path: `/${lang}/themes`, text: dictionary.header.themes }
    ],
    [dictionary, lang]
  );

  const isMobile = 641 < 640;

  const scrollToAppointment = useCallback(() => {
    const appointmentDiv = document.getElementById('appointment-name');

    if (appointmentDiv) {
      appointmentDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      appointmentDiv.focus();
    }
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header>
      <nav className='bg-base-100'>
        <div className='flex flex-wrap justify-center items-center sm:justify-end sm:items-end  w-full mb-4 bg-base-300 gap-7 text-primary-content py-3 pr-10'>
          <Link
            className='text-md flex gap-2 items-center active:text-bg-primary-content'
            href={`tel:${PHONE}`}
          >
            <BsInstagram size={30} />
            <span className='hidden sm:inline-block'>{ΙΝSTAGRAM}</span>
          </Link>
          <Link
            className='text-md flex gap-2 items-center active:text-bg-primary-content'
            href={`tel:${PHONE}`}
          >
            <MdPhone size={30} />
            <span className='hidden sm:inline-block'>{PHONE}</span>
          </Link>
          <Link className='text-md flex gap-2 items-center' href={`mailto:${MAIL}`}>
            <MdMail size={30} />
            <span className='hidden sm:inline-block'>{MAIL}</span>
          </Link>
          <Link className='text-md flex gap-2 items-center' href={NAVIGATION}>
            <MdLocationPin size={30} />
            <span className='hidden sm:inline-block'> {ADDRESS}</span>
          </Link>
        </div>
        <ul className='w-full flex flex-col sm:flex-row gap-6 justify-center items-center mr-1'>
          <Link href='/' className='flex items-center'>
            <img src='/images/logo.png' alt='Flowbite Logo' width='100px' />
          </Link>
          {linksConfig.map(linkConfig => {
            let isActive = pathname === linkConfig.path;

            if (linkConfig.path !== '/' && pathname) {
              isActive = pathname === linkConfig.path;
            }

            return (
              <li key={linkConfig.path}>
                <Link
                  href={linkConfig.path}
                  className={`font-bold hover:text-accent ${isActive ? 'text-accent' : ''}`}
                >
                  {linkConfig.text}
                </Link>
              </li>
            );
          })}
          <Button onClick={scrollToAppointment} outlined>
            Κλεισε Ραντεβου
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
