import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection limit={2} seeAllLink="/projects" />
    </>
  );
}
