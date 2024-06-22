export const revalidate = 1080;

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Author, BackButton, BlogLinksList, Spotlight } from '@/components';
import { poppins, titleFont } from '@/config/fonts';
import { generateBlogMetadata, isSlugAllowed } from '@/utils';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const blogMetadata = await generateBlogMetadata(slug);

  return {
    metadataBase: new URL(`https://marcotbcreator.dev/blog/${slug}`),
    title: blogMetadata.title,
    description: blogMetadata.summary,
    openGraph: {
      title: blogMetadata.title,
      description: blogMetadata.summary,
      type: 'article',
      url: `https://marcotbcreator.dev/blog/${slug}`,
      images: [`${blogMetadata.projectImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogMetadata.title,
      description: blogMetadata.summary,
      images: [`${blogMetadata.projectImage}`],
    },
  };
}

export default function Blog({ params }: Props) {
  const { slug } = params;

  if (!isSlugAllowed(slug)) {
    notFound();
  }

  const t = useTranslations(`portfolioBlog.${slug}`);

  const titles = useTranslations('titles');

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
      <div className="lg:max-w-5xl bg-neutral-900 border-[1px] border-white/20 rounded-2xl lg:rounded-3xl mx-4 pt-4 p-2 pb-4 lg:p-12 relative z-10 w-full my-16">
        <div className="mb-4">
          <BackButton path="/#portfolio" message={titles('back')} />
        </div>
        {/* title */}
        <h1
          className={`${titleFont.className} text-4xl font-bold text-white drop-shadow-text mb-3 ml-1`}
        >
          {BlogData.title}
        </h1>

        {/* author */}
        <div className="ml-2 mt-4">
          <Author
            id={1}
            src={BlogData.authorImage}
            tooltipMessage="Check out my GitHub"
            name={BlogData.author}
            href={BlogData.authorGithub}
            title={titles('lastUpdate')}
            date={BlogData.lastUpdateDate}
          />
        </div>

        {/* blog image */}
        <div>
          <Image
            src={BlogData.projectImage}
            alt={`${BlogData.title} - Project Image`}
            width={1920}
            height={1080}
            quality={100}
            className="rounded-2xl mt-5 max-h-[550px] w-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="mt-6 md:mt-8">
          {/* Tecnologies */}
          <div>
            <BlogLinksList
              technologies={BlogData.technologies}
              title={titles('technologies')}
            />
          </div>

          <br />

          {/* Links */}
          <div className="my-3">
            <BlogLinksList
              technologies={BlogData.links}
              title={titles('links')}
            />
          </div>
        </div>

        <div className="dashes-bright mt-6 md:mt-8" />

        {/* description */}
        <div className="mt-6 md:mt-8">
          <pre className={`${poppins.className} text-balance text-gray-300`}>
            {BlogData.description}
          </pre>
        </div>
      </div>
    </div>
  );
}
