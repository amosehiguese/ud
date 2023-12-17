import React from 'react';

export const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full bg-slate-100 h-fit py-8 px-4 mt-4 contact flex justify-center items-center p-4 text-slate-900'
    >
      <form
        method='POST'
        action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8 '>
          <p className='text-4xl text-center font-bold inline border-b-4 border-slate-900 text-slate-900'>
            Contact
          </p>
          <p className='text-slate-900 font-bold py-4'>
            Please feel free to touch with me.
          </p>
        </div>
        <input
          className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4 my-4'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='rounded-3xl resize-none bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white bg-gray-700 hover:bg-gray-900 rounded-full px-4 py-3 my-8 mx-auto flex items-center'>
          Contact Me
        </button>
      </form>
    </div>
  );
};
