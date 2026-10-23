import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import profilePhotoUrl from "../../foto_faisal_saleh.jpg?url";

function HomePage() {
  const { profile, achievements, experience } = portfolioData;

  return (
    <main className="page-shell py-10 sm:py-12">
      <section>
        <h1 className="text-4xl font-medium tracking-tight text-heading sm:text-[3.25rem]">
          <span className="font-extrabold">{profile.name}</span>
          <span className="font-light text-mist"> — {profile.role}</span>
        </h1>
        <p className="mt-5 text-base font-semibold uppercase tracking-[0.12em] text-sky sm:text-lg">
          {profile.specialty}
        </p>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_250px] lg:gap-14">
          <div className="space-y-5 text-base leading-7 text-copy sm:text-[1.0625rem] sm:leading-8">
            <p>{profile.summary}</p>
            {profile.secondParagraph && <p>{profile.secondParagraph}</p>}
            {profile.thirdParagraph && <p>{profile.thirdParagraph}</p>}

            <div className="border-t border-line pt-6">
              <p className="text-base text-mist">
                Based in {profile.location}. {profile.availability}.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="focus-ring inline-flex rounded-md bg-sky px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-white">
                  ✉ Contact me
                </a>
                <Link to="/cv" className="focus-ring inline-flex rounded-md border border-line px-5 py-3 text-sm font-bold text-heading transition hover:border-sky hover:text-sky">
                  View CV
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[250px]">
            <img
              src={profilePhotoUrl}
              alt={`Portrait of ${profile.name}`}
              className="aspect-square w-full rounded-lg object-cover shadow-xl shadow-black/20"
            />
            <p className="mt-3 text-center font-mono text-sm tracking-wide text-mist">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <article key={item.title} className="rounded-xl border border-line bg-panel/60 px-5 py-6 text-center transition hover:border-sky/50">
              <div className="mx-auto flex h-14 items-center justify-center text-2xl font-black text-sky">{item.icon}</div>
              <h2 className="mt-3 font-semibold text-heading">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist">{item.description}</p>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-medium tracking-tight text-heading">professional experience</h2>
            <Link to="/experience" className="focus-ring rounded text-sm font-semibold text-sky hover:text-heading">
              View details ↗
            </Link>
          </div>
          <div className="mt-5 divide-y divide-line">
            {experience.map((item) => (
              <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <time className="font-semibold text-heading">{item.period}</time>
                <div>
                  <h3 className="font-semibold text-sky">{item.title}</h3>
                  <p className="mt-1 text-mist">{item.place} · {item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default HomePage;
