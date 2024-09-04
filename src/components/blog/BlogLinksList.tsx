import Link from 'next/link';
import { titleFont } from '@/config';

interface Props {
  links: link[];
  title: string;
}

export const BlogLinksList = ({ links, title }: Props) => {
  return (
    <>
      <h3
        className={`${titleFont.className} text-xl font-bold text-violet-600 drop-shadow-purple mb-1`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 ml-1 space-x-1 text-gray-300">
        {links.map((link, index) => (
          <div key={link.title}>
            <Link
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light hover:underline transition duration-200 ease-linear"
            >
              {link.title}
            </Link>
            {index !== links.length - 1 && (
              <>
                <span className="ml-2">-</span>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
