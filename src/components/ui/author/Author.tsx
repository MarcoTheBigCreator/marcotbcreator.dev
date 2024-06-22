import Link from 'next/link';
import { AnimatedTooltip } from '../animated-tooltip/AnimatedTooltip';
import { FormattedDate } from '../formatted-date/FormattedDate';

interface AvatarProps {
  id: number;
  src: string;
  tooltipMessage: string;
  name: string;
  href: string;
  title: string;
  date: string;
}
export const Author = ({
  id,
  src,
  tooltipMessage,
  name,
  href,
  title,
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
        <div className="grid grid-rows-2 grid-flow-col ">
          <span className="text-sm ">{name}</span>

          <p className="text-sm">
            {title} - <FormattedDate date={date} />
          </p>
        </div>
      </AnimatedTooltip>
    </Link>
  );
};
