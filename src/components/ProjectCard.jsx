function ProjectCard({ project }) {
  return (
    <article className="surface-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky/50">
      <div
        className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${project.accent} p-6`}
      >
        <span className="absolute right-5 top-4 text-6xl font-black text-heading/10">
          {project.number}
        </span>
        <div className="rounded-full border border-line bg-ink/70 px-3 py-1 text-xs font-semibold text-copy backdrop-blur">
          {project.type}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-heading">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-mist">
          {project.description}
        </p>
        {project.highlights && (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-mist">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-ink/50 px-3 py-1 text-xs text-copy"
            >
              {technology}
            </span>
          ))}
        </div>
        {project.deployment && (
          <div className="mt-5 border-t border-line pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-sky">Cloud & deployment</p>
            <p className="mt-2 text-sm leading-6 text-mist">{project.deployment.join(" · ")}</p>
          </div>
        )}
        {(project.sourceUrl || project.liveUrl) && (
          <div className="mt-6 flex gap-5 text-sm font-semibold">
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="focus-ring rounded text-copy transition hover:text-sky">
                Source ↗
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="focus-ring rounded text-sky transition hover:text-heading">
                Live preview ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
