import Image from 'next/image';

interface Props {
  path: string;
  title: string;
}

export const PortfolioImageGrid = ({ path, title }: Props) => {
  return (
    <Image
      src={path}
      width={900}
      height={400}
      quality={100}
      alt={title}
      priority={false}
      className="w-full h-full min-h-[6rem] rounded-2xl object-cover"
    ></Image>
  );
};
