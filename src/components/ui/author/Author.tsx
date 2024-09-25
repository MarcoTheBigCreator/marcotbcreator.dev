import Link from 'next/link';
import { AnimatedTooltip } from '../animated-tooltip/AnimatedTooltip';

export const Author = ({
  id,
  src,
  tooltipMessage,
  name,
  href,
}: AvatarProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <AnimatedTooltip
        items={[
          {
            id,
            name,
            path: src,
            designation: tooltipMessage,
            imageClassName: 'w-10 h-10 rounded-full',
            className: 'flex gap-2',
            width: 416,
            height: 416,
          },
        ]}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">{name}</span>
        </div>
      </AnimatedTooltip>
    </Link>
  );
};
