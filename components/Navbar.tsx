'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLogo from '../public/logo/navLogo.svg';
import NavSearchBar from './navComponents/navSearchBar';
import NavList from './navComponents/NavList';
import NavToggleBtn from './navComponents/NavToggleBtn';
import NavPhone from './navComponents/NavPhone';
import NavLoginBtn from './navComponents/NavLoginBtn';
const Navbar = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className='sticky top-0 z-50 border-b bg-white md:h-[65px]'>
      <div className='mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 md:px-7'>
        <div className='flex flex-1 items-center gap-3'>
          <Image
            src={NavLogo}
            alt='logo'
            className='h-[27px] w-[100px] flex-shrink-0'
          />
          <NavSearchBar />
          <NavList />
          <NavToggleBtn toggleLanguage={toggleLanguage} isEnglish={isEnglish} />
          <NavPhone />
          <NavLoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
