import { Bio } from './Bio';
import { Skills } from './Skills';
import { SoftSkills } from './SoftSkills';
import { Expertise } from './Expertise';
import { Education } from './Education';
import { Experience } from './Experience';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('aboutAccessibility');

  return (
    <>
      <div
        className="w-full h-full xl:h-[40rem] bg-black/[0.96] bg-grid-white/[0.07] antialiased grid grid-rows-3 lg:grid-rows-1 space-y-6 lg:grid-cols-3 lg:space-y-0 md:place-items-center px-10 pt-24"
        id="about"
      >
        {/* Bio component */}
        <section
          className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-neutral-900 border-[1px] border-white/20 rounded-3xl p-6"
          aria-labelledby="bio-heading"
        >
          <h2 id="bio-heading" className="sr-only">
            Bio
          </h2>
          <Bio />
        </section>

        {/* Expertise component */}
        <aside
          className="w-full h-auto md:h-4/5 xl:h-4/5 pt-7"
          aria-labelledby="expertise-heading"
        >
          <h2 id="expertise-heading" className="sr-only">
            {t('expertiseHeader')}
          </h2>
          <Expertise />
        </aside>

        {/* Skills & SoftSkills component */}
        <section
          className="w-full h-auto lg:h-full md:w-11/12 xl:h-5/6 bg-neutral-900 border-[1px] border-white/20 rounded-3xl p-6"
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading" className="sr-only">
            {t('skillsHeader')}
          </h2>
          <div className="w-full flex flex-col mb-6">
            <Skills />
          </div>
          <article className="flex flex-col">
            <SoftSkills />
          </article>
        </section>
      </div>

      {/* Education and Experience components */}
      <div
        className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased grid grid-cols-1 space-y-10 lg:space-x-8 lg:space-y-0 lg:grid-cols-2 md:place-items-center p-10 px-16 pt-40"
        aria-labelledby="education-experience-heading"
      >
        <section
          className="bg-neutral-900 border-[1px] border-white/20 rounded-3xl p-6"
          aria-labelledby="education-heading"
        >
          <h2 id="education-heading" className="sr-only">
            {t('educationHeader')}
          </h2>
          <Education />
        </section>
        <aside
          className="bg-neutral-900 border-[1px] border-white/20 rounded-3xl p-6"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" className="sr-only">
            {t('experienceHeader')}
          </h2>
          <Experience />
        </aside>
      </div>
    </>
  );
};
