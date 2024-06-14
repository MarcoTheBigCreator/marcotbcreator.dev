import { cn } from '@/utils/cn';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[25rem] lg:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl p-4 bg-neutral-900 border-[1px] border-white/20 justify-between md:justify-start flex flex-col space-y-4 md:min-h-[411px] lg:min-h-[430px]',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="text-lg font-semibold text-violet-400/90 mb-2 mt-2">
          {title}
        </div>
        <div className="text-white">{description}</div>
      </div>
    </div>
  );
};
