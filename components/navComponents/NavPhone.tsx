import { Phone } from 'lucide-react';
import React from 'react';

const NavPhone = () => {
  return (
    <div className='flex items-center gap-2 text-primary cursor-pointer'>
      <Phone className='h-4 w-4 fill-current' />
      <span className='text-sm font-medium'>16910</span>
    </div>
  );
};

export default NavPhone;
