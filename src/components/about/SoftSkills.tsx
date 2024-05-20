import { softSkills } from '@/locales';

export const SoftSkills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-white">Softskills</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ml-1">
        {softSkills.map((skill) => (
          <p key={skill.name} className="text-white">
            -{skill.name}
          </p>
        ))}
      </div>
    </>
  );
};
