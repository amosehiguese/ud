import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';

import { IoLogoFirebase } from 'react-icons/io5';
import { FaJava } from 'react-icons/fa6';
import { SiKotlin } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import android from '../assets/android-logo.jpg';

// import { DiMongodb } from 'react-icons/di';

export const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full lg:h-fit py-12 px-4 bg-gray-900 text-white'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-full h-full'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-white '>
            Skills
          </p>
          <p className='py-4 font-bold'>Dive into My Toolbox</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='hover:scale-110 duration-500'>
            <SiKotlin className='mx-auto text-[4rem] text-pink-600' />
            <p className='my-4 '>KOTLIN</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto rounded-md'
              src={android}
              alt='Android icon'
            />
            <p className='my-4'>Android</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <FaJava className='mx-auto text-[4rem]' />
            <p className='my-4'>JAVA</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <SiTypescript className='mx-auto text-[4rem]' />
            <p className='my-4'>TYPESCRIPT</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <IoLogoFirebase className='mx-auto text-[4rem] text-[#F57C00]' />
            <p className='my-4'>FIREBASE</p>
          </div>

          {/* <div className='hover:scale-110 duration-500'>
            <DiMongodb className='mx-auto text-[4rem]' />
            <p className='my-4'>MONGODB</p>
          </div> */}

          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='Github icon' />
            <p className='my-4'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
