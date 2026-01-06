import { client } from './client';
import type {
  Project,
  Education,
  Experience,
  TechStack,
  BlogPost,
  Hero,
  About,
  Footer,
} from '@/types/content';

export async function fetchProjectsFromCMS(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(orderRank) {
      _id,
      title,
      "slug": slug.current,
      description,
      highlights,
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
      highlights,
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

export async function fetchBlogPostsFromCMS(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"]{
      _id,
      title,
      excerpt,
      "slug": slug.current,
      body,
      tags,
      categories
    }`,
  );
}

// Hero (home page)
export async function fetchHeroFromCMS(): Promise<Hero> {
  return client.fetch(`
    *[_type == "siteSettings"][0].hero
  `);
}

// About (about page)
export async function fetchAboutFromCMS(): Promise<About> {
  return client.fetch(`
    *[_type == "siteSettings"][0].about
  `);
}

// Footer (global, layout)
export async function fetchFooterFromCMS(): Promise<Footer> {
  return client.fetch(`
    *[_type == "siteSettings"][0].footer
  `);
}
