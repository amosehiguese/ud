import React from 'react';

import KOTLIN from '../assets/kotlin.png';
import Java from '../assets/java.jpg';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';

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
            <img className='w-20 mx-auto' src={KOTLIN} alt='HTML icon' />
            <p className='my-4'>KOTLIN</p>
          </div>

          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt='SASS icon' />
            <p className='my-4'>JAVA</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={JavaScript}
              alt='Javascript icon'
            />
            <p className='my-4'>JAVASCRIPT</p>
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
