import { Section } from '@/components/layout/Section';
import { ProjectList } from '@/components/common/ProjectList';
import { getProjects } from '@/lib/cms';

type ProjectsSectionProps = {
  limit?: number;
  seeAllLink?: string;
};

export async function ProjectsSection({
  limit,
  seeAllLink,
}: ProjectsSectionProps) {
  return (
    <Section
      title="Projects"
      description="Here are some of my projects."
      seeAllLink={seeAllLink}
    >
      <ProjectList limit={limit} />
    </Section>
  );
}
