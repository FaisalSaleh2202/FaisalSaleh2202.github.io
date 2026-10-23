import portfolioData from "../data/portfolioData";
import cvPdfUrl from "../../Faisal_Saleh_CV.pdf?url";

const sectionLinks = [
  ["basics", "Basics"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["languages", "Languages"],
];

function CvPage() {
  const { profile, experience, projects, education, skills, languages } = portfolioData;

  return (
    <main className="print-page">
      <div className="page-shell grid gap-12 py-10 sm:py-12 md:grid-cols-[180px_1fr] lg:gap-20">
        <aside className="no-print md:sticky md:top-28 md:h-fit">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sky">
            On this page
          </p>
          <nav className="flex gap-4 overflow-x-auto pb-3 md:flex-col md:gap-1 md:overflow-visible">
            {sectionLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="focus-ring whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-mist transition hover:bg-panel hover:text-heading"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="no-print mb-6 flex justify-end">
            <a
              href={cvPdfUrl}
              download="Faisal_Saleh_CV.pdf"
              className="focus-ring inline-flex w-fit items-center gap-3 rounded-xl border border-line bg-panel px-5 py-3 text-sm font-bold text-sky transition hover:border-sky"
            >
              <span className="text-xl">⇩</span>
              Save as PDF
            </a>
          </div>

          <section id="basics" className="scroll-mt-24 pb-12">
            <article className="print-card surface-card p-6 sm:p-8">
              <h2 className="text-3xl font-medium text-heading">Basics</h2>
              <dl className="mt-8 space-y-4 text-base leading-7 sm:text-lg sm:leading-8">
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Name</dt>
                  <dd className="print-muted text-mist">{profile.name}</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Label</dt>
                  <dd className="print-muted text-mist">{profile.role} | {profile.specialty}</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Email</dt>
                  <dd className="break-words">
                    <a className="focus-ring rounded text-sky hover:text-heading" href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Phone</dt>
                  <dd>
                    <a className="focus-ring rounded text-sky hover:text-heading" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Url</dt>
                  <dd className="break-words">
                    <a className="focus-ring rounded text-sky hover:text-heading" href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer">github.com/FaisalSaleh2202</a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Location</dt>
                  <dd className="print-muted text-mist">{profile.location}</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Availability</dt>
                  <dd className="print-muted text-mist">{profile.availability}</dd>
                </div>
                <div className="grid gap-2 pt-1 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="font-semibold text-heading">Summary</dt>
                  <dd className="print-muted text-mist">{profile.summary}</dd>
                </div>
              </dl>
            </article>
          </section>

          <section id="experience" className="scroll-mt-24 border-t border-line py-12">
            <h2 className="text-3xl font-medium text-heading">Experience</h2>
            <div className="mt-7 space-y-4">
              {experience.map((item) => (
                <article key={`${item.title}-${item.place}`} className="print-card surface-card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="print-muted mt-1 text-sm text-mist">{item.place} · {item.location}</p>
                  <ul className="print-muted mt-4 space-y-2 text-sm leading-6 text-mist">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span>•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {item.keySystems && (
                    <div className="print-muted mt-5 text-sm leading-6 text-mist">
                      <p className="font-semibold text-heading">Key systems</p>
                      <p className="mt-2">{item.keySystems.join("; ")}.</p>
                    </div>
                  )}
                  <p className="print-muted mt-5 text-xs leading-6 text-mist">
                    <span className="font-semibold text-heading">Technologies:</span>{" "}
                    {item.technologies.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 border-t border-line py-12">
            <h2 className="text-3xl font-medium text-heading">Projects</h2>
            <div className="mt-7 space-y-4">
              {projects.map((project) => (
                <article key={project.title} className="print-card surface-card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky">{project.type}</p>
                  <h3 className="mt-3 text-lg font-semibold text-heading">{project.title}</h3>
                  <p className="print-muted mt-3 text-sm leading-6 text-mist">{project.description}</p>
                  {project.highlights && (
                    <ul className="print-muted mt-4 space-y-2 text-sm leading-6 text-mist">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="print-muted mt-5 text-xs leading-6 text-mist">
                    <span className="font-semibold text-heading">Tech stack:</span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                  <p className="print-muted mt-2 text-xs leading-6 text-mist">
                    <span className="font-semibold text-heading">Cloud & deployment:</span>{" "}
                    {project.deployment.join(", ")}
                  </p>
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="no-print focus-ring mt-4 inline-flex rounded text-sm font-semibold text-sky hover:text-heading">
                      Live demo ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="scroll-mt-24 border-t border-line py-12">
            <h2 className="text-3xl font-medium text-heading">Education</h2>
            <div className="mt-7 space-y-4">
              {education.map((item) => (
                <article key={item.title} className="print-card surface-card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="print-muted mt-1 text-sm text-mist">{item.place}</p>
                  {item.description && <p className="print-muted mt-4 leading-7 text-mist">{item.description}</p>}
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 border-t border-line py-12">
            <h2 className="text-3xl font-medium text-heading">Skills</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category} className="print-card surface-card p-5">
                  <h3 className="font-semibold text-heading">{group.category}</h3>
                  <p className="print-muted mt-3 text-sm leading-7 text-mist">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="languages" className="scroll-mt-24 border-t border-line py-12">
            <h2 className="text-3xl font-medium text-heading">Languages</h2>
            <div className="print-card surface-card mt-7 divide-y divide-line overflow-hidden">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center justify-between gap-4 px-6 py-5">
                  <p className="font-semibold text-heading">{language.name}</p>
                  <p className="print-muted text-sm text-mist">{language.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CvPage;
