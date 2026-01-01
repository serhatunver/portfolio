import { Button } from '@/components/ui/button';
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

import { Info, Eye, ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

import type { Project } from '@/types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full rounded-2xl bg-background gap-4">
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        {/* <CardAction>
              <Button asChild variant="link" size="sm" className="self-start">
                <Link href="/">Sign Up</Link>
              </Button>
            </CardAction> */}
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{project.detailedDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
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
