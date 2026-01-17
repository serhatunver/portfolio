import { Icon } from '@/components/common/Icon';
import { Badge } from '@/components/ui/badge';
import { getIconBySlug } from '@/lib/getIcon';
import { cn } from '@/lib/utils';
import type { TechType } from '@/types/content';

interface TechBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  tech: TechType;
}

export function TechBadge({ size = 'sm', tech }: TechBadgeProps) {
  const icon = getIconBySlug(tech.slug);

  const title = tech.title ?? icon.title ?? tech.slug;
  const hex = tech.color ?? icon.hex ?? '000000';
  const bgHex = tech.invertColor ? '#a3a3a320' : `#${hex}20`;

  return (
    <Badge
      variant="outline"
      size={size}
      className={cn(
        `flex items-center brightness-100 dark:brightness-120`,
        'hover:scale-110 hover:cursor-pointer',
        `odd:hover:rotate-3 even:hover:-rotate-2`,
        'transition-all duration-300',
      )}
      style={{
        backgroundColor: bgHex,
      }}
    >
      <Icon icon={icon} color={tech.invertColor ? 'var(--foreground)' : `#${hex}`} />
      <span>{title}</span>
    </Badge>
  );
}
