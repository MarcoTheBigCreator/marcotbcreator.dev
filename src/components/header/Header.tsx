import { Spotlight } from '../ui/spotlight-effect/Spotlight';
import { HeaderTitle, TextGenerateEffect } from '@/components';
import { useTranslations } from 'next-intl';

export const Header = () => {
  const description = useTranslations('headerInfo');

  return (
    <div
      id="#"
      className="h-[40rem] md:h-[50rem] xl:h-[55rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.07] relative"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(109, 40, 217)"
      />
      <div className=" p-8 md:p-10 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <HeaderTitle />
        <TextGenerateEffect
          words={description('description')}
          className="mt-4 pl-2 lg:pl-0 font-normal text-light text-gray-300 text-start  md:text-center mx-auto"
        />
      </div>
    </div>
  );
};
