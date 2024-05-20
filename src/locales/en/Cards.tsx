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
        'font-bold bg-violet-700 text-white px-1 py-0.5 rounded-lg',
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
        Software project management through the{' '}
        <Highlight>use of agile methodologies</Highlight> , specialized
        software, and soft skills{' '}
        <Highlight>to achieve optimal performance</Highlight> with the work
        team.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Elon Musk',
    designation: 'Senior Shitposter',
    content: (
      <p>
        I dont like this Twitter thing,{' '}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Tyler Durden',
    designation: 'Manager Project Mayhem',
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
