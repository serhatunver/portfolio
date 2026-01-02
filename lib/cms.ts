import type {
  Project,
  Education,
  Experience,
  TechStack,
  HeroSection,
  AboutSection,
  BlogPost,
} from '@/types/content';

import { projects } from '@/content/projects';
import { education } from '@/content/education';
import { experience } from '@/content/experience';
import { techStack } from '@/content/tech-stack';
import { heroSection } from '@/content/hero-section';
import { aboutSection } from '@/content/about-section';
import { blogPosts } from '@/content/blogPosts';

import {
  fetchProjectsFromCMS,
  fetchEducationFromCMS,
  fetchExperienceFromCMS,
  fetchTechStackFromCMS,
  fetchHeroSectionFromCMS,
  fetchAboutSectionFromCMS,
  fetchBlogPostsFromCMS,
} from './sanity.fetch';

const useCMS = process.env.USE_CMS === 'true';

async function withFallback<T>(
  cmsFetcher: () => Promise<T>,
  localData: T,
): Promise<T> {
  if (!useCMS) return localData;

  try {
    return await cmsFetcher();
  } catch (error) {
    console.error('[CMS FALLBACK]', error);
    return localData;
  }
}

export function getProjects(): Promise<Project[]> {
  return withFallback(fetchProjectsFromCMS, projects);
}

export function getEducation(): Promise<Education[]> {
  return withFallback(fetchEducationFromCMS, education);
}

export function getExperience(): Promise<Experience[]> {
  return withFallback(fetchExperienceFromCMS, experience);
}

export function getTechStack(): Promise<TechStack[]> {
  return withFallback(fetchTechStackFromCMS, techStack);
}

export async function getHeroSection(): Promise<HeroSection> {
  const sections = await withFallback(fetchHeroSectionFromCMS, [heroSection]);
  return sections[0];
}

export async function getAboutSection(): Promise<AboutSection> {
  const sections = await withFallback(fetchAboutSectionFromCMS, [aboutSection]);
  return sections[0];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  console.log('posts');
  const posts = await withFallback(fetchBlogPostsFromCMS, blogPosts);
  console.log('posts', posts[0].body);
  return posts;
}
