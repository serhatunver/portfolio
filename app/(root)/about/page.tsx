import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function About() {
  return (
    <>
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection limit={3} seeAllLink="/projects" />
    </>
  );
}
