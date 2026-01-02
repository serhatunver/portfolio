import { Section } from '@/components/layout/Section';
import { getAboutSection } from '@/lib/cms';

export async function AboutSection() {
  const aboutSection = await getAboutSection();

  return (
    <Section>
      <Section.Content className="space-y-4">
        <h1 className="text-2xl font-bold">{aboutSection.title}</h1>
        {aboutSection.content.map((item) => (
          <p key={item} className="text-base text-muted-foreground">
            {item}
          </p>
        ))}
      </Section.Content>
    </Section>
  );
}
