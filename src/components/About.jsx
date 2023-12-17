import React from 'react';

export const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-fit sm:h-fit py-8 px-4 my-8 lg:h-full text-slate-900'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline-block border-b-4 border-teal-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm Uduak Umanah, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className='font-bold tracking-wider '>
              I am a proactive and results-driven Tech Support Engineer with a
              robust foundation in technical support, Android, Geoscience, and
              Occupational safety. Specializing in providing hands-on
              assistance, I effectively address challenges for end users and
              system administrators. I collaborate seamlessly with
              cross-functional teams, bringing meticulous attention to detail
              and dedication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
