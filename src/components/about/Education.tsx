import { useTranslations } from 'next-intl';
import { Timeline } from '../ui/timeline/Timeline';

export const Education = () => {
  const t = useTranslations('timeline.education');

  const education = {
    title: t('title'),
    info: t.raw('info'),
  };

  return <Timeline timelineTitle={education.title} info={education.info} />;
};
