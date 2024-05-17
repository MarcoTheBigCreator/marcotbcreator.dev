import React from 'react';
import { Spotlight } from '../spotlight-effect/Spotlight';
import { Typewriter } from '../type-writer/TypeWriter';
import { TextGenerateEffect } from '@/components';

const words = `Software Engineering graduated from the Polytechnic University of
          Durango. Tech enthusiast committed to growth. Skilled in front-end
          development, project leadership, and agile methodologies. A problem
          solver with clear communication and quick adaptability.`;

export const Header = () => {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.03] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(109, 40, 217)"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Typewriter />
        <TextGenerateEffect
          words={words}
          className="mt-4 pl-2 lg:pl-0 font-normal text-light text-neutral-300 text-start  md:text-center mx-auto"
        />
      </div>
    </div>
  );
};
