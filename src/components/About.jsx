import React from 'react';
import aboutImg from '../assets/profile-ud.jpeg';

export const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-fit sm:h-fit py-8 px-4 my-8 lg:h-full text-slate-900'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline-block border-b-4 border-teal-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid place-items-center sm:grid-cols-2 gap-8 px-4'>
          <div className=' text-4xl font-bold'>
            <img src={aboutImg} className=' mt-3 h-64 rounded-full' />
          </div>
          <div>
            <p className='font-bold tracking-wider md:text-left text-center  '>
              I am an enthusiastic and detail-oriented professional with
              foundational experience in developing native Android applications.
              Proficient in both Java and Kotlin programming languages. <br />{' '}
              <br />I am excited to apply my skills to advance in Android
              application development. I excel in collaborative settings,
              seamlessly engaging with cross-functional teams, where my
              meticulous attention to detail and unwavering dedication shine
              through
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
