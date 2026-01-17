import { TechBadge } from '@/components/common/TechBadge';
import type { TechStackType } from '@/types/content';

export function TechStack({ techStack }: { techStack: TechStackType }) {
  if (!techStack.technologies) return null;

  return (
    <div key={techStack.title}>
      <h3 className="mb-2 text-base font-medium">{techStack.title}</h3>
      <div className="flex flex-wrap gap-3">
        {techStack.technologies.map((tech) => {
          return <TechBadge key={tech.slug} tech={tech} size="lg" />;
        })}
      </div>
    </div>
  );
}
