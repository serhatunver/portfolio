'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/animate-ui/components/buttons/button';

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'system' ? (systemTheme === 'dark' ? 'light' : 'dark') : theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden p-0"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
