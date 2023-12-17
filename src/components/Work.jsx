import React from 'react';
import { ProjectsCard } from './ProjectsCard';
import { projects } from '../data';

export const Work = () => {
  return (
    <div
      id='work'
      className='w-full py-8 px-4 my-4 md:h-fit h-fit text-slate-900 work'
    >
      <div className='max-w-[1000px] lg:text-center mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl  font-bold inline border-b-4 text-slate-900 border-teal-600'>
            Work
          </p>
          <p className='py-6 font-bold'>
            Please Check out some of my recent work
          </p>
        </div>

        {/* Container */}
        <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};
