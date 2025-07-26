'use client';
import CourseLaidOutSection from '@/components/CourseLaidOutSection';
import InstructorArea from '@/components/InstructorArea';
import Navbar from '@/components/Navbar';
import TitleArea from '@/components/TitleArea';
import { fetchAllData } from '@/helpers/LandingApi';
import { useQuery } from '@tanstack/react-query';

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

  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <TitleArea
        title={TitleDetails.title}
        description={TitleDetails.description}
        media={media}
        ctaText={ctaText}
        checkList={checkList}
        isLoading={isLoading}
      />
      <InstructorArea 
        values={instructorList}
      />
      <CourseLaidOutSection
        name={featureSection?.name}
        description={featureSection?.description}
        bg_color={featureSection?.bg_color}
        order_idx={featureSection?.order_idx}
        values={featureList}
      />
      <div className='p-8'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <pre className='rounded bg-gray-100 p-4'>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
