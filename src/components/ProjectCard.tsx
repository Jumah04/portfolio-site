import Link from "next/link";
import type { Project } from "@/types/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
      aria-label={`Read case study: ${project.title}`}
    >
      <article className="h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
        {project.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-gray-900">
        {project.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-relaxed">
        {project.description}
      </p>

      <p className="mt-5 text-sm text-gray-500 leading-relaxed">
        {project.impact}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      </article>
    </Link>
  );
}
