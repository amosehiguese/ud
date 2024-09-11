import { nanoid } from 'nanoid';
import exposed from './assets/exposed.png';
import hunter from './assets/hunter.png';
import newsapp from './assets/newsapp.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#work', text: 'work' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://openmf.github.io/mobileapps.github.io/assets/img/mifos-mobile.png',
    github: 'https://github.com/openMF/mifos-mobile',
    title: 'Mifos mobile banking Application',
    text: 'Collaborated with developers to integrate UI components, improving UI consistency by 30%.',
  },
  {
    id: nanoid(),
    img: exposed,
    github: 'https://github.com/UduakUmanah10/Exposed',
    title: 'Exposed',
    text: 'collaborated with JetBrains Exposed development team to overhaul the documentation for the Exposed library.',
  },
  {
    id: nanoid(),
    img: hunter,
    github: 'https://github.com/UduakUmanah10/HazardHunter',
    title: 'Hazard Hunter',
    text: 'Hazard Hunter is an Android application designed to bolster safety measures in workplace environments.',
  },
  {
    id: nanoid(),
    img: newsapp,
    github: 'https://github.com/UduakUmanah10/NewsApp',
    title: 'News App',
    text: 'tailored to retrieve data from a news API via a backend system, and subsequently presents it on an Android client.',
  },
];
