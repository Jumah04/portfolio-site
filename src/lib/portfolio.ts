import { client } from "@/sanity/lib/client";
import { profile as fallbackProfile } from "@/data/profile";
import { projects as fallbackProjects } from "@/data/projects";
import { skillCategories as fallbackSkillCategories } from "@/data/skills";
import type { Profile, Project, SkillCategory } from "@/types/content";
import { groq } from "next-sanity";

// ==========================================
// 1. GROQ Queries 
// (These tell Sanity exactly what data to grab)
// ==========================================

const profileQuery = groq`*[_type == "profile"][0]`;

const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  category,
  role,
  projectType,
  description,
  impact,
  context,
  challenge,
  keyQuestions,
  approach,
  outcomes,
  takeaways,
  tags,
  tools,
  githubUrl,
  featured,
  customSections
}`;

const skillCategoriesQuery = groq`*[_type == "skillCategory"] | order(order asc) {
  title,
  description,
  skills
}`;


// ==========================================
// 2. Asynchronous Fetch Functions
// ==========================================

async function fetchFromSanity<T>(query: string) {
  try {
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}

function hasProjects(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every((project) => {
    if (!project || typeof project !== "object") {
      return false;
    }

    const candidate = project as Partial<Project>;

    return (
      typeof candidate.title === "string" &&
      typeof candidate.slug === "string" &&
      Array.isArray(candidate.tags) &&
      Array.isArray(candidate.tools)
    );
  });
}

function hasSkillCategories(value: unknown): value is SkillCategory[] {
  return Array.isArray(value) && value.every((category) => {
    if (!category || typeof category !== "object") {
      return false;
    }

    const candidate = category as Partial<SkillCategory>;

    return (
      typeof candidate.title === "string" &&
      typeof candidate.description === "string" &&
      Array.isArray(candidate.skills)
    );
  });
}

function hasProfile(value: unknown): value is Profile {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<Profile>;

  return (
    typeof candidate.name === "string" &&
    typeof candidate.role === "string" &&
    Array.isArray(candidate.aboutSummary) &&
    Array.isArray(candidate.socials)
  );
}

export async function getProfile() {
  const sanityProfile = await fetchFromSanity<Profile>(profileQuery);

  return hasProfile(sanityProfile) ? sanityProfile : fallbackProfile;
}

export async function getProjects() {
  const sanityProjects = await fetchFromSanity<Project[]>(projectsQuery);

  return hasProjects(sanityProjects) && sanityProjects.length > 0
    ? sanityProjects
    : fallbackProjects;
}

export async function getFeaturedProjects() {
  const projects = await getProjects();

  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();

  return projects.find((project) => project.slug === slug);
}

export async function getSkillCategories() {
  const sanitySkillCategories =
    await fetchFromSanity<SkillCategory[]>(skillCategoriesQuery);

  return hasSkillCategories(sanitySkillCategories) &&
    sanitySkillCategories.length > 0
    ? sanitySkillCategories
    : fallbackSkillCategories;
}
