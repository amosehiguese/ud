import { useEffect, useState } from 'react';

export const Footer = () => {
  const [year, setYear] = useState(0);

  const getYear = () => {
    const yr = new Date().getFullYear();
    setYear(yr);
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className='bg-slate-600 p-7 text-center capitalize'>
      <p className='text-lg tracking-wide font-bold text-white'>
        copyright &copy; Uduak Umanah <span>{year}</span>. all rights reserved
      </p>
    </footer>
  );
};
