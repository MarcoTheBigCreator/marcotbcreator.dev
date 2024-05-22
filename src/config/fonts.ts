import { Poppins, Outfit } from 'next/font/google';

export const poppins = Poppins({ weight: ['400', '500', '600', '700'] });

export const titleFont = Outfit({
  subsets: ['latin'],
  weight: ['500', '700'],
});
