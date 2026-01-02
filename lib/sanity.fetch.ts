import { client } from './sanity.client';
import type {
  Project,
  Education,
  Experience,
  TechStack,
  HeroSection,
  AboutSection,
} from '@/types/content';

export async function fetchProjectsFromCMS(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(orderRank) {
      _id,
      title,
      slug: slug.current
      description,
      detailedDescription,
      techStack,
      githubLink,
      demoLink
    }
  `);
}

export async function fetchEducationFromCMS(): Promise<Education[]> {
  return client.fetch(`
    *[_type == "education"] | order(orderRank) {
      _id,
      institution,
      degree,
      department,
      location,
      startDate,
      endDate,
      gpa,
      description,
      institutionLogo
    }
  `);
}

export async function fetchExperienceFromCMS(): Promise<Experience[]> {
  return client.fetch(`
    *[_type == "experience"] | order(orderRank) {
      _id,
      company,
      role,
      startDate,
      isCurrent,
      endDate,
      location,
      highlights,
      techStack,
      companyLogo
    }
  `);
}

export async function fetchTechStackFromCMS(): Promise<TechStack[]> {
  return client.fetch(`
    *[_type == "techStack"] | order(orderRank) {
      title,
      technologies
    }
  `);
}

export async function fetchHeroSectionFromCMS(): Promise<HeroSection[]> {
  return client.fetch(
    `*[_type == "heroSection"]
    {
      title,
      description
    }`,
  );
}

export async function fetchAboutSectionFromCMS(): Promise<AboutSection[]> {
  return client.fetch(
    `*[_type == "aboutSection"]{
      title,
      content
    }`,
  );
}
