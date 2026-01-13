import { Section } from '@/components/layout/Section';
import { TechStack } from '@/components/common/TechStack';
import { getTechStack } from '@/lib/cms';

export async function TechStackSection() {
  const techStack = await getTechStack();

  return (
    <Section
      title="Tech stack"
      description="Technologies I work with and focus on the most."
    >
      <div className="flex flex-col gap-6 py-4">
        {techStack.map((stack) => (
          <TechStack key={stack.title} techStack={stack} />
        ))}
      </div>
    </Section>
  );
}
