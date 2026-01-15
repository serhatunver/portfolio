import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection limit={2} seeAllLink="/projects" />
    </>
  );
}
