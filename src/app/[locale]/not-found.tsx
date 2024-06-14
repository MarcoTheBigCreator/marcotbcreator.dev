import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-black/[0.96] bg-grid-white/[0.07] ">
      <div className="container flex items-center min-h-[75vh] px-6 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-white rounded-full bg-violet-700 drop-shadow-purple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-zinc-400">
            {`The page you are looking for doesn\'t exist.`}
          </p>

          <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link
              href={'/'}
              aria-label="Take me home"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-violet-500 rounded-lg shrink-0 sm:w-auto hover:bg-violet-600"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
