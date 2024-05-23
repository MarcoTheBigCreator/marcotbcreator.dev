import { useTranslations } from 'next-intl';
import { Timeline } from '../ui/timeline/Timeline';

export const Experience = () => {
  const t = useTranslations('timeline.experience');

  const experience = {
    title: t('title'),
    info: t.raw('info'),
  };

  return <Timeline timelineTitle={experience.title} info={experience.info} />;
};
