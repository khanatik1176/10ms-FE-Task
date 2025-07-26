import React, { FC } from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { InstructorSection, InstructorValue } from '@/types/Landingtypes';

const InstructorArea: FC<InstructorSection> = ({ values }) => {
  return (
    <div className='pl-[350px] pt-10'>
      <h2 className='mb-4 text-xl font-semibold md:text-2xl'>
        {values[0]?.short_description}
      </h2>
      <div className='min-h-[150px] w-full max-w-[730px] border'>
        <div className='flex items-start gap-6 p-6'>
          {/* Avatar Section */}
          <div className='flex-shrink-0 mt-5'>
            {values[0]?.image ? (
              <Image
                src={values[0].image}
                alt='Instructor Avatar'
                width={112}
                height={112}
                className='h-20 w-20 rounded-full object-cover shadow-md'
              />
            ) : null}
          </div>
          {/* Info Section */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-1'>
              <h3 className='text-lg font-normal text-black'>
                {values[0]?.name}{' '}
              </h3>
              <span>
                <ChevronRightIcon size={16} />
              </span>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: values[0]?.description || '' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorArea;
