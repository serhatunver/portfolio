import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function About() {
  return (
    <div className="flex w-full flex-col justify-center py-4">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p className="mb-6 text-base text-muted-foreground">
        I am Serhat Ünver, a passionate software developer with experience in
        building web applications. Below is a summary of my professional
        experience.
      </p>
      <EducationSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
    </div>
  );
}
