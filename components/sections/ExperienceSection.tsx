import { Section } from '@/components/layout/Section';
import { ExperienceCard } from '@/components/common/ExperienceCard';
import { getExperience } from '@/lib/cms';

export async function ExperienceSection() {
  const experienceList = await getExperience();
  return (
    <Section
      title="Experience"
      // description="Technologies I work with and focus on the most."
      // seeAllLink="/"
    >
      {experienceList.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </Section>
  );
}
