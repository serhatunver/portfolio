import { Section } from '@/components/layout/Section';
import { EducationCard } from '@/components/common/EducationCard';
import { getEducation } from '@/lib/cms';

export async function EducationSection() {
  const educationList = await getEducation();
  return (
    <Section
      title="Education"
      // description="Technologies I work with and focus on the most."
      // seeAllLink="/"
    >
      {educationList.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </Section>
  );
}
