import React, { useContext, useEffect } from 'react';
import { links } from '../data';
import { NavContext } from './Header';

export const Navlinks = ({ Classes }) => {
  const resetNavBar = useContext(NavContext);
  useEffect(() => {
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
        resetNavBar.resetNav(false);
      });
    });
  }, []);
  return (
    <>
      {links.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id} className={Classes}>
            <a href={href} className='scroll-link'>
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};
