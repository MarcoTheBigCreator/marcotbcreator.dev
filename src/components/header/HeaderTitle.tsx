import React from 'react';
import { useTranslations } from 'next-intl';
import { TypeWriterEffect } from '../ui/type-writer-effect/TypeWriterEffect';
import { titleFont } from '@/config';

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
