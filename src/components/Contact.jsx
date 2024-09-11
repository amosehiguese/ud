import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useAnimate } from 'framer-motion';
import pdf from '../assets/uduakcv.pdf';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [scope, animate] = useAnimate();
  const form = useRef();

  const sendEmail = (e) => {
    animate([
      ['.sendEmailBtn', { scale: 0.8 }, { duration: 0.1, at: '<' }],
      ['.sendEmailBtn', { scale: 1 }, { duration: 0.000001 }],
    ]);
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(email);

    if (name !== '' && email !== '' && message !== '') {
      if (isValidEmail) {
        setIsSubmitting(true);
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            (result) => {
              toast.success(
                "Thank you for reaching out. I'll reply to you soon. "
              );
              setIsSubmitting(false);
            },
            (error) => {
              toast.error(
                'oopsie! unable to reach me at the moment. Please do reach out to me on social media.'
              );
            }
          );
      } else {
        toast.error('please enter a valid email');
      }
    } else if (email !== '' && message !== '') {
      toast.error('name field is required');
    } else if (name !== '' && message !== '') {
      toast.error('email field is required');
    } else if (name !== '' && email !== '') {
      toast.error('message field is required');
    } else {
      toast.error('please fill all fields');
    }
  };
  return (
    <div
      id='contact'
      className='w-full bg-slate-100 h-fit py-8 px-4 mt-4 contact flex justify-center items-center p-4 text-slate-900'
    >
      <form ref={form} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 '>
          <p className='text-4xl text-center font-bold inline border-b-4 border-slate-900 text-slate-900'>
            Contact
          </p>
          <p className='text-slate-900 font-bold py-4'>
            Please feel free to touch with me.
          </p>
        </div>
        <input
          className=' bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4'
          type='text'
          placeholder='Name'
          name='user_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className=' bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4 my-4'
          type='email'
          placeholder='Email'
          name='user_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className=' resize-none bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-white py-2 px-4'
          rows='10'
          placeholder='Message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div ref={scope} className='flex justify-around gap-4'>
          <button
            type='submit'
            onClick={sendEmail}
            disabled={isSubmitting}
            className='text-white bg-gray-700 hover:bg-gray-900  px-4 py-3 my-8 mx-auto flex items-center  hover:scale-110  duration-300  sendEmailBtn'
          >
            {isSubmitting ? (
              <>
                <div
                  className='inline-block h-8 w-8 animate-spin mr-2 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                  role='status'
                >
                  <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'></span>
                </div>
                Sending...
              </>
            ) : (
              ' Contact Me'
            )}
          </button>
          <a
            href={pdf}
            download='Uduak-Umanah-resume.pdf'
            className='text-white bg-gray-700 hover:bg-gray-900  px-4 py-3 my-8 mx-auto flex items-center  hover:scale-110  duration-300 '
          >
            Download CV
          </a>
        </div>
      </form>
    </div>
  );
};
