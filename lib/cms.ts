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

import { projects } from '@/content/projects';
import { education } from '@/content/education';
import { experience } from '@/content/experience';
import { techStack } from '@/content/tech-stack';
import { blogPosts } from '@/content/blogPosts';
import { siteSettings } from '@/content/siteSettings';

import {
  fetchProjectsFromCMS,
  fetchEducationFromCMS,
  fetchExperienceFromCMS,
  fetchTechStackFromCMS,
  fetchBlogPostsFromCMS,
  fetchHeroFromCMS,
  fetchAboutFromCMS,
  fetchFooterFromCMS,
} from './sanity.fetch';

const useCMS = process.env.USE_CMS === 'true';

async function withFallback<T>(
  cmsFetcher: () => Promise<T>,
  localData: T,
): Promise<T> {
  if (!useCMS) return localData;

  try {
    const data = await cmsFetcher();

    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.log('[CMS FALLBACK] CMS data empty, return localData');
      return localData;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('[CMS FALLBACK]', error.message, error.stack);
    } else {
      console.error('[CMS FALLBACK]', error);
    }

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

export function getBlogPosts(): Promise<BlogPost[]> {
  return withFallback(fetchBlogPostsFromCMS, blogPosts);
}

export function getHero(): Promise<Hero> {
  return withFallback(fetchHeroFromCMS, siteSettings.hero);
}

export function getAbout(): Promise<About> {
  return withFallback(fetchAboutFromCMS, siteSettings.about);
}

export function getFooter(): Promise<Footer> {
  return withFallback(fetchFooterFromCMS, siteSettings.footer);
}
