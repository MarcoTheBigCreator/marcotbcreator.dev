import { useTranslations } from 'next-intl';
import { CardStack } from '../ui/card-stack/CardStack';
import CardsComponent from '../ui/highlight-text/HighlightText';

export const Expertise = () => {
  const cards = CardsComponent();
  const t = useTranslations('titles');

  return <CardStack items={cards} title={t('expertiseTitle')} />;
};
