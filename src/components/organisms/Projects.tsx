import { CardProject } from '../molecules/CardProject';

import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section>
      <div className="bg-black w-full py-20">
        <div className="w-full max-w-[1296px] m-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl font-centraBold">Projetos</h2>
            <p className="w-3/5 m-auto text-[#b8b8b8] font-centraRegular text-lg mt-5 leading-5">
              Uma lista de projetos que foram criados durante minha carreira e
              aprendizado como desenvolvedor. Os projetos são websites,
              aplicativos mobile e API's REST feitas em NodeJS.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-3 grid-rows-2">
            {projects.map(project => (
              <CardProject
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
