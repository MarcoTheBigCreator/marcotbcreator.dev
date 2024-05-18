import Image from 'next/image';
import { ProfileImage } from '../ui/about/ProfileImage';

const skills = [
  {
    name: 'html',
    path: 'html',
  },
  {
    name: 'css',
    path: 'css',
  },
  {
    name: 'js',
    path: 'js',
  },
  {
    name: 'ts',
    path: 'ts',
  },
  {
    name: 'python',
    path: 'python',
  },
  {
    name: 'react',
    path: 'react',
  },
  {
    name: 'nodejs',
    path: 'nodejs',
  },
  {
    name: 'nextjs',
    path: 'nextjs',
  },
  {
    name: 'vercel',
    path: 'vercel',
  },
  {
    name: 'angular',
    path: 'angular',
  },
  {
    name: 'tailwind',
    path: 'tailwind',
  },
  {
    name: 'sass',
    path: 'sass',
  },
  {
    name: 'postman',
    path: 'postman',
  },
  {
    name: 'figma',
    path: 'figma',
  },
  {
    name: 'heroku',
    path: 'heroku',
  },
  {
    name: 'mysql',
    path: 'mysql',
  },
  {
    name: 'mongodb',
    path: 'mongodb',
  },
  {
    name: 'prisma',
    path: 'prisma',
  },
  {
    name: 'git',
    path: 'git',
  },
  {
    name: 'github',
    path: 'github',
  },
  {
    name: 'postgresql',
    path: 'postgresql',
  },
  {
    name: 'supabase',
    path: 'supabase',
  },
  {
    name: 'firebase',
    path: 'firebase',
  },
  {
    name: 'docker',
    path: 'docker',
  },
  {
    name: 'express',
    path: 'express',
  },
  {
    name: 'jest',
    path: 'jest',
  },
  {
    name: 'redux',
    path: 'redux',
  },
  {
    name: 'wordpress',
    path: 'wordpress',
  },
];

export const About = () => {
  return (
    <div className="w-full h-full md:h-[45rem] bg-black/[0.96] bg-grid-white/[0.05] antialiased grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center px-10 ">
      <aside>
        <ProfileImage />
      </aside>
      <section className="w-full md:w-11/12 bg-zinc-950 border-[1px] border-white/10 rounded-3xl px-10 py-6">
        <h1 className="text-3xl font-bold text-white mb-2">Bio</h1>
        <h2 className="text-2xl mb-1">Marco Antonio Rodriguez Arreola</h2>
        <h3 className="text-xl font-medium text-violet-500 mb-1">
          Software <span className="text-violet-600 ">Engineering</span>
        </h3>
        <ul className="list-disc ml-5 text-white/70 font-medium text-base">
          <li>
            <b>From:</b> <span className="text-white">Mexico</span>
          </li>
          <li>
            <b>Lives in:</b> <span className="text-white">Durango</span>
          </li>
          <li>
            <b>Age:</b> <span className="text-white">25</span>
          </li>
          <li>
            <b>Gender:</b> <span className="text-white">Male</span>
          </li>
          <li>
            <b>Interests:</b>{' '}
            <span className="text-white">
              ✏ UI/UX 🖼 Pixel Art 💻 Seguridad 🎨 Diseño 🎮 Videojuegos 🎹
              Música
            </span>
          </li>
        </ul>
      </section>
      <aside className="w-full md:w-11/12 bg-zinc-950 border-[1px] border-white/10 rounded-3xl px-10 py-6">
        <section className="w-full flex flex-col mb-4">
          <h2 className="text-lg font-bold mb-2">HardSkills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Image
                key={skill.path} // Add a key prop
                src={`https://skillicons.dev/icons?i=${skill.path}`}
                alt={skill.name} // Assuming each skill has a name property
                width={26}
                height={26}
                priority={false}
                className="inline-block"
              />
            ))}
          </div>
        </section>

        <article className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Softskills</h2>
          👨‍👩‍👦‍ Trabajo en equipo 🤔 Res de problemas 💪 Auto motivación 🖼
          Creatividad ⏰ Responsabilidad 🔊 Comunicación 💛 Empatía 🤝 Res de
          conflictos
        </article>
      </aside>
    </div>
  );
};
