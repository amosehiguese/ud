import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ReactTyped from 'react-typed';

export const Hero = () => {
  return (
    <div className='w-full h-screen lg:h-[calc(100vh-80px)] '>
      {/* Container */}
      <div className='lg:w-fit xl:w-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Uduak Umanah
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
          I'm{' '}
          <ReactTyped strings={['an Android Engineer']} typeSpeed={100} loop />
        </h2>
        <p className='text-white text-2xl font-bold py-4 max-w-[700px]'>
          Crafting elevating mobile user experiences with Kotlin
        </p>
        <div>
          <a
            href='#work'
            className='bg-blue-600 w-fit rounded-full text-white transition-all group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110  duration-300 scroll-link'
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
