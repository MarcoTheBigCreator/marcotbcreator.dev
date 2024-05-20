import { CardStack } from '../ui/card-stack/CardStack';
import { CARDS } from '@/locales';
import { Bio } from './Bio';
import { Skills } from './Skills';
import { SoftSkills } from './SoftSkills';

export const About = () => {
  return (
    <div className="w-full h-full xl:h-[32rem] bg-black/[0.96] bg-grid-white/[0.07] antialiased grid grid-cols-1 space-y-6 lg:grid-cols-3 lg:space-y-0 md:place-items-center px-10 ">
      {/* Bio component*/}
      <section className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-zinc-950 border-[1px] border-white/10 rounded-3xl px-10 py-6">
        <Bio />
      </section>

      {/* CardStack component */}
      <aside className="w-full h-auto lg:h-full xl:h-5/6 md:w-11/12 px-10 py-6 flex items-center justify-center">
        <CardStack items={CARDS} />
      </aside>

      {/* Skills & SoftSkills component */}
      <aside className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-zinc-950 border-[1px] border-white/10 rounded-3xl px-10 py-6">
        <section className="w-full flex flex-col mb-6">
          <Skills />
        </section>
        <article className="flex flex-col">
          <SoftSkills />
        </article>
      </aside>
    </div>
  );
};
