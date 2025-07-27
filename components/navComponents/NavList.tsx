import { ChevronDown } from 'lucide-react';
import React from 'react';

const NavList = () => {
  return (
    <div className='ml-4 flex items-center gap-6'>
      <span className='flex cursor-pointer items-center gap-1 text-sm font-medium text-secondary hover:text-primary'>
        Class 6-12
        <ChevronDown className='h-4 w-4' />
      </span>
      <span className='flex cursor-pointer items-center gap-1 text-sm font-medium text-secondary hover:text-primary'>
        Skills
        <ChevronDown className='h-4 w-4' />
      </span>
      <span className='cursor-pointer text-sm font-medium text-secondary hover:text-primary'>
        Admission
      </span>
      <span className='flex cursor-pointer items-center gap-1 text-sm font-medium text-secondary hover:text-primary'>
        Online Batch
        <ChevronDown className='h-4 w-4' />
      </span>
      <span className='flex cursor-pointer items-center gap-1 text-sm font-medium text-secondary hover:text-primary'>
        English Center
        <ChevronDown className='h-4 w-4' />
      </span>
      <span className='flex cursor-pointer items-center gap-1 text-sm font-medium text-secondary hover:text-primary'>
        More
        <ChevronDown className='h-4 w-4' />
      </span>
    </div>
  );
};

export default NavList;
