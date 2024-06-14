import { allowedSlugs } from '@/locales';

export const isSlugAllowed = (slug: string) => {
  return allowedSlugs.includes(slug);
};
