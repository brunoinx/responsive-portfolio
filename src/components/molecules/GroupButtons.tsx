import { SocialButton } from '../atoms/SocialButton';

import LinkedInIcon from '../../assets/img/nav-icon1.svg';
import FacebookIcon from '../../assets/img/nav-icon2.svg';
import InstaIcon from '../../assets/img/nav-icon3.svg';

export function GroupButtons() {
  return (
    <div className="flex flex-row items-center gap-3">
      <SocialButton icon={LinkedInIcon} />
      <SocialButton icon={FacebookIcon} />
      <SocialButton icon={InstaIcon} />
    </div>
  );
}
