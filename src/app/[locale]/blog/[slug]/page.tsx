import { Author, Spotlight } from '@/components';
import { formatDateUS, generateBlogMetadata, isSlugAllowed } from '@/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const blogMetadata = await generateBlogMetadata(slug);

  return {
    title: blogMetadata.title,
    description: blogMetadata.summary,
    openGraph: {
      title: blogMetadata.title,
      description: blogMetadata.summary,
      images: [blogMetadata.projectImage],
    },
  };
}

export default function Blog({ params }: Props) {
  const { slug } = params;

  if (!isSlugAllowed(slug)) {
    notFound();
  }

  const t = useTranslations(`portfolioBlog.${slug}`);

  const BlogData = {
    title: t('title'),
    author: t('author'),
    authorImage: t('authorImage'),
    authorGithub: t('authorGithub'),
    lastUpdateDate: t('lastUpdateDate'),
    projectImage: t('projectImage'),
    description: t('description'),
    technologies: t('technologies'),
    links: t('links'),
  };

  return (
    <div className="w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.07] relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(109, 40, 217)"
      />
      <div className="lg:max-w-5xl bg-neutral-900 border-[1px] border-white/20 rounded-3xl mx-4 p-3 lg:p-6 relative z-10 w-full mt-16">
        <h1 className="className={`${titleFont.className} text-xl font-bold text-white drop-shadow-text mb-3">
          {BlogData.title}
        </h1>
        <div>
          <Author
            id={1}
            src={BlogData.authorImage}
            tooltipMessage="Check out my GitHub"
            name={BlogData.author}
            href={BlogData.authorGithub}
            date={formatDateUS(BlogData.lastUpdateDate)}
          />
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ipsa
          accusamus et odio molestiae maxime, numquam neque quisquam itaque sed
          dolores aliquam ad libero suscipit! Quas in officia blanditiis?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ipsa
          accusamus et odio molestiae maxime, numquam neque quisquam itaque sed
          dolores aliquam ad libero suscipit! Quas in officia blanditiis?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ipsa
          accusamus et odio molestiae maxime, numquam neque quisquam itaque sed
          dolores aliquam ad libero suscipit! Quas in officia blanditiis?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ipsa
          accusamus et odio molestiae maxime, numquam neque quisquam itaque sed
          dolores aliquam ad libero suscipit! Quas in officia blanditiis?
        </h1>
      </div>
    </div>
  );
}
