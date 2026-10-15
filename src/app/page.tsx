import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import AboutPreview from "@/components/AboutPreview";
import {
  getFeaturedProjects,
  getProfile,
  getSkillCategories,
} from "@/lib/portfolio";

export default async function Home() {
  const [profile, featuredProjects, skillCategories] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getSkillCategories(),
  ]);

  return (
    <div>
      <Hero profileData={profile} />
      <FeaturedProjects projects={featuredProjects} />
      <SkillsSection categories={skillCategories} />
      <AboutPreview profileData={profile} />
    </div>
  );
}
