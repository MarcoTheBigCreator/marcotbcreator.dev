import { bioInfo } from '@/locales';

export const Bio = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-3">Bio</h1>
      <h2 className="text-2xl mb-1 text-white">{bioInfo.name}</h2>
      <h3 className="text-xl font-medium text-violet-500 mb-2">
        {bioInfo.profession.split('-', 1)}{' '}
        <span className="text-violet-600/100 ">
          {bioInfo.profession.split('-', 2).pop()}
        </span>
      </h3>
      <ul className="list-disc ml-5 text-white/60 font-normal text-base space-y-1">
        {Object.entries(bioInfo).map(([key, value]) => {
          if (key === 'interests') return;
          return (
            <li key={key}>
              <b>{key[0].toUpperCase() + key.slice(1)}:</b>{' '}
              <span className="text-white">{value}</span>
            </li>
          );
        })}
        <li>
          <b>Interests:</b>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 text-white ml-1 mt-1">
            {bioInfo.interests.map((interest) => (
              <p key={interest}>- {interest}</p>
            ))}
          </div>
        </li>
      </ul>
    </>
  );
};
