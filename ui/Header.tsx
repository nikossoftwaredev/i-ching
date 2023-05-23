'use client';

import { MdMail, MdPhone, MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { ADDRESS, MAIL, PHONE } from 'data/general';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import Button from 'ui/Button';
import MobileHeader from 'ui/MobileHeader';
import { Locale } from 'i18n-config';

const Header = ({ dictionary, lang }: { dictionary: any; lang: Locale }) => {
  const pathname = usePathname();

  const linksConfig = useMemo(
    () => [
      { path: `/${lang}`, text: dictionary.header.home },
      { path: `/${lang}/services`, text: dictionary.header.services },
      { path: `/${lang}/about`, text: dictionary.header.about },
      { path: `/${lang}/wiki`, text: dictionary.header.wiki },
      { path: `/${lang}/contact`, text: dictionary.header.contact }
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

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header>
      <nav className='pb-5 bg-white'>
        <div className='flex flex-wrap justify-end items-end  max-w-screen mb-4 bg-bgPrimary gap-7  text-primary-50 py-3 pr-10'>
          <Link
            className='text-md flex gap-2 items-center active:text-bgPrimary'
            href={`tel:${PHONE}`}
          >
            <MdPhone size={30} />
            {PHONE}
          </Link>
          <Link className='text-md flex gap-2 items-center' href={`mailto:${MAIL}`}>
            <MdMail size={30} />
            {MAIL}
          </Link>
          <Link className='text-md flex gap-2 items-center' href='/contact'>
            <MdLocationPin size={30} />
            {ADDRESS}
          </Link>
        </div>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link href='/' className='flex items-center'>
            <Image src='/images/logo_small.png' alt='Flowbite Logo' />
          </Link>

          <ul className='flex flex-wrap lg:flex-row space-x-8'>
            {linksConfig.map(linkConfig => {
              let isActive = pathname === linkConfig.path;

              if (linkConfig.path !== '/' && pathname) {
                isActive = pathname === linkConfig.path;
              }

              return (
                <li key={linkConfig.path}>
                  <Link
                    href={linkConfig.path}
                    className={`hover:text-textSecondary ${isActive ? 'text-textSecondary' : ''}`}
                  >
                    {linkConfig.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button variant='primary' onClick={scrollToAppointment}>
            Κλείσε Ραντεβού
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
