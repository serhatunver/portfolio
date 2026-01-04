import { ICONS } from '@/components/icons/registry';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { TechStack as TechStackType } from '@/types/content';

export function TechStack({ stack }: { stack: TechStackType }) {
  return (
    <div key={stack.title}>
      <h3 className="text-base font-medium mb-2">{stack.title}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech) => {
          const data = ICONS[tech as keyof typeof ICONS];
          if (!data) return null;

          const { Icon, hex, darkInvert } = data;

          return (
            <Badge
              key={`${stack.title}-${tech}`}
              size="lg"
              variant="outline"
              className={cn(
                'brightness-100 dark:brightness-150 hover:cursor-pointer hover:scale-110',
                'odd:hover:rotate-3 even:hover:-rotate-3 transition-all duration-300',
              )}
              style={{
                backgroundColor: hex ? `${hex}15` : undefined,
                borderColor: hex
                  ? `${darkInvert ? '#666666' : hex}60`
                  : undefined,
              }}
            >
              <Icon
                className={cn('w-5 h-5', darkInvert && 'dark:invert')}
                style={hex ? { color: hex } : undefined}
              />
              <span className="text-black dark:text-white">{tech}</span>
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
