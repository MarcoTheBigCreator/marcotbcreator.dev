import { TypeWriterEffect } from '@/components';
import { titleFont } from '@/config/fonts';

export function HeaderTitle() {
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
      <TypeWriterEffect words={words} className={`${titleFont.className}`} />
    </>
  );
}

export const description = `Software Engineering graduated from the Polytechnic University of
          Durango. Tech enthusiast committed to growth. Skilled in front-end
          development, project leadership, and agile methodologies. A problem
          solver with clear communication and quick adaptability.`;
