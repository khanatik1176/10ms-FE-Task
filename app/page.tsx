'use client';
import CourseDetails from '@/components/CourseDetails';
import CourseLaidOutSection from '@/components/CourseLaidOutSection';
import ExclusiveSection from '@/components/ExclusiveSection';
import InstructorArea from '@/components/InstructorArea';
import LearningArea from '@/components/LearningArea';
import Navbar from '@/components/Navbar';
import TitleArea from '@/components/TitleArea';
import { fetchAllData } from '@/helpers/LandingApi';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const lang = 'en';
  const { data, isLoading, error } = useQuery({
    queryKey: ['ielts-course', lang],
    queryFn: () => fetchAllData(lang),
  });

  const TitleDetails = {
    title: data?.data?.title || '',
    description: data?.data?.description || '',
  };
  const media = data?.data?.media || [];

  const ctaText = data?.data?.cta_text || 'Enroll Now';

  const checkList = data?.data?.checklist;

  const instructorsSection = data?.data?.sections?.find(
    (section: any) => section.type === 'instructors'
  );
  const instructorList = instructorsSection?.values || [];

  const featureSection = data?.data?.sections?.find(
    (section: any) => section.type === 'features'
  );
  const featureList = featureSection?.values || [];

  const learningSection = data?.data?.sections?.find(
    (section: any) => section.type === 'pointers'
  );
  const learningList = learningSection?.values || [];

  const exclusiveSection = data?.data?.sections?.find(
    (section: any) => section.type === 'feature_explanations'
  );
  const exclusiveList = exclusiveSection?.values || [];

  const courseDetailsSection = data?.data?.sections?.find(
    (section: any) => section.type === 'about'
  );

  const courseDetailsList = courseDetailsSection?.values || [];

  const seo = data?.data?.seo;

  return (
    <>
      <Head>
        <title>{seo?.title || 'IELTS Course'}</title>
        <meta name='description' content={seo?.description || ''} />
        {(seo?.keywords || []).map((kw: string, idx: number) => (
          <meta key={idx} name='keywords' content={kw} />
        ))}
        {(seo?.defaultMeta || []).map((meta: any, idx: number) => {
          if (meta?.type === 'property') {
            return (
              <meta
                key={idx}
                property={meta.value}
                content={meta.content || ''}
              />
            );
          }
          return (
            <meta key={idx} name={meta.value} content={meta.content || ''} />
          );
        })}
        {(seo?.schema || []).map((schema: any, idx: number) => (
          // eslint-disable-next-line react/no-danger
          <Script
            key={idx}
            id={`ld-json-schema-${idx}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: schema.meta_value || '' }}
          />
        ))}
      </Head>
      <div className={`min-h-screen`}>
        <Navbar />
        <div className='mx-auto w-full max-w-[1920px]'>
          <TitleArea
            title={TitleDetails.title}
            description={TitleDetails.description}
            media={media}
            ctaText={ctaText}
            checkList={checkList}
            isLoading={isLoading}
          />
          <InstructorArea values={instructorList} />
          <CourseLaidOutSection
            name={featureSection?.name}
            description={featureSection?.description}
            bg_color={featureSection?.bg_color}
            order_idx={featureSection?.order_idx}
            values={featureList}
          />
          <LearningArea name={learningSection?.name} values={learningList} />
          <ExclusiveSection exclusiveList={exclusiveList} />
          <CourseDetails
            name={courseDetailsSection?.name}
            type={courseDetailsSection?.type}
            description={courseDetailsSection?.description}
            bg_color={courseDetailsSection?.bg_color}
            order_idx={courseDetailsSection?.order_idx}
            values={courseDetailsList}
          />

          <div>
            {error && <p className='text-red-500'>Error loading data</p>}
            {isLoading && <p className='text-gray-500'>Loading...</p>}
            {!isLoading && !error && (
              <p className='text-green-500'>Data loaded successfully!</p>
            )}
            <div>
              {data && (
                <pre className='whitespace-pre-wrap text-sm text-gray-600'>
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
