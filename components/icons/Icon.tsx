import { ICONS } from './registry';

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const entry = ICONS[name];

  if (!entry) {
    return null;
  }

  const { Icon, hex, darkInvert } = entry;

  return (
    <Icon
      className={className}
      style={hex ? { color: hex } : undefined}
      data-dark-invert={darkInvert}
    />
  );
};
