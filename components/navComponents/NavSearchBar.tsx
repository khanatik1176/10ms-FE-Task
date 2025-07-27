import { Search } from 'lucide-react';
import React from 'react';

const NavSearchBar = () => {
  return (
    <div className='relative w-full max-w-[350px]'>
      <div className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400'>
        <Search className='h-4 w-4' />
      </div>
      <input
        type='text'
        placeholder='স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...'
        className='shadow-0 w-full rounded-b-[23px] rounded-t-[23px] border-0 py-3 pl-10 pr-[12px] text-xs placeholder:text-gray-400 md:border'
      />
    </div>
  );
};

export default NavSearchBar;
