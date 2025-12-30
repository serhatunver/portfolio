import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/common/ProjectCard';
import { getProjects } from '@/lib/cms';

export async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <Section title="Projects" description="Here are some of my projects.">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <div></div>
    </Section>
  );
}
