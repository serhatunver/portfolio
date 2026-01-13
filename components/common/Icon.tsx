import type { SimpleIcon } from 'simple-icons';

type IconProps = {
  icon: SimpleIcon;
  size?: number;
  color?: string | null;
  className?: string;
};

export function Icon({ icon, size = 24, color, className }: IconProps) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color ?? `#${icon.hex}`}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
