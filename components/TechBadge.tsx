import { Badge } from '@/components/ui/badge';
import { ICONS } from '@/lib/constants/icons';

export function TechBadge({ tech }: { tech: string }) {
  const data = ICONS[tech];
  if (!data) return null;

  const { Icon, hex } = data;

  return (
    <Badge
      key={tech}
      variant="secondary"
      className="flex items-center h-6 py-0 mr-2 mb-2 brightness-100 dark:brightness-120"
      style={{ backgroundColor: `${hex}30` }}
    >
      <Icon color="default" size={12} />
      <span className="ml-0.5 text-black dark:text-white">{tech}</span>
    </Badge>
  );
}
