import Typewriter from 'typewriter-effect';

import HeroImg from '../../assets/img/header-img.svg';

const availableOffice = ['Mobile Development', 'Frontend Development'];

export function Banner() {
  return (
    <section className="flex justify-between mt-36 gap-4">
      <div className="w-4/6 mr-10">
        <span className="text-white font-centraBold text-xl inline-block py-2 px-3 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] border border-zinc-300 mb-4">
          Welcome to my Portfolio
        </span>

        <h1 className="text-6xl text-zinc-200 font-centraBold">
          Hi guys, i am Bruno!
          <Typewriter
            options={{
              strings: availableOffice,
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h1>

        <p className="text-lg text-zinc-300 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="">
        <img
          src={HeroImg}
          alt="imagem de um astronauta flutuando"
          className="w- h-[90%] px-3 animate-updown-slow"
        />
      </div>
    </section>
  );
}
