import { Button } from '@/components/animate-ui/components/buttons/button';
import Link from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { TechBadge } from '@/components/common/TechBadge';

import { Info, CircleCheckBig, ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

import type { ProjectType } from '@/types/content';

export function ProjectCard({ project }: { project: ProjectType }) {
  if (!project) return null;

  return (
    <Card className="w-full shadow-none rounded-2xl bg-transparent gap-4">
      <CardHeader>
        <CardTitle className="text-lg hover-slide">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        {/* <ul className="space-y-1">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>
              <CircleCheckBig
                className="inline mr-2 mb-1 text-muted-foreground"
                size={14}
              />
              {highlight}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.slug} tech={tech} />
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-1">
        {project.githubLink && (
          <Button asChild variant="link" size="sm">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="size-3" />
              GitHub
            </Link>
          </Button>
        )}

        {project.demoLink && (
          <Button asChild variant="link" size="sm">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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
