import { titleFont } from '@/config/fonts';
import Link from 'next/link';

interface Props {
  technologies: string;
  title: string;
}

export const BlogLinksList = ({ technologies, title }: Props) => {
  const techList = technologies
    .split(',')
    .filter((tech) => tech.trim() !== '')
    .map((tech) => {
      const [name, link] = tech.split(';');
      return { name: name.trim(), link: link.trim() };
    });

  return (
    <>
      <h3
        className={`${titleFont.className} text-xl font-bold text-violet-600 drop-shadow-purple mb-1`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 ml-1 text-gray-300">
        {techList.map((tech, index) => (
          <div key={tech.name}>
            <Link
              href={tech.link}
              target="_blank"
              className="font-light hover:underline transition duration-200 ease-linear"
            >
              {tech.name}
            </Link>
            {index !== techList.length - 1 && ' -'}
          </div>
        ))}
      </div>
    </>
  );
};
