'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid/BentoGrid';
import { PortfolioImageGrid } from './PortfolioImageGrid';
import { titleFont } from '@/config';

export function Portfolio() {
  const t = useTranslations();
  const portfolioAccessibility = useTranslations('portfolioAccessibility');
  const portfolioTitle = t('titles.portfolioTitle');
  const items = t.raw('portfolioItems.items') as PortfolioItem[];
  const showMoreAccessibility = useTranslations('showMoreAccessibility');

  const sortedItems = items.sort(
    (a: PortfolioItem, b: PortfolioItem) =>
      new Date(b.lastUpdateDate).getTime() -
      new Date(a.lastUpdateDate).getTime()
  );

  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? sortedItems : sortedItems.slice(0, 3);

  return (
    <div
      className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased place-items-center px-10 md:px-6 xl:px-14 pb-36 pt-20 lg:pt-40"
      id="portfolio"
    >
      <h2
        className={`${titleFont.className} text-5xl font-bold mb-7 mt-4 text-white drop-shadow-text justify-center flex`}
        aria-label={portfolioTitle}
      >
        {portfolioTitle}
      </h2>
      <BentoGrid className="px-0 md:px-4">
        {displayedItems.map((item: PortfolioItem, i: number) => (
          <Link
            href={`/blog/${item.slug}`}
            key={i}
            className="hover:scale-105 ease-linear duration-200"
            aria-label={`${portfolioAccessibility('navigateTo')} ${item.title}`}
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
      </BentoGrid>

      {/* Button for displaying all sections */}
      {sortedItems.length > 3 && (
        <div className="flex mt-8 justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-800 px-8 py-2 bg-violet-700 rounded-full text-white font-light transition duration-200 ease-linear"
            aria-label={
              showAll
                ? showMoreAccessibility('showLess')
                : showMoreAccessibility('showAll', { n: sortedItems.length })
            }
          >
            {showAll ? (
              <p>{showMoreAccessibility('showLess')}</p>
            ) : (
              <p>
                {showMoreAccessibility('showAll')} ({sortedItems.length})
              </p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
