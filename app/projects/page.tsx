import { ProjectList } from '@/components/common/ProjectList';
import { Section } from '@/components/layout/Section';

export default function Projects() {
  return (
    <Section ariaLabel="Projects Section">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Here are some of my projects.
        </p>
      </div>
      <ProjectList />
    </Section>
  );
}
