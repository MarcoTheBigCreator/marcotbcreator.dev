import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid/BentoGrid';
import { PortfolioImageGrid } from './PortfolioImageGrid';
import { titleFont } from '@/config';

export interface PortfolioItemsProps {
  PortfolioItems: PortfolioItem[];
}

export interface PortfolioItem {
  title: string;
  description: string;
  path: string;
  slug: string;
}

export function Portfolio() {
  const t = useTranslations();

  const portfolioTitle = t('titles.portfolioTitle');

  const items = t.raw('portfolioItems.items');

  const soonItemTitle = t('soonItem.title');
  const soonItemDescription = t('soonItem.description');
  const soonItemPath = t('soonItem.path');

  return (
    <div
      className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased place-items-center px-10 md:px-6 xl:px-14 pb-36 pt-20 lg:pt-40"
      id="portfolio"
    >
      <h2
        className={`${titleFont.className} text-5xl font-bold mb-7 mt-4 text-white drop-shadow-text justify-center flex`}
      >
        {portfolioTitle}
      </h2>
      <BentoGrid className="px-0 md:px-4">
        {items.map((item: PortfolioItem, i: number) => (
          <Link
            href={`/blog/${item.slug}`}
            key={i}
            className="hover:scale-105 ease-linear duration-200"
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={
                <PortfolioImageGrid path={item.path} title={item.title} />
              }
            />
          </Link>
        ))}
        <div>
          <BentoGridItem
            className="hidden md:flex hover:scale-105 ease-linear duration-200"
            title={soonItemTitle}
            description={soonItemDescription}
            header={
              <PortfolioImageGrid path={soonItemPath} title={soonItemTitle} />
            }
          />
        </div>
      </BentoGrid>
    </div>
  );
}
