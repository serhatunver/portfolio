import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLink, Info } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { TechBadge } from '@/components/common/TechBadge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProjectType } from '@/types/content';

export function ProjectCard({ project }: { project: ProjectType }) {
  if (!project) return null;

  return (
    <Card className="w-full gap-4 rounded-2xl bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="hover-slide text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.slug} tech={tech} />
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-1">
        {project.githubLink && (
          <Button asChild variant="link" size="sm">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <SiGithub className="size-3" />
              GitHub
            </Link>
          </Button>
        )}

        {project.demoLink && (
          <Button asChild variant="link" size="sm">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-3" />
              Demo
            </Link>
          </Button>
        )}

        <Button asChild variant="link" size="sm">
          <Link href={`/projects/${project.slug}`}>
            <Info className="size-3" />
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
