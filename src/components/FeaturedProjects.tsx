import type { Project } from "@/types/content";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

type FeaturedProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-24">
      <SectionHeader
        title="Featured Projects"
        description="A focused selection of analytics and engineering-informed projects built around real problem solving."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
