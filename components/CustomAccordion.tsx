import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CustomAccordionProps } from '@/types/Landingtypes';

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className='rounded-lg border bg-white p-4'>
      {items.map((item, idx) => (
        <div key={item.id}>
          <button
            className='flex w-full items-center justify-between px-2 py-3 text-left font-semibold text-[#1f2937] focus:outline-none'
            onClick={() => handleToggle(idx)}
          >
            <span dangerouslySetInnerHTML={{ __html: item?.title || '' }} />
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                openIdx === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIdx === idx && (
            <div
              className='px-2 pb-3 text-gray-700'
              dangerouslySetInnerHTML={{ __html: item?.description || '' }}
            />
          )}
          {idx < items.length - 1 && (
            <hr className='my-2 border-t-2 border-dotted border-gray-300' />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
