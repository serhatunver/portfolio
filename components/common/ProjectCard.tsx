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
    <Card className="w-full mb-2 bg-background">
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
        <p>Detailed information about the project can be placed here</p>
        <div className="flex flex-wrap">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-1 justify-end">
        <Button asChild variant="link" size="sm">
          <Link href="/" className="leading-none">
            <SiGithub className="size-3" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="link" size="sm">
          <Link href="/" className="leading-none">
            <ExternalLink className="size-3" />
            Demo
          </Link>
        </Button>
        <Button asChild variant="link" size="sm">
          <Link href="/" className="leading-none">
            <Info className="size-3" />
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
