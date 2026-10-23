import PageIntro from "../components/PageIntro";
import portfolioData from "../data/portfolioData";

function SkillsPage() {
  return (
    <main className="page-shell py-10 sm:py-12">
      <PageIntro
        eyebrow="Technical toolkit"
        title="Skills"
        description="Technologies used across backend, frontend, database, deployment, and enterprise application maintenance."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {portfolioData.skills.map((group) => (
          <article key={group.category} className="surface-card p-6">
            <h2 className="text-lg font-semibold text-heading">{group.category}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-ink/50 px-3 py-2 text-sm text-copy">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default SkillsPage;
