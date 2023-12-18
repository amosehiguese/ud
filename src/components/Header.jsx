import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const fixNav = () => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.nav');
      const scrollHeight = window.scrollY;
      const navHeight = navbar.getBoundingClientRect().height;
      if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
      } else {
        navbar.classList.remove('fixed-nav');
      }
    });
  };

  useEffect(() => {
    fixNav();
    const scrollLinks = document.querySelectorAll('.scroll-link');
    const navbar = document.querySelector('.nav');
    const linksContainer = document.querySelector('.links-container');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
          position = position - navHeight;
        }

        if (navHeight > 82) {
          position = position + containerHeight;
        }

        window.scrollTo({
          left: 0,
          top: position,
        });
        setNav(false);
      });
    });
  }, []);

  return (
    <div className='nav w-full mx-auto z-50 h-[80px] flex justify-between items-center px-8  text-white'>
      <div className='lg:pl-8'>
        <h1 className='font-bold text-4xl'>
          <a href='#home' className='scroll-link'>
            UDU<span className='text-teal-300'>AK</span>
          </a>
        </h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex links-container'>
        <li className='uppercase text-sm font-semibold hover:scale-150 transition duration-100'>
          <a href='#home' className='scroll-link'>
            Home
          </a>
        </li>
        <li className='uppercase text-sm font-semibold hover:scale-150 transition duration-100'>
          <a href='#about' className='scroll-link'>
            About
          </a>
        </li>
        <li className='uppercase text-sm font-semibold hover:scale-150 transition duration-100'>
          <a href='#skills' className='scroll-link'>
            Skills
          </a>
        </li>

        <li className='uppercase text-sm font-semibold hover:scale-150 transition duration-100'>
          <a href='#work' className='scroll-link'>
            Work
          </a>
        </li>
        <li className='uppercase text-sm font-semibold hover:scale-150 transition duration-100'>
          <a href='#contact' className='scroll-link'>
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-14 z-50 rounded-md right-4 py-4 px-2 w-fit h-fit transition-opacity  bg-[#08111e] flex flex-col justify-center items-start links-container '
        }
      >
        <li className='py-1 text-1xl uppercase font-semibold scroll-link'>
          <a href='#home' className='  '>
            Home
          </a>
        </li>
        <li className='py-1 text-1xl uppercase font-semibold scroll-link'>
          {' '}
          <a href='#about' className=''>
            About
          </a>
        </li>
        <li className='py-1 text-1xl uppercase font-semibold scroll-link'>
          {' '}
          <a href='#skills' className=''>
            Skills
          </a>
        </li>
        <li className='py-1 text-1xl uppercase font-semibold scroll-link '>
          {' '}
          <a href='#work' className=''>
            Work
          </a>
        </li>
        <li className='py-1 text-1xl uppercase font-semibold scroll-link'>
          {' '}
          <a href='#contact' className=''>
            Contact
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between  rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/uduak-umanah-33936814b/'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between  mt-2 rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/UduakUmanah10'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between  mt-2 rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full text-slate-800'
              href='https://twitter.com/uduak_umanah'
            >
              Twitter <FaSquareXTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
