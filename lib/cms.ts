import type { Project, Education, Experience } from '@/types/content';
import { projects } from '@/content/projects';
import { education } from '@/content/education';
import { experience } from '@/content/experience';

const useCMS = process.env.USE_CMS === 'true';

export async function getProjects(): Promise<Project[]> {
  if (useCMS) {
    // return fetchProjectsFromCMS();
  }
  return projects;
}
export async function getEducation(): Promise<Education[]> {
  if (useCMS) {
    // return fetchEducationFromCMS();
  }
  return education;
}
export async function getExperience(): Promise<Experience[]> {
  if (useCMS) {
    // return fetchExperienceFromCMS();
  }
  return experience;
}
