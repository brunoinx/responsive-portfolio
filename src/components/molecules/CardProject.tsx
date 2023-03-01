import { ProjectProps } from '../../data/projects';

type Props = Omit<ProjectProps, 'id'>;

export function CardProject({ title, description, img: Img }: Props) {
  return (
    <div className="relative rounded-[30px] overflow-hidden group before:content-[''] before:rounded-3xl before:w-full before:h-0 before:absolute before:bg-gradient-to-br from-[#AA367C]/80 to-[#4A2FBD]/80 hover:before:h-full before:transition-all before:duration-[400ms]">
      <img src={Img} alt="Projeto 1" className="w-full m-auto" />

      <div className="w-full absolute text-center top-[65%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[500ms] ease-in-out">
        <h4 className="text-white font-centraBold text-3xl leading-5 mb-2">
          {title}
        </h4>
        <span className="text-white italic text-lg">{description}</span>
      </div>
    </div>
  );
}
