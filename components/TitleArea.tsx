'use client';
import { MediaItem, TitleDetails, Video } from '@/types/Landingtypes';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import TitlePart from './TitleAreaComponents/TitlePart';

const getVideosFromMedia = (media: MediaItem[] | undefined): Video[] => {
  if (!Array.isArray(media)) return [];
  return media
    .filter((m: MediaItem) => m.resource_type === 'video')
    .map((m: MediaItem) => ({
      id: m.resource_value,
      thumbnail:
        m.thumbnail_url ||
        `https://img.youtube.com/vi/${m.resource_value}/maxresdefault.jpg`,
    }));
};

const TitleArea: FC<TitleDetails> = ({
  title,
  description,
  media,
  ctaText,
  checkList,
  isLoading,
}) => {
  const videos = getVideosFromMedia(
    Array.isArray(media) && Array.isArray(media[0])
      ? (media as unknown as MediaItem[][])
          .flat()
          .filter(
            (item): item is MediaItem =>
              typeof item === 'object' &&
              'resource_type' in item &&
              'resource_value' in item
          )
      : Array.isArray(media)
        ? (media as unknown as MediaItem[])
        : undefined
  );
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const previewCount = 6;
  const start = Math.max(
    0,
    Math.min(current - 2, videos.length - previewCount)
  );
  const previews = videos.slice(start, start + previewCount);

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    setPlaying(false);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev < videos.length - 1 ? prev + 1 : prev));
    setPlaying(false);
  };
  const handlePlay = () => setPlaying(true);

  const [showDetailsOnlyPanel, setShowDetailsOnlyPanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDetailsOnlyPanel(window.scrollY > 900);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='min-h-[300px] bg-primary-grad'>
        <TitlePart title={title} description={description} isLoading={isLoading} />
      </div>
      <div className='relative'>
        {!showDetailsOnlyPanel ? (
          <div className='absolute -top-[250px] left-[1160px] flex w-[410px] flex-col border bg-white p-1 shadow-xl'>
            <div className='relative'>
              <div className='relative aspect-video w-[400px] overflow-hidden rounded-lg bg-black shadow-lg'>
                {!playing && videos.length > 0 && (
                  <>
                    <Image
                      width={400}
                      height={225}
                      src={videos[current].thumbnail}
                      alt='Main Preview'
                      className='absolute left-0 top-0 z-10 h-full w-full rounded-lg object-cover'
                    />
                    <button
                      onClick={handlePlay}
                      className='absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100'
                    >
                      <Play className='h-8 w-8 text-primary' />
                    </button>
                  </>
                )}
                {playing && videos.length > 0 && (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube.com/embed/${videos[current].id}?autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  ></iframe>
                )}
                <button
                  onClick={handlePrev}
                  disabled={current === 0}
                  className='absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 disabled:opacity-50'
                >
                  <ChevronLeft className='h-6 w-6 text-gray-700' />
                </button>
                <button
                  onClick={handleNext}
                  disabled={current === videos.length - 1}
                  className='absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 disabled:opacity-50'
                >
                  <ChevronRight className='h-6 w-6 text-gray-700' />
                </button>
              </div>
              <div className='mx-auto mt-4 flex w-[400px] items-center justify-center gap-2 overflow-hidden pl-4'>
                {previews.map((vid, idx) => (
                  <div
                    key={vid.id}
                    className={`flex h-10 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 bg-black ${videos[current].id === vid.id ? 'border-primary' : 'border-gray-300'}`}
                    onClick={() => {
                      setCurrent(start + idx);
                      setPlaying(false);
                    }}
                  >
                    <Image
                      src={vid.thumbnail}
                      alt={`Preview ${vid.id}`}
                      className='h-full w-full rounded-lg object-cover'
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='pl-4 pt-8 text-2xl font-semibold'>৳1000</div>
            <div className='w-full p-4'>
              <button className='w-full rounded-lg border-b-4 border-green-700 bg-primary py-2 text-white transition-colors hover:bg-primaryHover'>
                {ctaText?.name}
              </button>
            </div>
            <div className='pb-6'>
              <p className='p-4 text-xl font-semibold'>এই কোর্সে যা থাকছে</p>
              <ul className='space-y-3 px-4'>
                {Array.isArray(checkList) &&
                  checkList.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-2 text-base'>
                      {typeof item.icon === 'string' ? (
                        <Image
                          src={item.icon}
                          alt=''
                          width={20}
                          height={20}
                          className='h-5 w-5'
                          style={{ color: item.color }}
                        />
                      ) : (
                        item.icon &&
                        React.createElement(item.icon, {
                          className: 'h-5 w-5',
                          style: { color: item.color },
                        })
                      )}
                      <span style={{ color: item.color }}>{item.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className='absolute right-[0px] top-[800px] flex w-full max-w-[410px] items-center gap-16 px-0 py-4'>
              <p className='text-xs font-semibold text-gray-400'>
                কোর্সটি সম্পর্কে বিস্তারিত জানতে
              </p>
              <span className='flex items-center gap-2 text-xs text-primary underline'>
                <Phone className='h-4 w-4 fill-current text-primary' />
                <p>ফোন করুন (16910)</p>
              </span>
            </div>
          </div>
        ) : (
          <div className='fixed left-[1160px] top-[150px] flex w-[410px] flex-col border bg-white p-1 shadow-xl'>
            <div className='pl-4 pt-8 text-2xl font-semibold'>৳1000</div>
            <div className='w-full p-4'>
              <button className='w-full rounded-lg border-b-4 border-green-700 bg-primary py-2 text-white transition-colors hover:bg-primaryHover'>
                {ctaText?.name}
              </button>
            </div>
            <div className='pb-6'>
              <p className='p-4 text-xl font-semibold'>এই কোর্সে যা থাকছে</p>
              <ul className='space-y-3 px-4'>
                {Array.isArray(checkList) &&
                  checkList.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-2 text-base'>
                      {typeof item.icon === 'string' ? (
                        <Image
                          src={item.icon}
                          alt=''
                          width={20}
                          height={20}
                          className='h-5 w-5'
                          style={{ color: item.color }}
                        />
                      ) : (
                        item.icon &&
                        React.createElement(item.icon, {
                          className: 'h-5 w-5',
                          style: { color: item.color },
                        })
                      )}
                      <span style={{ color: item.color }}>{item.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className='absolute right-[0px] top-[520px] flex w-full max-w-[410px] items-center gap-10 px-3 py-4'>
              <p className='text-xs font-semibold text-gray-400'>
                কোর্সটি সম্পর্কে বিস্তারিত জানতে
              </p>
              <span className='flex items-center gap-2 text-xs text-primary underline'>
                <Phone className='h-4 w-4 fill-current text-primary' />
                <p>ফোন করুন (16910)</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TitleArea;
