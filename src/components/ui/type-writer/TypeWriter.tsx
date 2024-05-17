'use client';

import { TypeWriterEffect } from './TypeWriterEffect';

export function Typewriter() {
  const words = [
    {
      text: 'Hi,',
    },
    {
      text: "I'm",
    },
    {
      text: 'Marco',
    },
  ];
  return (
    <>
      <TypeWriterEffect words={words} />
    </>
  );
}
