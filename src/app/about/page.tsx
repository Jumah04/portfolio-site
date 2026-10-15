import SectionHeader from "@/components/SectionHeader";
import { getProfile, getSkillCategories } from "@/lib/portfolio";

export default async function AboutPage() {
  const [profile, skillCategories] = await Promise.all([
    getProfile(),
    getSkillCategories(),
  ]);

  return (
    <section className="py-10 md:py-14">
      <SectionHeader
        eyebrow="About"
        title="My Background"
        description={profile.aboutHeadline}
      />

      <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8 items-start">
        <div className="bg-white border rounded-2xl p-8 md:p-10">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {profile.aboutSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="bg-white border rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Working Strengths
          </h2>

          <div className="mt-5 space-y-5">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-medium text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
