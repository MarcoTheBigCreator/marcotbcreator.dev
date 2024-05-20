export const Bio = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Bio</h1>
      <h2 className="text-2xl mb-1 text-white">
        Marco Antonio Rodriguez Arreola
      </h2>
      <h3 className="text-xl font-medium text-violet-500 mb-3">
        Software <span className="text-violet-600/100 ">Engineering</span>
      </h3>
      <ul className="list-disc ml-5 text-white/70 font-medium text-base space-y-2">
        <li>
          <b>From:</b> <span className="text-white">Mexico</span>
        </li>
        <li>
          <b>Lives in:</b> <span className="text-white">Durango</span>
        </li>
        <li>
          <b>Age:</b> <span className="text-white">22</span>
        </li>
        <li>
          <b>Gender:</b> <span className="text-white">Male</span>
        </li>
        <li>
          <b>Interests:</b>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 text-white ml-1 mt-2">
            <p>- Physical training</p>
            <p>- Music</p>
            <p>- Videogames</p>
            <p>- New Technologies</p>
          </div>
        </li>
      </ul>
    </>
  );
};
