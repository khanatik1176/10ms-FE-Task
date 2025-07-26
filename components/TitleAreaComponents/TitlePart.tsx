import { titleTopAreaType } from '@/types/Landingtypes';
import { Star } from 'lucide-react';
import React, { FC } from 'react';

const TitlePart: FC<titleTopAreaType> = ({ title, description, isLoading }) => {
  return (
    <div className='flex items-center gap-10'>
      <div className='w-full max-w-[1050px] pl-[350px] pt-[74px]'>
        <h1 className='mb-2 text-4xl font-semibold text-white'>{title}</h1>
        <span className='mb-2 flex items-center gap-3'>
          {isLoading ? (
            <span className='h-5 w-[120px] animate-pulse rounded bg-gray-300' />
          ) : (
            <>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className='h-5 w-5 fill-current text-[#fea500]'
                />
              ))}
            </>
          )}
          <span className='text-base text-white'>
            {'(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন )'}
          </span>
        </span>
        <p
          className='text-[#9c9ba9]'
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      </div>
    </div>
  );
};

export default TitlePart;
