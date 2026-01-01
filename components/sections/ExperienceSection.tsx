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
      <div className="flex flex-col gap-3">
        {experienceList.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
