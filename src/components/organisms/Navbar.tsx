import { useEffect, useState } from 'react';

import { NavLinks } from '../molecules/NavLinks';
import { GroupButtons } from '../molecules/GroupButtons';

import Logo from '../../assets/img/logo.svg';
import clsx from 'clsx';

export function Navbar() {
  const [headerIsVisible, setIsHeaderIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 130) {
        setIsHeaderIsVisible(false);
      } else {
        setIsHeaderIsVisible(true);
      }
    });
  }, []);

  return (
    <header
      id="scrollArea"
      className={clsx('flex flex-row justify-between pt-10 pb-6', {
        'fixed top-0 left-0 z-50 px-[180px] bg-[#121212] w-screen animate-fade-in-top':
          !headerIsVisible,
      })}
    >
      <img src={Logo} alt="Logo" className="h-8" />

      <div className="flex flex-row items-center gap-16">
        <NavLinks />

        <GroupButtons />
      </div>
    </header>
  );
}
