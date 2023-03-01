import BgImage from '../../assets/img/color-sharp.png';
import { CardSkill } from '../molecules/CardSkill';

export function Skills() {
  return (
    <section>
      <div className="relative">
        <div className="w-full bg-[#121212] flex justify-center pb-10">
          <CardSkill />
        </div>

        <div className="overflow-hidden w-2/5 absolute top-[20%] bottom-0">
          <img src={BgImage} alt="background gradiente" />
        </div>
      </div>
    </section>
  );
}
