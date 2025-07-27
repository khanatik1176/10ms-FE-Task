import React, { FC } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { InstructorSection } from '@/types/Landingtypes';
import CustomAvatar from './CustomAvatar';

const InstructorArea: FC<InstructorSection> = ({ values, name }) => {
  return (
    <div className='pl-[350px] pt-10'>
      <h2 className='mb-4 text-xl font-semibold md:text-2xl'>
        {name}
      </h2>
      <div className='min-h-[150px] w-full max-w-[730px] border'>
        <div className='flex items-start gap-6 p-6'>
          <div className='flex-shrink-0 mt-5'>
            {values[0]?.image ? (
              <CustomAvatar src={values[0].image} alt="Instructor Avatar" size={112} />
            ) : null}
          </div>
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