import { Section } from '@/components/layout/Section';
import { TechStack } from '@/components/TechStack';

export function TechStackSection() {
  return (
    <Section
      title="Tech stack"
      description="Technologies I work with and focus on the most."
    >
      <TechStack />
    </Section>
  );
}
