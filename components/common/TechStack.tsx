import { ICONS } from '@/lib/constants/icons';
import { Badge } from '@/components/ui/badge';
import type { TechStack } from '@/types/content';

export function TechStack({ stack }: { stack: TechStack }) {
  return (
    <div key={stack.title}>
      {/* Section Title */}
      <h3 className="text-base font-medium mb-2">{stack.title}</h3>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech) => {
          const data = ICONS[tech];
          if (!data) return null;

          const { Icon, hex, darkInvert } = data;

          return (
            <Badge
              key={`${stack.title}-${tech}`}
              size="lg"
              variant="outline"
              className="brightness-100 dark:brightness-150 hover:cursor-pointer hover:scale-110 odd:hover:rotate-3 even:hover:-rotate-3 transition-all duration-300"
              style={{
                backgroundColor: `${hex}15`,
                borderColor: `${darkInvert ? '#666666' : hex}60`,
              }}
            >
              <Icon
                color="default"
                className={`${darkInvert ? 'dark:invert' : ''}`}
                size={20}
              />
              <span className="text-black dark:text-white">{tech}</span>
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
