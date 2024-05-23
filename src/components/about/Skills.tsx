import { skills } from '@/locales';
import { AnimatedTooltip } from '../ui/animated-tooltip/AnimatedTooltip';
import { titleFont } from '@/config/fonts';
import { useTranslations } from 'next-intl';

export const Skills = () => {
  const t = useTranslations('titles');

  return (
    <>
      <h2
        className={`${titleFont.className} text-4xl font-bold mb-3 mt-3 text-white drop-shadow-text`}
      >
        {t('skillsTitle')}
      </h2>
      <div className="flex flex-wrap gap-3 ml-1">
        <AnimatedTooltip items={skills} />
      </div>
    </>
  );
};
