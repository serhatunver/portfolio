import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

import { Section } from '@/components/layout/Section';

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center py-4">
      <div>
        <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Hi! I am Serhat Ünver, a software developer specializing in web
          applications.
        </p>
      </div>
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}
