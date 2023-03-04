import { useEffect } from 'react';
import { navLinks } from '../../data/links';
import { Link } from '../atoms/Link';

export function NavLinks() {
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu a[href^="#"]');

    menuItems.forEach(item => {
      item.addEventListener('click', handleScrollToIdLink);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScrollToIdLink(event: any) {
    event.preventDefault();
    const el = event.target;
    const id = el.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
      top: to - 110,
      behavior: 'smooth',
    });
  }

  return (
    <nav className="menu">
      <ul className="flex flex-row text-white text-2x gap-12">
        {navLinks.map(navLink => (
          <li key={navLink.id}>
            <Link title={navLink.title} href={navLink.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
