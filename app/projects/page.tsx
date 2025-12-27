import { ProjectCard } from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)] flex-col justify-center space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Here are some of my projects.
        </p>
      </div>
      <ProjectCard />
    </div>
  );
}
