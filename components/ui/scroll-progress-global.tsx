'use client';

import { motion, SpringOptions, useScroll, useSpring } from 'motion/react';

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

export function ScrollProgressGlobal({ className, springOptions }: ScrollProgressGlobalProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return <motion.div className={cn('fixed top-0 left-0 z-25 h-1 origin-left', className)} style={{ scaleX }} />;
}
