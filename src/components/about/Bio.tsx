import { titleFont } from '@/config/fonts';
import { useTranslations } from 'next-intl';

interface BioInfo {
  name: string;
  profession: string;
  from: string;
  live_in: string;
  age: string;
}

interface BioInfoTitles {
  nameTitle: string;
  professionTitle: string;
  fromTitle: string;
  live_inTitle: string;
  ageTitle: string;
}

export const Bio = () => {
  const t = useTranslations('bioInfo');
  const bioTitles = useTranslations('bioTitles');
  const interestTitle = useTranslations('titles');

  const bioInfo: BioInfo = {
    name: t('name'),
    profession: t('profession'),
    from: t('from'),
    live_in: t('live_in'),
    age: t('age'),
  };

  const bioInfoTitles: BioInfoTitles = {
    nameTitle: bioTitles('nameTitle'),
    professionTitle: bioTitles('professionTitle'),
    fromTitle: bioTitles('fromTitle'),
    live_inTitle: bioTitles('live_inTitle'),
    ageTitle: bioTitles('ageTitle'),
  };

  return (
    <>
      <h1
        className={`${titleFont.className} text-4xl font-bold text-white drop-shadow-text mb-3 mt-3`}
      >
        Bio
      </h1>
      <h2 className="text-2xl mb-1 text-gray-300">{bioInfo.name}</h2>
      <h3 className="text-xl font-medium text-violet-400 mb-2">
        {bioInfo.profession.split('-', 1)}{' '}
        <span className="text-gray-300">
          {bioInfo.profession.split('-', 2).pop()}
        </span>
      </h3>
      <ul className="list-disc ml-5 text-violet-400/90 font-normal text-base space-y-1 capitalize">
        {Object.keys(bioInfo).map((key) => {
          if (key === 'name' || key === 'profession') return null;
          const titleKey = `${key}Title` as keyof BioInfoTitles;
          const title = bioInfoTitles[titleKey];
          return (
            <li key={key}>
              <b>{title ? title.replace(/_/g, ' ') : ''}:</b>{' '}
              <span className="text-gray-300">
                {bioInfo[key as keyof BioInfo]}
              </span>
            </li>
          );
        })}
        <li>
          <b>{interestTitle('interestTitle')}:</b>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-1 text-gray-300 ml-1 mt-1">
            {t.raw('interests').map((interest: string, index: number) => (
              <p key={index}>- {interest}</p>
            ))}
          </div>
        </li>
      </ul>
    </>
  );
};
