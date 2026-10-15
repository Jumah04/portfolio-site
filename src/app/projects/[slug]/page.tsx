import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-10 md:py-14">
      <Link
        href="/projects"
        className="text-sm text-gray-500 hover:text-gray-900 transition"
      >
        Back to projects
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          {project.category}
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border bg-white px-4 py-2 text-sm text-gray-700">
            {project.role}
          </span>
          <span className="rounded-full border bg-white px-4 py-2 text-sm text-gray-700">
            {project.projectType}
          </span>
        </div>
      </header>

      <div className="mt-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
        <div className="space-y-8">
          {project.context && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">Context</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.context}
              </p>
            </section>
          )}

          {project.challenge && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">Challenge</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </section>
          )}

          {project.keyQuestions && project.keyQuestions.length > 0 && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Key Questions
              </h2>
              <ul className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                {project.keyQuestions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.approach && project.approach.length > 0 && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">Approach</h2>
              <ul className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                {project.approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">Outcomes</h2>
              <ul className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                {project.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.takeaways && project.takeaways.length > 0 && (
            <section className="bg-white border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900">Takeaways</h2>
              <ul className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                {project.takeaways.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.customSections && project.customSections.length > 0 && (
            project.customSections.map((section, idx) => (
              <section key={section.title || idx} className="bg-white border rounded-2xl p-8">
                {section.title && (
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                )}
                {section.content && (
                  <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}
                {section.items && section.items.length > 0 && (
                  <ul className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))
          )}
        </div>

        <aside className="bg-white border rounded-2xl p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-gray-900">
            Project Snapshot
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-2 text-gray-900 leading-relaxed">
                {project.role}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Project Type</p>
              <p className="mt-2 text-gray-900 leading-relaxed">
                {project.projectType}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Impact</p>
              <p className="mt-2 text-gray-900 leading-relaxed">
                {project.impact}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Focus Areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.githubUrl && (
              <div className="pt-4 mt-2 border-t border-gray-100">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 px-4 bg-gray-900 text-white text-center text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
