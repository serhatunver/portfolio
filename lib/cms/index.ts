import { blogPosts } from '@/content/blogPosts';
import { education } from '@/content/education';
import { experience } from '@/content/experience';
import { projects } from '@/content/projects';
import { siteSettings } from '@/content/siteSettings';
import { techStack } from '@/content/tech-stack';
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

import {
  fetchAboutFromCMS,
  fetchBlogPostsFromCMS,
  fetchEducationFromCMS,
  fetchExperienceFromCMS,
  fetchFooterFromCMS,
  fetchHeroFromCMS,
  fetchProjectsFromCMS,
  fetchTechStackFromCMS,
} from './fetch';

const useCMS = process.env.USE_CMS === 'true';

async function withFallback<T>(cmsFetcher: () => Promise<T>, localData: T): Promise<T> {
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

export function getProjects(): Promise<ProjectType[]> {
  return withFallback(fetchProjectsFromCMS, projects);
}

export function getEducation(): Promise<EducationType[]> {
  return withFallback(fetchEducationFromCMS, education);
}

export function getExperience(): Promise<ExperienceType[]> {
  return withFallback(fetchExperienceFromCMS, experience);
}

export function getTechStack(): Promise<TechStackType[]> {
  return withFallback(fetchTechStackFromCMS, techStack);
}

export function getBlogPosts(): Promise<BlogPostType[]> {
  return withFallback(fetchBlogPostsFromCMS, blogPosts);
}

export function getHero(): Promise<HeroType> {
  return withFallback(fetchHeroFromCMS, siteSettings.hero);
}

export function getAbout(): Promise<AboutType> {
  return withFallback(fetchAboutFromCMS, siteSettings.about);
}

export function getFooter(): Promise<FooterType> {
  return withFallback(fetchFooterFromCMS, siteSettings.footer);
}
