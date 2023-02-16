import { NavLinks } from '../molecules/NavLinks';
import Logo from '../../assets/img/logo.svg';
import { GroupButtons } from '../molecules/GroupButtons';

export function Navbar() {
  return (
    <header className="flex flex-row justify-between w-full m-7">
      <img src={Logo} alt="Logo" className="h-8" />

      <div className="flex flex-row items-center gap-16">
        <NavLinks />

        <GroupButtons />
      </div>
    </header>
  );
}
