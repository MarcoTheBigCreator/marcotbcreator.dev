import React from "react";
import { Spotlight } from "../spotlight-effect/Spotlight";

export const Header = () => {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.03] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(109, 40, 217)"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="pb-4 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-violet-700 bg-opacity-50">
          Welcome to <br /> {`The Big Creator\'s site`}.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
};
