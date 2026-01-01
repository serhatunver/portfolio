import { Section } from '@/components/layout/Section';
import { getAboutSection } from '@/lib/cms';

export async function AboutSection() {
  const aboutSection = await getAboutSection();

  console.log(aboutSection);
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-4">{aboutSection.title}</h1>
      {aboutSection.content.map((item) => (
        <p key={item} className="mb-4 text-base text-muted-foreground">
          {item}
        </p>
      ))}
    </Section>
  );
}
