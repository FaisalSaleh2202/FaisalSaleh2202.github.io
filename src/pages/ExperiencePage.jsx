import PageIntro from "../components/PageIntro";
import portfolioData from "../data/portfolioData";

function ExperiencePage() {
  return (
    <main className="page-shell py-10 sm:py-12">
      <PageIntro
        eyebrow="Professional journey"
        title="Experience"
        description="Enterprise web application development across logistics, operational systems, and full-stack product work."
      />

      <div className="mt-10 space-y-6">
        {portfolioData.experience.map((item) => (
          <article key={`${item.title}-${item.place}`} className="surface-card p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-sm text-sky">{item.period}</p>
              <div>
                <h2 className="text-2xl font-semibold text-heading">{item.title}</h2>
                <p className="mt-1 text-mist">{item.place} · {item.location}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-copy">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.keySystems && (
                  <div className="mt-7 border-t border-line pt-6">
                    <h3 className="text-sm font-semibold text-heading">Key systems</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.keySystems.map((system) => (
                        <span key={system} className="rounded-full border border-line bg-ink/50 px-3 py-1.5 text-xs text-mist">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-line bg-ink/50 px-3 py-1 text-xs text-mist">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ExperiencePage;
