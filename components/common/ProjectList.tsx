import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/common/ProjectCard';
import { getProjects } from '@/lib/cms';

type ProjectsSectionProps = {
  limit?: number;
  seeAllLink?: string;
};

export async function ProjectList({ limit, seeAllLink }: ProjectsSectionProps) {
  const projects = await getProjects();

  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <Section paddingNone>
      <div className="flex flex-col gap-3">
        {displayed.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
