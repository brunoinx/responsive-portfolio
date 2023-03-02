import { SocialButton } from '../atoms/SocialButton';

import LinkedInIcon from '../../assets/img/nav-icon1.svg';
import FacebookIcon from '../../assets/img/nav-icon2.svg';
import InstaIcon from '../../assets/img/nav-icon3.svg';

interface Props {
  sizeButtons?: 'sm' | 'lg';
}

export function GroupButtons({ sizeButtons }: Props) {
  return (
    <div className="flex flex-row items-center gap-3">
      <SocialButton icon={LinkedInIcon} size={sizeButtons} />
      <SocialButton icon={FacebookIcon} size={sizeButtons} />
      <SocialButton icon={InstaIcon} size={sizeButtons} />
    </div>
  );
}
