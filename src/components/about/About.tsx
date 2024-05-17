import { ProfileImage } from '../ui/about/ProfileImage';

export const About = () => {
  return (
    <div className="w-flil h-[30rem] md:h-[45rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center px-10 ">
      <aside>
        <ProfileImage />
      </aside>
      <section>
        <h1>Info Personal</h1>
        <h2>Software Engineering</h2>
        <ul>
          <li>
            <b>From:</b> Mexico
          </li>
          <li>
            <b>Lives in:</b> Durango
          </li>
          <li>
            <b>Age:</b> 25
          </li>
          <li>
            <b>Gender:</b> Male
          </li>
        </ul>
      </section>
      <aside>
        <section className="flex flex-col">HardSkills</section>
        {/* skills */}
        <article className="flex flex-col">Softskills</article>
        {/* skills */}
      </aside>
    </div>
  );
};
