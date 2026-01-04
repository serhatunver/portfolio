import { Badge } from '@/components/ui/badge';
import { ICONS } from '@/components/icons/registry';
import { cn } from '@/lib/utils';

export function TechBadge({ tech }: { tech: string }) {
  const data = ICONS[tech as keyof typeof ICONS];
  if (!data) return null;

  const { Icon, hex, darkInvert } = data;

  return (
    <Badge
      key={tech}
      variant="outline"
      className={cn(
        'flex items-center h-6 brightness-100 dark:brightness-120',
        'hover:cursor-pointer hover:scale-110',
        'odd:hover:rotate-3 even:hover:-rotate-3',
        'transition-all duration-300',
      )}
      style={{
        backgroundColor: hex ? `${hex}15` : undefined,
        borderColor: hex ? `${darkInvert ? '#666666' : hex}60` : undefined,
      }}
    >
      <Icon
        className={cn('w-3 h-3', darkInvert && 'dark:invert')}
        style={hex ? { color: hex } : undefined}
      />
      <span className="ml-0.5 text-black dark:text-white">{tech}</span>
    </Badge>
  );
}
