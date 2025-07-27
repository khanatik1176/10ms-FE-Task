import React, { FC } from 'react';
import { Check } from 'lucide-react';
import { LearningSection } from '@/types/Landingtypes';

const LearningArea :FC<LearningSection> = ({ values, name }) => {
  return (
    <div className='pl-[350px] pt-10'>
      <h1 className='mb-4 text-2xl font-semibold leading-[30px] text-black'>
        {name}
      </h1>
      <div className='grid min-h-[150px] w-full max-w-[730px] grid-cols-2 gap-4 bg-white p-4 border'>
        {values.map((item) => (
          <div
            key={item?.id}
            className='flex items-start gap-2 p-2'
          >
            <Check  className='h-5 w-5 flex-shrink-0 text-[#6e93d9] mt-[2px]' />
            <div>
              <p className='text-[16px] font-[400] leading-[22px] text-black'>{item?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningArea;