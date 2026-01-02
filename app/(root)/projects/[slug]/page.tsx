import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getProjects } from '@/lib/cms';
import { Section } from '@/components/layout/Section';
import { TechBadge } from '@/components/common/TechBadge';
import { Button } from '@/components/ui/button';

import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const projects = await getProjects();
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section ariaLabel={`${project.title} details page`}>
      {/* Back link */}
      <div className="mb-6">
        <Button
          asChild
          variant="link"
          size="sm"
          className="has-[>svg]:px-0 px-0"
        >
          <Link href="/projects">
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </Button>
      </div>

      {/* Main content */}
      <Section title={project.title} description={project.description}>
        <div className="space-y-6">
          {/* Description */}
          {project.detailedDescription && (
            <p className="">{project.detailedDescription}</p>
          )}

          {/* Tech stack */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          {/* Actions */}
          {(project.githubLink || project.demoLink) && (
            <div className="flex gap-2 pt-4">
              {project.githubLink && (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="size-4" />
                    GitHub
                  </Link>
                </Button>
              )}

              {project.demoLink && (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </Section>
    </Section>
  );
}
