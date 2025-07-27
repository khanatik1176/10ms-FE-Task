'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import NavLogo from '../public/logo/navLogo.svg';
import NavSearchBar from './navComponents/NavSearchBar';
import NavList from './navComponents/NavList';
import NavToggleBtn from './navComponents/NavToggleBtn';
import NavPhone from './navComponents/NavPhone';
import NavLoginBtn from './navComponents/NavLoginBtn';
import { NavbarProps } from '@/types/Navtypes';
const Navbar:FC<NavbarProps> = ({setLang }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggleLanguage = () => {
    setIsEnglish(!isEnglish);
    setLang(isEnglish ? 'bn' : 'en');
  };

  return (
    <div className='sticky top-0 z-50 border-b bg-white md:h-[65px]'>
      <div className='mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 md:px-7'>
        <div className='flex flex-1 items-center gap-3 cursor-pointer'>
          <Image
            src={NavLogo}
            alt='logo'
            className='h-[27px] w-[100px] flex-shrink-0'
          />
          <NavSearchBar />
          <NavList />
          <NavToggleBtn toggleLanguage={handleToggleLanguage} isEnglish={isEnglish} />
          <NavPhone />
          <NavLoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
