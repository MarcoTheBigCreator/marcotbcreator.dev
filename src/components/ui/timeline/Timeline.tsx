import { poppins, titleFont } from '@/config';

export const Timeline = ({ timelineTitle, info }: TimelineProps) => {
  return (
    <div className="w-full lg:min-h-[2900px] slg:min-h-[2000px] xl:min-h-[1500px]">
      <h2
        className={`${titleFont.className} text-4xl font-bold mb-3 mt-3 text-white drop-shadow-text`}
      >
        {timelineTitle}
      </h2>

      {info.map((item) => (
        <div key={item.title} className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-semibold text-xl text-white mb-1 sm:mb-0">
            {item.title}
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-700 after:border-4 after:box-content after:border-neutral-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-neutral-100 bg-violet-700 rounded-full">
              {item.date}
            </time>
            <div className="text-lg font-medium text-violet-400/90 drop-shadow-purple">
              {item.place}
            </div>
          </div>
          <pre className={`${poppins.className} text-balance text-gray-300`}>
            {item.description}
          </pre>
        </div>
      ))}
    </div>
  );
};
