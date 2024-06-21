import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface Card {
  id: number;
  name: string;
  designations?: string;
  content: string;
}

export const HighlightText = ({ children, className }: Props) => {
  return (
    <span
      className={cn(
        'font-semibold bg-violet-700 text-gray-300 px-1 py-0.5 rounded-2xl',
        className
      )}
    >
      {children}
    </span>
  );
};

const processContent = (content: string) => {
  return content.split('*').map((part, index) => {
    return index % 2 === 1 ? (
      <HighlightText key={index}>{part}</HighlightText>
    ) : (
      part
    );
  });
};

const CardsComponent = () => {
  const t = useTranslations();
  const cards: Card[] = t.raw('cards');

  const CARDS = cards.map((item) => ({
    id: item.id,
    name: item.name,
    content: <p>{processContent(item.content)}</p>,
  }));

  return CARDS;
};

export default CardsComponent;
