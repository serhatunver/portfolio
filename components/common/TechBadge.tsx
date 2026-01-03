import { Badge } from '@/components/ui/badge';
import { ICONS } from '@/lib/constants/icons';

export function TechBadge({ tech }: { tech: string }) {
  const data = ICONS[tech];
  if (!data) return null;

  const { Icon, hex, darkInvert } = data;

  return (
    <Badge
      key={tech}
      variant="outline"
      className="flex items-center h-6 brightness-100 dark:brightness-120 hover:cursor-pointer hover:scale-110 odd:hover:rotate-3 even:hover:-rotate-3 transition-all duration-300"
      style={{
        backgroundColor: `${hex}15`,
        borderColor: `${darkInvert ? '#666666' : hex}60`,
      }}
    >
      <Icon
        color="default"
        className={darkInvert ? 'dark:invert' : ''}
        size={12}
      />
      <span className="ml-0.5 text-black dark:text-white">{tech}</span>
    </Badge>
  );
}
