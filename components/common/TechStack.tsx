import type { TechStackType } from '@/types/content';
import { TechBadge } from '@/components/common/TechBadge';

export function TechStack({ techStack }: { techStack: TechStackType }) {
  if (!techStack.technologies) return null;

  return (
    <div key={techStack.title}>
      <h3 className="text-base font-medium mb-2">{techStack.title}</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.technologies.map((tech) => {
          return <TechBadge key={tech.slug} tech={tech} size="lg" />;
        })}
      </div>
    </div>
  );
}
