import Link from 'next/link';
import { AnimatedTooltip } from '../animated-tooltip/AnimatedTooltip';

interface AvatarProps {
  id: number;
  src: string;
  tooltipMessage: string;
  name: string;
  href: string;
  date: string;
}
export const Author = ({
  id,
  src,
  tooltipMessage,
  name,
  href,
  date,
}: AvatarProps) => {
  return (
    <Link href={href}>
      <AnimatedTooltip
        items={[
          {
            id,
            name,
            path: src,
            designation: tooltipMessage,
            imageClassName: 'w-11 h-11 rounded-full',
            className: 'flex gap-2',
            width: 416,
            height: 416,
          },
        ]}
      >
        <div className="grid grid-rows-4 grid-flow-col ">
          <span className="">{name}</span>
          <span className="text-sm">{date}</span>
        </div>
      </AnimatedTooltip>
    </Link>
  );
};
