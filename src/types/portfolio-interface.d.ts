interface PortfolioItem {
  title: string;
  description: string;
  path: string;
  slug: string;
}

interface PortfolioItemsProps {
  PortfolioItems: PortfolioItem[];
}
