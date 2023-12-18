import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { SiAndroidstudio } from 'react-icons/si';
import ReactTyped from 'react-typed';

export const Hero = () => {
  return (
    <div className='w-full  h-[calc(100vh-80px)] '>
      {/* Container */}
      <div className='lg:w-fit xl:w-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative'>
        {/* Image */}
        <SiAndroidstudio className='hidden md: xl:inline text-[14rem]  absolute text-teal-300 rounded-full  right-[220px] top-[24px]' />
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Uduak Uma<span className='text-teal-300'>nah</span>
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
          I'm{' '}
          <ReactTyped strings={['an Android Engineer']} typeSpeed={100} loop />
        </h2>
        <p className='text-white text-2xl font-bold py-4 max-w-[700px]'>
          who loves the android way of crafting elevating user experience with
          kotlin
        </p>
        <div>
          <a
            href='#work'
            className='bg-teal-600 w-fit  text-white transition-all group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600 hover:scale-110  duration-300 scroll-link'
          >
            View Work
            <span className='duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
