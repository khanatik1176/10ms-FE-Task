import React, { FC } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { ExclusiveSectionProps } from '@/types/Landingtypes';

const ExclusiveSection: FC<ExclusiveSectionProps> = ({ exclusiveList, name }) => {
  return (
    <div className='pl-[350px] pt-10'>
      <h1 className='mb-4 text-2xl font-semibold leading-[30px] text-black'>
        {name}
      </h1>
      <div className='w-full max-w-[730px] rounded-lg border bg-white p-5'>
        {exclusiveList.map((section, idx) => (
          <React.Fragment key={section?.id}>
            <div className='flex gap-0'>
              {/* Left */}
              <div className='w-full max-w-[430px]'>
                <h2 className='mb-1 text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]'>
                  {section?.title}
                </h2>
                {Array.isArray(section?.checklist) &&
                  section.checklist.map((text, i) => (
                    <div key={i} className='flex items-start gap-5 pb-2'>
                      <Check className='mt-[2px] h-5 w-5 flex-shrink-0 text-[#6e93d9]' />
                      <p className='text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]'>
                        {text}
                      </p>
                    </div>
                  ))}
              </div>
              <div className='ml-auto flex items-center justify-end'>
                <Image
                  src={section?.file_url}
                  alt={section?.title}
                  width={220}
                  height={220}
                  className='h-[220px] w-[220px] rounded-lg object-cover shadow'
                />
              </div>
            </div>
            {idx < exclusiveList.length - 1 && (
              <hr className='my-6 border-gray-300' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveSection;
