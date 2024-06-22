import React from 'react';
import { TypeWriterEffect } from '../ui/type-writer-effect/TypeWriterEffect';
import { titleFont } from '@/config/fonts';
import { useTranslations } from 'next-intl';

export const HeaderTitle = () => {
  const t = useTranslations('headerInfo');
  const words = t.raw('words');

  return (
    <TypeWriterEffect
      words={words}
      className={`${titleFont.className} text-white`}
    />
  );
};
