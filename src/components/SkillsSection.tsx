import type { SkillCategory } from "@/types/content";
import SectionHeader from "./SectionHeader";

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export default function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="py-24">
      <SectionHeader
        title="Skills & Expertise"
        description="A combination of analytical, engineering, and technical skills focused on solving real-world problems through data."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-900 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-gray-500 leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
