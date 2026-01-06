import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
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
