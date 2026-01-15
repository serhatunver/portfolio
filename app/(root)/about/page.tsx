import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { TechStackSection } from '@/components/sections/TechStackSection';

export default function About() {
  return (
    <>
      <AboutSection />
      <TechStackSection />
      <EducationSection />
      <ExperienceSection />
    </>
  );
}
