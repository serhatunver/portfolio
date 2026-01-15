import { ExperienceCard } from '@/components/common/ExperienceCard';
import { Section } from '@/components/layout/Section';
import { getExperience } from '@/lib/cms';

export async function ExperienceSection() {
  const experienceList = await getExperience();

  return (
    <Section title="Experience">
      <div className="flex flex-col gap-3">
        {experienceList.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
