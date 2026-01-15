import type {
  AboutType,
  BlogPostType,
  EducationType,
  ExperienceType,
  FooterType,
  HeroType,
  ProjectType,
  TechStackType,
} from '@/types/content';

import { client } from './client';

export async function fetchProjectsFromCMS(): Promise<ProjectType[]> {
  return client.fetch(
    `
    *[_type == "project"] | order(orderRank) {
      _id,
      title,
      "slug": slug.current,
      description,
      highlights,
      techStack[]->{
        "slug": slug.current,
        title,
        color,
        invertColor
      },
      githubLink,
      demoLink
    }
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

export async function fetchEducationFromCMS(): Promise<EducationType[]> {
  return client.fetch(
    `
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
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

export async function fetchExperienceFromCMS(): Promise<ExperienceType[]> {
  return client.fetch(
    `
    *[_type == "experience"] | order(orderRank) {
      _id,
      company,
      role,
      startDate,
      isCurrent,
      endDate,
      location,
      highlights,
      techStack[]->{
        "slug": slug.current,
        title,
        color,
        invertColor
      },
      companyLogo
    }
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

export async function fetchTechStackFromCMS(): Promise<TechStackType[]> {
  return client.fetch(
    `
    *[_type == "techStack"] | order(orderRank) {
      title,
      technologies[]->{
        "slug": slug.current,
        title,
        color,
        invertColor
      },
    }
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

export async function fetchBlogPostsFromCMS(): Promise<BlogPostType[]> {
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
    {},
    { next: { revalidate: 3600 } },
  );
}

// Hero (home page)
export async function fetchHeroFromCMS(): Promise<HeroType> {
  return client.fetch(
    `
    *[_type == "siteSettings"][0].hero
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

// About (about page)
export async function fetchAboutFromCMS(): Promise<AboutType> {
  return client.fetch(
    `
    *[_type == "siteSettings"][0].about
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}

// Footer (global, layout)
export async function fetchFooterFromCMS(): Promise<FooterType> {
  return client.fetch(
    `
    *[_type == "siteSettings"][0].footer
  `,
    {},
    { next: { revalidate: 3600 } },
  );
}
