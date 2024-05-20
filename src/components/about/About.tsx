import { CardStack } from '../ui/card-stack/CardStack';
import { CARDS, education, experience } from '@/locales';
import { Bio } from './Bio';
import { Skills } from './Skills';
import { SoftSkills } from './SoftSkills';
import { Timeline } from './Timeline';

export const About = () => {
  return (
    <>
      <div className="w-full h-full xl:h-[32rem] bg-black/[0.96] bg-grid-white/[0.07] antialiased grid grid-rows-3 lg:grid-rows-1 space-y-6 lg:grid-cols-3 lg:space-y-0 md:place-items-center px-10 ">
        {/* Bio component*/}
        <section className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-neutral-900 border-[1px] border-white/20 rounded-3xl px-10 py-6">
          <Bio />
        </section>

        {/* CardStack component */}
        <aside className="w-full h-auto md:h-4/5 xl:h-4/5 pt-7">
          <CardStack items={CARDS} />
        </aside>

        {/* Skills & SoftSkills component */}
        <aside className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-neutral-900 border-[1px] border-white/20 rounded-3xl px-10 py-6">
          <section className="w-full flex flex-col mb-6">
            <Skills />
          </section>
          <article className="flex flex-col">
            <SoftSkills />
          </article>
        </aside>
      </div>
      <div className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-2 md:place-items-center p-10 ">
        <section className="relative max-h-screen bg-neutral-900 border-[1px] border-white/20 rounded-3xl px-8 py-6 flex flex-col justify-center">
          <Timeline timelineTitle={education.title} info={education.info} />
        </section>
        <aside className="relative max-h-screen bg-neutral-900 border-[1px] border-white/20 rounded-3xl px-8 py-6 flex flex-col justify-center">
          <Timeline timelineTitle={experience.title} info={experience.info} />
        </aside>
      </div>
    </>
  );
};
