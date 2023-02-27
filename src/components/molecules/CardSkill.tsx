import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { skills } from '../../data/skills';
import { ArrowButton } from '../atoms/ArrowButton';
import { SkillPercentage } from '../atoms/SkillPercentage';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = skills.map(skill => (
  <SkillPercentage key={skill.id} title={skill.name} value={skill.percentage} />
));

export function CardSkill() {
  return (
    <div className="w-[80%] bg-[#151515] rounded-[64px] -mt-12 mb-1 px-12 py-14 z-10 flex flex-col items-center">
      <h2 className="text-5xl text-white font-centraBold mb-2">Skills</h2>

      <p className="text-zinc-400 text-lg font-centraRegular mt-3 mb-[65px]">
        Acompanhe por aqui todas as minhas skills e stacks as quais tenho
        proficiência, baseadas em níveis percentuais.
      </p>

      <div className="relative w-full max-w-[810px] max-h-[260px]">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          renderPrevButton={() => <ArrowButton type="left" />}
          renderNextButton={() => <ArrowButton type="right" />}
          infinite
        />
      </div>
    </div>
  );
}
