import { ProjectList } from '@/components/common/ProjectList';
import { Section } from '@/components/layout/Section';
import { getProjects } from '@/lib/cms';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Section ariaLabel="Projects Section">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Here are some of my projects.
        </p>
      </div>
      <ProjectList projects={projects} />
    </Section>
  );
}
