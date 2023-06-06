'use client';

import { MdMail, MdPhone, MdLocationPin, MdMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import { ADDRESS, MAIL, PHONE } from 'data/general';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import Button from 'components/Button';

const linksConfig = [
  { path: '/', text: 'Αρχική' },
  { path: '/services', text: 'Υπηρεσίες' },
  { path: '/scientific-articles', text: 'Eπιστημονικά Άρθρα' },
  { path: '/curriculum', text: 'Βιογραφικό' },
  { path: '/contact', text: 'Επικοινωνία' }
];

const MobileHeader = () => {
  const pathname = usePathname();

  const scrollToAppointment = useCallback(() => {
    const appointmentDiv = document.getElementById('appointment-name');

    if (appointmentDiv) {
      appointmentDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      appointmentDiv.focus();
    }
  }, []);

  return (
    <header>
      <nav className='pb-5 bg-white'>
        <div className='flex flex-wrap justify-end items-end  max-w-screen mb-4 bg-bg-primary-content gap-7  text-primary-50 py-3 pr-1'>
          <MdMenu className='ml-auto' size={40} />
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
