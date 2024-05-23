import { BentoGrid, BentoGridItem } from '../ui/bento-grid/BentoGrid';
import { PortfolioImageGrid } from './PortfolioImageGrid';
import { titleFont } from '@/config/fonts';
import { useTranslations } from 'next-intl';

export interface portfolioItemsProps {
  portfolioItems: portfolioItem[];
}

export interface portfolioItem {
  title: string;
  description: string;
  path: string;
}

export function Portfolio() {
  const t = useTranslations();
  const items = t.raw('portfolioItems.items');
  const portfolioTitle = t('titles.portfolioTitle');

  return (
    <div
      className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased place-items-center px-10 pb-36 pt-20 lg:pt-40"
      id="portfolio"
    >
      <h2
        className={`${titleFont.className} text-5xl font-bold mb-7 mt-4 text-white drop-shadow-text justify-center flex`}
      >
        {portfolioTitle}
      </h2>
      <BentoGrid className="px-0 md:px-4">
        {items.map((item: portfolioItem, i: number) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<PortfolioImageGrid path={item.path} title={item.title} />}
            //   icon={item.icon}
            className={
              i === 3 || i === 6 ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
