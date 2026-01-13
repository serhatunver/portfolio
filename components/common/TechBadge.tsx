import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/common/Icon';
import { cn } from '@/lib/utils';
import { getIconBySlug } from '@/lib/getIcon';

import type { TechType } from '@/types/content';

interface TechBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  tech: TechType;
}

export function TechBadge({ size = 'sm', tech }: TechBadgeProps) {
  const icon = getIconBySlug(tech.slug);

  const title = tech.title ?? icon.title ?? tech.slug;
  const hex = icon.hex ?? '000000';
  const bgHex = tech.invertColor ? 'var(--muted)' : `#${hex}15`;
  const borderColor = tech.invertColor ? 'var(--color-gray-500)' : `#${hex}60`;

  return (
    <Badge
      variant="outline"
      size={size}
      className={cn(
        'flex items-center brightness-100 dark:brightness-120',
        'hover:cursor-pointer hover:scale-110',
        'odd:hover:rotate-3 even:hover:-rotate-3',
        'transition-all duration-300',
      )}
      style={{
        backgroundColor: bgHex,
        borderColor: borderColor,
      }}
    >
      <Icon icon={icon} color={tech.invertColor ? 'var(--foreground)' : null} />
      <span>{title}</span>
    </Badge>
  );
}
