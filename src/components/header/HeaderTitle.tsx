import React from 'react';
import { TypeWriterEffect } from '../ui/type-writer-effect/TypeWriterEffect';
import { words } from '@/locales';
import { titleFont } from '@/config/fonts';

export const HeaderTitle = () => {
  return (
    <TypeWriterEffect
      words={words}
      className={`${titleFont.className} text-white`}
    />
  );
};
