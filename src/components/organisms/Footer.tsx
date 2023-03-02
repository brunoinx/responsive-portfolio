import Logo from '../../assets/img/logo.svg';

import { CardNewsLetter } from '../molecules/CardNewsLetter';
import { GroupButtons } from '../molecules/GroupButtons';

export function Footer() {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pb-14 max-h-[350px]">
      <div className="pt-52 w-full max-w-[1296px] m-auto relative">
        <CardNewsLetter />

        <div className="w-full flex items-center justify-between">
          <img src={Logo} alt="Logo" className="scale-110" />

          <div>
            <div className="mb-5">
              <GroupButtons sizeButtons="lg" />
            </div>

            <span className="text-[#b8b8b8] text-lg">
              Copyright 2022. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
