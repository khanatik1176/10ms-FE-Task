import {CourseDetailsSection } from '@/types/Landingtypes';
import React, { FC } from 'react';
import CustomAccordion from './CustomAccordion';


const CourseDetails:FC<CourseDetailsSection> = ({ name, values }) => {
  return (
    <div className='ml-[350px] mt-10 w-full max-w-[730px]'>
      <h1 className='mb-4 text-2xl font-semibold leading-[30px] text-black'>
        {name}
      </h1>
      <CustomAccordion items={values} />
    </div>
  );
};

export default CourseDetails;