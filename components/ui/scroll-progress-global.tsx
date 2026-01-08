'use client';

import { motion, useScroll, useSpring, SpringOptions } from 'motion/react';
import { cn } from '@/lib/utils';

export type ScrollProgressGlobalProps = {
  className?: string;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgressGlobal({
  className,
  springOptions,
}: ScrollProgressGlobalProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn('fixed top-0 left-0 h-1 origin-left z-25', className)}
      style={{ scaleX }}
    />
  );
}
