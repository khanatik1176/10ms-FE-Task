import { toggleLanguageType } from '@/types/Navtypes';
import React, { FC } from 'react';

const NavToggleBtn :FC<toggleLanguageType> = ({toggleLanguage, isEnglish}) => {
  return (
    <div className='flex items-center'>
      <button
        onClick={toggleLanguage}
        className='mx-3 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-black transition-colors hover:bg-gray-50'
      >
        {isEnglish ? 'EN' : 'বাং'}
      </button>
    </div>
  );
};

export default NavToggleBtn;
