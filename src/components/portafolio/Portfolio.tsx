import { items } from '@/locales';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid/BentoGrid';
import { PortfolioImageGrid } from './PortfolioImageGrid';

export function Portfolio() {
  return (
    <div className="w-full bg-black/[0.96] bg-grid-white/[0.07] antialiased place-items-center px-10 py-6 pt-52">
      <BentoGrid className="px-0 md:px-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<PortfolioImageGrid path={item.path} title={item.title} />}
            //   icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
