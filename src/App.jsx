import React from 'react';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className='overflow-hidden'>
      <div id='home' className='banner '>
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};
