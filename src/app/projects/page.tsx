import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { getProjects } from "@/lib/portfolio";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="py-10 md:py-14">
      <SectionHeader
        eyebrow="Projects"
        title="Selected Work"
        description="A collection of data, engineering, and analytical projects focused on solving problems and generating actionable insights."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
