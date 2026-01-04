import type { ComponentType, SVGProps } from 'react';

export type AppIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type IconEntry = {
  Icon: AppIcon;
  hex?: string;
  darkInvert?: boolean;
};
