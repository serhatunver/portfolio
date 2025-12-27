import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { EducationCard } from '@/components/EducationCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-6 py-4">
      <div>
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Hi! I am Serhat Ünver, a software developer specializing in web
          applications.
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg font-medium">Education</h2>
        <Button asChild variant="link">
          <Link href="/projects">
            See all
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <EducationCard />
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg font-medium">Projects</h2>
        <Button asChild variant="link">
          <Link href="/projects">
            See all
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <ProjectCard />
    </div>
  );
}
