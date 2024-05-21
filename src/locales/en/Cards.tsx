import { cn } from '@/utils/cn';

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-semibold bg-violet-700 text-white px-1 py-0.5 rounded-2xl',
        className
      )}
    >
      {children}
    </span>
  );
};

export const CARDS = [
  {
    id: 0,
    name: 'Project Management',
    content: (
      <p>
        Software project management with a blend of{' '}
        <Highlight>agile methodologies</Highlight>, specialized tools, and
        essential soft skills. Ensuring optimal{' '}
        <Highlight>team performance</Highlight> and{' '}
        <Highlight>project success</Highlight> through efficient and adaptive
        practices.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Web Development',
    content: (
      <p>
        Specialize in creating modern, responsive, and{' '}
        <Highlight>visually stunning</Highlight>
        websites by leveraging the <Highlight>latest technologies</Highlight>,
        frameworks, and industry standards. Delivering{' '}
        <Highlight>exceptional results</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Databases',
    content: (
      <p>
        Extensive expertise in creating, diagramming, maintaining, and
        optimizing <Highlight>databases</Highlight>. Additionally, I have
        experience in <Highlight>server-side</Highlight> and{' '}
        <Highlight>backend development</Highlight>, ensuring robust and
        efficient solutions for your needs.
      </p>
    ),
  },
  {
    id: 3,
    name: 'UI/UX Design',
    content: (
      <p>
        Proficient in creating <Highlight>user-friendly</Highlight> and{' '}
        <Highlight>intuitive</Highlight> interfaces that enhance the user
        experience. I focus on creating <Highlight>engaging</Highlight> and{' '}
        <Highlight>responsive</Highlight> designs that are both visually
        appealing and functional.
      </p>
    ),
  },
];
