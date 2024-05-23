import { titleFont } from '@/config/fonts';
import { useTranslations } from 'next-intl';

export const SoftSkills = () => {
  const t = useTranslations();
  const softSkills = t.raw('softSkills');
  interface SoftSkill {
    name: string;
  }

  return (
    <>
      <h2
        className={`${titleFont.className} text-4xl font-bold mb-3 text-white drop-shadow-text`}
      >
        {t('titles.softSkillsTitle')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 ml-1">
        {softSkills.map((softSkill: SoftSkill) => (
          <p key={softSkill.name}>- {softSkill.name}</p>
        ))}
      </div>
    </>
  );
};
