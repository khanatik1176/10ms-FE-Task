import { FeatureSection } from '@/types/Landingtypes';
import React, { FC } from 'react';
import Image from 'next/image';

const CourseLaidOutSection: FC<FeatureSection> = ({
  values,
  name,
}) => {
  return (
    <div className='pl-[350px] pt-10'>
      <h1 className='mb-4 text-2xl font-semibold leading-[30px] text-black'>
        {name}
      </h1>
      <div className='grid min-h-[150px] w-full max-w-[730px] grid-cols-2 gap-4 bg-[#111827] p-4'>
        {values.map((item) => (
          <div
            key={item?.id}
            className='flex items-start gap-4 p-2'
          >
            <Image
              src={item?.icon}
              alt={item?.title}
              width={36}
              height={36}
              className='h-12 w-12 flex-shrink-0 object-contain'
            />
            <div>
              <h3 className='text-[18px] font-[500px] leading-[26px] text-white '>
                {item?.title}
              </h3>
              <p className='text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]'>{item?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLaidOutSection;
