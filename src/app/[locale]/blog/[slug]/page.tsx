import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Author, BackButton, BlogLinksList, Spotlight } from '@/components';
import { poppins, titleFont } from '@/config';
import { isSlugAllowed } from '@/utils';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = params;

  const t = await getTranslations({
    locale,
    namespace: `portfolioBlog.${slug}`,
  });

  return {
    title: t('title'),
    description: t('summary'),
    applicationName: t('applicationName'),
    metadataBase: new URL(t('metadataBase')),
    openGraph: {
      title: t('title'),
      description: t('summary'),
      url: t('metadataBase'),
      siteName: t('applicationName'),
      type: t('type') as OGtype,
      images: [`${t('projectImage')}`],
    },
    twitter: {
      title: t('title'),
      description: t('summary'),
      images: [`${t('projectImage')}`],
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

  const technologiesList = t.raw('technologies') as link[];
  const linksList = t.raw('links') as link[];

  const blogData: BlogData = {
    title: t('title'),
    author: t('author'),
    authorImage: t('authorImage'),
    authorGithub: t('authorGithub'),
    lastUpdateDate: t('lastUpdateDate'),
    projectImage: t('projectImage'),
    description: t('description'),
    technologies: technologiesList,
    links: linksList,
  };

  return (
    <div className="w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.07] relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(109, 40, 217)"
      />
      <div
        className="lg:max-w-5xl bg-neutral-900 border-[1px] border-white/20 rounded-2xl lg:rounded-3xl mx-4 py-10 p-4 lg:p-12 relative z-10 w-full my-16"
        role="article"
        aria-labelledby="blog-title"
      >
        <div className="mb-4">
          <BackButton path="/#portfolio" message={titles('back')} />
        </div>
        {/* Title */}
        <h1
          id="blog-title"
          className={`${titleFont.className} text-4xl font-bold text-white drop-shadow-text mb-3 ml-1`}
        >
          {blogData.title}
        </h1>

        {/* Author */}
        <div className="ml-2 mt-4">
          <Author
            id={1}
            src={blogData.authorImage}
            tooltipMessage="Check out my GitHub"
            name={blogData.author}
            href={blogData.authorGithub}
            title={titles('lastUpdate')}
            date={blogData.lastUpdateDate}
          />
        </div>

        {/* Blog Image */}
        <div>
          <Image
            src={blogData.projectImage}
            alt={`${blogData.title} - Project Image`}
            width={1920}
            height={1080}
            quality={100}
            className="rounded-2xl mt-5 max-h-[550px] w-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="mt-6 md:mt-8">
          {/* Technologies */}
          <div>
            <BlogLinksList
              links={blogData.technologies}
              title={titles('technologies')}
              aria-label={titles('technologies')}
            />
          </div>

          <br />

          {/* Links */}
          <div className="my-3">
            <BlogLinksList
              links={blogData.links}
              title={titles('links')}
              aria-label={titles('links')}
            />
          </div>
        </div>

        <div className="dashes-bright mt-6 md:mt-8" />

        {/* Description */}
        <div className="mt-6 md:mt-8">
          <pre className={`${poppins.className} text-balance text-gray-300`}>
            {blogData.description}
          </pre>
        </div>
      </div>
    </div>
  );
}
