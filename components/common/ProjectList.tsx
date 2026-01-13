import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/common/ProjectCard';
import type { ProjectType } from '@/types/content';

type ProjectsSectionProps = {
  projects: ProjectType[];
  limit?: number;
  seeAllLink?: string;
};

export async function ProjectList({
  projects,
  limit,
  seeAllLink,
}: ProjectsSectionProps) {
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <Section paddingNone>
      <div className="flex flex-col gap-3">
        {displayed.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
}
