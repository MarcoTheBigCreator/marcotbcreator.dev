import { softSkills } from '@/locales';

export const SoftSkills = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-3 text-white drop-shadow-text">
        Softskills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 ml-1">
        {softSkills.map((skill) => (
          <p key={skill.name} className="text-white">
            - {skill.name}
          </p>
        ))}
      </div>
    </>
  );
};
