import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/common/ProjectCard';
import { EducationCard } from '@/components/common/EducationCard';
import { ArrowRight } from 'lucide-react';

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
      <Section title="Education" seeAllLink="/education">
        <EducationCard />
      </Section>
      <Section title="Projects" seeAllLink="/projects">
        <ProjectCard />
      </Section>
    </div>
  );
}
