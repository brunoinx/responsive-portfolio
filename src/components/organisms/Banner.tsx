/* eslint-disable prefer-const */
import Typewriter from 'typewriter-effect';

const availableOffice = ['Mobile Development', 'Frontend Development'];

export function Banner() {
  return (
    <section className="mt-10">
      <h1 className="text-6xl text-zinc-200 font-extrabold tracking-wider">
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
    </section>
  );
}
