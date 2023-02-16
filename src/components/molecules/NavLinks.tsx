import { Link } from '../atoms/Link';

export function NavLinks() {
  return (
    <nav>
      <ul className="flex flex-row text-white text-2x gap-12">
        <li>
          <Link title="Home" url="#" />
        </li>
        <li>
          <Link title="Skills" url="#" />
        </li>
        <li>
          <Link title="Projects" url="#" />
        </li>
      </ul>
    </nav>
  );
}
