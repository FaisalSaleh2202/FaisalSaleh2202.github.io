import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import portfolioData from "../data/portfolioData";

function RepositoriesPage() {
  return (
    <main className="page-shell py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <PageIntro eyebrow="Selected work" title="Projects" description="Full stack projects covering application development, cloud infrastructure, and automated deployment." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default RepositoriesPage;
